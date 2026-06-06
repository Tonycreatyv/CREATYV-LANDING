import type { ReactNode } from 'react';

const WA = 'https://wa.me/50495955594?text=Hola,%20quiero%20ver%20la%20demo%20de%20BarberLine';

function WaBtn({ label, first = false }: { label: string; first?: boolean }) {
  return (
    <div className={`flex items-center justify-center gap-1.5 px-3 py-[9px] ${first ? '' : 'border-t border-[#E9EDEF]'}`}>
      <svg className="w-3 h-3 text-[#027EB5] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
      <span className="text-[11px] font-semibold text-[#027EB5] leading-none">{label}</span>
    </div>
  );
}

function BotMsg({ children, time, btns }: { children: ReactNode; time: string; btns?: string[] }) {
  return (
    <div className="flex items-end max-w-[84%]">
      <div className="bg-white rounded-[3px_12px_12px_12px] overflow-hidden shadow-[0_1px_3px_rgba(11,20,26,0.12)]">
        <div className="px-3 py-2.5">
          <div className="text-[11.5px] text-[#111B21] leading-snug">{children}</div>
          <p className="text-[10px] text-[#667781] text-right mt-1">{time}</p>
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

function ClientMsg({ text, time }: { text: string; time: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-[#D9FDD3] rounded-[12px_3px_12px_12px] px-3 py-2.5 max-w-[70%] shadow-[0_1px_3px_rgba(11,20,26,0.12)]">
        <p className="text-[11.5px] text-[#111B21] leading-snug">{text}</p>
        <p className="text-[10px] text-[#667781] text-right mt-1">{time} <span className="text-[#53BDEB]">✓✓</span></p>
      </div>
    </div>
  );
}

const conversation: { type: 'bot' | 'client'; content?: string; node?: ReactNode; time: string; btns?: string[] }[] = [
  { type: 'client', content: 'Quiero agendar un corte', time: '10:45' },
  { type: 'bot',    node: <>Perfecto 💈 ¿Qué servicio querés?</>, time: '10:45', btns: ['Corte general','Barba','Corte + barba','Corte + facial'] },
  { type: 'client', content: 'Corte general', time: '10:45' },
  { type: 'bot',    node: <>Listo 💈 Escogé el día que te quede mejor.</>, time: '10:46', btns: ['Ver días disponibles'] },
  { type: 'client', content: 'Jueves, 4 de junio', time: '10:46' },
  { type: 'bot',    node: <>Estos son los horarios disponibles con <strong>Carlos</strong> 💈</>, time: '10:46', btns: ['9:00 AM','9:30 AM','10:00 AM'] },
  { type: 'client', content: '9:00 AM', time: '10:47' },
  {
    type: 'bot',
    time: '10:47',
    btns: ['Confirmar','Cambiar hora','Hablar con alguien'],
    node: (
      <div>
        <p className="font-bold mb-2">Perfecto 💈</p>
        <div className="space-y-0.5 text-[10.5px]">
          <div className="flex gap-1.5"><span className="text-[#8696A0] w-14 flex-shrink-0">Servicio</span><span>Corte general</span></div>
          <div className="flex gap-1.5"><span className="text-[#8696A0] w-14 flex-shrink-0">Barbero</span><span>Carlos</span></div>
          <div className="flex gap-1.5"><span className="text-[#8696A0] w-14 flex-shrink-0">Fecha</span><span>jue, 4 de junio</span></div>
          <div className="flex gap-1.5"><span className="text-[#8696A0] w-14 flex-shrink-0">Hora</span><span className="font-bold text-[#127363]">9:00 AM</span></div>
        </div>
        <p className="mt-2 text-[#667781]">¿Confirmamos?</p>
      </div>
    ),
  },
];

export default function BarberDemo() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#090807]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[280px] bg-[#25D366]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="bl-reveal text-center mb-14">
          <div className="bl-section-label mb-5 mx-auto inline-flex">Demo en vivo</div>
          <h2 className="bl-section-h2">
            Así se siente{' '}
            <span className="bl-text-gold-gradient">para tu cliente.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-[15px] max-w-sm mx-auto" style={{ color: '#6b6762' }}>
            Una conversación guiada paso a paso, directo en WhatsApp.
          </p>
        </div>

        {/* Phone */}
        <div className="bl-reveal mx-auto" style={{ width: 'min(340px, 90vw)' }}>
          <div className="rounded-[32px] overflow-hidden"
            style={{ background: '#1a1816', boxShadow: '0 32px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.07)', padding: '10px' }}>
            <div className="rounded-[24px] overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2.5 px-3 py-2.5" style={{ background: '#075E54' }}>
                <svg className="w-4 h-4 text-white/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
                <div className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center text-white text-[10px] font-black flex-shrink-0">BL</div>
                <div className="flex-1">
                  <p className="text-white text-[12px] font-bold">BarberLine</p>
                  <p className="text-white/65 text-[9px]">Barbería La Línea</p>
                </div>
              </div>

              {/* Chat */}
              <div className="px-2.5 py-3 space-y-2.5 overflow-y-auto bl-scrollbar-none"
                style={{
                  maxHeight: 'min(480px, 62vw)',
                  background: '#ECE5DD',
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='52' height='52' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B5A99A' fill-opacity='0.07'%3E%3Cpath d='M26 0l4 8-4 4-4-4zM0 26l8-4 4 4-4 4zM52 26l-8 4-4-4 4-4zM26 52l-4-8 4-4 4 4z'/%3E%3C/g%3E%3C/svg%3E\")",
                }}>
                <div className="flex justify-center mb-1">
                  <span className="text-[9.5px] text-[#667781] font-medium bg-white/70 rounded-full px-2.5 py-0.5">Hoy</span>
                </div>
                {conversation.map((msg, i) =>
                  msg.type === 'client'
                    ? <ClientMsg key={i} text={msg.content!} time={msg.time} />
                    : <BotMsg key={i} time={msg.time} btns={msg.btns}>{msg.node}</BotMsg>
                )}
              </div>

              {/* Input */}
              <div className="flex items-center gap-2 px-2.5 py-2" style={{ background: '#F0F2F5' }}>
                <div className="flex-1 bg-white rounded-full px-3.5 py-2 shadow-sm">
                  <p className="text-[10px] text-[#8696A0]">Escribe un mensaje...</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bl-reveal mt-10 text-center space-y-6">
          <p className="text-[13px]" style={{ color: '#514d48' }}>
            Botones guiados que llevan al cliente hasta la confirmación, sin que vos intervengas.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="bl-btn-outline inline-flex text-[14px]">
            Ver cómo funcionaría en mi barbería
          </a>
        </div>
      </div>
    </section>
  );
}
