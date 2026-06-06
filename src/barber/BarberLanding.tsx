/**
 * BarberLanding — main entry point for the /barber route on creatyv.io
 *
 * Usage in your router:
 *   import BarberLanding from '@/barber/BarberLanding';
 *   // React Router v6:
 *   <Route path="/barber" element={<BarberLanding />} />
 *
 * Required peer deps (already in package.json if using this project):
 *   lucide-react, tailwindcss
 */
import { useEffect } from 'react';
import './barber.css';

import BarberNavbar       from './BarberNavbar';
import BarberHero         from './BarberHero';
import BarberProblem      from './BarberProblem';
import BarberConsequence  from './BarberConsequence';
import BarberHowItWorks   from './BarberHowItWorks';
import BarberBeforeAfter  from './BarberBeforeAfter';
import BarberDemo         from './BarberDemo';
import BarberBenefits     from './BarberBenefits';
import BarberClientExample from './BarberClientExample';
import BarberEasySetup    from './BarberEasySetup';
import BarberPricing      from './BarberPricing';
import BarberFAQ          from './BarberFAQ';
import BarberFinalCTA     from './BarberFinalCTA';
import BarberFooter       from './BarberFooter';

export default function BarberLanding() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('bl-visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll('.barber-page .bl-reveal')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="barber-page min-h-screen overflow-x-hidden"
      style={{
        background: '#090807',
        color: '#ece7e0',
        fontFamily: "'Inter', system-ui, sans-serif",
        WebkitFontSmoothing: 'antialiased',
        scrollBehavior: 'smooth',
      }}
    >
      <BarberNavbar />
      <main>
        <BarberHero />
        <BarberProblem />
        <BarberConsequence />
        <BarberHowItWorks />
        <BarberBeforeAfter />
        <BarberDemo />
        <BarberBenefits />
        <BarberClientExample />
        <BarberEasySetup />
        <BarberPricing />
        <BarberFAQ />
        <BarberFinalCTA />
      </main>
      <BarberFooter />
    </div>
  );
}
