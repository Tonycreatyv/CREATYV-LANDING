const DataDeletion = () => {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 py-16">
      <section className="max-w-4xl mx-auto space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Creatyv</p>
          <h1 className="text-4xl font-semibold mt-2">User Data Deletion Instructions</h1>
        </div>

        <div className="space-y-4 text-white/80">
          <p>Creatyv allows users to request deletion of their personal data.</p>
          <p>
            To request deletion, please send an email to{' '}
            <a href="mailto:contact@creatyv.io" className="text-white underline">
              contact@creatyv.io
            </a>{' '}
            from the same email address or phone number associated with your account.
          </p>
          <p>
            After verification, all related data including messages, contact information, and appointment records will
            be permanently deleted within a reasonable timeframe.
          </p>
        </div>
      </section>
    </main>
  );
};

export default DataDeletion;
