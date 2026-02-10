import { useMemo, useState } from 'react';

type Step = 'name' | 'email' | 'clinic';

export default function Trial() {
  const dashboardUrl =
    import.meta.env.VITE_DASHBOARD_URL || 'https://gentle-chaja-c50980.netlify.app';

  const [step, setStep] = useState<Step>('name');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [clinic, setClinic] = useState('');

  const steps: Step[] = useMemo(() => ['name', 'email', 'clinic'], []);
  const stepIndex = steps.indexOf(step);
  const progress = Math.round(((stepIndex + 1) / steps.length) * 100);

  const title =
    step === 'name'
      ? '¿Cómo te llamas?'
      : step === 'email'
      ? '¿Cuál es tu email?'
      : '¿Nombre de tu clínica?';

  const hint =
    step === 'name'
      ? 'Usamos esto para personalizar tu demo.'
      : step === 'email'
      ? 'Te mandamos acceso y follow-up.'
      : 'Opcional, pero ayuda a configurar tu prueba.';

  const placeholder =
    step === 'name'
      ? 'Ej: José Martínez'
      : step === 'email'
      ? 'Ej: jose@clinica.com'
      : 'Ej: DentalConnect Centro';

  const value = step === 'name' ? name : step === 'email' ? email : clinic;

  const setValue = (v: string) => {
    if (step === 'name') setName(v);
    if (step === 'email') setEmail(v);
    if (step === 'clinic') setClinic(v);
  };

  const canContinue = () => {
    if (step === 'name') return name.trim().length >= 2;
    if (step === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    return true; // clinic opcional
  };

  const next = () => {
    if (!canContinue()) return;
    if (step === 'name') setStep('email');
    else if (step === 'email') setStep('clinic');
    else submit();
  };

  const back = () => {
    if (step === 'clinic') setStep('email');
    else if (step === 'email') setStep('name');
  };

  const submit = () => {
    const qs = new URLSearchParams();
    qs.set('from', 'trial');
    if (name.trim()) qs.set('name', name.trim());
    if (email.trim()) qs.set('email', email.trim());
    if (clinic.trim()) qs.set('clinic', clinic.trim());

    window.location.href = `${dashboardUrl}?${qs.toString()}`;
  };

  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#0f0f0f] text-white">
      <section className="max-w-5xl mx-auto px-6 py-10 md:py-14">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.35)] flex items-center justify-center">
              <span className="text-xs tracking-[0.3em] text-white/80">DC</span>
            </div>
            <div className="leading-tight">
              <p className="text-xs tracking-[0.3em] uppercase text-white/60">Prueba 7 días</p>
              <p className="text-sm text-white/90">DentalConnect</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-white/60">
            <span className="px-2 py-1 rounded-lg border border-white/10 bg-white/5">
              {progress}%
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-white/50">
            Paso {stepIndex + 1} de {steps.length}
          </p>
        </div>

        {/* Card */}
        <div className="mt-8 grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
                {title}
              </h1>
              <p className="mt-3 text-sm md:text-base text-white/70">
                {hint}
              </p>

              <div className="mt-8">
                <label className="text-xs tracking-[0.3em] uppercase text-white/50">
                  {step === 'name' ? 'Nombre' : step === 'email' ? 'Email' : 'Clínica'}
                </label>

                <input
                  autoFocus
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={placeholder}
                  type={step === 'email' ? 'email' : 'text'}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      next();
                    }
                    if (e.key === 'Escape') {
                      e.preventDefault();
                      back();
                    }
                  }}
                  className="mt-3 w-full bg-transparent text-white placeholder:text-white/30
                             text-xl md:text-2xl py-4 md:py-5
                             border-b border-white/20 focus:border-white/60
                             outline-none transition-colors"
                />

                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={back}
                    disabled={step === 'name'}
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-3
                               border border-white/10 bg-white/5 text-white/70
                               hover:bg-white/10 hover:text-white transition
                               disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Atrás
                  </button>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={next}
                      disabled={!canContinue()}
                      className="inline-flex items-center justify-center rounded-2xl px-5 py-3
                                 bg-white text-black font-semibold
                                 hover:opacity-90 transition
                                 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {step === 'clinic' ? 'Ver demo' : 'Continuar'}
                    </button>
                  </div>
                </div>

                <p className="mt-4 text-xs text-white/45">
                  Tip: Enter = continuar · Esc = atrás
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs text-white/45">
              *No cobramos automáticamente. Tu equipo confirma el onboarding.
            </p>
          </div>

          {/* Side preview */}
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
              <p className="text-xs tracking-[0.3em] uppercase text-white/60">
                Lo que verás en la demo
              </p>

              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                  Inbox estilo WhatsApp/Messenger (familiar y rápido)
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                  Leads + etiquetas + notas por conversación
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                  Citas y follow-ups automatizados (sin perder clientes)
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs text-white/55">Preview (mobile-friendly)</p>
                <div className="mt-3 h-44 rounded-xl border border-white/10 bg-white/[0.03]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
