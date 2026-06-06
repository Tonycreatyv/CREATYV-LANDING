const WA = 'https://wa.me/50495955594?text=Hola,%20quiero%20ver%20la%20demo%20de%20BarberLine';

const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.26 5.26 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

export default function BarberFinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#090807]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[260px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(26,158,82,0.07) 0%, transparent 70%)' }} />

      <div className="relative max-w-2xl mx-auto text-center">
        <div className="bl-reveal">
          <div className="w-14 h-14 rounded-2xl mx-auto mb-8 flex items-center justify-center"
            style={{ background: 'linear-gradient(145deg, #1e1c1a 0%, #161412 100%)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)' }}>
            <svg className="w-6 h-6" style={{ color: '#c9b490' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"/>
              <circle cx="6" cy="18" r="3"/>
              <line x1="20" y1="4" x2="8.12" y2="15.88"/>
              <line x1="14.47" y1="14.48" x2="20" y2="20"/>
              <line x1="8.12" y1="8.12" x2="12" y2="12"/>
            </svg>
          </div>

          <h2 className="bl-section-h2 mb-6" style={{ maxWidth: 560, margin: '0 auto 24px' }}>
            Dejá que WhatsApp trabaje{' '}
            <span className="bl-text-gold-gradient">mientras vos cortás.</span>
          </h2>

          <p className="text-sm sm:text-[15px] leading-[1.85] mb-10 max-w-lg mx-auto" style={{ color: '#8c8780' }}>
            Activá una demo de BarberLine para tu barbería y mirá cómo tus clientes pueden ver servicios, escoger horario y avanzar hacia una cita sin que tengas que responder cada mensaje manualmente.
          </p>

          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="bl-btn-primary inline-flex text-[15px] px-10 py-4">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d={WA_PATH}/></svg>
            Pedir demo por WhatsApp
          </a>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs" style={{ color: '#3e3b37' }}>
            {['Sin contratos ni compromisos', 'Demo disponible hoy', 'Configuración en 48h'].map(t => (
              <span key={t} className="flex items-center gap-2">
                <span className="w-[3px] h-[3px] rounded-full" style={{ background: '#3e3b37' }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
