import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: '¿Necesito una página web?',
    a: 'No. BarberLine funciona principalmente por WhatsApp. Tus clientes siguen escribiéndote como siempre.',
  },
  {
    q: '¿Funciona si trabajo solo?',
    a: 'Sí. Si sos el único barbero, el sistema agenda directamente contigo según tu disponibilidad.',
  },
  {
    q: '¿Funciona si tengo varios barberos?',
    a: 'Sí. Puede configurarse para varios barberos, cada uno con sus propios horarios.',
  },
  {
    q: '¿Puede responder por texto o solo botones?',
    a: 'Puede conversar por texto, pero usa botones y listas cuando hay que escoger servicio, día u hora. Esto evita errores y hace el agendado más claro para el cliente.',
  },
  {
    q: '¿El cliente puede hablar conmigo directamente?',
    a: "Sí. Si el cliente toca 'Hablar con alguien', el sistema se detiene automáticamente y vos tomás la conversación.",
  },
  {
    q: '¿Cuánto tiempo tarda la configuración?',
    a: 'La mayoría de barberías quedan activas en menos de 48 horas desde que nos pasás la información.',
  },
];

export default function BarberFAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="bl-faq" className="relative py-16 sm:py-24 px-4 sm:px-8">
      <div className="absolute inset-0 bg-[#0c0b09]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative max-w-3xl mx-auto">
        <div className="bl-reveal text-center mb-14">
          <div className="bl-section-label mb-5 mx-auto inline-flex">Preguntas frecuentes</div>
          <h2 className="bl-section-h2">
            Resolvemos tus <span className="bl-text-gold-gradient">dudas.</span>
          </h2>
        </div>

        <div className="bl-reveal space-y-2.5">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: active === i ? 'linear-gradient(145deg, #181614 0%, #131110 100%)' : 'linear-gradient(145deg, #141210 0%, #101010 100%)',
                border: active === i ? '1px solid rgba(201,180,144,0.16)' : '1px solid rgba(255,255,255,0.06)',
                boxShadow: active === i ? '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)' : 'none',
              }}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setActive(active === i ? null : i)}>
                <span className="text-sm font-semibold leading-snug transition-colors"
                  style={{ color: active === i ? '#ece7e0' : '#8c8780' }}>
                  {f.q}
                </span>
                <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
                  style={active === i
                    ? { background: 'rgba(201,180,144,0.10)', border: '1px solid rgba(201,180,144,0.22)' }
                    : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
                  {active === i
                    ? <Minus size={12} style={{ color: '#c9b490' }} />
                    : <Plus size={12} style={{ color: '#514d48' }} />}
                </div>
              </button>
              {active === i && (
                <div className="px-6 pb-6">
                  <div className="h-px mb-4" style={{ background: 'rgba(255,255,255,0.05)' }} />
                  <p className="text-sm leading-[1.8]" style={{ color: '#6b6762' }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
