import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const WA = 'https://wa.me/50495955594?text=Hola,%20quiero%20ver%20la%20demo%20de%20BarberLine';
const LOGIN = 'https://barberline.creatyv.io/login';

const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.26 5.26 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

export default function BarberNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Cómo funciona', href: '#bl-como-funciona' },
    { label: 'Precios',       href: '#bl-precios'        },
    { label: 'FAQ',           href: '#bl-faq'            },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090807]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-14 sm:h-[60px] flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[9px] sm:rounded-[10px] bg-[#131211] border border-white/[0.08] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
            <Scissors size={13} className="text-[#c9b490] rotate-45 transition-transform duration-300 group-hover:rotate-[35deg]" />
          </div>
          <div className="leading-none">
            <p className="font-black text-[#ece7e0] text-[14px] sm:text-[15px] tracking-[-0.01em]">BarberLine</p>
            <p className="text-[8px] sm:text-[9px] tracking-widest uppercase mt-px" style={{ color: '#6b6762' }}>by Creatyv</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-[13px] font-medium transition-colors duration-200"
              style={{ color: '#8c8780' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ece7e0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8c8780')}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a href={LOGIN}
            className="text-[13px] font-medium transition-colors duration-200"
            style={{ color: '#8c8780' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ece7e0')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8c8780')}>
            Iniciar sesión
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
            style={{
              background: 'linear-gradient(135deg,#1a9e52,#15803e)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '13px',
              padding: '8px 16px',
              borderRadius: '8px',
              boxShadow: '0 2px 12px rgba(26,158,82,0.22), inset 0 1px 0 rgba(255,255,255,0.12)',
              whiteSpace: 'nowrap',
              letterSpacing: '-0.01em',
              transition: 'all .2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(26,158,82,0.32), inset 0 1px 0 rgba(255,255,255,0.14)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(26,158,82,0.22), inset 0 1px 0 rgba(255,255,255,0.12)'; }}>
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d={WA_PATH}/></svg>
            Quiero mi demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#8c8780' }}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06] px-4 py-4"
          style={{ background: 'rgba(12,11,9,0.98)', backdropFilter: 'blur(20px)' }}>
          <nav className="space-y-0.5 mb-4">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className="flex items-center h-11 text-[14px] font-medium border-b border-white/[0.04] last:border-0 transition-colors"
                style={{ color: '#8c8780' }}
                onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={LOGIN}
              className="flex items-center h-11 text-[14px] font-medium border-b border-white/[0.04] last:border-0 transition-colors"
              style={{ color: '#8c8780' }}
              onClick={() => setOpen(false)}>
              Iniciar sesión
            </a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-bold"
            style={{ background: 'linear-gradient(135deg,#1a9e52,#15803e)', color: '#fff', boxShadow: '0 2px 12px rgba(26,158,82,0.22)' }}
            onClick={() => setOpen(false)}>
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d={WA_PATH}/></svg>
            Quiero mi demo
          </a>
        </div>
      )}
    </header>
  );
}
