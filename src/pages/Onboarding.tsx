import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Check, Loader2, LockKeyhole, LogOut, MessageCircle, Plus, ShieldCheck, Sparkles } from 'lucide-react';
import { coreSupabase, coreSupabaseConfigured } from '../lib/coreSupabase';

const META_APP_ID = '2290735921663266';
const META_CONFIG_ID = '1135925598950894';
const CORE_SIGNUP_URL = 'https://fhrfpvxkahgkoxjktzoa.supabase.co/functions/v1/creatyv-whatsapp-signup';

type Membership = {
  organization_id: string;
  role: 'owner' | 'admin' | 'operator';
  name: string;
};

type MetaSessionInfo = {
  wabaId?: string;
  phoneNumberId?: string;
};

type FacebookLoginResponse = {
  authResponse?: { code?: string };
  status?: string;
};

type FacebookSdk = {
  init: (options: Record<string, unknown>) => void;
  login: (callback: (response: FacebookLoginResponse) => void, options: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    FB?: FacebookSdk;
    fbAsyncInit?: () => void;
  }
}

function parseMetaSessionInfo(event: MessageEvent): MetaSessionInfo | null {
  if (!['https://www.facebook.com', 'https://web.facebook.com'].includes(event.origin)) return null;
  let data = event.data;
  if (typeof data === 'string') {
    try { data = JSON.parse(data); } catch { return null; }
  }
  if (!data || typeof data !== 'object' || data.type !== 'WA_EMBEDDED_SIGNUP') return null;
  const payload = data.data ?? data.payload ?? {};
  const wabaId = String(payload.waba_id ?? payload.wabaId ?? '').trim();
  const phoneNumberId = String(payload.phone_number_id ?? payload.phoneNumberId ?? '').trim();
  return { wabaId: wabaId || undefined, phoneNumberId: phoneNumberId || undefined };
}

function initializeFacebookSdk(fb: FacebookSdk) {
  fb.init({ appId: META_APP_ID, cookie: true, xfbml: false, version: 'v26.0' });
  return fb;
}

function loadFacebookSdk() {
  if (window.FB) return Promise.resolve(initializeFacebookSdk(window.FB));
  return new Promise<FacebookSdk>((resolve, reject) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      if (!window.FB) {
        settled = true;
        reject(new Error('facebook_sdk_unavailable'));
        return;
      }
      try {
        const fb = initializeFacebookSdk(window.FB);
        settled = true;
        resolve(fb);
      } catch (error) {
        settled = true;
        reject(error instanceof Error ? error : new Error('facebook_sdk_init_failed'));
      }
    };

    window.fbAsyncInit = finish;
    const existing = document.getElementById('facebook-jssdk');
    if (existing) {
      let attempts = 0;
      const timer = window.setInterval(() => {
        attempts += 1;
        if (window.FB) {
          window.clearInterval(timer);
          finish();
        } else if (attempts >= 50) {
          window.clearInterval(timer);
          if (!settled) {
            settled = true;
            reject(new Error('facebook_sdk_timeout'));
          }
        }
      }, 100);
      return;
    }

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.onload = () => {
      if (window.FB) finish();
    };
    script.onerror = () => {
      if (!settled) {
        settled = true;
        reject(new Error('facebook_sdk_load_failed'));
      }
    };
    document.body.appendChild(script);
  });
}

const Onboarding = () => {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [memberships, setMemberships] = useState<Membership[]>([]);
  const [selectedOrg, setSelectedOrg] = useState<string>('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [connectedPhone, setConnectedPhone] = useState<string>('');
  const metaSessionRef = useRef<MetaSessionInfo>({});

  const selectedBusiness = useMemo(
    () => memberships.find((item) => item.organization_id === selectedOrg),
    [memberships, selectedOrg],
  );

  const loadMemberships = async () => {
    if (!coreSupabase) return;
    const { data: memberRows, error: memberError } = await coreSupabase
      .from('org_members')
      .select('organization_id, role')
      .order('created_at', { ascending: true });
    if (memberError) throw memberError;
    const rows = memberRows ?? [];
    if (!rows.length) {
      setMemberships([]);
      setSelectedOrg('');
      return;
    }
    const ids = rows.map((row) => row.organization_id);
    const { data: orgRows, error: orgError } = await coreSupabase
      .from('organizations')
      .select('id, name')
      .in('id', ids);
    if (orgError) throw orgError;
    const names = new Map((orgRows ?? []).map((row) => [row.id, row.name]));
    const next = rows.map((row) => ({
      organization_id: row.organization_id,
      role: row.role as Membership['role'],
      name: names.get(row.organization_id) ?? row.organization_id,
    }));
    setMemberships(next);
    setSelectedOrg((current) => current || next[0]?.organization_id || '');
  };

  useEffect(() => {
    if (!coreSupabase) return;
    coreSupabase.auth.getSession().then(async ({ data }) => {
      setUserEmail(data.session?.user.email ?? null);
      if (data.session) {
        try { await loadMemberships(); } catch { setMessage('No pudimos cargar tus negocios.'); }
      }
    });
    const { data: listener } = coreSupabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user.email ?? null);
      if (session) void loadMemberships();
      else {
        setMemberships([]);
        setSelectedOrg('');
      }
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const listener = (event: MessageEvent) => {
      const info = parseMetaSessionInfo(event);
      if (info) metaSessionRef.current = { ...metaSessionRef.current, ...info };
    };
    window.addEventListener('message', listener);
    return () => window.removeEventListener('message', listener);
  }, []);

  const sendMagicLink = async (event: FormEvent) => {
    event.preventDefault();
    if (!coreSupabase || !email.trim()) return;
    setBusy(true);
    setMessage('');
    const { error } = await coreSupabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${window.location.origin}/onboarding` },
    });
    setBusy(false);
    setMessage(error ? 'No pudimos enviar el enlace. Revisá el correo e intentá de nuevo.' : 'Te enviamos un enlace seguro. Abrilo desde tu correo para continuar.');
  };

  const createBusiness = async (event: FormEvent) => {
    event.preventDefault();
    if (!coreSupabase || businessName.trim().length < 2) return;
    setBusy(true);
    setMessage('');
    const { data, error } = await coreSupabase.rpc('create_core_organization', { p_name: businessName.trim() });
    if (error) {
      setBusy(false);
      setMessage('No pudimos crear el negocio.');
      return;
    }
    const createdId = Array.isArray(data) ? data[0]?.organization_id : undefined;
    await loadMemberships();
    if (createdId) setSelectedOrg(createdId);
    setBusinessName('');
    setBusy(false);
    setMessage('Negocio creado. Ya podés conectar su WhatsApp.');
  };

  const callSignup = async (body: Record<string, unknown>) => {
    if (!coreSupabase) throw new Error('core_not_configured');
    const { data: sessionData } = await coreSupabase.auth.getSession();
    const session = sessionData.session;
    if (!session) throw new Error('session_required');
    const response = await fetch(CORE_SIGNUP_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.access_token}`,
        apikey: import.meta.env.VITE_CORE_SUPABASE_PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) throw new Error(payload.error || 'signup_failed');
    return payload;
  };

  const connectWhatsApp = async () => {
    if (!selectedOrg || !selectedBusiness || selectedBusiness.role === 'operator') return;
    setBusy(true);
    setMessage('Abriendo conexión segura con Meta…');
    setConnectedPhone('');
    metaSessionRef.current = {};
    try {
      const stateResult = await callSignup({ action: 'create_state', organization_id: selectedOrg });
      const state = String(stateResult.state || '');
      const fb = await loadFacebookSdk();
      fb.login(async (response) => {
        const code = response.authResponse?.code;
        if (!code) {
          setBusy(false);
          setMessage('La conexión con Meta fue cancelada o no se completó.');
          return;
        }
        try {
          const result = await callSignup({
            action: 'exchange',
            organization_id: selectedOrg,
            code,
            state,
            waba_id: metaSessionRef.current.wabaId,
            phone_number_id: metaSessionRef.current.phoneNumberId,
          });
          setConnectedPhone(String(result.display_phone_number || result.phone_number_id || 'WhatsApp conectado'));
          setMessage('WhatsApp quedó conectado correctamente a este negocio.');
        } catch {
          setMessage('Meta autorizó la conexión, pero Creatyv no pudo terminar el registro. No se modificó ningún otro negocio.');
        } finally {
          setBusy(false);
        }
      }, {
        config_id: META_CONFIG_ID,
        response_type: 'code',
        override_default_response_type: true,
        extras: { sessionInfoVersion: '3', version: 'v4' },
      });
    } catch (error) {
      setBusy(false);
      const detail = error instanceof Error ? error.message : 'unknown_error';
      setMessage(`No pudimos iniciar la conexión con Meta. Diagnóstico: ${detail}`);
    }
  };

  const signOut = async () => {
    if (!coreSupabase) return;
    await coreSupabase.auth.signOut();
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-[#f3f0e9] text-[#11171c]">
      <header className="border-b border-black/7 bg-[#f3f0e9]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-5 md:px-8">
          <a href="/" className="block">
            <div className="text-[18px] font-semibold tracking-[0.28em]">CREATY<span className="text-[#0a9ca3]">V</span></div>
            <div className="mt-0.5 text-[7px] tracking-[0.34em] text-black/35">TECHNOLOGIES</div>
          </a>
          <div className="flex items-center gap-2 rounded-full border border-black/8 bg-white/55 px-3 py-2 text-[11px] font-medium text-black/50 shadow-sm">
            <ShieldCheck size={14} className="text-[#087f84]" /> Conexión oficial con Meta
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="absolute -right-28 top-14 h-[430px] w-[430px] rounded-full bg-[#0a9ca3]/12 blur-3xl" />
        <div className="absolute -left-24 bottom-[-120px] h-[360px] w-[360px] rounded-full bg-[#d7b26d]/14 blur-3xl" />
        <section className="relative mx-auto grid min-h-[760px] max-w-[1180px] gap-12 px-5 py-16 md:grid-cols-[1fr_.88fr] md:items-center md:px-8 md:py-24">
          <div className="max-w-[620px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/7 bg-white/65 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-black/48 shadow-sm">
              <Sparkles size={13} className="text-[#0a8f94]" /> Onboarding de WhatsApp
            </div>
            <h1 className="mt-7 text-[46px] font-semibold leading-[0.96] tracking-[-0.052em] sm:text-[58px] md:text-[70px]">
              Conecta tu negocio.<br /><span className="text-black/42">Creatyv hace el resto.</span>
            </h1>
            <p className="mt-7 max-w-[565px] text-[17px] leading-[1.7] text-black/57 md:text-[19px]">
              Cada empresa conecta su propio WhatsApp Business mediante Meta. Creatyv identifica el negocio antes de iniciar, por lo que números, datos y automatizaciones permanecen separados.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[12px] text-black/55">
              {['Sin cambiar de número', 'Separado por negocio', 'Sin contraseñas de Facebook'].map((item) => (
                <div key={item} className="inline-flex items-center gap-2 rounded-full border border-black/7 bg-white/65 px-3.5 py-2.5"><Check size={14} className="text-[#087f84]" /> {item}</div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[480px] justify-self-center">
            <div className="rounded-[34px] border border-black/8 bg-[#11171c] p-3 shadow-[0_35px_85px_rgba(18,30,35,.20)]">
              <div className="rounded-[27px] bg-white p-6 sm:p-8">
                {!coreSupabaseConfigured ? (
                  <div className="py-6 text-center">
                    <LockKeyhole className="mx-auto text-[#087f84]" />
                    <h2 className="mt-4 text-xl font-semibold">Configuración pendiente</h2>
                    <p className="mt-2 text-sm leading-6 text-black/50">El acceso de Creatyv Core todavía no está configurado en este entorno.</p>
                  </div>
                ) : !userEmail ? (
                  <form onSubmit={sendMagicLink}>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-black/35">Paso 1 de 3</div>
                    <h2 className="mt-2 text-[27px] font-semibold tracking-[-0.03em]">Entrá a Creatyv</h2>
                    <p className="mt-2 text-[13px] leading-6 text-black/48">Usamos un enlace seguro por correo. No necesitás crear una contraseña.</p>
                    <label className="mt-7 block text-[12px] font-medium">Correo del administrador</label>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="gerardo@negocio.com" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f8f6f1] px-4 py-3.5 text-sm outline-none focus:border-[#0a8f94]" />
                    <button disabled={busy} className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0b777b] px-5 py-4 text-[14px] font-semibold text-white disabled:opacity-60">
                      {busy ? <Loader2 size={17} className="animate-spin" /> : <ArrowRight size={17} />} Continuar con correo
                    </button>
                  </form>
                ) : (
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div><div className="text-[10px] uppercase tracking-[0.2em] text-black/35">Conectado como</div><div className="mt-1 text-sm font-medium">{userEmail}</div></div>
                      <button type="button" onClick={signOut} className="rounded-xl border border-black/8 p-2 text-black/45 hover:text-black"><LogOut size={16} /></button>
                    </div>

                    {memberships.length === 0 ? (
                      <form onSubmit={createBusiness} className="mt-7">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-black/35">Paso 2 de 3</div>
                        <h2 className="mt-2 text-[25px] font-semibold tracking-[-0.03em]">Agregá tu negocio</h2>
                        <p className="mt-2 text-[12px] leading-5 text-black/45">Este nombre crea un espacio independiente en Creatyv Core.</p>
                        <input value={businessName} onChange={(event) => setBusinessName(event.target.value)} required minLength={2} maxLength={120} placeholder="El Ranchito Supermarket" className="mt-5 w-full rounded-2xl border border-black/10 bg-[#f8f6f1] px-4 py-3.5 text-sm outline-none focus:border-[#0a8f94]" />
                        <button disabled={busy} className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-black/10 bg-[#11171c] px-5 py-3.5 text-[13px] font-semibold text-white disabled:opacity-60"><Plus size={16} /> Crear negocio</button>
                      </form>
                    ) : (
                      <div className="mt-7">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-black/35">Paso 2 de 3</div>
                        <h2 className="mt-2 text-[25px] font-semibold tracking-[-0.03em]">Elegí el negocio</h2>
                        <select value={selectedOrg} onChange={(event) => setSelectedOrg(event.target.value)} className="mt-4 w-full rounded-2xl border border-black/10 bg-[#f8f6f1] px-4 py-3.5 text-sm outline-none">
                          {memberships.map((item) => <option key={item.organization_id} value={item.organization_id}>{item.name} · {item.role}</option>)}
                        </select>

                        <div className="mt-6 rounded-2xl border border-black/7 bg-[#f7f5f0] p-4">
                          <div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm"><MessageCircle size={18} className="text-[#168a52]" /></div><div><div className="text-[13px] font-medium">WhatsApp Business</div><div className="mt-1 text-[11px] text-black/45">Embedded Signup v4 · Meta</div></div></div>
                        </div>
                        <button type="button" onClick={connectWhatsApp} disabled={busy || !selectedBusiness || selectedBusiness.role === 'operator'} className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0b777b] px-5 py-4 text-[14px] font-semibold text-white shadow-lg shadow-[#0b777b]/15 disabled:cursor-not-allowed disabled:opacity-55">
                          {busy ? <Loader2 size={17} className="animate-spin" /> : <ArrowRight size={17} />} Conectar WhatsApp
                        </button>
                        {selectedBusiness?.role === 'operator' ? <p className="mt-3 text-center text-[11px] text-black/45">Solo owner o admin puede conectar canales.</p> : null}
                        {connectedPhone ? <div className="mt-4 rounded-2xl bg-[#e9f8ef] px-4 py-3 text-center text-[12px] font-medium text-[#177047]">✓ {connectedPhone}</div> : null}
                      </div>
                    )}
                  </div>
                )}
                {message ? <p className="mt-5 rounded-2xl border border-black/7 bg-[#f8f6f1] px-4 py-3 text-center text-[11px] leading-5 text-black/55">{message}</p> : null}
              </div>
            </div>
            <div className="mx-auto mt-4 w-[88%] text-center text-[10px] leading-5 text-black/38">Conectar aquí no modifica las conexiones de otros negocios, incluido Referral Hub.</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Onboarding;
