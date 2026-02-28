import type { Language } from '../content/copy';

type MainLandingProps = {
  language: Language;
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
};

const mainI18n = {
  es: {
    heroKicker: 'Creatyv',
    heroTitle: 'Menos pacientes en visto, más citas confirmadas',
    heroSubhead: 'Automatización, respuestas inteligentes y asistentes para conversión real.',
    ctaSolutions: 'Ver soluciones',
    ctaDental: 'DentalConnect para clínicas',
    solutionsTitle: 'Soluciones',
    solutions: [
      {
        title: 'Automatización de atención',
        description: 'Chatbots embebidos para Messenger. WhatsApp e Instagram: Próximamente.',
      },
      {
        title: 'Webs automatizadas',
        description: 'Sitios orientados a conversión con captura de leads y automatizaciones.',
      },
      {
        title: 'Dashboards / CRM',
        description: 'Paneles para ventas, operaciones y seguimiento de métricas clave.',
      },
      {
        title: 'Flujos (n8n) + email followups',
        description: 'Automatizaciones de nurturing, recuperación y handoff comercial.',
      },
      {
        title: 'Apps a medida',
        description: 'Construimos productos internos y verticales para acelerar operaciones.',
      },
    ],
    appsTitle: 'Apps',
    apps: [
      {
        title: 'DentalConnect',
        description: 'Automatización para clínicas dentales: atención, citas y seguimiento.',
        cta: 'Ver DentalConnect',
        href: '/dental',
      },
      {
        title: 'Nueva app (Próximamente)',
        description: 'Estamos preparando nuevas apps verticales para distintos sectores.',
      },
      {
        title: 'Nueva app (Próximamente)',
        description: 'Más productos de automatización para crecimiento operativo.',
      },
    ],
    comingSoon: 'Próximamente',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: '¿Qué hace Creatyv exactamente?',
        answer:
          'Diseñamos y construimos sistemas de automatización: webs, atención automática, seguimiento comercial, dashboards y apps.',
      },
      {
        question: '¿Son plataforma o agencia?',
        answer:
          'Ambas. Tenemos productos propios y también implementamos soluciones a medida para equipos que quieren ejecutar más rápido.',
      },
      {
        question: '¿Pueden integrarse con mi stack actual?',
        answer:
          'Sí. Integramos herramientas de mensajería, CRM, email, formularios y procesos internos con APIs y flujos automatizados.',
      },
      {
        question: '¿DentalConnect forma parte de Creatyv?',
        answer: 'Sí. Es una app vertical de Creatyv enfocada en clínicas odontológicas.',
      },
    ],
    contactTitle: 'Construimos la arquitectura de crecimiento de tu negocio',
    contactCopy: 'Plataforma + implementación para automatizar atención, operación y marketing.',
    contactEmailLabel: 'Escribinos:',
    contactBotCta: 'Hablar con Creatyv',
  },
  en: {
    heroKicker: 'Creatyv',
    heroTitle: 'We build AI systems and automations for businesses.',
    heroSubhead: 'Websites, chatbots, follow-up flows, dashboards, and apps.',
    ctaSolutions: 'View solutions',
    ctaDental: 'DentalConnect for clinics',
    solutionsTitle: 'Solutions',
    solutions: [
      {
        title: 'Support automation',
        description: 'Embedded chatbots for Messenger. WhatsApp and Instagram: Coming soon.',
      },
      {
        title: 'Automated websites',
        description: 'Conversion-driven sites with lead capture and automation workflows.',
      },
      {
        title: 'Dashboards / CRM',
        description: 'Panels for sales, operations, and tracking core business metrics.',
      },
      {
        title: 'Flows (n8n) + email follow-ups',
        description: 'Nurturing, recovery, and commercial handoff automations.',
      },
      {
        title: 'Custom apps',
        description: 'We build internal and vertical products to accelerate operations.',
      },
    ],
    appsTitle: 'Apps',
    apps: [
      {
        title: 'DentalConnect',
        description: 'Automation for dental clinics: support, appointments, and follow-up.',
        cta: 'View DentalConnect',
        href: '/dental',
      },
      {
        title: 'New app (Coming soon)',
        description: 'We are preparing new vertical apps for different industries.',
      },
      {
        title: 'New app (Coming soon)',
        description: 'More automation and AI products for operational growth.',
      },
    ],
    comingSoon: 'Coming soon',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'What does Creatyv do exactly?',
        answer:
          'We design and build AI systems: websites, support automations, commercial follow-up, dashboards, and apps.',
      },
      {
        question: 'Are you a platform or an agency?',
        answer:
          'Both. We run our own products and also deliver custom implementations for teams that need fast execution.',
      },
      {
        question: 'Can you integrate with my current stack?',
        answer:
          'Yes. We integrate messaging, CRM, email, forms, and internal processes using APIs and automation flows.',
      },
      {
        question: 'Is DentalConnect part of Creatyv?',
        answer: 'Yes. It is a Creatyv vertical app focused on dental clinics.',
      },
    ],
    contactTitle: 'We build the growth architecture for your business',
    contactCopy: 'Platform + implementation to automate support, operations, and marketing.',
    contactEmailLabel: 'Write to us:',
    contactBotCta: 'Talk to Creatyv',
  },
} as const;

const openLeadWidget = () => {
  window.dispatchEvent(new Event('open-creatyv-widget'));
};

const MainLanding = ({ language, onPrimaryAction, onSecondaryAction }: MainLandingProps) => {
  const t = mainI18n[language];

  return (
    <main className="bg-[#080b11] text-white">
      <section
        id="hero"
        className="px-6 py-20 bg-[radial-gradient(circle_at_top,_rgba(16,151,196,0.22),_rgba(8,11,17,1)_58%)]"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">{t.heroKicker}</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">{t.heroTitle}</h1>
          <p className="mt-5 text-lg text-white/80 max-w-3xl mx-auto">{t.heroSubhead}</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onPrimaryAction}
              className="px-6 py-3 rounded-xl border border-cyan-200/35 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-[0.2em] shadow-[0_0_28px_rgba(31,219,255,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(31,219,255,0.48)]"
            >
              {t.ctaSolutions}
            </button>
            <button
              type="button"
              onClick={onSecondaryAction}
              className="px-6 py-3 rounded-xl border border-white/25 bg-white/[0.03] backdrop-blur-md text-white text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 hover:border-cyan-200/45 hover:bg-cyan-200/10 hover:shadow-[0_0_26px_rgba(31,219,255,0.32)]"
            >
              {t.ctaDental}
            </button>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">{t.solutionsTitle}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.solutions.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-md transition duration-300 hover:border-cyan-300/35 hover:shadow-[0_0_30px_rgba(31,219,255,0.28)]"
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-white/75">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apps" className="px-6 py-16 border-t border-white/10 bg-[#0c1018]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">{t.appsTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.apps.map((app) => (
              <article
                key={app.title}
                className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 hover:border-cyan-300/35 hover:shadow-[0_0_28px_rgba(31,219,255,0.26)]"
              >
                <h3 className="text-xl font-semibold">{app.title}</h3>
                <p className="mt-3 text-white/75">{app.description}</p>
                {app.href ? (
                  <a
                    href={app.href}
                    className="mt-6 inline-flex rounded-xl border border-cyan-100/45 bg-cyan-200/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-cyan-200/22 hover:shadow-[0_0_24px_rgba(31,219,255,0.4)]"
                  >
                    {app.cta}
                  </a>
                ) : (
                  <span className="mt-6 inline-flex rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/60">
                    {t.comingSoon}
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">{t.faqTitle}</h2>
          <div className="mt-8 space-y-4">
            {t.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 hover:border-cyan-300/35"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-white/75">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 border-t border-white/10 bg-[#0b0f17]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-semibold">{t.contactTitle}</h2>
          <p className="text-white/70">{t.contactCopy}</p>
          <p className="text-sm text-white/75">
            {t.contactEmailLabel}{' '}
            <a href="mailto:contact@creatyv.io" className="text-cyan-100 hover:text-white">
              contact@creatyv.io
            </a>
          </p>
          <button
            type="button"
            onClick={openLeadWidget}
            className="inline-flex rounded-xl border border-white/30 bg-white/[0.04] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-cyan-200/45 hover:bg-cyan-200/10 hover:shadow-[0_0_24px_rgba(31,219,255,0.32)]"
          >
            {t.contactBotCta}
          </button>
        </div>
      </section>
    </main>
  );
};

export default MainLanding;
