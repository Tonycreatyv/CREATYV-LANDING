import { ComponentType, useEffect, useMemo, useState } from 'react';
import Home from './pages/Home';
import DentalConnect from './pages/DentalConnect';
import Trial from './pages/Trial';
import Legal from './pages/Legal';
import Footer from './components/Footer';
import { copy } from './content/copy';
import { useLanguage } from './context/LanguageContext';
import { NavigationProvider } from './context/NavigationContext';

const routes: Record<string, ComponentType> = {
  '/': Home,
  '/dental': DentalConnect,
  '/trial': Trial,
  '/legal': Legal,
  '/privacy': Legal,
  '/terms': Legal,
  '/data-deletion': Legal,
};

const App = () => {
  const [path, setPath] = useState(window.location.pathname);
  const [hash, setHash] = useState(window.location.hash);
  const { language, setLanguage } = useLanguage();
  const labels = copy[language].navigation;

  // solo páginas “landing” donde se puede hacer scrollToSection sin redirigir
  const landingPaths = useMemo(() => new Set(['/', '/dental']), []);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
      setHash(window.location.hash);
    };
    const handleHashChange = () => setHash(window.location.hash);

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const goTo = (to: string, nextHash?: string, options?: { replace?: boolean }) => {
    const target = nextHash ? `${to}#${nextHash}` : to;
    const current = `${window.location.pathname}${window.location.hash}`;

    if (current !== target) {
      if (options?.replace) {
        window.history.replaceState({}, '', target);
      } else {
        window.history.pushState({}, '', target);
      }
      setPath(window.location.pathname);
      setHash(window.location.hash);
    }

    if (!nextHash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    if (!landingPaths.has(path)) {
      goTo('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (path === '/privacy') {
      goTo('/legal', 'privacy', { replace: true });
      return;
    }
    if (path === '/terms') {
      goTo('/legal', 'terms', { replace: true });
      return;
    }
    if (path === '/data-deletion') {
      goTo('/legal', 'deletion', { replace: true });
    }
  }, [path]);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  }, [hash, path]);

  const CurrentPage = routes[path] ?? Home;

  return (
    <NavigationProvider value={{ goTo, scrollToSection }}>
      <div className="min-h-screen bg-[#0f0f0f] text-white">
        <header className="px-6 py-4 border-b border-white/10 sticky top-0 bg-[#0f0f0f]/95 backdrop-blur z-10">
          <div className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <button
              type="button"
              onClick={() => goTo('/')}
              className="text-lg font-semibold tracking-[0.3em] uppercase text-white"
            >
              Creatyv
            </button>

            <nav className="flex flex-wrap items-center gap-4 text-xs tracking-[0.3em] uppercase text-white/80">
              <button type="button" onClick={() => goTo('/')} className="hover:text-white">
                {labels.home}
              </button>

              <button type="button" onClick={() => goTo('/dental')} className="hover:text-white">
                {labels.dental}
              </button>

              <button type="button" onClick={() => scrollToSection('what')} className="hover:text-white">
                {labels.what}
              </button>
              <button type="button" onClick={() => scrollToSection('how')} className="hover:text-white">
                {labels.how}
              </button>
              <button type="button" onClick={() => scrollToSection('channels')} className="hover:text-white">
                {labels.platforms}
              </button>
              <button type="button" onClick={() => scrollToSection('contact')} className="hover:text-white">
                {labels.contact}
              </button>

              <button type="button" onClick={() => goTo('/trial')} className="hover:text-white">
                Gratis 7 días
              </button>
            </nav>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/70">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={language === 'es' ? 'text-white' : 'text-white/40 hover:text-white/70'}
              >
                ES
              </button>
              <span className="text-white/30">/</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'text-white' : 'text-white/40 hover:text-white/70'}
              >
                EN
              </button>
            </div>
          </div>
        </header>

        <CurrentPage />
        <Footer />
      </div>
    </NavigationProvider>
  );
};

export default App;
