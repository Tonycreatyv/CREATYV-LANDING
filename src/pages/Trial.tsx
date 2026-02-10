// src/pages/Trial.tsx
import { useMemo, useState } from 'react';
import { hasSupabaseEnv, supabase } from '../lib/supabaseClient';

type TrialForm = {
  full_name: string;
  phone: string;
  email: string;
  business_name: string;
};

export default function Trial() {
  const dashboardUrl = (import.meta.env.VITE_DASHBOARD_URL as string | undefined) || '';
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const canRedirect = useMemo(() => {
    return Boolean(dashboardUrl && dashboardUrl.startsWith('http'));
  }, [dashboardUrl]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const payload: TrialForm & {
      source: 'trial';
      created_at: string;
    } = {
      full_name: String(form.get('full_name') || '').trim(),
      phone: String(form.get('phone') || '').trim(),
      email: String(form.get('email') || '').trim(),
      business_name: String(form.get('business_name') || '').trim(),
      source: 'trial',
      created_at: new Date().toISOString(),
    };

    // Validación mínima
    if (!payload.full_name || !payload.phone || !payload.email) {
      setErr('Por favor completa Nombre, Teléfono y Email.');
      setLoading(false);
      return;
    }

    // Prepara querystring para enviar al dashboard (onboarding)
    const qs = new URLSearchParams();
    qs.set('name', payload.full_name);
    qs.set('phone', payload.phone);
    qs.set('email', payload.email);
    if (payload.business_name) qs.set('business', payload.business_name);
    qs.set('source', 'trial');

    // ✅ Fallback seguro: si NO hay Supabase env o el client es null, NO crashea.
    // Solo redirige al dashboard.
    if (!hasSupabaseEnv || !supabase) {
      if (!canRedirect) {
        setErr('Falta configurar VITE_DASHBOARD_URL en Netlify.');
        setLoading(false);
        return;
      }
      window.location.href = `${dashboardUrl}/trial?${qs.toString()}`;
      return;
    }

    // ✅ Con Supabase configurado: intentamos guardar en trial_leads.
    // Si no existe o falla, caemos a leads como backup.
    try {
      const table = 'trial_leads';
      const { error: insertErr } = await supabase.from(table).insert({
        full_name: payload.full_name,
        phone: payload.phone,
        email: payload.email,
        business_name: payload.business_name || null,
        source: payload.source,
      });

      if (insertErr) {
        // Fallback 2: guardar en leads (si tienes esa tabla)
        const { error: insertErr2 } = await supabase.from('leads').insert({
          organization_id: 'clinic-demo',
          channel: 'web',
          status: 'active',
          full_name: payload.full_name,
          phone: payload.phone,
          email: payload.email,
          business_name: payload.business_name || null,
          source: 'trial',
        });

        if (insertErr2) {
          // Si ambos fallan, igual redirigimos (para que el video demo no se muera)
          console.warn('[trial] Failed to insert trial_leads and leads:', insertErr.message, insertErr2.message);
        }
      }
    } catch (e) {
      console.warn('[trial] Unexpected error inserting trial lead:', e);
      // No detenemos el flujo, seguimos a redirect
    }

    if (!canRedirect) {
      setErr('Falta configurar VITE_DASHBOARD_URL en Netlify.');
      setLoading(false);
      return;
    }

    // ✅ Redirect final al dashboard
    window.location.href = `${dashboardUrl}/trial?${qs.toString()}`;
  };

  return (
    <main style={{ padding: '80px 20px', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontSize: 44, marginBottom: 12 }}>Prueba DentalConnect gratis 7 días</h1>
      <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
        Deja tus datos y activamos tu prueba. (En esta versión: capturamos el lead y te mandamos al dashboard).
      </p>

      {!hasSupabaseEnv && (
        <div style={{ marginTop: 16, padding: 12, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', opacity: 0.85 }}>
          Nota: Supabase no está configurado en este deploy. El formulario igual funciona (redirige), pero no guarda datos aquí.
        </div>
      )}

      {err && (
        <div style={{ marginTop: 16, padding: 12, borderRadius: 12, border: '1px solid rgba(255,80,80,0.35)' }}>
          {err}
        </div>
      )}

      <form
        style={{ marginTop: 24, display: 'grid', gap: 12, maxWidth: 520 }}
        onSubmit={onSubmit}
      >
        <input name="full_name" placeholder="Nombre" required style={inp} />
        <input name="phone" placeholder="Teléfono" required style={inp} />
        <input name="email" placeholder="Email" type="email" required style={inp} />
        <input name="business_name" placeholder="Clínica / Negocio" style={inp} />

        <button style={btn} disabled={loading}>
          {loading ? 'Enviando...' : 'Activar prueba'}
        </button>
      </form>

      <p style={{ marginTop: 16, opacity: 0.65 }}>
        *No agenda automático: tu equipo confirma disponibilidad.
      </p>
    </main>
  );
}

const inp: React.CSSProperties = {
  padding: '12px 14px',
  borderRadius: 10,
  border: '1px solid rgba(255,255,255,0.18)',
  background: 'rgba(255,255,255,0.06)',
  color: 'white',
  outline: 'none',
};

const btn: React.CSSProperties = {
  padding: '12px 16px',
  borderRadius: 10,
  border: '1px solid rgba(255,255,255,0.18)',
  background: 'white',
  color: 'black',
  fontWeight: 800,
  cursor: 'pointer',
};
