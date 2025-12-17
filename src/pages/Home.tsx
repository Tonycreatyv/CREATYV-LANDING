const features = [
  {
    title: 'Automatic responses',
    description:
      'Creatyv answers new messages immediately with the correct information for your clinic or consultorio, even outside office hours.',
  },
  {
    title: 'Appointment coordination',
    description:
      'Patients can request time slots, receive confirmations, and get calendar updates without manual follow-up.',
  },
  {
    title: 'Reminder workflows',
    description:
      'Automated reminders reduce no-shows by notifying patients of upcoming visits through their preferred channel.',
  },
  {
    title: 'Customer follow-ups',
    description:
      'Structured follow-up messages keep treatments, check-ins, and service updates on schedule.',
  },
  {
    title: 'Centralized inbox',
    description:
      'Staff manage WhatsApp, Facebook Messenger, Instagram Direct, and web chat conversations in a single queue.',
  },
];

const steps = [
  {
    title: 'Connect messaging channels',
    description:
      'Creatyv links to WhatsApp via the official Cloud API, Facebook Messenger, Instagram Direct, and website chat widgets that you control.',
  },
  {
    title: 'Set up communication rules',
    description:
      'Teams define office hours, appointment templates, reminder frequency, and follow-up flows that Creatyv executes automatically.',
  },
  {
    title: 'Monitor and adjust',
    description:
      'Staff review the centralized inbox, handle escalated cases, and update workflows as service offerings evolve.',
  },
];

const channels = [
  {
    name: 'WhatsApp',
    description:
      'Official WhatsApp Cloud API integration sends automated replies, scheduling updates, and reminders with delivery tracking.',
  },
  {
    name: 'Facebook Messenger',
    description:
      'Messenger conversations are routed into the Creatyv inbox so staff can see context and respond from the same workspace.',
  },
  {
    name: 'Instagram Direct Messages',
    description:
      'Instagram inquiries are captured, acknowledged automatically, and assigned to the right team member when human input is needed.',
  },
  {
    name: 'Web chat',
    description:
      'Embedded web chat collects questions from the business website and keeps the conversation history with other channels.',
  },
];

const Home = () => {
  return (
    <main className="bg-[#0f0f0f] text-white">
      <section className="px-6 py-20 bg-[#131313]" id="hero">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Creatyv</p>
          <h1 className="text-4xl md:text-5xl font-semibold">
            Software that keeps patient and client conversations organized across messaging platforms.
          </h1>
          <p className="text-lg text-white/80">
            Creatyv automates replies, scheduling, reminders, and follow-ups for clinics, consultorios, and other
            service-based businesses. WhatsApp, Facebook Messenger, Instagram Direct, and website chat messages reach a
            single, secure inbox so teams can focus on care.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10" id="what">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium mb-6">What Creatyv Does</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-[#171717] rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10 bg-[#111111]" id="how">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium mb-6">How It Works</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col md:flex-row gap-4 p-6 bg-[#171717] rounded-xl border border-white/10">
                <div className="text-4xl font-semibold text-white/40 md:w-1/6">{index + 1}</div>
                <div className="md:flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10" id="channels">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium mb-6">Messaging Platforms</h2>
          <p className="text-white/80 mb-8">
            Creatyv uses official APIs and platform policies to automate communication while keeping staff in control.
            Each channel is configured with clear rules so patients and clients receive the right information.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {channels.map((channel) => (
              <div key={channel.name} className="p-6 bg-[#171717] rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-2">{channel.name}</h3>
                <p className="text-white/80">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10 bg-[#111111]" id="contact">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-medium">Contact</h2>
          <p className="text-white/70">
            For implementation details or account questions, reach the Creatyv team using the information below.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg font-semibold">
            <a href="mailto:contact@creatyv.io" className="text-white hover:text-white/80">
              contact@creatyv.io
            </a>
            <a href="tel:+12017373949" className="text-white hover:text-white/80">
              +1 (201) 737-3949
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
