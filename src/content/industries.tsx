import type { LandingContent, Language } from './copy';

export type IndustryKey = 'dental' | 'autos' | 'builders';

type IndustryDefinition = {
  key: IndustryKey;
  label: Record<Language, string>;
  landing: Record<Language, LandingContent>;
};

export const industries: IndustryDefinition[] = [
  {
    key: 'dental',
    label: { es: 'Clínicas Dentales', en: 'Dental Clinics' },
    landing: {
      es: {
        hero: {
          kicker: 'CREATYV DENTAL',
          headline: 'Automatiza mensajes de pacientes y solicitudes de citas dentales.',
          subhead:
            'Reduce llamadas perdidas y manten a tu equipo enfocado en la recepcion mientras Creatyv responde, agenda y confirma.',
          primaryCta: 'Solicitar demo',
          secondaryCta: 'Ver como funciona',
        },
        featuresTitle: 'Soporte para clinicas y consultorios',
        features: [
          { title: 'Responde 24/7', description: 'Respuestas en segundos para no perder pacientes.' },
          { title: 'Detecta intención', description: 'Dolor, limpieza, estética, implantes y más.' },
          { title: 'Empuja cita', description: 'Cierra con 2 opciones (esta semana / próxima).' },
          { title: 'Captura datos', description: 'Nombre, servicio y horario preferido.' },
        ],
        stepsTitle: 'Como funciona',
        steps: [
          { title: 'El paciente escribe', description: 'Desde anuncio o inbox en WhatsApp/Messenger.' },
          { title: 'El bot responde y filtra', description: 'Pregunta lo mínimo y detecta intención.' },
          { title: 'Cierra valoración', description: 'Propone 2 opciones y deja el lead listo.' },
        ],
        channelsTitle: 'Canales',
        channelsIntro: 'Conecta los canales donde ya te escriben.',
        channels: [
          { name: 'WhatsApp', description: 'Confirmaciones y recordatorios.' },
          { name: 'Facebook Messenger', description: 'Ideal para campañas y anuncios.' },
          { name: 'Instagram Direct', description: 'Atención rápida con contexto.' },
          { name: 'Web chat', description: 'Captura leads desde tu sitio.' },
        ],
        contactTitle: 'Contacto',
        contactDescription: '¿Quieres verlo con tus servicios reales?',
        contactCta: 'contact@creatyv.io',
      },
      en: {
        hero: {
          kicker: 'CREATYV DENTAL',
          headline: 'Automate patient messages and dental appointment requests.',
          subhead:
            'Reduce missed calls and keep your front desk focused while Creatyv replies, schedules, and confirms.',
          primaryCta: 'Request a Demo',
          secondaryCta: 'See How It Works',
        },
        featuresTitle: 'Support for clinics and practices',
        features: [
          { title: 'Reply 24/7', description: 'Respond in seconds and stop losing patients.' },
          { title: 'Detect intent', description: 'Pain, cleaning, cosmetic, implants and more.' },
          { title: 'Push a booking', description: 'Close with 2 options (this week / next).' },
          { title: 'Capture details', description: 'Name, service, and preferred time.' },
        ],
        stepsTitle: 'How it works',
        steps: [
          { title: 'Patient messages you', description: 'From ads or inbox on WhatsApp/Messenger.' },
          { title: 'Bot replies and qualifies', description: 'Asks the minimum and detects intent fast.' },
          { title: 'Books a consult', description: 'Offers 2 options and hands off a ready lead.' },
        ],
        channelsTitle: 'Channels',
        channelsIntro: 'Connect the channels where people already message you.',
        channels: [
          { name: 'WhatsApp', description: 'Confirmations and reminders.' },
          { name: 'Facebook Messenger', description: 'Perfect for campaigns and ads.' },
          { name: 'Instagram Direct', description: 'Fast replies with context.' },
          { name: 'Web chat', description: 'Capture leads from your site.' },
        ],
        contactTitle: 'Contact',
        contactDescription: 'Want to see it with your real services?',
        contactCta: 'contact@creatyv.io',
      },
    },
  },

  {
    key: 'autos',
    label: { es: 'Autolotes', en: 'Car Lots' },
    landing: {
      es: {
        hero: {
          kicker: 'CREATYV AUTOS',
          headline: 'Responde leads de autos y cierra visitas por WhatsApp/Messenger.',
          subhead: 'Precio, financiamiento, disponibilidad y ubicación — sin perder clientes por demora.',
          primaryCta: 'Solicitar demo',
          secondaryCta: 'Ver como funciona',
        },
        featuresTitle: 'Soporte para autolotes y dealers',
        features: [
          { title: 'Respuestas en segundos', description: 'Contesta 24/7 y no pierdas leads por tardanza.' },
          { title: 'Califica al cliente', description: 'Precio, financiamiento, trade-in y disponibilidad.' },
          { title: 'Empuja visita', description: 'Cierra con 2 opciones: hoy/mañana o mañana/tarde.' },
          { title: 'Guarda datos clave', description: 'Modelo/interés + preferencia de visita.' },
        ],
        stepsTitle: 'Como funciona',
        steps: [
          { title: 'El cliente escribe', description: 'Desde anuncio o inbox en WhatsApp/Messenger.' },
          { title: 'El bot responde y califica', description: 'Pregunta lo mínimo y detecta intención.' },
          { title: 'Cierra visita', description: 'Propone 2 opciones y deja el lead listo.' },
        ],
        channelsTitle: 'Canales',
        channelsIntro: 'Conecta los canales donde ya te escriben.',
        channels: [
          { name: 'WhatsApp', description: 'Atención instantánea y seguimiento.' },
          { name: 'Facebook Messenger', description: 'Ideal para campañas y anuncios.' },
          { name: 'Instagram Direct', description: 'Convierte mensajes en visitas.' },
          { name: 'Web chat', description: 'Captura leads desde tu web.' },
        ],
        contactTitle: 'Contacto',
        contactDescription: '¿Quieres verlo con tus vehículos reales?',
        contactCta: 'contact@creatyv.io',
      },
      en: {
        hero: {
          kicker: 'CREATYV AUTOS',
          headline: 'Reply to auto leads and book showroom visits via WhatsApp/Messenger.',
          subhead: 'Price, financing, availability, and location — without losing buyers to slow replies.',
          primaryCta: 'Request a Demo',
          secondaryCta: 'See How It Works',
        },
        featuresTitle: 'Support for dealers and car lots',
        features: [
          { title: 'Replies in seconds', description: 'Respond 24/7 and stop losing leads.' },
          { title: 'Qualify buyers', description: 'Price, financing, trade-in, availability.' },
          { title: 'Push a visit', description: 'Close with 2 options: today/tomorrow or morning/afternoon.' },
          { title: 'Capture key details', description: 'Vehicle interest + visit preference.' },
        ],
        stepsTitle: 'How it works',
        steps: [
          { title: 'Buyer messages you', description: 'From ads or inbox on WhatsApp/Messenger.' },
          { title: 'Bot replies and qualifies', description: 'Asks the minimum and detects intent fast.' },
          { title: 'Books a visit', description: 'Offers 2 options and hands off a ready lead.' },
        ],
        channelsTitle: 'Channels',
        channelsIntro: 'Connect where buyers already message you.',
        channels: [
          { name: 'WhatsApp', description: 'Instant replies and follow-up.' },
          { name: 'Facebook Messenger', description: 'Perfect for ads and campaigns.' },
          { name: 'Instagram Direct', description: 'Turn DMs into visits.' },
          { name: 'Web chat', description: 'Capture leads from your site.' },
        ],
        contactTitle: 'Contact',
        contactDescription: 'Want to see it with your real inventory?',
        contactCta: 'contact@creatyv.io',
      },
    },
  },

  {
    key: 'builders',
    label: { es: 'Constructores', en: 'Contractors' },
    landing: {
      es: {
        hero: {
          kicker: 'CREATYV BUILDERS',
          headline: 'Automatiza solicitudes de estimados y consultas para contratistas.',
          subhead: 'Responde leads, recopila detalles y programa visitas sin perder tiempo en llamadas.',
          primaryCta: 'Solicitar demo',
          secondaryCta: 'Ver como funciona',
        },
        featuresTitle: 'Herramientas para contratistas',
        features: [
          { title: 'Estimados', description: 'Recoge medidas, ubicación y tipo de proyecto.' },
          { title: 'Calificación', description: 'Filtra consultas y entrega leads listos para cotizar.' },
          { title: 'Visitas', description: 'Propone 2 opciones y confirma horario.' },
          { title: 'Datos', description: 'Guarda detalles del proyecto para seguimiento.' },
        ],
        stepsTitle: 'Como funciona',
        steps: [
          { title: 'El cliente escribe', description: 'Desde anuncio o inbox.' },
          { title: 'El bot pregunta lo mínimo', description: 'Detecta tipo de proyecto y urgencia.' },
          { title: 'Programa visita', description: 'Cierra con 2 opciones.' },
        ],
        channelsTitle: 'Canales',
        channelsIntro: 'Conecta los canales donde ya te escriben.',
        channels: [
          { name: 'WhatsApp', description: 'Solicitudes y confirmaciones.' },
          { name: 'Facebook Messenger', description: 'Ideal para campañas.' },
          { name: 'Instagram Direct', description: 'Convierte mensajes en leads.' },
          { name: 'Web chat', description: 'Captura desde tu sitio.' },
        ],
        contactTitle: 'Contacto',
        contactDescription: '¿Quieres verlo con tus servicios reales?',
        contactCta: 'contact@creatyv.io',
      },
      en: {
        hero: {
          kicker: 'CREATYV BUILDERS',
          headline: 'Automate estimate requests and client inquiries for contractors.',
          subhead: 'Reply to leads, collect details, and book site visits without wasting time on calls.',
          primaryCta: 'Request a Demo',
          secondaryCta: 'See How It Works',
        },
        featuresTitle: 'Tools for contractors',
        features: [
          { title: 'Estimates', description: 'Collect measurements, location, and project type.' },
          { title: 'Qualification', description: 'Filter inquiries and hand off ready-to-quote leads.' },
          { title: 'Visits', description: 'Close with 2 options and confirm time.' },
          { title: 'Details', description: 'Save project details for follow-up.' },
        ],
        stepsTitle: 'How it works',
        steps: [
          { title: 'Customer messages you', description: 'From ads or inbox.' },
          { title: 'Bot asks the minimum', description: 'Detects project type and urgency.' },
          { title: 'Books a visit', description: 'Closes with 2 options.' },
        ],
        channelsTitle: 'Channels',
        channelsIntro: 'Connect where customers already message you.',
        channels: [
          { name: 'WhatsApp', description: 'Requests and confirmations.' },
          { name: 'Facebook Messenger', description: 'Perfect for campaigns.' },
          { name: 'Instagram Direct', description: 'Turn DMs into leads.' },
          { name: 'Web chat', description: 'Capture from your website.' },
        ],
        contactTitle: 'Contact',
        contactDescription: 'Want to see it with your real services?',
        contactCta: 'contact@creatyv.io',
      },
    },
  },
];

export const getIndustry = (key: string) => industries.find((i) => i.key === key);
