import { Scissors } from 'lucide-react';

const WA = 'https://wa.me/50495955594?text=Hola,%20quiero%20ver%20la%20demo%20de%20BarberLine';

const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.26 5.26 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

export default function BarberFooter() {
  const navLinks: [string, string][] = [
    ['Cómo funciona', '#bl-como-funciona'],
    ['Precios',       '#bl-precios'],
    ['FAQ',           '#bl-faq'],
    ['Contacto',      WA],
  ];

  return (
    <footer className="relative" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: '#090807' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-[9px] flex items-center justify-center"
              style={{ background: '#131211', border: '1px solid rgba(255,255,255,0.07)' }}>
              <Scissors size={13} className="rotate-45" style={{ color: '#c9b490' }} />
            </div>
            <div className="leading-none">
              <p className="font-black text-[#ece7e0] text-sm tracking-[-0.01em]">BarberLine</p>
              <p className="text-[9px] tracking-widest uppercase mt-px" style={{ color: '#3e3b37' }}>by Creatyv</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap items-center gap-6 text-xs justify-center" style={{ color: '#3e3b37' }}>
            {navLinks.map(([label, href]) => (
              <a key={href} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="transition-colors hover:text-[#8c8780]"
                style={{ color: '#3e3b37' }}>
                {label}
              </a>
            ))}
          </div>

          {/* WA link */}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs transition-colors"
            style={{ color: '#514d48' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#25D366')}
            onMouseLeave={e => (e.currentTarget.style.color = '#514d48')}>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d={WA_PATH}/></svg>
            Hablar por WhatsApp
          </a>
        </div>

        <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <p className="text-xs" style={{ color: '#2e2b28' }}>
            © 2025 Creatyv · BarberLine · Hecho en Honduras para América Latina
          </p>
        </div>
      </div>
    </footer>
  );
}
