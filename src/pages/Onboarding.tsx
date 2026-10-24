import { ArrowRight, Check, LockKeyhole, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

const META_APP_ID = '2290735921663266';
const META_CONFIG_ID = '1135925598950894';
const META_HOSTED_SIGNUP_URL = `https://business.facebook.com/messaging/whatsapp/onboard/?app_id=${META_APP_ID}&config_id=${META_CONFIG_ID}&extras=${encodeURIComponent(JSON.stringify({ sessionInfoVersion: '3', version: 'v4' }))}`;

const steps = [
  {
    number: '01',
    title: 'Tu negocio',
    copy: 'Creatyv identifica tu organización para que cada número, conversación y dato quede separado correctamente.',
  },
  {
    number: '02',
    title: 'Conecta WhatsApp',
    copy: 'Meta abre su proceso oficial de Embedded Signup. El número sigue perteneciendo a tu negocio.',
  },
  {
    number: '03',
    title: 'Creatyv se activa',
    copy: 'Servicios, horarios, citas y automatizaciones quedan disponibles sobre la conexión autorizada.',
  },
];

const Onboarding = () => {
  const onboardingEnabled = import.meta.env.VITE_CREATYV_ONBOARDING_ENABLED === 'true';

  const launchEmbeddedSignup = () => {
    if (!onboardingEnabled) return;
    window.open(META_HOSTED_SIGNUP_URL, '_blank', 'noopener,noreferrer');
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
            <ShieldCheck size={14} className="text-[#087f84]" />
            Conexión oficial con Meta
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-black/6">
          <div className="absolute -right-28 top-14 h-[430px] w-[430px] rounded-full bg-[#0a9ca3]/12 blur-3xl" />
          <div className="absolute -left-24 bottom-[-120px] h-[360px] w-[360px] rounded-full bg-[#d7b26d]/14 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1180px] gap-12 px-5 py-16 md:grid-cols-[1.02fr_.98fr] md:items-center md:px-8 md:py-24">
            <div className="max-w-[620px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/7 bg-white/65 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-black/48 shadow-sm">
                <Sparkles size={13} className="text-[#0a8f94]" />
                Onboarding de WhatsApp
              </div>
              <h1 className="mt-7 text-[46px] font-semibold leading-[0.96] tracking-[-0.052em] sm:text-[58px] md:text-[70px]">
                Conecta tu negocio.<br />
                <span className="text-black/42">Creatyv hace el resto.</span>
              </h1>
              <p className="mt-7 max-w-[565px] text-[17px] leading-[1.7] text-black/57 md:text-[19px]">
                Vincula el WhatsApp Business de tu empresa usando el proceso oficial de Meta. Tu número sigue siendo tuyo; Creatyv solo recibe la autorización necesaria para operar las experiencias que activés.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-[12px] text-black/55">
                {['Sin cambiar de número', 'Separado por negocio', 'Conexión segura con Meta'].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2 rounded-full border border-black/7 bg-white/65 px-3.5 py-2.5">
                    <Check size={14} className="text-[#087f84]" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[470px]">
              <div className="rounded-[34px] border border-black/8 bg-[#11171c] p-3 shadow-[0_35px_85px_rgba(18,30,35,.20)]">
                <div className="rounded-[27px] bg-white p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-black/35">WhatsApp Business</div>
                      <div className="mt-2 text-[23px] font-semibold tracking-[-0.03em]">Conectar canal</div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f8ef] text-[#168a52]">
                      <MessageCircle size={24} />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl border border-black/7 bg-[#f7f5f0] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
                        <LockKeyhole size={17} className="text-[#087f84]" />
                      </div>
                      <div>
                        <div className="text-[13px] font-medium">Autorización administrada por Meta</div>
                        <div className="mt-1 text-[11px] leading-5 text-black/45">Creatyv no te pide tu contraseña de Facebook.</div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={launchEmbeddedSignup}
                    disabled={!onboardingEnabled}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0b777b] px-5 py-4 text-[14px] font-semibold text-white shadow-lg shadow-[#0b777b]/15 transition hover:bg-[#096b6f] disabled:cursor-not-allowed disabled:bg-[#8aa9a7] disabled:shadow-none"
                  >
                    {onboardingEnabled ? 'Conectar WhatsApp' : 'Conexión segura en preparación'}
                    <ArrowRight size={17} />
                  </button>

                  <p className="mt-4 text-center text-[10px] leading-5 text-black/38">
                    La conexión se habilitará cuando el acceso de tu organización esté verificado en Creatyv Core.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 w-[82%] -translate-x-1/2 rounded-2xl border border-black/7 bg-white/85 px-4 py-3 text-center text-[11px] text-black/45 shadow-xl backdrop-blur">
                Embedded Signup v4 · Session Info v3
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1180px] px-5 md:px-8">
            <div className="max-w-[650px]">
              <div className="text-[10px] uppercase tracking-[0.25em] text-black/35">Cómo funciona</div>
              <h2 className="mt-3 text-[36px] font-semibold tracking-[-0.04em] md:text-[46px]">Tres pasos. Una sola conexión.</h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {steps.map((step) => (
                <article key={step.number} className="rounded-[26px] border border-black/7 bg-[#f8f6f1] p-6 md:p-7">
                  <div className="text-[11px] font-semibold tracking-[0.2em] text-[#08888d]">{step.number}</div>
                  <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.025em]">{step.title}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-black/50">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/6 bg-[#11171c] py-14 text-white">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/38">Creatyv Core</div>
              <div className="mt-2 max-w-[560px] text-[25px] font-medium tracking-[-0.025em] text-white/92">Cada negocio conserva su identidad, número y configuración.</div>
            </div>
            <div className="max-w-[420px] text-[12px] leading-6 text-white/45">
              Este onboarding está separado de Referral Hub. Conectar un nuevo negocio aquí no modifica ni desconecta conexiones existentes.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Onboarding;
