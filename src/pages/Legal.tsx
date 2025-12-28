import { copy } from '../content/copy';
import { useLanguage } from '../context/LanguageContext';

const LegalSection = ({
  id,
  title,
  body,
  list,
}: {
  id?: string;
  title: string;
  body: string[];
  list?: string[];
}) => {
  return (
    <div className="space-y-4" id={id}>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {body.map((paragraph) => (
        <p key={paragraph} className="text-white/80">
          {paragraph}
        </p>
      ))}
      {list ? (
        <ul className="list-disc pl-6 text-white/80 space-y-2">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

const Legal = () => {
  const { language } = useLanguage();
  const content = copy[language].legal;

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 py-16">
      <section className="max-w-4xl mx-auto space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">{content.kicker}</p>
          <h1 className="text-4xl font-semibold mt-2">{content.title}</h1>
          <p className="text-white/70 mt-4">{content.intro}</p>
        </div>

        <LegalSection id="privacy" title={content.privacy.title} body={content.privacy.body} list={content.privacy.list} />
        <LegalSection id="data-use" title={content.dataUse.title} body={content.dataUse.body} list={content.dataUse.list} />
        <LegalSection
          id="meta-processing"
          title={content.metaProcessing.title}
          body={content.metaProcessing.body}
        />
        <LegalSection id="compliance" title={content.compliance.title} body={content.compliance.body} />
        <LegalSection id="retention" title={content.retention.title} body={content.retention.body} />

        <LegalSection id="terms" title={content.terms.title} body={content.terms.body} />
        <LegalSection
          id="responsibilities"
          title={content.responsibilities.title}
          body={content.responsibilities.body}
        />
        <LegalSection id="third-party" title={content.thirdParty.title} body={content.thirdParty.body} />
        <LegalSection id="liability" title={content.liability.title} body={content.liability.body} />

        <LegalSection id="deletion" title={content.deletion.title} body={content.deletion.body} />
        <LegalSection id="legal-contact" title={content.contact.title} body={content.contact.body} />
        <LegalSection id="disclosure" title={content.disclosure.title} body={content.disclosure.body} />
      </section>
    </main>
  );
};

export default Legal;
