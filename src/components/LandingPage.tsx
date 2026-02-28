import type { Language } from '../content/copy';

const SIGNUP_URLS = {
  starter: 'https://dental.creatyv.io/signup?plan=starter&trial=14',
  growth: 'https://dental.creatyv.io/signup?plan=growth&trial=14',
  pro: 'https://dental.creatyv.io/signup?plan=pro&trial=14',
};

type DentalLandingProps = {
  language: Language;
};

const dentalI18n = {
  es: {
    heroKicker: 'DentalConnect',
    heroTitle: 'Responde, agenda y confirma automáticamente',
    heroSubhead: 'Menos pacientes en visto, más citas confirmadas.',
    heroCta: 'Empezar prueba gratis 14 días',
    valueTitle: 'Qué resuelve en tu clínica',
    valueCards: [
      {
        title: 'Atención automática',
        description: 'Responde FAQs en Messenger y captura datos útiles desde el primer mensaje.',
      },
      {
        title: 'Citas organizadas',
        description: 'Agenda y ordena citas en un solo panel para recepción y equipo clínico.',
      },
      {
        title: 'Seguimiento activo',
        description: 'Confirma asistencia, reactiva pacientes y reduce ausencias sin trabajo manual.',
      },
    ],
    integrationsTitle: 'Integraciones',
    integrationsIntro: 'Conectamos canales y herramientas por etapas para asegurar estabilidad.',
    pricingTitle: 'Planes para empezar y escalar',
    pricingBadge: 'Prueba gratis 14 días en todos los planes',
    afterTrial: 'después de la prueba',
    pricingCtaStart: 'Elegir plan',
    marketingPostingTitle: 'Marketing automático',
    marketingPostingBullets: [
      'Posts generados para tu clínica',
      'Calendario semanal sugerido',
      'Aprobás y se programan',
    ],
    faqTitle: 'FAQs dentales',
    faqs: [
      {
        question: '¿Qué hace DentalConnect exactamente?',
        answer: 'Automatiza respuestas, agendamiento, confirmaciones y recordatorios para tu clínica.',
      },
      {
        question: '¿Necesito tokens o configuración técnica?',
        answer: 'No. Conectás Messenger por OAuth y el equipo te guía en la configuración inicial.',
      },
      {
        question: '¿En cuánto tiempo queda funcionando?',
        answer: 'La implementación inicial suele quedar lista en pocos días según tus flujos y especialidades.',
      },
      {
        question: '¿Qué mensajes responde y qué datos captura?',
        answer: 'Responde FAQs y captura nombre, motivo de consulta, contacto y disponibilidad.',
      },
      {
        question: '¿Incluye plantillas por especialidad?',
        answer: 'Sí, incluye plantillas adaptadas por tipo de tratamiento o especialidad dental.',
      },
      {
        question: '¿Cómo funcionan recordatorios y seguimiento?',
        answer: 'Podés activar secuencias automáticas con confirmación, reintentos y reactivación.',
      },
      {
        question: '¿Qué pasa al terminar la prueba gratis?',
        answer: 'Elegís plan y continuás con la configuración activa; no perdés tus flujos.',
      },
      {
        question: '¿Puedo cambiar de plan después?',
        answer: 'Sí, podés subir o ajustar plan según crecimiento y número de sucursales.',
      },
      {
        question: '¿Qué integraciones vienen y cuáles están “próximamente”?',
        answer: 'Messenger está activo. WhatsApp e Instagram están en “Próximamente”, Google Calendar en lista de espera.',
      },
    ],
    finalTitle: 'Activá DentalConnect en tu clínica',
    finalCopy: 'Prueba gratis por 14 días y activá tu operación de mensajes y citas.',
    finalCta: 'Empezar prueba gratis 14 días',
  },
  en: {
    heroKicker: 'DentalConnect',
    heroTitle: 'Automation for dental clinics',
    heroSubhead: 'Reply, schedule, confirm, and send reminders automatically.',
    heroCta: 'Start free 14-day trial',
    valueTitle: 'What it solves for your clinic',
    valueCards: [
      {
        title: 'Automated support',
        description: 'Answer Messenger FAQs and capture useful data from the first message.',
      },
      {
        title: 'Organized appointments',
        description: 'Schedule and manage appointments in one panel for front desk and clinical team.',
      },
      {
        title: 'Active follow-up',
        description: 'Confirm attendance, reactivate patients, and reduce no-shows without manual work.',
      },
    ],
    integrationsTitle: 'Integrations',
    integrationsIntro: 'We connect channels and tools in phases to ensure stable rollout.',
    pricingTitle: 'Plans to start and scale',
    pricingBadge: 'Free 14-day trial on all plans',
    afterTrial: 'after trial',
    pricingCtaStart: 'Choose plan',
    marketingPostingTitle: 'AI Marketing Posting',
    marketingPostingBullets: [
      'Posts generated for your clinic (ready to publish)',
      'Suggested weekly calendar (days and times)',
      'You approve and they are auto-scheduled',
    ],
    faqTitle: 'Dental FAQs',
    faqs: [
      {
        question: 'What does DentalConnect do exactly?',
        answer: 'It automates replies, scheduling, confirmations, and reminders for your clinic.',
      },
      {
        question: 'Do I need tokens or technical setup?',
        answer: 'No. You connect Messenger via OAuth and our team guides the initial setup.',
      },
      {
        question: 'How long until it is running?',
        answer: 'Initial setup is usually ready in a few days depending on your workflows and specialties.',
      },
      {
        question: 'Which messages does it answer and what data does it capture?',
        answer: 'It answers FAQs and captures name, consultation reason, contact info, and availability.',
      },
      {
        question: 'Does it include specialty templates?',
        answer: 'Yes, it includes templates tailored by treatment type or dental specialty.',
      },
      {
        question: 'How do reminders and follow-up work?',
        answer: 'You can enable automated sequences with confirmation, retries, and reactivation.',
      },
      {
        question: 'What happens after the free trial ends?',
        answer: 'You choose a plan and continue with active setup; your workflows stay in place.',
      },
      {
        question: 'Can I change plans later?',
        answer: 'Yes, you can upgrade or adjust plans as you grow and add locations.',
      },
      {
        question: 'Which integrations are available and which are “coming soon”?',
        answer: 'Messenger is active. WhatsApp and Instagram are “Coming soon”, Google Calendar is on waitlist.',
      },
    ],
    finalTitle: 'Activate DentalConnect in your clinic',
    finalCopy: 'Start with a 14-day free trial and automate messages and appointments.',
    finalCta: 'Start free 14-day trial',
  },
} as const;

const planCards = {
  es: [
    {
      name: 'Starter',
      price: '$49',
      unit: '/mes',
      href: SIGNUP_URLS.starter,
      bullets: [
        'Respuestas automáticas en Messenger',
        'Plantillas por especialidad (servicios)',
        'Guardar citas (básico)',
        '1 recordatorio (24h antes)',
        '1 sucursal',
      ],
    },
    {
      name: 'Growth',
      price: '$99',
      unit: '/mes',
      href: SIGNUP_URLS.growth,
      featured: true,
      bullets: [
        'Todo Starter',
        'Recordatorios avanzados + confirmación',
        'Panel: contactos, chats, citas y estados',
        'Seguimiento simple (reactivar)',
        'Marketing automático (incluido)',
      ],
      showMarketingBlock: true,
    },
    {
      name: 'Pro',
      price: '$149',
      unit: '/mes',
      href: SIGNUP_URLS.pro,
      bullets: [
        'Todo Growth',
        'Seguimiento por sesiones (recall) + reactivación avanzada',
        'Automatizaciones (no-show, reintentos)',
        'Reportes + soporte prioritario',
        'Multi-sucursal (+$40/sucursal)',
      ],
      showMarketingBlock: true,
    },
  ],
  en: [
    {
      name: 'Starter',
      price: '$49',
      unit: '/mo',
      href: SIGNUP_URLS.starter,
      bullets: [
        'Automated replies on Messenger',
        'Specialty-based templates (services)',
        'Save appointments (basic)',
        '1 reminder (24h before)',
        '1 location',
      ],
    },
    {
      name: 'Growth',
      price: '$99',
      unit: '/mo',
      href: SIGNUP_URLS.growth,
      featured: true,
      bullets: [
        'Everything in Starter',
        'Advanced reminders + confirmation',
        'Panel: contacts, chats, appointments, and statuses',
        'Simple follow-up (reactivation)',
        'AI Marketing Posting (included)',
      ],
      showMarketingBlock: true,
    },
    {
      name: 'Pro',
      price: '$149',
      unit: '/mo',
      href: SIGNUP_URLS.pro,
      bullets: [
        'Everything in Growth',
        'Session follow-up (recall) + advanced reactivation',
        'Automations (no-show, retries)',
        'Reports + priority support',
        'Multi-location (+$40/location)',
      ],
      showMarketingBlock: true,
    },
  ],
} as const;

const integrations = {
  es: [
    { name: 'Messenger', description: 'Disponible hoy para respuestas y captación.', badge: null },
    { name: 'WhatsApp', description: 'Integración en preparación para rollout por etapas.', badge: 'Próximamente' },
    { name: 'Instagram', description: 'Conector planificado para atención en redes.', badge: 'Próximamente' },
    { name: 'Google Calendar', description: 'Sincronización para agenda clínica.', badge: 'Lista de espera' },
  ],
  en: [
    { name: 'Messenger', description: 'Available now for replies and lead capture.', badge: null },
    { name: 'WhatsApp', description: 'Integration in progress for phased rollout.', badge: 'Coming soon' },
    { name: 'Instagram', description: 'Connector planned for social media support.', badge: 'Coming soon' },
    { name: 'Google Calendar', description: 'Sync for clinic scheduling.', badge: 'Waitlist' },
  ],
} as const;

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-white/85" aria-hidden="true">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" className="text-white/35" />
    <path
      d="M6 10.5L8.7 13.2L14 8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LandingPage = ({ language }: DentalLandingProps) => {
  const t = dentalI18n[language];
  const plans = planCards[language];
  const integrationCards = integrations[language];

  return (
    <main className="bg-[#080b11] text-white">
      <section
        id="hero"
        className="px-6 py-20 bg-[radial-gradient(circle_at_top,_rgba(28,38,60,0.5),_rgba(8,11,17,1)_60%)]"
      >
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t.heroKicker}</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{t.heroTitle}</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">{t.heroSubhead}</p>
          <div className="flex items-center justify-center">
            <a
              href={SIGNUP_URLS.growth}
              className="px-6 py-3 rounded-xl border border-cyan-200/30 bg-white/15 backdrop-blur-md text-white font-semibold uppercase tracking-[0.18em] text-xs shadow-[0_0_28px_rgba(30,213,255,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgba(30,213,255,0.5)]"
            >
              {t.heroCta}
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10" id="what">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium mb-6">{t.valueTitle}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {t.valueCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-md transition duration-300 hover:border-cyan-300/35 hover:shadow-[0_0_30px_rgba(26,199,255,0.3)]"
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-white/80">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10 bg-[#10131d]" id="channels">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium mb-4">{t.integrationsTitle}</h2>
          <p className="text-white/75 mb-8">{t.integrationsIntro}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {integrationCards.map((item) => (
              <article
                key={item.name}
                className="relative rounded-2xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-md transition duration-300 hover:border-cyan-300/35 hover:shadow-[0_0_24px_rgba(26,199,255,0.24)]"
              >
                {item.badge ? (
                  <span className="absolute right-3 top-3 rounded-full border border-cyan-100/40 bg-cyan-200/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-100">
                    {item.badge}
                  </span>
                ) : null}
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-white/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-18 border-t border-white/10 bg-[linear-gradient(180deg,rgba(17,19,28,1)_0%,rgba(8,11,17,1)_100%)]"
        id="pricing"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <span className="inline-flex rounded-full border border-cyan-100/40 bg-cyan-200/15 px-4 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-100">
              {t.pricingBadge}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold">{t.pricingTitle}</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative overflow-hidden rounded-3xl p-6 border bg-white/[0.06] backdrop-blur-xl transition duration-300 ${
                  plan.featured
                    ? 'border-cyan-200/45 shadow-[0_0_46px_rgba(31,219,255,0.34)]'
                    : 'border-white/15 shadow-[0_16px_36px_rgba(0,0,0,0.28)] hover:border-cyan-200/35 hover:shadow-[0_0_34px_rgba(31,219,255,0.26)]'
                }`}
              >
                {plan.featured ? (
                  <span className="absolute right-[-30px] top-4 rotate-[-12deg] border border-cyan-100/50 bg-cyan-300/25 px-10 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-50">
                    {language === 'es' ? 'Recomendado' : 'Recommended'}
                  </span>
                ) : null}

                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-3 flex items-end gap-1 text-white">
                  <span className="text-5xl font-semibold leading-none">{plan.price}</span>
                  <span className="text-xl text-white/80">{plan.unit}</span>
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/55">{t.afterTrial}</p>

                <ul className="mt-6 space-y-3">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-white/82">
                      <span className="pt-0.5">
                        <CheckIcon />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {plan.showMarketingBlock ? (
                  <div className="mt-5 rounded-xl border border-cyan-100/25 bg-cyan-200/10 p-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/90">{t.marketingPostingTitle}</p>
                    <ul className="mt-2 space-y-2">
                      {t.marketingPostingBullets.map((item) => (
                        <li key={`${plan.name}-${item}`} className="flex items-start gap-2 text-sm text-white/80">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-100/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <a
                  href={plan.href}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition duration-300 ${
                    plan.featured
                      ? 'border-cyan-100/55 bg-cyan-200/20 text-white shadow-[0_0_30px_rgba(31,219,255,0.35)] hover:bg-cyan-200/28 hover:shadow-[0_0_40px_rgba(31,219,255,0.5)]'
                      : 'border-white/25 bg-white/[0.06] text-white hover:border-cyan-200/50 hover:bg-cyan-200/10 hover:shadow-[0_0_30px_rgba(31,219,255,0.35)]'
                  }`}
                >
                  {t.pricingCtaStart}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10" id="faq">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium mb-8 text-center">{t.faqTitle}</h2>
          <div className="space-y-4">
            {t.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 hover:border-cyan-300/35"
              >
                <h3 className="text-base md:text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm md:text-base text-white/75">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10 bg-[#0b0f17]" id="contact">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-medium">{t.finalTitle}</h2>
          <p className="text-white/70">{t.finalCopy}</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-semibold">
            <a
              href={SIGNUP_URLS.growth}
              className="inline-flex items-center justify-center rounded-xl border border-cyan-100/55 bg-cyan-200/20 px-6 py-3 text-white shadow-[0_0_30px_rgba(31,219,255,0.35)] transition duration-300 hover:bg-cyan-200/28 hover:shadow-[0_0_40px_rgba(31,219,255,0.5)]"
            >
              {t.finalCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
