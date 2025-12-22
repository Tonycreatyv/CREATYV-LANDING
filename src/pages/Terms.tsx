const Terms = () => {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 py-16">
      <section className="max-w-4xl mx-auto space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Creatyv</p>
          <h1 className="text-4xl font-semibold mt-2">Terms of Service</h1>
          <p className="text-white/70 mt-4">
            These Terms govern the use of the Creatyv software platform. By accessing Creatyv, you agree to the
            conditions below.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Service Description</h2>
          <p className="text-white/80">
            Creatyv provides software that automates customer communication across WhatsApp, Facebook Messenger,
            Instagram Direct Messages, and web chat. The platform offers tools for automatic responses, appointment
            scheduling, reminders, and centralized inbox management. Creatyv does not act as a clinic, consultorio, or
            healthcare provider.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Customer Responsibilities</h2>
          <p className="text-white/80">
            Businesses are responsible for the accuracy of message content, compliance with medical or professional
            obligations, and ensuring that their use of Creatyv follows all applicable laws and platform policies.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Third-Party Platforms</h2>
          <p className="text-white/80">
            Message delivery depends on third-party services including the WhatsApp Cloud API, Facebook Messenger, and
            Instagram Direct. Creatyv cannot guarantee delivery times or availability when those services experience
            interruptions or policy changes.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Liability</h2>
          <p className="text-white/80">
            Creatyv is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, Creatyv and its
            affiliates are not liable for any indirect, incidental, or consequential damages arising from the use of the
            platform. Total liability is limited to the fees paid for the current service term.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-white/80">
            Questions regarding these Terms can be directed to{' '}
            <a href="mailto:contact@creatyv.io" className="text-white underline">
              contact@creatyv.io
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Legal Disclosure</h2>
          <p className="text-white/80">Legal Entity: José Antonio Duran Herrera</p>
          <p className="text-white/80">Business Type: Sole Proprietor</p>
          <p className="text-white/80">Brand Name: Creatyv.io</p>
        </div>
      </section>
    </main>
  );
};

export default Terms;
