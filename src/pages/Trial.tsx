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

  const meta = useMemo(() => {
    if (step === 'name') {
      return {
        title: '¿Cómo te llamas?',
        hint: 'Así personalizamos tu acceso.',
        label: 'Nombre',
        placeholder: 'Ej: José Martínez',
        value: name,
        setValue: setName,
        inputType: 'text' as const,
      };
    }
    if (step === 'email') {
      return {
        title: '¿Cuál es tu email?',
        hint: 'Te enviamos el enlace de acceso y configuración.',
        label: 'Email',
        placeholder: 'Ej: jose@clinica.com',
        value: email,
        setValue: setEmail,
        inputType: 'email' as const,
      };
    }
    return {
      title: '¿Nombre de tu clínica?',
      hint: 'Opcional, ayuda a preparar tu panel.',
      label: 'Clínica',
      placeholder: 'Ej: Clínica Sonrisas',
      value: clinic,
      setValue: setClinic,
      inputType: 'text' as const,
    };
  }, [step, name, email, clinic]);

  const canContinue = () => {
    if (step === 'name') return meta.value.trim().length >= 2;
    if (step === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(meta.value.trim());
    return true; // clínica opcional
  };

  const goNext = () => {
    if (!canContinue()) return;
    if (step === 'name') setStep('email');
    else if (step === 'email') setStep('clinic');
    else submit();
  };

  const goBack = () => {
    if (step === 'clinic') setStep('email');
    else if (step === 'email') setStep('name');
  };

  const submit = () => {
    const qs = new URLSearchParams();
    qs.set('from', 'trial');
    if (name.trim()) qs.set('name', name.trim());
    if (email.trim()) qs.set('email', email.trim());
    if (clinic.trim()) qs.set('clinic', clinic.trim());

    // 🚀 Enviamos al dashboard para onboarding / grabación
    window.location.href = `${dashboardUrl}?${qs.toString()}`;
  };

  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#0f0f0f] text-white">
      <section className="max-w-3xl mx-auto px-6 py-10 md:py-14">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/60">Prueba gratuita</p>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              Prueba DentalConnect gratis 7 días
            </h1>
            <p className="mt-3 text-sm md:text-base text-white/70">
              Responde rápido, captura datos y organiza conversaciones en un solo panel.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-white/60">
            <span className="px-2 py-1 rounded-lg border border-white/10 bg-white/5">{progress}%</span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-8">
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
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{meta.title}</h2>
          <p className="mt-3 text-sm md:text-base text-white/70">{meta.hint}</p>

          <div className="mt-10">
            <label className="text-xs tracking-[0.3em] uppercase text-white/50">{meta.label}</label>

            <input
              autoFocus
              value={meta.value}
              onChange={(e) => meta.setValue(e.target.value)}
              placeholder={meta.placeholder}
              type={meta.inputType}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  goNext();
                }
                if (e.key === 'Escape') {
                  e.preventDefault();
                  goBack();
                }
              }}
              className="mt-3 w-full bg-transparent text-white placeholder:text-white/30
                         text-xl md:text-3xl py-4 md:py-5
                         border-b border-white/20 focus:border-white/60
                         outline-none transition-colors"
            />

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 'name'}
                className="inline-flex items-center justify-center rounded-2xl px-4 py-3
                           border border-white/10 bg-white/5 text-white/70
                           hover:bg-white/10 hover:text-white transition
                           disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Atrás
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={!canContinue()}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3
                           bg-white text-black font-semibold
                           hover:opacity-90 transition
                           disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {step === 'clinic' ? 'Entrar al panel' : 'Continuar'}
              </button>
            </div>

            <p className="mt-4 text-xs text-white/45">Enter = continuar · Esc = atrás</p>
          </div>
        </div>

        {/* Microcopy pro */}
        <p className="mt-5 text-xs text-white/45">
          Al continuar, aceptas recibir el enlace de acceso y mensajes de configuración. Tus datos se usan solo para activar tu cuenta.
        </p>
      </section>
    </main>
  );
}
