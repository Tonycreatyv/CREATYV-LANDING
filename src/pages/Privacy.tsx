const Privacy = () => {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 py-16">
      <section className="max-w-4xl mx-auto space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Creatyv</p>
          <h1 className="text-4xl font-semibold mt-2">Privacy Policy</h1>
          <p className="text-white/70 mt-4">
            This Privacy Policy describes how Creatyv collects and uses information to provide automated messaging
            services for clinics, consultorios, and service-based teams.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Data We Collect</h2>
          <p className="text-white/80">
            Creatyv only collects information needed to deliver the platform&apos;s functionality:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>
              Messages, attachments, and metadata originating from WhatsApp, Facebook Messenger, Instagram Direct, and
              website chat widgets connected to Creatyv.
            </li>
            <li>Contact information such as names, phone numbers, social media profile identifiers, and email addresses.</li>
            <li>Appointment dates, times, and confirmation history when scheduling is enabled.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Use Data</h2>
          <p className="text-white/80">
            The collected information is processed strictly to:
          </p>
          <ul className="list-disc pl-6 text-white/80 space-y-2">
            <li>Deliver automatic responses, reminders, and follow-ups configured by the business.</li>
            <li>Display conversations inside the centralized inbox so authorized staff can assist customers.</li>
            <li>Send appointment updates and confirmations requested by customers.</li>
          </ul>
          <p className="text-white/80">
            Creatyv does not sell, rent, or share collected data with third parties for advertising or unrelated
            services.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Meta Platform Processing</h2>
          <p className="text-white/80">
            Creatyv processes conversations and user data received from WhatsApp, Facebook Messenger, Instagram Direct,
            and website chat on behalf of the business. These channels are provided by Meta platforms, and Creatyv uses
            only official Meta-approved APIs to receive, store, and route the messages so that staff can reply securely.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Platform Compliance</h2>
          <p className="text-white/80">
            Creatyv follows WhatsApp, Meta, and each supported messaging platform&apos;s terms and policies. Integrations
            rely on official APIs such as the WhatsApp Cloud API, and accounts remain fully owned and controlled by the
            business.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Handling and Retention</h2>
          <p className="text-white/80">
            Access to personal data is limited to authorized Creatyv staff who maintain the platform and fulfill support
            requests. Data is transmitted using encrypted channels, stored in secured infrastructure, and retained only
            for the time required to operate the service or comply with business instructions. Upon verified request,
            Creatyv deletes conversations, attachments, contact profiles, and appointment history associated with the
            requesting account.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-white/80">
            If you have questions about this Privacy Policy or how data is handled, you may contact us at{' '}
            <a href="mailto:contact@creatyv.io" className="text-white underline">
              contact@creatyv.io
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">User Data Deletion</h2>
          <p className="text-white/80">
            Users may request deletion of their data by following the instructions available at{' '}
            <a href="https://creatyv.io/data-deletion" className="text-white underline">
              https://creatyv.io/data-deletion
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
