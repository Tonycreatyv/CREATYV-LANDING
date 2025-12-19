import { ComponentType, useEffect, useState } from 'react';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import DataDeletion from './pages/DataDeletion';

const routes: Record<string, ComponentType> = {
  '/': Home,
  '/privacy': Privacy,
  '/terms': Terms,
  '/data-deletion': DataDeletion,
};

const App = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const goTo = (to: string) => {
    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to);
      setPath(to);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    if (path !== '/') {
      goTo('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const CurrentPage = routes[path] ?? Home;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <header className="px-6 py-4 border-b border-white/10 sticky top-0 bg-[#0f0f0f]/95 backdrop-blur">
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
              Home
            </button>
            <button type="button" onClick={() => scrollToSection('what')} className="hover:text-white">
              What
            </button>
            <button type="button" onClick={() => scrollToSection('how')} className="hover:text-white">
              How
            </button>
            <button type="button" onClick={() => scrollToSection('channels')} className="hover:text-white">
              Platforms
            </button>
            <button type="button" onClick={() => scrollToSection('contact')} className="hover:text-white">
              Contact
            </button>
            <button type="button" onClick={() => goTo('/privacy')} className="hover:text-white">
              Privacy
            </button>
            <button type="button" onClick={() => goTo('/terms')} className="hover:text-white">
              Terms
            </button>
          </nav>
        </div>
      </header>
      <CurrentPage />
      <footer className="px-6 py-8 border-t border-white/10 bg-[#0d0d0d] text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Creatyv. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
