export type Language = 'es' | 'en';

export type Feature = {
  title: string;
  description: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Channel = {
  name: string;
  description: string;
};

export type LandingContent = {
  hero: {
    kicker: string;
    headline: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  featuresTitle: string;
  features: Feature[];
  stepsTitle: string;
  steps: Step[];
  channelsTitle: string;
  channelsIntro: string;
  channels: Channel[];
  contactTitle: string;
  contactDescription: string;
  contactCta: string;
};

export type LegalSection = {
  title: string;
  body: string[];
  list?: string[];
};

export type LegalContent = {
  kicker: string;
  title: string;
  intro: string;
  privacy: LegalSection;
  dataUse: LegalSection;
  metaProcessing: LegalSection;
  compliance: LegalSection;
  retention: LegalSection;
  terms: LegalSection;
  responsibilities: LegalSection;
  thirdParty: LegalSection;
  liability: LegalSection;
  deletion: LegalSection;
  contact: LegalSection;
  disclosure: LegalSection;
};

export type NavigationCopy = {
  home: string;
  what: string;
  how: string;
  platforms: string;
  contact: string;
  dental: string;
  builders: string;
};

export type FooterCopy = {
  privacy: string;
  terms: string;
  legal: string;
};

type CopyPack = {
  navigation: NavigationCopy;
  footer: FooterCopy;
  landings: {
    general: LandingContent;
    dental: LandingContent;
    builders: LandingContent;
  };
  legal: LegalContent;
};

export const copy: Record<Language, CopyPack> = {
  es: {
    navigation: {
      home: 'Inicio',
      what: 'Que',
      how: 'Como',
      platforms: 'Canales',
      contact: 'Contacto',
      dental: 'Dental',
      builders: 'Constructores',
    },
    footer: {
      privacy: 'Politica de Privacidad',
      terms: 'Terminos',
      legal: 'Legal',
    },
    landings: {
      general: {
        hero: {
          kicker: 'Creatyv',
          headline: 'Automatiza conversaciones y solicitudes sin perder clientes.',
          subhead:
            'Creatyv centraliza mensajes, agenda solicitudes y mantiene a tu equipo enfocado en ventas y servicio con automatizaciones claras.',
          primaryCta: 'Solicitar demo',
          secondaryCta: 'Ver como funciona',
        },
        featuresTitle: 'Lo que entrega Creatyv',
        features: [
          {
            title: 'Respuestas automaticas',
            description:
              'Responde nuevos mensajes en segundos con informacion correcta, horarios y pasos siguientes definidos por tu equipo.',
          },
          {
            title: 'Solicitudes y citas',
            description:
              'Captura solicitudes, confirma disponibilidad y envia recordatorios sin seguimiento manual.',
          },
          {
            title: 'Calificacion de leads',
            description:
              'Filtra consultas, recopila detalles clave y entrega conversaciones listas para cierre.',
          },
          {
            title: 'Inbox unificado',
            description:
              'WhatsApp, Messenger, Instagram y web chat viven en un solo panel con contexto completo.',
          },
        ],
        stepsTitle: 'Como funciona',
        steps: [
          {
            title: 'Conecta tus canales',
            description:
              'Integra WhatsApp Cloud API, Messenger, Instagram y chat web con reglas oficiales y control total.',
          },
          {
            title: 'Define flujos y tono',
            description:
              'Configura horarios, mensajes y criterios para cada tipo de solicitud o cliente.',
          },
          {
            title: 'Supervisa y escala',
            description:
              'Tu equipo ve conversaciones, toma control cuando es necesario y ajusta flujos en minutos.',
          },
        ],
        channelsTitle: 'Plataformas de mensajeria',
        channelsIntro:
          'Creatyv opera con APIs oficiales y respeta politicas de cada canal para mantener cuentas seguras.',
        channels: [
          {
            name: 'WhatsApp',
            description:
              'Respuestas, confirmaciones y recordatorios via la API oficial con trazabilidad.',
          },
          {
            name: 'Facebook Messenger',
            description: 'Conversa desde un inbox unico con historial y contexto completo.',
          },
          {
            name: 'Instagram Direct',
            description:
              'Captura preguntas, responde al instante y asigna cuando se requiere atencion humana.',
          },
          {
            name: 'Web chat',
            description:
              'Integra chat web para capturar leads y mantener el historial junto a otros canales.',
          },
        ],
        contactTitle: 'Solicita una demo',
        contactDescription:
          'Agenda una llamada para ver como Creatyv reduce tiempos de respuesta y mejora conversiones.',
        contactCta: 'contact@creatyv.io',
      },
      dental: {
        hero: {
          kicker: 'Creatyv Dental',
          headline: 'Automatiza mensajes de pacientes y solicitudes de citas dentales.',
          subhead:
            'Reduce llamadas perdidas y manten a tu equipo enfocado en la recepcion mientras Creatyv responde, agenda y confirma.',
          primaryCta: 'Solicitar demo',
          secondaryCta: 'Ver como funciona',
        },
        featuresTitle: 'Soporte para clinicas y consultorios',
        features: [
          {
            title: 'Mensajes de pacientes',
            description:
              'Responde preguntas frecuentes sobre tratamientos, horarios y coberturas en segundos.',
          },
          {
            title: 'Citas y recordatorios',
            description:
              'Confirma fechas, envia recordatorios y reduce ausencias con flujos automatizados.',
          },
          {
            title: 'Soporte de recepcion',
            description:
              'Entrega conversaciones listas para el equipo cuando se requiere atencion humana.',
          },
          {
            title: 'Inbox centralizado',
            description:
              'Gestiona WhatsApp, Messenger, Instagram y chat web desde un solo tablero.',
          },
        ],
        stepsTitle: 'Como funciona',
        steps: [
          {
            title: 'Conecta canales de pacientes',
            description:
              'Integra canales oficiales y define reglas para mensajes entrantes.',
          },
          {
            title: 'Configura flujos clinicos',
            description:
              'Crea respuestas, capturas de datos y recordatorios alineados con tu equipo.',
          },
          {
            title: 'Acompana cada cita',
            description:
              'Monitorea conversaciones y toma control cuando el caso lo requiere.',
          },
        ],
        channelsTitle: 'Canales disponibles',
        channelsIntro:
          'Creatyv mantiene cumplimiento con politicas de Meta y protege la informacion del paciente.',
        channels: [
          {
            name: 'WhatsApp',
            description:
              'Confirmaciones y recordatorios de citas con la API oficial.',
          },
          {
            name: 'Facebook Messenger',
            description: 'Respuestas rapidas para pacientes nuevos y recurrentes.',
          },
          {
            name: 'Instagram Direct',
            description: 'Atiende consultas de redes sociales con contexto completo.',
          },
          {
            name: 'Web chat',
            description: 'Captura solicitudes desde tu sitio y agenda en minutos.',
          },
        ],
        contactTitle: 'Agenda una demo dental',
        contactDescription:
          'Muestra a tu equipo como Creatyv agiliza la recepcion y mejora la asistencia de pacientes.',
        contactCta: 'contact@creatyv.io',
      },
      builders: {
        hero: {
          kicker: 'Creatyv Builders',
          headline: 'Automatiza solicitudes de estimados y consultas de clientes para contratistas.',
          subhead:
            'Responde leads, recopila detalles de obra y programa visitas sin perder tiempo en llamadas.',
          primaryCta: 'Solicitar demo',
          secondaryCta: 'Ver como funciona',
        },
        featuresTitle: 'Herramientas para contratistas',
        features: [
          {
            title: 'Solicitudes de estimados',
            description:
              'Recoge medidas, ubicacion y tipo de proyecto desde el primer mensaje.',
          },
          {
            title: 'Calificacion de clientes',
            description:
              'Filtra consultas y entrega leads listos para cotizar al equipo comercial.',
          },
          {
            title: 'Programacion de visitas',
            description:
              'Agenda inspecciones y confirma horarios automaticamente.',
          },
          {
            title: 'Inbox centralizado',
            description:
              'Gestiona conversaciones de WhatsApp, Messenger, Instagram y web chat en un solo panel.',
          },
        ],
        stepsTitle: 'Como funciona',
        steps: [
          {
            title: 'Conecta tus canales',
            description:
              'Integra los canales donde llegan tus solicitudes sin cambiar tu numero.',
          },
          {
            title: 'Define flujos de obra',
            description:
              'Configura preguntas, etapas y respuestas automaticas por tipo de proyecto.',
          },
          {
            title: 'Coordina al equipo',
            description:
              'Comparte conversaciones y ajusta procesos cuando cambian tus servicios.',
          },
        ],
        channelsTitle: 'Canales disponibles',
        channelsIntro:
          'Creatyv trabaja con APIs oficiales para mantener el contacto seguro y confiable.',
        channels: [
          {
            name: 'WhatsApp',
            description: 'Recibe solicitudes y confirma visitas con mensajes automaticos.',
          },
          {
            name: 'Facebook Messenger',
            description: 'Centraliza preguntas y responde sin perder el hilo.',
          },
          {
            name: 'Instagram Direct',
            description: 'Convierte mensajes en leads con respuestas inmediatas.',
          },
          {
            name: 'Web chat',
            description: 'Captura clientes desde tu web y dirige los siguientes pasos.',
          },
        ],
        contactTitle: 'Agenda una demo para contratistas',
        contactDescription:
          'Descubre como Creatyv mejora la velocidad de respuesta y la conversion de estimados.',
        contactCta: 'contact@creatyv.io',
      },
    },
    legal: {
      kicker: 'Creatyv',
      title: 'Legal y cumplimiento',
      intro:
        'Esta pagina contiene informacion legal, de privacidad y cumplimiento requerida por plataformas y clientes.',
      privacy: {
        title: 'Politica de Privacidad',
        body: [
          'Esta politica describe como Creatyv recopila y usa informacion para operar su plataforma de mensajeria.',
          'Solo recopilamos datos necesarios para responder mensajes, coordinar solicitudes y ofrecer soporte.',
        ],
        list: [
          'Mensajes, adjuntos y metadatos de WhatsApp, Messenger, Instagram y chat web conectados a Creatyv.',
          'Datos de contacto como nombres, telefonos, identificadores sociales y correos.',
          'Historial de solicitudes, citas y confirmaciones cuando la empresa habilita esa funcionalidad.',
        ],
      },
      dataUse: {
        title: 'Uso de datos',
        body: [
          'La informacion recopilada se utiliza para:',
          'Creatyv no vende ni comparte datos para publicidad ni servicios ajenos.',
        ],
        list: [
          'Enviar respuestas automaticas, recordatorios y seguimientos definidos por el negocio.',
          'Mostrar conversaciones en el inbox central para que el equipo atienda casos.',
          'Confirmar solicitudes y notificar cambios a clientes.',
        ],
      },
      metaProcessing: {
        title: 'Procesamiento en plataformas Meta',
        body: [
          'Creatyv procesa conversaciones recibidas de WhatsApp, Facebook Messenger e Instagram Direct en nombre del negocio.',
          'Se utilizan APIs oficiales aprobadas por Meta para recibir, almacenar y enrutar mensajes de forma segura.',
        ],
      },
      compliance: {
        title: 'Cumplimiento de plataformas',
        body: [
          'Creatyv respeta los terminos y politicas de WhatsApp, Meta y los canales compatibles.',
          'Las cuentas y numeros conectados siguen siendo propiedad y control del negocio.',
        ],
      },
      retention: {
        title: 'Manejo y retencion de datos',
        body: [
          'El acceso a datos personales esta limitado a personal autorizado de Creatyv.',
          'La informacion se transmite con cifrado y se mantiene solo el tiempo necesario para operar el servicio o cumplir instrucciones del negocio.',
        ],
      },
      terms: {
        title: 'Terminos de Servicio',
        body: [
          'Creatyv ofrece software para automatizar comunicacion en WhatsApp, Messenger, Instagram Direct y chat web.',
          'El servicio no actua como proveedor medico ni como entidad de servicios profesionales.',
        ],
      },
      responsibilities: {
        title: 'Responsabilidades del cliente',
        body: [
          'Cada negocio es responsable por el contenido de sus mensajes, el cumplimiento legal y el uso correcto de la plataforma.',
        ],
      },
      thirdParty: {
        title: 'Plataformas de terceros',
        body: [
          'La entrega de mensajes depende de servicios externos como WhatsApp Cloud API, Facebook Messenger e Instagram Direct.',
          'Creatyv no garantiza tiempos de entrega cuando esos servicios sufren interrupciones o cambios de politica.',
        ],
      },
      liability: {
        title: 'Limitacion de responsabilidad',
        body: [
          'El servicio se entrega "tal cual" y Creatyv no se hace responsable por danos indirectos o consecuenciales.',
          'La responsabilidad total se limita a las tarifas pagadas por el periodo de servicio vigente.',
        ],
      },
      deletion: {
        title: 'Eliminacion de datos',
        body: [
          'Los usuarios pueden solicitar la eliminacion de datos escribiendo a contact@creatyv.io desde el correo o telefono asociado.',
          'Tras la verificacion, los datos relacionados se eliminan en un plazo razonable.',
        ],
      },
      contact: {
        title: 'Contacto legal',
        body: [
          'Para preguntas sobre privacidad o terminos, escribe a contact@creatyv.io.',
        ],
      },
      disclosure: {
        title: 'Informacion legal',
        body: [
          'Legal Entity: Jose Antonio Duran Herrera',
          'Business Type: Sole Proprietor',
          'Brand Name: Creatyv.io',
        ],
      },
    },
  },
  en: {
    navigation: {
      home: 'Home',
      what: 'What',
      how: 'How',
      platforms: 'Platforms',
      contact: 'Contact',
      dental: 'Dental',
      builders: 'Builders',
    },
    footer: {
      privacy: 'Privacy Policy',
      terms: 'Terms',
      legal: 'Legal',
    },
    landings: {
      general: {
        hero: {
          kicker: 'Creatyv',
          headline: 'Automate conversations and appointment requests without losing clients.',
          subhead:
            'Creatyv centralizes messages, coordinates requests, and keeps teams focused on sales and service with clear automations.',
          primaryCta: 'Request a Demo',
          secondaryCta: 'See How It Works',
        },
        featuresTitle: 'What Creatyv Delivers',
        features: [
          {
            title: 'Automated replies',
            description:
              'Answer new messages in seconds with the right information, hours, and next steps your team defines.',
          },
          {
            title: 'Requests and appointments',
            description:
              'Capture requests, confirm availability, and send reminders without manual follow-up.',
          },
          {
            title: 'Lead qualification',
            description:
              'Filter inquiries, collect key details, and hand off conversations that are ready to close.',
          },
          {
            title: 'Unified inbox',
            description:
              'WhatsApp, Messenger, Instagram, and web chat live in one workspace with full context.',
          },
        ],
        stepsTitle: 'How It Works',
        steps: [
          {
            title: 'Connect your channels',
            description:
              'Integrate WhatsApp Cloud API, Messenger, Instagram, and web chat with official rules and full control.',
          },
          {
            title: 'Define flows and tone',
            description:
              'Set hours, messages, and criteria for each request or customer type.',
          },
          {
            title: 'Monitor and scale',
            description:
              'Your team sees conversations, takes over when needed, and updates flows in minutes.',
          },
        ],
        channelsTitle: 'Messaging platforms',
        channelsIntro:
          'Creatyv operates with official APIs and respects platform policies to keep accounts secure.',
        channels: [
          {
            name: 'WhatsApp',
            description:
              'Replies, confirmations, and reminders through the official API with delivery tracking.',
          },
          {
            name: 'Facebook Messenger',
            description: 'Work from a single inbox with full conversation context.',
          },
          {
            name: 'Instagram Direct',
            description:
              'Capture inquiries, respond instantly, and assign when human support is required.',
          },
          {
            name: 'Web chat',
            description:
              'Embed web chat to capture leads and keep history alongside other channels.',
          },
        ],
        contactTitle: 'Request a demo',
        contactDescription:
          'Schedule a call to see how Creatyv reduces response time and improves conversions.',
        contactCta: 'contact@creatyv.io',
      },
      dental: {
        hero: {
          kicker: 'Creatyv Dental',
          headline: 'Automate patient messages and dental appointment requests.',
          subhead:
            'Reduce missed calls and keep your front desk focused while Creatyv replies, schedules, and confirms.',
          primaryCta: 'Request a Demo',
          secondaryCta: 'See How It Works',
        },
        featuresTitle: 'Support for clinics and practices',
        features: [
          {
            title: 'Patient messages',
            description:
              'Reply to common questions about treatments, hours, and coverage in seconds.',
          },
          {
            title: 'Appointments and reminders',
            description:
              'Confirm dates, send reminders, and reduce no-shows with automated flows.',
          },
          {
            title: 'Front desk support',
            description:
              'Hand off conversations to staff when human attention is required.',
          },
          {
            title: 'Central inbox',
            description:
              'Manage WhatsApp, Messenger, Instagram, and web chat from one dashboard.',
          },
        ],
        stepsTitle: 'How It Works',
        steps: [
          {
            title: 'Connect patient channels',
            description:
              'Integrate official channels and define rules for incoming messages.',
          },
          {
            title: 'Configure clinic flows',
            description:
              'Create responses, data capture, and reminders aligned with your team.',
          },
          {
            title: 'Guide every appointment',
            description:
              'Monitor conversations and step in when a case needs personal care.',
          },
        ],
        channelsTitle: 'Available channels',
        channelsIntro:
          'Creatyv stays aligned with Meta policies and protects patient information.',
        channels: [
          {
            name: 'WhatsApp',
            description: 'Appointment confirmations and reminders through the official API.',
          },
          {
            name: 'Facebook Messenger',
            description: 'Fast replies for new and returning patients.',
          },
          {
            name: 'Instagram Direct',
            description: 'Handle social inquiries with full context.',
          },
          {
            name: 'Web chat',
            description: 'Capture requests from your site and schedule in minutes.',
          },
        ],
        contactTitle: 'Request a dental demo',
        contactDescription:
          'Show your team how Creatyv streamlines the front desk and boosts attendance.',
        contactCta: 'contact@creatyv.io',
      },
      builders: {
        hero: {
          kicker: 'Creatyv Builders',
          headline: 'Automate estimate requests and client inquiries for contractors.',
          subhead:
            'Reply to leads, collect job details, and schedule site visits without losing time on calls.',
          primaryCta: 'Request a Demo',
          secondaryCta: 'See How It Works',
        },
        featuresTitle: 'Tools for contractors',
        features: [
          {
            title: 'Estimate requests',
            description:
              'Gather measurements, location, and project type from the first message.',
          },
          {
            title: 'Lead qualification',
            description:
              'Filter inquiries and hand off ready-to-quote leads to the sales team.',
          },
          {
            title: 'Job scheduling',
            description:
              'Book inspections and confirm times automatically.',
          },
          {
            title: 'Central inbox',
            description:
              'Manage WhatsApp, Messenger, Instagram, and web chat in one workspace.',
          },
        ],
        stepsTitle: 'How It Works',
        steps: [
          {
            title: 'Connect your channels',
            description:
              'Integrate the channels where requests arrive without changing your number.',
          },
          {
            title: 'Define job flows',
            description:
              'Configure questions, stages, and automated replies by project type.',
          },
          {
            title: 'Coordinate the team',
            description:
              'Share conversations and adjust processes as services evolve.',
          },
        ],
        channelsTitle: 'Available channels',
        channelsIntro:
          'Creatyv relies on official APIs to keep communication secure and reliable.',
        channels: [
          {
            name: 'WhatsApp',
            description: 'Receive requests and confirm visits with automated messages.',
          },
          {
            name: 'Facebook Messenger',
            description: 'Centralize questions and respond without losing context.',
          },
          {
            name: 'Instagram Direct',
            description: 'Turn social messages into qualified leads instantly.',
          },
          {
            name: 'Web chat',
            description: 'Capture customers from your site and direct next steps.',
          },
        ],
        contactTitle: 'Request a contractor demo',
        contactDescription:
          'See how Creatyv improves response speed and conversion for estimates.',
        contactCta: 'contact@creatyv.io',
      },
    },
    legal: {
      kicker: 'Creatyv',
      title: 'Legal and compliance',
      intro:
        'This page contains legal, privacy, and compliance information required by platforms and customers.',
      privacy: {
        title: 'Privacy Policy',
        body: [
          'This policy describes how Creatyv collects and uses information to operate its messaging platform.',
          'We only collect data needed to respond to messages, coordinate requests, and provide support.',
        ],
        list: [
          'Messages, attachments, and metadata from WhatsApp, Messenger, Instagram, and web chat connected to Creatyv.',
          'Contact details such as names, phone numbers, social profile identifiers, and email addresses.',
          'Request history, appointments, and confirmations when enabled by the business.',
        ],
      },
      dataUse: {
        title: 'Data usage',
        body: [
          'Collected information is used to:',
          'Creatyv does not sell or share data for advertising or unrelated services.',
        ],
        list: [
          'Send automated replies, reminders, and follow-ups configured by the business.',
          'Display conversations in the centralized inbox so teams can assist customers.',
          'Confirm requests and notify customers of changes.',
        ],
      },
      metaProcessing: {
        title: 'Meta platform processing',
        body: [
          'Creatyv processes conversations received from WhatsApp, Facebook Messenger, and Instagram Direct on behalf of the business.',
          'Official Meta-approved APIs are used to receive, store, and route messages securely.',
        ],
      },
      compliance: {
        title: 'Platform compliance',
        body: [
          'Creatyv follows the terms and policies of WhatsApp, Meta, and supported channels.',
          'Accounts and numbers remain owned and controlled by the business.',
        ],
      },
      retention: {
        title: 'Data handling and retention',
        body: [
          'Access to personal data is limited to authorized Creatyv staff.',
          'Information is transmitted with encryption and retained only as needed to operate the service or follow business instructions.',
        ],
      },
      terms: {
        title: 'Terms of Service',
        body: [
          'Creatyv provides software that automates communication across WhatsApp, Messenger, Instagram Direct, and web chat.',
          'The service does not act as a medical provider or professional services entity.',
        ],
      },
      responsibilities: {
        title: 'Customer responsibilities',
        body: [
          'Each business is responsible for message content, legal compliance, and proper use of the platform.',
        ],
      },
      thirdParty: {
        title: 'Third-party platforms',
        body: [
          'Message delivery depends on third-party services including WhatsApp Cloud API, Facebook Messenger, and Instagram Direct.',
          'Creatyv cannot guarantee delivery times when those services have interruptions or policy changes.',
        ],
      },
      liability: {
        title: 'Liability limitation',
        body: [
          'The service is provided "as is" and Creatyv is not liable for indirect or consequential damages.',
          'Total liability is limited to fees paid for the current service term.',
        ],
      },
      deletion: {
        title: 'User data deletion',
        body: [
          'Users can request data deletion by emailing contact@creatyv.io from the associated email or phone number.',
          'After verification, related data is deleted within a reasonable timeframe.',
        ],
      },
      contact: {
        title: 'Legal contact',
        body: [
          'For questions about privacy or terms, email contact@creatyv.io.',
        ],
      },
      disclosure: {
        title: 'Legal disclosure',
        body: [
          'Legal Entity: Jose Antonio Duran Herrera',
          'Business Type: Sole Proprietor',
          'Brand Name: Creatyv.io',
        ],
      },
    },
  },
};
