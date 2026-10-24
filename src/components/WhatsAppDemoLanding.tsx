import { CalendarDays, Check, ChevronRight, MessageCircle, ShoppingBag, Stethoscope, Waves } from 'lucide-react';

const demoCalendar = [
  { day: '20', muted: true },
  { day: '21', muted: true },
  { day: '22', muted: true },
  { day: '23', muted: true },
  { day: '24', active: true },
  { day: '25' },
  { day: '26' },
  { day: '27' },
  { day: '28' },
  { day: '29' },
  { day: '30' },
  { day: '31' },
  { day: '1' },
  { day: '2' },
];

const examples = [
  {
    title: 'Clínicas y salud',
    copy: 'Citas, recordatorios y seguimiento de pacientes.',
    prompt: 'Quiero una cita esta semana.',
    icon: Stethoscope,
    background: 'from-stone-100 to-stone-200',
  },
  {
    title: 'Turismo y experiencias',
    copy: 'Consultas, disponibilidad y reservas en WhatsApp.',
    prompt: 'Quiero un tour para 4 este sábado.',
    icon: Waves,
    background: 'from-cyan-50 to-teal-100',
  },
  {
    title: 'Comercio y servicios',
    copy: 'Información, cotizaciones y seguimiento automático.',
    prompt: '¿Cuánto cuesta este producto?',
    icon: ShoppingBag,
    background: 'from-amber-50 to-orange-100',
  },
];

const WhatsAppDemoLanding = () => {
  const scrollToDemo = () => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#111820]">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[#f7f5f0]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left">
            <div className="text-xl font-semibold tracking-[0.28em]">CREATY<span className="text-[#0a9ca3]">V</span></div>
            <div className="mt-0.5 text-[9px] tracking-[0.4em] text-black/45">TECHNOLOGIES</div>
          </button>

          <nav className="hidden items-center gap-8 text-sm text-black/65 md:flex">
            <a href="#como-funciona" className="transition hover:text-black">Cómo funciona</a>
            <a href="#ejemplos" className="transition hover:text-black">Ejemplos</a>
            <a href="#contacto" className="transition hover:text-black">Contacto</a>
          </nav>

          <button
            type="button"
            onClick={scrollToDemo}
            className="rounded-full bg-[#111820] px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-black"
          >
            Ver demo
          </button>
        </div>
      </header>

      <main>
        <section id="demo" className="overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
            <div className="max-w-xl">
              <div className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-black/45">
                Conversaciones que generan resultados
              </div>
              <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
                Tu WhatsApp
                <br />
                puede hacer más.
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-black/62 md:text-xl">
                Tus clientes escriben como siempre. Creatyv entiende la conversación y, cuando hace falta,
                los lleva a una cita, reserva o cotización sin sacarlos de WhatsApp.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToDemo}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0b6f73] px-6 py-3.5 font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#095f63]"
                >
                  <MessageCircle size={19} />
                  Probar demo por WhatsApp
                  <ChevronRight size={18} />
                </button>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center rounded-full border border-black/12 bg-white/60 px-6 py-3.5 font-medium text-black/75 transition hover:bg-white"
                >
                  Ver cómo funciona
                </a>
              </div>
              <p className="mt-4 text-sm text-black/42">Demo simulada con datos de prueba. Sin instalar nada.</p>
            </div>

            <div className="relative mx-auto w-full max-w-[650px]">
              <div className="absolute inset-10 -z-0 rounded-[80px] bg-[#dbeae7] blur-3xl" />
              <div className="relative z-10 grid items-end gap-4 sm:grid-cols-[0.92fr_1.08fr]">
                <div className="mx-auto w-full max-w-[300px] rounded-[38px] border-[8px] border-[#17191b] bg-[#f4efe6] p-3 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-black/5 pb-3 text-[11px]">
                    <span className="font-semibold">Creatyv Demo</span>
                    <span className="text-black/45">en línea</span>
                  </div>
                  <div className="space-y-3 py-5 text-[12px] leading-5">
                    <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-sm bg-[#d7f7cb] px-3 py-2.5">
                      Hola, quiero una cita dental esta semana.
                    </div>
                    <div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 shadow-sm">
                      Perfecto. Puedo ayudarte a agendarla. ¿Querés ver los horarios disponibles?
                    </div>
                    <button type="button" className="flex w-full items-center gap-2 rounded-xl border border-black/8 bg-white px-3 py-3 text-left font-medium text-[#1267d6] shadow-sm">
                      <CalendarDays size={16} /> Agendar una cita
                    </button>
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-[11px] text-black/30">Mensaje</div>
                </div>

                <div className="rounded-[26px] border border-black/8 bg-white p-5 shadow-2xl sm:-ml-5 sm:mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-black/40">Flow de WhatsApp</div>
                      <div className="mt-1 font-semibold">Agendar una cita</div>
                    </div>
                    <div className="rounded-full bg-[#e8f4f2] p-2 text-[#0b777b]"><CalendarDays size={18} /></div>
                  </div>

                  <div className="mt-5 text-sm font-medium">Selecciona una fecha</div>
                  <div className="mt-1 text-xs text-black/45">Octubre 2026</div>
                  <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[10px] text-black/40">
                    {['L','M','M','J','V','S','D'].map((d, i) => <div key={`${d}-${i}`}>{d}</div>)}
                    {demoCalendar.map((item, index) => (
                      <div
                        key={`${item.day}-${index}`}
                        className={`rounded-lg py-2 ${item.active ? 'bg-[#0a9ca3] font-semibold text-white' : item.muted ? 'text-black/20' : 'text-black/65'}`}
                      >
                        {item.day}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 text-sm font-medium">Horarios disponibles</div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                    {['9:00 a.m.','10:00 a.m.','11:00 a.m.','2:00 p.m.','3:00 p.m.','4:00 p.m.'].map((time, i) => (
                      <button key={time} type="button" className={`rounded-xl border px-2 py-2 ${i === 1 ? 'border-[#0a9ca3] bg-[#eaf8f7] text-[#08757a]' : 'border-black/8 text-black/65'}`}>
                        {time}
                      </button>
                    ))}
                  </div>
                  <button type="button" className="mt-5 w-full rounded-xl bg-[#0a9ca3] py-3 text-sm font-semibold text-white">Continuar</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-y border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="max-w-2xl">
              <div className="text-xs font-medium uppercase tracking-[0.28em] text-black/40">Así funciona</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] md:text-5xl">De una conversación a una acción real.</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                ['01', 'Conversación libre', 'Tus clientes escriben como siempre, con sus propias palabras.'],
                ['02', 'Flow cuando hace falta', 'Mostramos servicios, fechas, horarios o productos con una experiencia guiada dentro de WhatsApp.'],
                ['03', 'Siguiente acción', 'La conversación termina en una cita, reserva, cotización o seguimiento.'],
              ].map(([num, title, copy]) => (
                <div key={num} className="border-t border-black/10 pt-6">
                  <div className="text-sm font-medium text-[#0b777b]">{num}</div>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-black/55">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ejemplos" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.28em] text-black/40">Ejemplos</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] md:text-5xl">Misma tecnología. Distintos resultados.</h2>
            </div>
            <p className="max-w-sm text-black/50">La demo usa datos ficticios para que veás la experiencia completa sin depender de un negocio real.</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {examples.map(({ title, copy, prompt, icon: Icon, background }) => (
              <article key={title} className="overflow-hidden rounded-[26px] border border-black/7 bg-white shadow-[0_16px_40px_rgba(20,30,35,0.05)]">
                <div className={`relative h-56 bg-gradient-to-br ${background} p-6`}>
                  <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/92 p-4 text-sm shadow-lg backdrop-blur">{prompt}</div>
                  <div className="inline-flex rounded-2xl bg-white p-3 shadow-sm"><Icon size={22} /></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-6 text-black/52">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <div className="overflow-hidden rounded-[30px] bg-[#10171b] px-6 py-10 text-white md:flex md:items-center md:justify-between md:px-12 md:py-14">
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.28em] text-white/45">Llevá esta experiencia a tu negocio</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] md:text-4xl">¿Querés verlo con tus propios servicios y horarios?</h2>
              <p className="mt-4 leading-7 text-white/58">Cuando el demo esté conectado al número de prueba, este botón abrirá la experiencia real en WhatsApp.</p>
            </div>
            <button type="button" onClick={scrollToDemo} className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-medium text-[#10171b] md:mt-0">
              <MessageCircle size={19} /> Solicitar demo <ChevronRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-black/45 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="font-medium tracking-[0.2em] text-black/75">CREATY<span className="text-[#0a9ca3]">V</span></div>
          <div>© 2026 Creatyv Technologies. Demo v1.</div>
        </div>
      </footer>
    </div>
  );
};

export default WhatsAppDemoLanding;
