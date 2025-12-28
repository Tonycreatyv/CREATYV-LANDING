import { copy } from '../content/copy';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';

const Footer = () => {
  const { language } = useLanguage();
  const { goTo } = useNavigation();
  const labels = copy[language].footer;

  return (
    <footer className="px-6 py-8 border-t border-white/10 bg-[#0d0d0d] text-center text-white/60 text-sm">
      <div className="max-w-6xl mx-auto space-y-3">
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
        <p>© {new Date().getFullYear()} Creatyv. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
