import type { LandingContent } from '../content/copy';

type LandingPageProps = {
  content: LandingContent;
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
};

const LandingPage = ({ content, onPrimaryAction, onSecondaryAction }: LandingPageProps) => {
  return (
    <main className="bg-[#0f0f0f] text-white">
      <section className="px-6 py-20 bg-[#131313]" id="hero">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">{content.hero.kicker}</p>
          <h1 className="text-4xl md:text-5xl font-semibold">{content.hero.headline}</h1>
          <p className="text-lg text-white/80">{content.hero.subhead}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onPrimaryAction}
              className="px-6 py-3 bg-white text-[#0f0f0f] font-semibold uppercase tracking-[0.2em] text-xs"
            >
              {content.hero.primaryCta}
            </button>
            <button
              type="button"
              onClick={onSecondaryAction}
              className="px-6 py-3 border border-white/40 text-white font-semibold uppercase tracking-[0.2em] text-xs"
            >
              {content.hero.secondaryCta}
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10" id="what">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium mb-6">{content.featuresTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {content.features.map((feature) => (
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
          <h2 className="text-3xl font-medium mb-6">{content.stepsTitle}</h2>
          <div className="space-y-6">
            {content.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col md:flex-row gap-4 p-6 bg-[#171717] rounded-xl border border-white/10"
              >
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
          <h2 className="text-3xl font-medium mb-6">{content.channelsTitle}</h2>
          <p className="text-white/80 mb-8">{content.channelsIntro}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {content.channels.map((channel) => (
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
          <h2 className="text-3xl font-medium">{content.contactTitle}</h2>
          <p className="text-white/70">{content.contactDescription}</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg font-semibold">
            <a href={`mailto:${content.contactCta}`} className="text-white hover:text-white/80">
              {content.contactCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
