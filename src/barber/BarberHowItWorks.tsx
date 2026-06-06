import { MessageSquare, Zap, CalendarDays, CheckCircle2, PhoneCall } from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: MessageSquare,
    title: 'El cliente escribe',
    desc: 'Por WhatsApp, como siempre. Sin instalar nada.',
    color: '#25D366',
    wa: true,
  },
  {
    n: '02',
    icon: Zap,
    title: 'BarberLine responde',
    desc: 'Servicios, precios y disponibilidad al instante.',
    color: '#c9b490',
    wa: false,
  },
  {
    n: '03',
    icon: CalendarDays,
    title: 'Cliente escoge',
    desc: 'Servicio, día, hora y barbero. Con botones guiados.',
    color: '#c9b490',
    wa: false,
  },
  {
    n: '04',
    icon: CheckCircle2,
    title: 'Cita confirmada',
    desc: 'El cliente recibe confirmación. Vos ves la cita.',
    color: '#25D366',
    wa: true,
  },
  {
    n: '05',
    icon: PhoneCall,
    title: 'Habla si quiere',
    desc: "Si toca 'Hablar', el sistema se detiene. Vos respondés.",
    color: '#c9b490',
    wa: false,
  },
];

const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.26 5.26 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

function Arrow() {
  return (
    <div className="hidden lg:flex items-center shrink-0 w-8 justify-center">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.12)" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
    </div>
  );
}

export default function BarberHowItWorks() {
  return (
    <section id="bl-como-funciona" className="relative py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0" style={{ background: '#090807' }} />
      <div className="bl-sep absolute inset-x-0 top-0" />
      <div className="bl-sep absolute inset-x-0 bottom-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(201,180,144,0.04) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto">
        <div className="bl-reveal text-center mb-10 sm:mb-14">
          <div className="bl-section-label mb-5 mx-auto inline-flex">Cómo funciona</div>
          <h2 className="bl-section-h2">
            De mensaje a cita,{' '}
            <span className="bl-text-gold-gradient">sin complicarte.</span>
          </h2>
        </div>

        <div className="bl-reveal">
          {/* Desktop: horizontal */}
          <div className="hidden lg:flex items-start justify-between gap-0">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-start">
                  <div className="flex flex-col items-center text-center flex-1 min-w-0 px-1">
                    <div className="text-[9px] font-black tracking-[0.14em] mb-3 px-2 py-1 rounded-full"
                      style={{ color: s.color, background: `${s.color}10`, border: `1px solid ${s.color}22` }}>
                      {s.n}
                    </div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative"
                      style={{ background: 'linear-gradient(145deg, #1e1c1a, #131110)', border: `1px solid ${s.color}28`, boxShadow: '0 4px 20px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)' }}>
                      <Icon size={22} style={{ color: s.color }} />
                      {s.wa && (
                        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ background: '#25D366', boxShadow: '0 2px 8px rgba(37,211,102,0.4)' }}>
                          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d={WA_PATH}/></svg>
                        </span>
                      )}
                    </div>
                    <h3 className="text-[13.5px] font-bold text-[#ece7e0] mb-1.5 leading-snug">{s.title}</h3>
                    <p className="text-[12px] leading-relaxed" style={{ color: '#8c8780' }}>{s.desc}</p>
                  </div>
                  {i < steps.length - 1 && <Arrow />}
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical */}
          <div className="lg:hidden space-y-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex gap-4 items-start p-4 rounded-2xl"
                  style={{ background: 'linear-gradient(145deg, #161412, #111010)', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)' }}>
                  <div className="shrink-0 flex flex-col items-center gap-1.5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center relative"
                      style={{ background: `${s.color}0f`, border: `1px solid ${s.color}25` }}>
                      <Icon size={19} style={{ color: s.color }} />
                    </div>
                    <span className="text-[9px] font-black" style={{ color: `${s.color}70` }}>{s.n}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-[13.5px] font-bold text-[#ece7e0] mb-1 leading-snug">{s.title}</h3>
                    <p className="text-[12px] leading-relaxed" style={{ color: '#8c8780' }}>{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
