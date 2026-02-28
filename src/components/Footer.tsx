import { copy } from '../content/copy';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';

const footerI18n = {
  es: {
    rights: 'Todos los derechos reservados.',
    contactLabel: 'Contacto:',
    talk: 'Hablar con Creatyv',
  },
  en: {
    rights: 'All rights reserved.',
    contactLabel: 'Contact:',
    talk: 'Talk to Creatyv',
  },
} as const;

const Footer = () => {
  const { language } = useLanguage();
  const { goTo } = useNavigation();
  const labels = copy[language].footer;
  const t = footerI18n[language];

  const openLeadWidget = () => {
    window.dispatchEvent(new Event('open-creatyv-widget'));
  };

  return (
    <footer className="px-6 py-8 border-t border-white/10 bg-[#0d0d0d] text-center text-white/60 text-sm">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-white/70">
          <button type="button" onClick={() => goTo('/legal', 'privacy')} className="hover:text-white">
            {labels.privacy}
          </button>
          <button type="button" onClick={() => goTo('/legal', 'terms')} className="hover:text-white">
            {labels.terms}
          </button>
          <button type="button" onClick={() => goTo('/legal')} className="hover:text-white">
            {labels.legal}
          </button>
        </div>

        <p className="text-white/75">
          {t.contactLabel}{' '}
          <a href="mailto:contact@creatyv.io" className="text-cyan-100 hover:text-white">
            contact@creatyv.io
          </a>
        </p>

        <button
          type="button"
          onClick={openLeadWidget}
          className="inline-flex rounded-xl border border-white/25 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 transition hover:border-cyan-100/45 hover:bg-cyan-200/12"
        >
          {t.talk}
        </button>

        <p>
          © {new Date().getFullYear()} Creatyv. {t.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
