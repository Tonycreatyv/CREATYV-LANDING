import { useEffect, useMemo, useState } from 'react';
import type { Language } from '../content/copy';

type LeadFields = {
  interest: string;
  name: string;
  contact: string;
  business: string;
  objective: string;
  budget: string;
};

type LeadIntakeWidgetProps = {
  language: Language;
};

type WidgetState = {
  open: boolean;
  step: number;
  fields: LeadFields;
  sent: boolean;
};

const STORAGE_KEY = 'creatyv_lead_widget_v1';

const i18n = {
  es: {
    fab: 'Hablar con Creatyv',
    title: 'Creatyv Assistant',
    subtitle: 'Lead intake para proyectos',
    greeting: 'Hola, ¿qué querés construir?',
    quickReplies: [
      'Página web automatizada',
      'App / Dashboard',
      'Chatbot para mi web',
      'Automatización (n8n / emails / CRM)',
      'Otro',
    ],
    questions: [
      '¿Cuál es tu nombre?',
      '¿Tu WhatsApp o email?',
      '¿Qué tipo de negocio tenés?',
      'Contame tu objetivo en 1 frase',
      '¿Cuál es tu rango de presupuesto?',
    ],
    placeholders: ['Tu nombre', 'WhatsApp o email', 'Ej: Clínica dental', 'Ej: quiero aumentar reservas'],
    budgets: ['<$500', '$500-$1500', '$1500-$5000', '$5000+'],
    next: 'Continuar',
    back: 'Atrás',
    reviewTitle: 'Resumen del proyecto',
    send: 'Enviar a Creatyv',
    reset: 'Reiniciar',
    copied: 'Resumen copiado al portapapeles.',
    sent: 'Listo. Abrimos tu correo con el detalle para enviar a Creatyv.',
    sending: 'Preparando envío...',
    labels: {
      interest: 'Interés',
      name: 'Nombre',
      contact: 'Contacto',
      business: 'Tipo de negocio',
      objective: 'Objetivo',
      budget: 'Presupuesto',
    },
  },
  en: {
    fab: 'Talk to Creatyv',
    title: 'Creatyv Assistant',
    subtitle: 'Project lead intake',
    greeting: 'Hi, what do you want to build?',
    quickReplies: [
      'Automated website',
      'App / Dashboard',
      'Chatbot for my website',
      'Automation (n8n / emails / CRM)',
      'Other',
    ],
    questions: [
      'What is your name?',
      'Your WhatsApp or email?',
      'What type of business do you run?',
      'Tell me your goal in one sentence',
      'What is your budget range?',
    ],
    placeholders: ['Your name', 'WhatsApp or email', 'Ex: Dental clinic', 'Ex: I want to increase bookings'],
    budgets: ['<$500', '$500-$1500', '$1500-$5000', '$5000+'],
    next: 'Continue',
    back: 'Back',
    reviewTitle: 'Project summary',
    send: 'Send to Creatyv',
    reset: 'Reset',
    copied: 'Summary copied to clipboard.',
    sent: 'Done. We opened your email with the details to send to Creatyv.',
    sending: 'Preparing submission...',
    labels: {
      interest: 'Interest',
      name: 'Name',
      contact: 'Contact',
      business: 'Business type',
      objective: 'Goal',
      budget: 'Budget',
    },
  },
} as const;

const emptyFields: LeadFields = {
  interest: '',
  name: '',
  contact: '',
  business: '',
  objective: '',
  budget: '',
};

const parsePersistedState = (): WidgetState | null => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as WidgetState;
    if (!parsed.fields || typeof parsed.step !== 'number') return null;
    return parsed;
  } catch {
    return null;
  }
};

const LeadIntakeWidget = ({ language }: LeadIntakeWidgetProps) => {
  const t = i18n[language];
  const [widget, setWidget] = useState<WidgetState>({
    open: false,
    step: 0,
    fields: emptyFields,
    sent: false,
  });
  const [draft, setDraft] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const persisted = parsePersistedState();
    if (persisted) {
      setWidget(persisted);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(widget));
  }, [widget]);

  useEffect(() => {
    const openWidget = () => setWidget((current) => ({ ...current, open: true }));
    window.addEventListener('open-creatyv-widget', openWidget);
    return () => window.removeEventListener('open-creatyv-widget', openWidget);
  }, []);

  const summaryBody = useMemo(() => {
    const lines = [
      `${t.labels.interest}: ${widget.fields.interest}`,
      `${t.labels.name}: ${widget.fields.name}`,
      `${t.labels.contact}: ${widget.fields.contact}`,
      `${t.labels.business}: ${widget.fields.business}`,
      `${t.labels.objective}: ${widget.fields.objective}`,
      `${t.labels.budget}: ${widget.fields.budget}`,
    ];
    return lines.join('\n');
  }, [t, widget.fields]);

  const stepFieldMap: Array<keyof LeadFields> = ['name', 'contact', 'business', 'objective'];
  const isBudgetStep = widget.step === 5;
  const isReviewStep = widget.step === 6;
  const isQuickReplyStep = widget.step === 0;
  const inputPlaceholder = t.placeholders[Math.max(widget.step - 1, 0)] ?? '';

  const setFieldValue = (key: keyof LeadFields, value: string) => {
    setWidget((current) => ({
      ...current,
      fields: { ...current.fields, [key]: value },
      sent: false,
    }));
  };

  const submitStep = () => {
    if (isQuickReplyStep) return;
    if (isBudgetStep || isReviewStep) return;
    const key = stepFieldMap[widget.step - 1];
    const value = draft.trim();
    if (!value) return;
    setFieldValue(key, value);
    setDraft('');
    setWidget((current) => ({ ...current, step: current.step + 1 }));
  };

  const goBack = () => {
    setStatus('');
    setWidget((current) => ({ ...current, step: Math.max(0, current.step - 1), sent: false }));
  };

  const sendLead = async () => {
    setStatus(t.sending);
    const payload = {
      source: 'landing_widget',
      language,
      ...widget.fields,
      createdAt: new Date().toISOString(),
    };

    const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch {
        // No-op: fallback mailto still proceeds.
      }
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(summaryBody);
        setStatus(t.copied);
      } catch {
        setStatus('');
      }
    }

    const subject = encodeURIComponent('Lead desde landing Creatyv');
    const body = encodeURIComponent(summaryBody);
    window.location.href = `mailto:contact@creatyv.io?subject=${subject}&body=${body}`;

    setWidget((current) => ({ ...current, sent: true, step: 6 }));
    if (!status) setStatus(t.sent);
  };

  const resetWidget = () => {
    const initialState: WidgetState = { open: true, step: 0, fields: emptyFields, sent: false };
    setWidget(initialState);
    setDraft('');
    setStatus('');
  };

  const BotIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="5" y="7" width="14" height="11" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3.5V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="9.5" cy="12" r="1.1" fill="currentColor" />
      <circle cx="14.5" cy="12" r="1.1" fill="currentColor" />
      <path d="M9 15H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {widget.open ? (
        <div className="mb-3 w-[92vw] max-w-[360px] overflow-hidden rounded-2xl border border-white/15 bg-[#0b111dcc] backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.52)]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">{t.title}</p>
              <p className="text-xs text-white/60">{t.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setWidget((current) => ({ ...current, open: false }))}
              className="rounded-lg border border-white/20 px-2 py-1 text-xs text-white/80 hover:bg-white/10"
            >
              ×
            </button>
          </div>

          <div className="max-h-[430px] space-y-3 overflow-y-auto px-4 py-4">
            <div className="max-w-[90%] rounded-xl border border-white/15 bg-white/[0.05] px-3 py-2 text-sm text-white/90">
              {t.greeting}
            </div>

            {widget.fields.interest ? (
              <div className="ml-auto max-w-[90%] rounded-xl bg-cyan-100/90 px-3 py-2 text-sm font-medium text-[#03121f]">
                {widget.fields.interest}
              </div>
            ) : null}

            {stepFieldMap.map((field, index) => {
              if (!widget.fields[field]) return null;
              return (
                <div key={field} className="space-y-2">
                  <div className="max-w-[90%] rounded-xl border border-white/15 bg-white/[0.05] px-3 py-2 text-sm text-white/90">
                    {t.questions[index]}
                  </div>
                  <div className="ml-auto max-w-[90%] rounded-xl bg-cyan-100/90 px-3 py-2 text-sm font-medium text-[#03121f]">
                    {widget.fields[field]}
                  </div>
                </div>
              );
            })}

            {widget.fields.budget ? (
              <div className="space-y-2">
                <div className="max-w-[90%] rounded-xl border border-white/15 bg-white/[0.05] px-3 py-2 text-sm text-white/90">
                  {t.questions[4]}
                </div>
                <div className="ml-auto max-w-[90%] rounded-xl bg-cyan-100/90 px-3 py-2 text-sm font-medium text-[#03121f]">
                  {widget.fields.budget}
                </div>
              </div>
            ) : null}

            {isReviewStep ? (
              <div className="rounded-xl border border-cyan-100/25 bg-cyan-200/10 p-3 text-sm text-white/90">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/90">{t.reviewTitle}</p>
                <ul className="mt-2 space-y-1 text-white/85">
                  <li>{`${t.labels.interest}: ${widget.fields.interest}`}</li>
                  <li>{`${t.labels.name}: ${widget.fields.name}`}</li>
                  <li>{`${t.labels.contact}: ${widget.fields.contact}`}</li>
                  <li>{`${t.labels.business}: ${widget.fields.business}`}</li>
                  <li>{`${t.labels.objective}: ${widget.fields.objective}`}</li>
                  <li>{`${t.labels.budget}: ${widget.fields.budget}`}</li>
                </ul>
              </div>
            ) : null}
          </div>

          <div className="border-t border-white/10 px-4 py-3">
            {isQuickReplyStep ? (
              <div className="grid grid-cols-1 gap-2">
                {t.quickReplies.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setFieldValue('interest', option);
                      setWidget((current) => ({ ...current, step: 1 }));
                    }}
                    className="rounded-xl border border-white/20 bg-white/[0.03] px-3 py-2 text-left text-xs text-white/85 transition hover:border-cyan-100/45 hover:bg-cyan-200/10"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : null}

            {widget.step > 0 && widget.step < 5 ? (
              <div className="space-y-2">
                <p className="text-xs text-white/70">{t.questions[widget.step - 1]}</p>
                <div className="flex gap-2">
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder={inputPlaceholder}
                    className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/35 outline-none focus:border-cyan-100/50"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        submitStep();
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={submitStep}
                    className="rounded-xl border border-cyan-100/45 bg-cyan-200/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-cyan-200/22"
                  >
                    {t.next}
                  </button>
                </div>
              </div>
            ) : null}

            {isBudgetStep ? (
              <div className="space-y-2">
                <p className="text-xs text-white/70">{t.questions[4]}</p>
                <div className="grid grid-cols-2 gap-2">
                  {t.budgets.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => {
                        setFieldValue('budget', budget);
                        setWidget((current) => ({ ...current, step: 6 }));
                      }}
                      className="rounded-xl border border-white/20 bg-white/[0.03] px-3 py-2 text-xs text-white/85 transition hover:border-cyan-100/45 hover:bg-cyan-200/10"
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {isReviewStep ? (
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={sendLead}
                  className="rounded-xl border border-cyan-100/50 bg-cyan-200/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-cyan-200/28"
                >
                  {t.send}
                </button>
                <button
                  type="button"
                  onClick={resetWidget}
                  className="rounded-xl border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white/85 transition hover:border-white/40"
                >
                  {t.reset}
                </button>
                <button
                  type="button"
                  onClick={goBack}
                  className="rounded-xl border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white/85 transition hover:border-white/40"
                >
                  {t.back}
                </button>
              </div>
            ) : widget.step > 0 ? (
              <button
                type="button"
                onClick={goBack}
                className="mt-2 rounded-xl border border-white/20 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 transition hover:border-white/40"
              >
                {t.back}
              </button>
            ) : null}

            {status ? <p className="mt-2 text-xs text-cyan-100/90">{status}</p> : null}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setWidget((current) => ({ ...current, open: !current.open }))}
        className="inline-flex items-center gap-2 rounded-2xl border border-cyan-100/35 bg-cyan-200/18 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_0_26px_rgba(31,219,255,0.33)] transition hover:bg-cyan-200/26 hover:shadow-[0_0_34px_rgba(31,219,255,0.45)]"
      >
        <BotIcon />
        <span>{t.fab}</span>
      </button>
    </div>
  );
};

export default LeadIntakeWidget;
