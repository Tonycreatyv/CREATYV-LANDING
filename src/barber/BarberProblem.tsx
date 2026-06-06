const WA_ICON_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.26 5.26 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

const notifications = [
  { msg: '¿Cuánto vale el corte?',  ago: 'ahora'  },
  { msg: '¿Tenés espacio hoy?',      ago: '1 min'  },
  { msg: '¿Hacés barba?',            ago: '2 min'  },
  { msg: '¿Dónde queda?',            ago: '3 min'  },
  { msg: '¿Vendés productos?',       ago: '5 min'  },
];

export default function BarberProblem() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0" style={{ background: '#0c0b09' }} />
      <div className="bl-sep absolute inset-x-0 top-0" />
      <div className="bl-sep absolute inset-x-0 bottom-0" />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Copy */}
          <div className="bl-reveal order-2 lg:order-1">
            <div className="bl-section-label mb-5">El problema</div>

            <h2 className="bl-section-h2 mb-5">
              Mientras cortás,{' '}
              <span className="bl-text-gold-gradient">los mensajes siguen llegando.</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] leading-[1.85] mb-8" style={{ color: '#8c8780', maxWidth: 440 }}>
              Cada mensaje sin respuesta es una posible cita perdida. BarberLine los atiende por vos y guía al cliente hacia una reserva, mientras vos seguís trabajando.
            </p>

            <div className="rounded-2xl p-5 flex gap-4 items-start"
              style={{ background: 'rgba(37,211,102,0.055)', border: '1px solid rgba(37,211,102,0.13)' }}>
              <div className="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center mt-0.5"
                style={{ background: '#25D366', boxShadow: '0 4px 12px rgba(37,211,102,0.25)' }}>
                <svg className="w-[18px] h-[18px] text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d={WA_ICON_PATH} />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#ece7e0] mb-1 leading-snug">
                  BarberLine responde por vos, al instante.
                </p>
                <p className="text-[12px] leading-relaxed" style={{ color: '#6b6762' }}>
                  Muestra servicios, precios y guía al cliente a agendar. Todo sin que levantes el dedo.
                </p>
              </div>
            </div>
          </div>

          {/* Notification stack */}
          <div className="bl-reveal order-1 lg:order-2 w-full max-w-[340px] mx-auto lg:mx-0 lg:max-w-none">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase" style={{ color: '#3e3b37' }}>
                Notificaciones WhatsApp
              </span>
              <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
            </div>

            <div className="space-y-2.5">
              {notifications.map((n, i) => (
                <div key={i} className="flex items-center gap-3 rounded-[18px] px-4 py-3"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: `0 ${4 + i * 2}px ${16 + i * 4}px rgba(0,0,0,${0.22 - i * 0.02})`,
                    transform: `scale(${1 - i * 0.006})`,
                    transformOrigin: 'center',
                    opacity: 1 - i * 0.06,
                    border: '1px solid rgba(0,0,0,0.05)',
                  }}>
                  <div className="w-10 h-10 rounded-[11px] shrink-0 flex items-center justify-center"
                    style={{ background: '#25D366' }}>
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d={WA_ICON_PATH} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 mb-0.5">
                      <span className="text-[12px] font-semibold" style={{ color: '#1C1C1E' }}>WhatsApp</span>
                      <span className="text-[10.5px] shrink-0" style={{ color: '#8E8E93' }}>{n.ago}</span>
                    </div>
                    <p className="text-[11.5px] truncate" style={{ color: '#48484A' }}>
                      Cliente: <span style={{ color: '#3C3C43' }}>{n.msg}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
              <span className="text-[10.5px]" style={{ color: '#3e3b37' }}>
                Sin respuesta mientras cortás
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
