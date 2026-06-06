const WA = 'https://wa.me/50495955594?text=Hola,%20quiero%20ver%20la%20demo%20de%20BarberLine';

const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.26 5.26 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const perks = [
  'Demo configurada con tus servicios y horarios reales',
  'Flujo de WhatsApp listo para probar con tus clientes',
  'Sin contratos ni compromisos',
  'Soporte directo durante la prueba',
];

export default function BarberPricing() {
  return (
    <section id="bl-precios" className="relative py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#090807]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[280px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(26,158,82,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-4xl mx-auto">
        <div className="bl-reveal text-center mb-14">
          <div className="bl-section-label mb-5 mx-auto inline-flex">Acceso piloto</div>
          <h2 className="bl-section-h2">
            Demo piloto{' '}
            <span className="bl-text-gold-gradient">para primeras barberías.</span>
          </h2>
        </div>

        <div className="bl-reveal max-w-2xl mx-auto">
          <div className="rounded-2xl p-8 sm:p-10 text-center mb-6"
            style={{
              background: 'linear-gradient(165deg, #181614 0%, #111010 100%)',
              border: '1px solid rgba(37,211,102,0.18)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(37,211,102,0.05), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}>
            <div className="h-[2px] w-24 mx-auto mb-8 rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #1a9e52, transparent)' }} />

            <p className="text-sm font-semibold mb-3" style={{ color: '#6b6762' }}>
              Estamos activando demos iniciales para barberías que quieran probar BarberLine
              con sus propios servicios, horarios y forma de trabajar.
            </p>

            <p className="text-[28px] sm:text-3xl font-black text-[#ece7e0] mb-1">
              Solicita tu demo
            </p>
            <p className="text-sm mb-8" style={{ color: '#6b6762' }}>
              Configurada con tu barbería real.
            </p>

            <ul className="text-left space-y-3 mb-10 max-w-sm mx-auto">
              {perks.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0 mt-px">
                    <svg className="w-2.5 h-2.5 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-sm leading-snug" style={{ color: '#8c8780' }}>{p}</span>
                </li>
              ))}
            </ul>

            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="bl-btn-primary inline-flex text-[15px] px-9 py-4 mx-auto">
              {WA_ICON}
              Quiero mi demo
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs"
              style={{ background: 'rgba(201,180,144,0.06)', border: '1px solid rgba(201,180,144,0.13)', color: '#6b6762' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9b490] bl-animate-pulse-soft" />
              Cupos limitados para el programa piloto.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
