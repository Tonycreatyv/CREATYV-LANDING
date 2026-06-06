import { User, Users, Scissors } from 'lucide-react';

const cases = [
  {
    icon: User,
    title: 'Barbero solo',
    desc: 'Si trabajás solo, BarberLine agenda directo contigo. No le pide al cliente escoger barbero.',
    detail: 'Perfecto para barberos independientes.',
    color: '#c9b490',
  },
  {
    icon: Users,
    title: 'Barbería con equipo',
    desc: 'Si tenés varios barberos, el cliente puede escoger uno o elegir cualquiera disponible.',
    detail: 'Ideal para barberías con 2 a 4 barberos.',
    color: '#25D366',
  },
  {
    icon: Scissors,
    title: 'Servicios adicionales',
    desc: 'Mostrá corte, barba, facial, combos o productos sin complicar el flujo.',
    detail: 'Se configura con tus servicios reales.',
    color: '#c9b490',
  },
];

export default function BarberClientExample() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#0c0b09]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <div className="bl-reveal text-center mb-14">
          <div className="bl-section-label mb-5 mx-auto inline-flex">Funciona para todos</div>
          <h2 className="bl-section-h2 mb-4">
            Un sistema guiado.{' '}
            <span className="bl-text-gold-gradient">Configurado con tu información.</span>
          </h2>
          <p className="text-sm sm:text-[15px] leading-relaxed max-w-lg mx-auto" style={{ color: '#6b6762' }}>
            BarberLine viene preparado para responder precios, mostrar servicios y guiar al cliente hasta una cita. Solo configuramos tus servicios, horarios y barberos.
          </p>
        </div>

        <div className="bl-reveal grid sm:grid-cols-3 gap-4">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="bl-card p-6 group cursor-default flex flex-col">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: `${c.color}10`, border: `1px solid ${c.color}22` }}>
                  <Icon size={20} style={{ color: c.color }} />
                </div>
                <h3 className="text-[#ece7e0] font-bold text-base mb-2.5 leading-snug">{c.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#6b6762' }}>{c.desc}</p>
                <div className="flex items-center gap-1.5 mt-5 pt-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                  <p className="text-[11px] font-medium" style={{ color: c.color }}>{c.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
