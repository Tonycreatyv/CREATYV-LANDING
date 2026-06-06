import { X, Check } from 'lucide-react';

const before = [
  'Mensajes sueltos',
  'Clientes esperando',
  'Citas en la cabeza',
  'Interrupciones mientras cortás',
];

const after = [
  'Respuestas rápidas',
  'Servicios claros',
  'Horarios disponibles',
  'Citas más ordenadas',
];

export default function BarberBeforeAfter() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#090807]" />
      <div className="bl-sep absolute inset-x-0 top-0" />
      <div className="bl-sep absolute inset-x-0 bottom-0" />

      <div className="relative max-w-4xl mx-auto">
        <div className="bl-reveal text-center mb-12 sm:mb-16">
          <div className="bl-section-label mb-5 mx-auto inline-flex">Antes vs. ahora</div>
          <h2 className="bl-section-h2">
            Del WhatsApp desordenado{' '}
            <span className="bl-text-gold-gradient">a citas guiadas.</span>
          </h2>
        </div>

        <div className="bl-reveal grid md:grid-cols-2 gap-4 sm:gap-5 mb-6">
          {/* Before */}
          <div className="relative rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(165deg, #181414 0%, #111010 100%)', border: '1px solid rgba(239,68,68,0.12)', boxShadow: '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)' }}>
            <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, rgba(239,68,68,0.5), rgba(239,68,68,0.1))' }} />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.18)' }}>
                  <X size={14} className="text-red-400" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: '#514d48' }}>
                  Sin BarberLine
                </span>
              </div>
              <ul className="space-y-3">
                {before.map((t, i) => (
                  <li key={i} className="flex items-center gap-4 rounded-xl px-5 py-3.5"
                    style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.08)' }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(239,68,68,0.10)', border: '1px solid rgba(239,68,68,0.18)' }}>
                      <X size={11} className="text-red-400" />
                    </div>
                    <span className="text-[14px] font-medium" style={{ color: '#6b6762' }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(165deg, #131a15 0%, #0f1410 100%)', border: '1px solid rgba(37,211,102,0.14)', boxShadow: '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)' }}>
            <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, rgba(37,211,102,0.6), rgba(37,211,102,0.1))' }} />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.18)' }}>
                  <Check size={14} className="text-[#25D366]" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: '#c9b490' }}>
                  Con BarberLine
                </span>
              </div>
              <ul className="space-y-3">
                {after.map((t, i) => (
                  <li key={i} className="flex items-center gap-4 rounded-xl px-5 py-3.5"
                    style={{ background: 'rgba(37,211,102,0.04)', border: '1px solid rgba(37,211,102,0.09)' }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(37,211,102,0.10)', border: '1px solid rgba(37,211,102,0.20)' }}>
                      <Check size={11} className="text-[#25D366]" />
                    </div>
                    <span className="text-[14px] font-medium" style={{ color: '#ece7e0' }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bl-reveal text-center">
          <p className="text-[14px] sm:text-[15px] font-semibold" style={{ color: '#6b6762' }}>
            Menos interrupciones.{' '}
            <span style={{ color: '#8c8780' }}>Más orden.</span>{' '}
            <span style={{ color: '#c9b490' }}>Más oportunidades de cita.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
