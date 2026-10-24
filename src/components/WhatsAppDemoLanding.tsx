import {
  CalendarDays,
  ChevronRight,
  Clock3,
  MessageCircle,
  ShoppingBag,
  Stethoscope,
  Waves,
} from 'lucide-react';

const demoDays = [
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

const businessExamples = [
  {
    title: 'Clínicas',
    copy: 'Una consulta puede terminar en una cita, sin esperar a que recepción empiece de cero.',
    prompt: 'Soy paciente nuevo. ¿Tienen cita esta semana?',
    result: 'Cita',
    icon: Stethoscope,
  },
  {
    title: 'Turismo',
    copy: 'La conversación puede pasar de una pregunta a fecha, personas y reserva.',
    prompt: 'Quiero ir a Cayos este sábado. Somos 4.',
    result: 'Reserva',
    icon: Waves,
  },
  {
    title: 'Comercio',
    copy: 'Productos, información y cotización sin obligar al cliente a aprender otro sistema.',
    prompt: '¿Todavía tienen este producto y cuánto cuesta?',
    result: 'Cotización',
    icon: ShoppingBag,
  },
];

const WhatsAppDemoLanding = () => {
  const scrollToHowItWorks = () =>
    document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f5ef] text-[#10161a] selection:bg-[#bce6e3]">
      <header className="sticky top-0 z-40 border-b border-black/[0.055] bg-[#f7f5ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 md:px-8">
          <button
            type="button"
            aria-label="Volver al inicio"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-left"
          >
            <div className="text-[18px] font-semibold tracking-[0.27em] text-[#10161a]">
              CREATY<span className="text-[#0a9ca3]">V</span>
            </div>
            <div className="mt-0.5 text-[8px] tracking-[0.38em] text-black/38">TECHNOLOGIES</div>
          </button>

          <nav className="hidden items-center gap-8 text-[13px] text-black/58 md:flex">
            <a href="#como-funciona" className="transition hover:text-black">Cómo funciona</a>
            <a href="#ejemplos" className="transition hover:text-black">Ejemplos</a>
            <a href="#contacto" className="transition hover:text-black">Contacto</a>
          </nav>

          <button
            type="button"
            onClick={scrollToHowItWorks}
            className="rounded-full bg-[#10161a] px-4 py-2.5 text-[13px] font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-black"
          >
            Ver demo
          </button>
        </div>
      </header>

      <main>
        <section className="relative border-b border-black/[0.05]">
          <div className="pointer-events-none absolute right-[-16rem] top-[-9rem] h-[34rem] w-[34rem] rounded-full bg-[#dce9e4]/70 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 px-5 pb-16 pt-14 md:grid-cols-[0.93fr_1.07fr] md:px-8 md:pb-24 md:pt-24">
            <div className="max-w-[560px]">
              <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.26em] text-black/42">
                Conversaciones que llevan a algo
              </div>

              <h1 className="max-w-[540px] text-[52px] font-semibold leading-[0.96] tracking-[-0.055em] sm:text-[62px] md:text-[72px]">
                Tu WhatsApp
                <br />
                puede hacer más.
              </h1>

              <p className="mt-7 max-w-[510px] text-[18px] leading-[1.65] text-black/58 md:text-[20px]">
                El cliente escribe con sus propias palabras. Creatyv entiende la conversación y lo lleva al siguiente paso: una cita, una reserva o una cotización.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={scrollToHowItWorks}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0b7478] px-6 py-3.5 text-[15px] font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#096469]"
                >
                  <MessageCircle size={18} />
                  Ver demo simulada
                  <ChevronRight size={17} />
                </button>
                <a
                  href="#ejemplos"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/55 px-6 py-3.5 text-[15px] font-medium text-black/68 transition hover:bg-white"
                >
                  Ver ejemplos
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-black/38">
                <span>Texto libre</span>
                <span>Flow dentro de WhatsApp</span>
                <span>Datos de prueba</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[610px] pb-4 pt-2 md:pb-0">
              <div className="absolute inset-x-[8%] bottom-[5%] top-[10%] rounded-[44px] bg-white/55 shadow-[0_38px_90px_rgba(17,35,38,0.08)]" />

              <div className="relative flex items-end justify-center gap-0">
                <div className="relative z-20 w-[58%] max-w-[320px] rounded-[42px] border-[8px] border-[#15191b] bg-[#efeae0] shadow-[0_30px_65px_rgba(10,24,28,0.22)]">
                  <div className="mx-auto mt-2 h-5 w-[42%] rounded-full bg-[#15191b]" />

                  <div className="px-3 pb-3 pt-4">
                    <div className="flex items-center justify-between border-b border-black/5 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10161a] text-[11px] font-semibold text-white">
                          V
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold">Creatyv Demo</div>
                          <div className="text-[9px] text-[#298e63]">en línea</div>
                        </div>
                      </div>
                      <div className="text-[10px] text-black/35">10:24</div>
                    </div>

                    <div className="space-y-3 py-5 text-[11px] leading-[1.55]">
                      <div className="ml-auto max-w-[84%] rounded-[15px] rounded-br-[4px] bg-[#d8f6cb] px-3 py-2.5 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
                        Hola, quiero una cita dental esta semana.
                        <div className="mt-1 text-right text-[8px] text-black/30">10:24 a. m. ✓✓</div>
                      </div>

                      <div className="max-w-[90%] rounded-[15px] rounded-bl-[4px] bg-white px-3 py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                        Claro. Puedo ayudarte a agendarla. ¿Querés ver los horarios disponibles?
                        <div className="mt-1 text-right text-[8px] text-black/26">10:24 a. m.</div>
                      </div>

                      <button
                        type="button"
                        className="flex w-full items-center gap-2.5 rounded-[13px] border border-black/[0.07] bg-white px-3 py-3 text-left font-medium text-[#176fc8] shadow-[0_3px_10px_rgba(0,0,0,0.04)]"
                      >
                        <CalendarDays size={15} />
                        Agendar una cita
                      </button>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] text-black/28">
                      <span className="flex-1">Mensaje</span>
                      <MessageCircle size={14} />
                    </div>
                  </div>
                </div>

                <div className="relative z-30 -ml-5 mb-3 w-[52%] min-w-[220px] max-w-[300px] rounded-[24px] border border-black/[0.08] bg-white p-4 shadow-[0_30px_70px_rgba(11,28,31,0.18)] sm:-ml-3 md:-ml-8">
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
                    <div>
                      <div className="text-[9px] text-black/36">Flow de WhatsApp</div>
                      <div className="mt-0.5 text-[13px] font-semibold">Agendar una cita</div>
                    </div>
                    <div className="rounded-full bg-[#e9f5f2] p-2 text-[#0b777b]">
                      <CalendarDays size={16} />
                    </div>
                  </div>

                  <div className="mt-4 text-[11px] font-medium">Selecciona una fecha</div>
                  <div className="mt-1 text-[9px] text-black/38">Octubre 2026</div>

                  <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[8px] text-black/36">
                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, index) => (
                      <div key={`${day}-${index}`} className="py-1">{day}</div>
                    ))}
                    {demoDays.map((item, index) => (
                      <div
                        key={`${item.day}-${index}`}
                        className={`rounded-[8px] py-1.5 ${
                          item.active
                            ? 'bg-[#0a9ca3] font-semibold text-white'
                            : item.muted
                              ? 'text-black/18'
                              : 'text-black/62'
                        }`}
                      >
                        {item.day}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-[10px] font-medium">
                    <Clock3 size={12} className="text-black/38" /> Horarios disponibles
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-1.5 text-center text-[9px]">
                    {['9:00', '10:00', '11:00', '2:00', '3:00', '4:00'].map((time, index) => (
                      <div
                        key={time}
                        className={`rounded-[9px] border px-1 py-2 ${
                          index === 1
                            ? 'border-[#0a9ca3] bg-[#eaf7f5] font-medium text-[#08757a]'
                            : 'border-black/[0.07] text-black/52'
                        }`}
                      >
                        {time}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-[10px] bg-[#0a9ca3] py-2.5 text-center text-[10px] font-semibold text-white">
                    Continuar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-20">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.26em] text-black/38">Así funciona</div>
                <h2 className="mt-3 max-w-[520px] text-[38px] font-semibold leading-[1.03] tracking-[-0.045em] md:text-[50px]">
                  De una conversación a una acción.
                </h2>
              </div>
              <p className="max-w-[540px] text-[16px] leading-7 text-black/48 md:justify-self-end">
                No intentamos convertir WhatsApp en otra aplicación complicada. La conversación sigue siendo natural y el Flow aparece solamente cuando ayuda a completar algo.
              </p>
            </div>

            <div className="mt-12 grid gap-8 border-t border-black/[0.08] pt-8 md:grid-cols-3">
              {[
                ['01', 'Escribe como siempre', 'El cliente pregunta con texto libre. No necesita aprender comandos ni escoger veinte botones.'],
                ['02', 'Aparece el Flow correcto', 'Cuando hace falta estructura, mostramos servicios, fechas, horarios, catálogo o datos de cotización.'],
                ['03', 'Queda un siguiente paso', 'La conversación termina en una cita, reserva, cotización o seguimiento; no simplemente en “visto”.'],
              ].map(([number, title, copy]) => (
                <article key={number}>
                  <div className="text-[12px] font-semibold text-[#0b777b]">{number}</div>
                  <h3 className="mt-4 text-[21px] font-semibold tracking-[-0.02em]">{title}</h3>
                  <p className="mt-3 max-w-[330px] text-[14px] leading-6 text-black/47">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ejemplos" className="border-y border-black/[0.05] bg-[#f1eee7]">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-22">
            <div className="max-w-[720px]">
              <div className="text-[11px] font-medium uppercase tracking-[0.26em] text-black/38">Ejemplos de prueba</div>
              <h2 className="mt-3 text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] md:text-[50px]">
                El mismo motor cambia según el negocio.
              </h2>
            </div>

            <div className="mt-11 grid gap-4 md:grid-cols-3">
              {businessExamples.map(({ title, copy, prompt, result, icon: Icon }) => (
                <article
                  key={title}
                  className="group flex min-h-[330px] flex-col rounded-[24px] border border-black/[0.06] bg-[#faf9f5] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(20,32,35,0.07)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-black/[0.06] bg-white">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                    <div className="rounded-full border border-black/[0.06] bg-white px-3 py-1.5 text-[10px] font-medium text-black/48">
                      {result}
                    </div>
                  </div>

                  <div className="mt-auto pt-14">
                    <div className="mb-5 max-w-[90%] rounded-[15px] rounded-bl-[4px] bg-white px-4 py-3 text-[13px] leading-5 text-black/65 shadow-[0_8px_20px_rgba(20,30,35,0.06)]">
                      “{prompt}”
                    </div>
                    <h3 className="text-[22px] font-semibold tracking-[-0.025em]">{title}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-black/45">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-20">
            <div className="grid gap-8 rounded-[28px] bg-[#10171b] px-6 py-10 text-white md:grid-cols-[1fr_auto] md:items-center md:px-10 md:py-12">
              <div className="max-w-[650px]">
                <div className="text-[10px] uppercase tracking-[0.26em] text-white/40">Siguiente paso</div>
                <h2 className="mt-3 text-[32px] font-semibold leading-tight tracking-[-0.035em] md:text-[40px]">
                  Primero lo probamos nosotros. Después lo conectamos a un negocio real.
                </h2>
                <p className="mt-4 max-w-[590px] text-[14px] leading-6 text-white/50">
                  La primera versión usará catálogo, disponibilidad y agenda de prueba. Cuando el recorrido esté sólido, conectamos el número oficial y datos reales.
                </p>
              </div>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-5 py-3 text-[14px] font-medium text-[#10171b] transition hover:-translate-y-0.5"
              >
                Ver demo arriba <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[0.05] bg-white">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-5 py-8 text-[12px] text-black/38 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="font-semibold tracking-[0.22em] text-black/72">
            CREATY<span className="text-[#0a9ca3]">V</span>
          </div>
          <div>© 2026 Creatyv Technologies · Preview de demostración</div>
        </div>
      </footer>
    </div>
  );
};

export default WhatsAppDemoLanding;
