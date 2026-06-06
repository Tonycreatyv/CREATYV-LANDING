const items = [
  {
    text: 'Un mensaje sin respuesta puede convertirse en una cita perdida.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
  },
  {
    text: 'El cliente que no recibe respuesta no siempre espera.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    text: 'Mientras vos seguís cortando, otro barbero puede estar respondiendo.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    ),
  },
];

export default function BarberConsequence() {
  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0" style={{ background: '#0c0b09' }} />
      <div className="bl-sep absolute inset-x-0 top-0" />
      <div className="bl-sep absolute inset-x-0 bottom-0" />

      <div className="relative max-w-4xl mx-auto">
        <div className="bl-reveal grid sm:grid-cols-3 gap-3 sm:gap-4">
          {items.map((c, i) => (
            <div key={i} className="bl-card-static rounded-2xl px-5 py-6 flex flex-col gap-4"
              style={{ borderColor: 'rgba(239,68,68,0.09)' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.14)', color: '#f87171' }}>
                {c.icon}
              </div>
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed font-medium" style={{ color: '#8c8780' }}>
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
