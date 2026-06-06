import { BellOff, Zap, CalendarCheck, UserCheck, MessageSquare } from 'lucide-react';

const benefits = [
  {
    icon: BellOff,
    title: 'Menos interrupciones mientras cortás',
    desc: 'BarberLine atiende los mensajes entrantes. Vos seguís con el cliente en la silla.',
    accent: '#c9b490',
  },
  {
    icon: Zap,
    title: 'Respuestas al instante',
    desc: 'Cada mensaje recibe respuesta en segundos, no en horas.',
    accent: '#25D366',
  },
  {
    icon: CalendarCheck,
    title: 'Citas más organizadas',
    desc: 'El cliente guía solo la cita. Vos recibís confirmación limpia.',
    accent: '#c9b490',
  },
  {
    icon: UserCheck,
    title: 'Menos clientes perdidos',
    desc: 'Un mensaje sin responder puede ser una cita que se fue.',
    accent: '#25D366',
  },
  {
    icon: MessageSquare,
    title: 'Todo desde WhatsApp',
    desc: 'Tu cliente no necesita app ni link. Solo escribe como siempre.',
    accent: '#25D366',
  },
];

export default function BarberBenefits() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8">
      <div className="absolute inset-0" style={{ background: '#0c0b09' }} />
      <div className="bl-sep absolute inset-x-0 top-0" />
      <div className="bl-sep absolute inset-x-0 bottom-0" />

      <div className="relative max-w-5xl mx-auto">
        <div className="bl-reveal text-center mb-14">
          <div className="bl-section-label mb-5 mx-auto inline-flex">Beneficios</div>
          <h2 className="bl-section-h2">
            Lo que cambia{' '}
            <span className="bl-text-gold-gradient">cuando tenés BarberLine.</span>
          </h2>
        </div>

        <div className="bl-reveal">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {benefits.slice(0, 2).map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="bl-card p-7 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${b.accent}0e`, border: `1px solid ${b.accent}25`, boxShadow: `0 4px 16px ${b.accent}10` }}>
                    <Icon size={22} style={{ color: b.accent }} />
                  </div>
                  <h3 className="text-[#ece7e0] font-bold text-[16px] mb-2 leading-snug group-hover:text-white transition-colors">{b.title}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: '#8c8780' }}>{b.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {benefits.slice(2).map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="bl-card p-6 group cursor-default">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${b.accent}0e`, border: `1px solid ${b.accent}25` }}>
                    <Icon size={20} style={{ color: b.accent }} />
                  </div>
                  <h3 className="text-[#ece7e0] font-bold text-[14.5px] mb-2 leading-snug group-hover:text-white transition-colors">{b.title}</h3>
                  <p className="text-[12.5px] leading-relaxed" style={{ color: '#8c8780' }}>{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
