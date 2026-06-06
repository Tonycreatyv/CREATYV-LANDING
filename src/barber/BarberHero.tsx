import React from 'react';

const WA = 'https://wa.me/50495955594?text=Hola,%20quiero%20ver%20la%20demo%20de%20BarberLine';

const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.26 5.26 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

/* ── WA interactive button ── */
function WaBtn({ label, first = false }: { label: string; first?: boolean }) {
  return (
    <div className={`bl-wa-btn-interactive${first ? '' : ' border-t border-[#E9EDEF]'}`}>
      <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
      <span>{label}</span>
    </div>
  );
}

/* ── Bot bubble ── */
function Recv({ children, time, btns }: { children: React.ReactNode; time: string; btns?: string[] }) {
  return (
    <div className="flex items-end max-w-[86%]">
      <div className="bl-wa-bubble-received flex-1">
        <div className="px-3 py-2.5">
          <div className="text-[11.5px] leading-snug text-[#111B21]">{children}</div>
          <p className="text-right text-[9.5px] mt-1" style={{ color: '#667781' }}>{time}</p>
        </div>
        {btns && (
          <div className="border-t border-[#E9EDEF]">
            {btns.map((b, i) => <WaBtn key={b} label={b} first={i === 0} />)}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Client bubble ── */
function Sent({ text, time }: { text: string; time: string }) {
  return (
    <div className="flex justify-end">
      <div className="bl-wa-bubble-sent px-3 py-2.5 max-w-[72%]">
        <p className="text-[11.5px] leading-snug text-[#111B21]">{text}</p>
        <p className="text-right text-[9.5px] mt-1" style={{ color: '#667781' }}>
          {time} <span style={{ color: '#53BDEB' }}>✓✓</span>
        </p>
      </div>
    </div>
  );
}

const MSGS = [
  { kind: 'sent', text: 'Quiero agendar un corte', time: '10:44' },
  { kind: 'recv', time: '10:44', btns: ['Corte general','Barba','Corte + barba','Corte + facial'],
    node: <>Perfecto 💈 ¿Qué servicio querés?</> },
  { kind: 'sent', text: 'Corte general', time: '10:45' },
  { kind: 'recv', time: '10:45', btns: ['Ver días disponibles'],
    node: <>Listo 💈 Escogé el día que te quede mejor.</> },
  { kind: 'sent', text: 'Jueves, 4 de junio', time: '10:46' },
  { kind: 'recv', time: '10:46', btns: ['9:00 AM','9:30 AM','10:00 AM'],
    node: <>Horarios con <strong>Carlos</strong> 💈</> },
  { kind: 'sent', text: '9:00 AM', time: '10:47' },
  { kind: 'recv', time: '10:47', btns: ['Confirmar','Cambiar hora','Hablar con alguien'],
    node: (
      <div>
        <p className="font-bold mb-1.5">Perfecto 💈</p>
        <div className="space-y-0.5 text-[10.5px]">
          {[['Servicio','Corte general'],['Barbero','Carlos'],['Fecha','jue, 4 de jun'],['Hora','9:00 AM']].map(([k,v]) => (
            <div key={k} className="flex gap-1.5">
              <span className="w-[52px] shrink-0" style={{ color: '#8696A0' }}>{k}</span>
              <span className={k==='Hora' ? 'font-bold' : ''} style={k==='Hora' ? { color: '#127363' } : {}}>{v}</span>
            </div>
          ))}
        </div>
        <p className="mt-1.5 text-[10.5px]" style={{ color: '#667781' }}>¿Confirmamos?</p>
      </div>
    ),
  },
] as const;

function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: 'min(304px, 88vw)' }}>
      <div className="absolute -top-14 -right-10 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,211,102,0.10) 0%,transparent 70%)' }} />
      <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(201,180,144,0.07) 0%,transparent 70%)' }} />

      <div className="bl-animate-float relative"
        style={{
          background: '#1a1816',
          borderRadius: 40,
          padding: 10,
          boxShadow: '0 40px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.09)',
        }}>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
          style={{ width: 64, height: 18, background: '#1a1816', borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }} />
        <div className="absolute left-[-2px] top-[88px] rounded-l" style={{ width: 3, height: 24, background: '#252220' }} />
        <div className="absolute left-[-2px] top-[120px] rounded-l" style={{ width: 3, height: 24, background: '#252220' }} />
        <div className="absolute right-[-2px] top-[106px] rounded-r" style={{ width: 3, height: 36, background: '#252220' }} />

        <div style={{ borderRadius: 32, overflow: 'hidden' }}>
          {/* WA header */}
          <div className="flex items-center gap-2 px-2.5 py-2" style={{ background: '#075E54' }}>
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.7)" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
            <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white font-black text-[11px]"
              style={{ background: 'linear-gradient(135deg,#1a9e52,#0d7a3e)' }}>BL</div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[12px] font-bold leading-tight truncate">BarberLine</p>
              <p className="text-[9px]" style={{ color: 'rgba(255,255,255,0.6)' }}>Barbería La Línea</p>
            </div>
            <div className="flex gap-3" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.362a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/>
              </svg>
            </div>
          </div>

          {/* Chat */}
          <div
            className="px-2.5 py-3 space-y-2.5 overflow-y-auto bl-scrollbar-none"
            style={{
              background: '#ECE5DD',
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='52' height='52' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B0A090' fill-opacity='0.06'%3E%3Cpath d='M26 0l4 8-4 4-4-4zM0 26l8-4 4 4-4 4zM52 26l-8 4-4-4 4-4zM26 52l-4-8 4-4 4 4z'/%3E%3C/g%3E%3C/svg%3E\")",
              height: 360,
            }}>
            <div className="flex justify-center mb-1">
              <span className="text-[10px] font-medium rounded-full px-3 py-0.5"
                style={{ background: 'rgba(255,255,255,0.72)', color: '#667781', boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}>
                Hoy
              </span>
            </div>
            {MSGS.map((m, i) =>
              m.kind === 'sent'
                ? <Sent key={i} text={(m as {text:string}).text} time={m.time} />
                : <Recv key={i} time={m.time} btns={(m as {btns?:string[]}).btns}>
                    {(m as {node:React.ReactNode}).node}
                  </Recv>
            )}
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 px-2.5 py-2" style={{ background: '#F0F2F5' }}>
            <div className="flex-1 rounded-full px-3.5 py-2" style={{ background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.07)' }}>
              <p className="text-[10.5px]" style={{ color: '#8696A0' }}>Escribe un mensaje...</p>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: '#25D366', boxShadow: '0 2px 8px rgba(37,211,102,0.25)' }}>
              <svg className="w-[14px] h-[14px] text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z"/>
              </svg>
            </div>
          </div>

          {/* Home bar */}
          <div className="flex justify-center py-1.5" style={{ background: '#F0F2F5' }}>
            <div className="w-20 h-[4px] rounded-full" style={{ background: 'rgba(0,0,0,0.14)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BarberHero() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 'calc(56px + 48px)', paddingBottom: 64 }}>
      <div className="absolute inset-0" style={{ background: '#090807' }} />
      <div className="bl-hero-ambient-warm" style={{ top: '-80px', right: '-60px' }} />
      <div className="bl-hero-ambient-cool" style={{ bottom: '-40px', left: '-40px' }} />
      <div className="bl-hero-grid" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 50%,transparent 30%,rgba(0,0,0,0.5) 100%)' }} />
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top,#090807,transparent)' }} />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-8">

        {/* ── MOBILE ── */}
        <div className="flex flex-col items-center gap-8 lg:hidden">
          <div className="w-full text-center space-y-5 max-w-[520px]">
            <div className="bl-section-label inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] bl-animate-pulse-soft" />
              Recepción automática para barberías
            </div>

            <h1 style={{ fontSize: 'clamp(30px, 7.5vw, 46px)', fontWeight: 900, lineHeight: 1.07, letterSpacing: '-0.025em', color: '#ece7e0' }}>
              Tu WhatsApp tomando citas{' '}
              <span className="bl-text-gold-gradient">mientras vos cortás.</span>
            </h1>

            <p style={{ fontSize: 'clamp(14px, 3.8vw, 17px)', lineHeight: 1.72, color: '#8c8780' }}>
              BarberLine responde servicios, precios y reservas por WhatsApp para que no perdás clientes mientras estás ocupado.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg,#1a9e52,#15803e)',
                  color: '#fff', fontWeight: 700, fontSize: 14,
                  padding: '12px 22px', borderRadius: 10,
                  boxShadow: '0 3px 16px rgba(26,158,82,0.28), inset 0 1px 0 rgba(255,255,255,0.12)',
                  whiteSpace: 'nowrap',
                }}>
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d={WA_PATH}/></svg>
                Quiero mi demo
              </a>
              <a href="#bl-como-funciona"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)',
                  color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: 14,
                  padding: '12px 20px', borderRadius: 10, whiteSpace: 'nowrap',
                }}>
                Ver cómo funciona
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                { dot: '#25D366', label: 'WhatsApp activo'      },
                { dot: '#c9b490', label: 'Responde al instante' },
                { dot: '#514d48', label: 'Sin descargar apps'   },
              ].map(p => (
                <span key={p.label}
                  className="flex items-center gap-1.5 rounded-full text-[11px] font-medium"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#6b6762', padding: '5px 12px' }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.dot }} />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          <PhoneMockup />
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden lg:grid grid-cols-[46%_54%] gap-12 xl:gap-16 items-center">
          <div className="space-y-7">
            <div className="bl-section-label inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] bl-animate-pulse-soft" />
              Recepción automática para barberías
            </div>

            <h1 style={{ fontSize: 'clamp(38px, 4.2vw, 56px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.025em', color: '#ece7e0' }}>
              Tu WhatsApp tomando citas{' '}
              <span className="bl-text-gold-gradient">mientras vos cortás.</span>
            </h1>

            <p style={{ fontSize: 16, lineHeight: 1.78, color: '#8c8780', maxWidth: 460 }}>
              BarberLine responde servicios, precios y reservas por WhatsApp para que no perdás clientes mientras estás ocupado.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="bl-btn-primary">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d={WA_PATH}/></svg>
                Quiero mi demo
              </a>
              <a href="#bl-como-funciona" className="bl-btn-outline">Ver cómo funciona</a>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { dot: '#25D366', label: 'WhatsApp activo'      },
                { dot: '#c9b490', label: 'Responde al instante' },
                { dot: '#514d48', label: 'Sin descargar apps'   },
              ].map(p => (
                <span key={p.label}
                  className="flex items-center gap-2 rounded-full text-[11px] font-medium"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#6b6762', padding: '5px 14px' }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.dot }} />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center xl:justify-end">
            <PhoneMockup />
          </div>
        </div>

      </div>
    </section>
  );
}
