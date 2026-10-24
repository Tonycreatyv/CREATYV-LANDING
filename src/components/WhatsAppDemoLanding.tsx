import { CalendarDays, ChevronRight, MessageCircle, ShoppingBag, Stethoscope, Waves } from 'lucide-react';

const cards = [
  {
    title: 'Clínicas y salud',
    copy: 'Citas, recordatorios y seguimiento de pacientes.',
    prompt: 'Hola, quiero una cita.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Turismo y experiencias',
    copy: 'Consultas, disponibilidad y reservas en WhatsApp.',
    prompt: 'Quiero un tour para 4 este sábado.',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Comercio y servicios',
    copy: 'Información, cotizaciones y seguimiento.',
    prompt: '¿Cuánto cuesta este producto?',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
  },
];

const WhatsAppDemoLanding = () => {
  const scrollToExamples = () => document.getElementById('ejemplos')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f3ed] text-[#111820]">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f6f3ed]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1220px] items-center justify-between px-4 py-3.5 sm:px-5 md:px-8 md:py-4">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left">
            <div className="text-[17px] font-semibold tracking-[0.24em] sm:text-[19px] sm:tracking-[0.28em]">CREATY<span className="text-[#0a9ca3]">V</span></div>
            <div className="mt-0.5 text-[7px] tracking-[0.32em] text-black/38 sm:text-[8px] sm:tracking-[0.36em]">TECHNOLOGIES</div>
          </button>
          <nav className="hidden items-center gap-8 text-[13px] text-black/58 md:flex">
            <a href="#soluciones" className="hover:text-black">Soluciones</a>
            <a href="#ejemplos" className="hover:text-black">Ejemplos</a>
            <a href="#como-funciona" className="hover:text-black">Cómo funciona</a>
            <a href="#contacto" className="hover:text-black">Contacto</a>
          </nav>
          <button type="button" onClick={scrollToExamples} className="rounded-full bg-[#10161a] px-4 py-2.5 text-[12px] font-medium text-white sm:px-5 sm:py-3 sm:text-[13px]">
            Probar por WhatsApp →
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-black/5">
          <div
            className="absolute inset-0 bg-cover bg-[58%_center] md:bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,244,238,0.97)_0%,rgba(247,244,238,0.93)_46%,rgba(247,244,238,0.60)_72%,rgba(247,244,238,0.28)_100%)] md:bg-[linear-gradient(90deg,rgba(247,244,238,0.98)_0%,rgba(247,244,238,0.95)_36%,rgba(247,244,238,0.52)_66%,rgba(247,244,238,0.18)_100%)]" />

          <div className="relative mx-auto grid max-w-[1220px] items-start gap-5 px-4 pb-10 pt-8 sm:px-5 sm:pb-12 sm:pt-10 md:grid-cols-[0.93fr_1.07fr] md:items-center md:gap-12 md:px-8 md:py-24">
            <div className="max-w-[560px]">
              <div className="text-[9px] font-medium uppercase tracking-[0.22em] text-black/45 sm:text-[11px] sm:tracking-[0.27em]">Conversaciones que hacen crecer tu negocio</div>
              <h1 className="mt-4 text-[44px] font-semibold leading-[0.96] tracking-[-0.052em] sm:mt-5 sm:text-[54px] md:mt-6 md:text-[72px]">Tu WhatsApp<br />puede hacer más.</h1>
              <p className="mt-4 max-w-[510px] text-[16px] leading-[1.5] text-black/60 sm:mt-5 sm:text-[18px] md:mt-7 md:text-[19px] md:leading-[1.6]">Citas, reservas, cotizaciones y seguimiento. La conversación sigue siendo natural; Creatyv organiza el siguiente paso.</p>
              <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row md:mt-9">
                <button type="button" onClick={scrollToExamples} className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0b7478] px-5 py-3 text-[14px] font-medium text-white shadow-lg shadow-[#0b7478]/15 sm:w-auto sm:px-6 sm:py-3.5 sm:text-[15px]">
                  <MessageCircle size={18} /> Probar por WhatsApp <ChevronRight size={17} />
                </button>
              </div>
              <p className="mt-3 text-[12px] text-black/45 sm:mt-4 sm:text-[13px]">Sin compromiso. Solo mirá cómo funciona.</p>
              <div className="mt-8 hidden max-w-[520px] grid-cols-3 gap-3 text-[12px] text-black/60 md:grid">
                {['Responde 24/7', 'Convierte más conversaciones', 'Ahorra tiempo y da seguimiento'].map((label) => (
                  <div key={label} className="rounded-2xl border border-white/60 bg-white/65 px-3 py-3 backdrop-blur">{label}</div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto min-h-[350px] w-full max-w-[520px] sm:min-h-[430px] md:min-h-[560px] md:max-w-[560px]">
              <div className="absolute right-[4%] top-[2%] h-[338px] w-[176px] rounded-[31px] border-[5px] border-[#17191b] bg-[#efeae0] shadow-[0_28px_70px_rgba(8,18,22,.30)] sm:h-[420px] sm:w-[218px] sm:rounded-[38px] sm:border-[6px] md:right-[6%] md:h-[540px] md:w-[280px] md:rounded-[48px] md:border-[8px]">
                <div className="mx-auto mt-1.5 h-3 w-[42%] rounded-full bg-[#17191b] sm:mt-2 sm:h-4 md:h-5" />
                <div className="px-2 pb-2 pt-2.5 sm:px-2.5 sm:pt-3 md:px-3 md:pb-3 md:pt-4">
                  <div className="flex items-center gap-1.5 border-b border-black/5 pb-2 sm:gap-2 sm:pb-2.5 md:pb-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10161a] text-[8px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[9px] md:h-8 md:w-8 md:text-[11px]">V</div>
                    <div><div className="text-[8px] font-semibold sm:text-[9px] md:text-[11px]">Creatyv</div><div className="text-[7px] text-[#298e63] sm:text-[8px] md:text-[9px]">en línea</div></div>
                  </div>
                  <div className="space-y-1.5 py-2.5 text-[7.5px] leading-[1.38] sm:space-y-2 sm:py-3 sm:text-[9px] md:space-y-2.5 md:py-4 md:text-[11px] md:leading-[1.45]">
                    <div className="max-w-[89%] rounded-[10px] rounded-bl-[3px] bg-white px-2 py-1.5 shadow-sm sm:rounded-[12px] sm:px-2.5 sm:py-2 md:rounded-[15px] md:rounded-bl-[4px] md:px-3 md:py-2.5">¡Hola! 👋<br />¿Cómo te gustaría empezar?</div>
                    {['Agendar una cita', 'Ver información', 'Solicitar cotización', 'Hablar con un asesor'].map((item, index) => (
                      <div key={item} className="flex items-center gap-1 rounded-[8px] border border-black/5 bg-white px-2 py-1.5 text-[#176fc8] shadow-sm sm:gap-1.5 sm:rounded-[10px] sm:px-2.5 sm:py-2 md:gap-2 md:rounded-[12px] md:px-3 md:py-2.5">
                        {index === 0 ? <CalendarDays size={10} className="sm:h-3 sm:w-3 md:h-[14px] md:w-[14px]" /> : <span className="text-[8px] sm:text-[10px] md:text-[12px]">●</span>} {item}
                      </div>
                    ))}
                    <div className="ml-auto max-w-[72%] rounded-[9px] rounded-br-[3px] bg-[#d8f6cb] px-2 py-1.5 sm:rounded-[11px] sm:px-2.5 sm:py-1.5 md:rounded-[14px] md:rounded-br-[4px] md:px-3 md:py-2">Quiero una cita</div>
                    <div className="max-w-[90%] rounded-[10px] rounded-bl-[3px] bg-white px-2 py-1.5 sm:rounded-[12px] sm:px-2.5 sm:py-2 md:rounded-[15px] md:rounded-bl-[4px] md:px-3 md:py-2.5">Perfecto. ¿Qué día te gustaría? Aquí tienes algunos horarios disponibles:</div>
                    <div className="grid grid-cols-3 gap-1 text-center text-[6.5px] text-[#176fc8] sm:text-[8px] md:gap-1.5 md:text-[9px]">
                      {['Hoy', 'Mañana', 'Otro día'].map((item) => <div key={item} className="rounded-[7px] bg-white px-1 py-1.5 shadow-sm sm:rounded-[8px] sm:px-1.5 sm:py-2 md:rounded-[10px] md:px-2">{item}</div>)}
                    </div>
                  </div>
                  <div className="rounded-full bg-white px-2 py-1.5 text-[7px] text-black/30 sm:px-2.5 sm:py-2 sm:text-[8px] md:px-3 md:text-[10px]">Mensaje</div>
                </div>
              </div>

              <div className="absolute left-[1%] top-[158px] w-[164px] rounded-[17px] border border-black/8 bg-white p-2.5 shadow-[0_24px_55px_rgba(11,28,31,0.18)] sm:top-[205px] sm:w-[202px] sm:rounded-[20px] sm:p-3 md:left-[2%] md:top-[270px] md:w-[245px] md:rounded-[24px] md:p-4">
                <div className="text-[6.5px] text-black/36 sm:text-[8px] md:text-[9px]">Flow de WhatsApp</div>
                <div className="mt-0.5 text-[9px] font-semibold sm:text-[11px] md:mt-1 md:text-[13px]">Agendar una cita</div>
                <div className="mt-2 text-[8px] font-medium sm:mt-3 sm:text-[9px] md:mt-4 md:text-[11px]">Selecciona una fecha</div>
                <div className="mt-0.5 text-[6.5px] text-black/38 sm:text-[8px] md:mt-1 md:text-[9px]">Octubre 2026</div>
                <div className="mt-2 grid grid-cols-7 gap-0.5 text-center text-[6px] text-black/40 sm:gap-1 sm:text-[7px] md:mt-3 md:text-[8px]">
                  {['L','M','M','J','V','S','D','20','21','22','23','24','25','26','27','28','29','30','31','1','2'].map((v, i) => (
                    <div key={`${v}-${i}`} className={`rounded-[5px] py-1 sm:rounded-[6px] md:rounded-[7px] md:py-1.5 ${v === '24' ? 'bg-[#0a9ca3] font-semibold text-white' : ''}`}>{v}</div>
                  ))}
                </div>
                <div className="mt-2.5 text-[7px] font-medium sm:mt-3 sm:text-[8px] md:mt-4 md:text-[10px]">Horarios disponibles</div>
                <div className="mt-1.5 grid grid-cols-3 gap-1 text-center text-[6px] sm:text-[7px] md:mt-2 md:gap-1.5 md:text-[9px]">
                  {['9:00','10:00','11:00','2:00','3:00','4:00'].map((t, i) => <div key={t} className={`rounded-[6px] border px-0.5 py-1.5 sm:rounded-[7px] sm:py-1.5 md:rounded-[9px] md:px-1 md:py-2 ${i === 1 ? 'border-[#0a9ca3] bg-[#eaf7f5] text-[#08757a]' : 'border-black/7 text-black/52'}`}>{t}</div>)}
                </div>
                <div className="mt-2.5 rounded-[7px] bg-[#0a9ca3] py-1.5 text-center text-[7px] font-semibold text-white sm:mt-3 sm:rounded-[8px] sm:py-2 sm:text-[8px] md:mt-4 md:rounded-[10px] md:py-2.5 md:text-[10px]">Continuar</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[10px] text-black/60 md:hidden">
              {['Responde 24/7', 'Convierte más conversaciones', 'Ahorra tiempo y da seguimiento'].map((label) => (
                <div key={label} className="rounded-xl border border-white/70 bg-white/72 px-2.5 py-2.5 text-center backdrop-blur">{label}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="soluciones" className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1220px] px-5 md:px-8">
            <div className="grid gap-5 md:grid-cols-[1fr_.45fr] md:items-end">
              <div><div className="text-[11px] uppercase tracking-[0.27em] text-black/40">Soluciones para negocios reales</div><h2 className="mt-3 text-[40px] font-semibold tracking-[-0.045em] md:text-[54px]">Un sistema. Cualquier negocio.</h2></div>
              <p className="text-[15px] leading-7 text-black/50 md:pb-2">Misma tecnología, distintos resultados. Conecta con tus clientes, ahorra tiempo y no pierdas oportunidades.</p>
            </div>

            <div id="ejemplos" className="mt-10 grid gap-5 md:grid-cols-3">
              {cards.map(({ title, copy, prompt, icon: Icon, image }) => (
                <article key={title} className="overflow-hidden rounded-[24px] border border-black/7 bg-[#faf9f5] shadow-[0_14px_38px_rgba(24,34,38,0.06)]">
                  <div className="relative h-[260px] bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 max-w-[72%] rounded-2xl bg-white/95 px-4 py-3 text-[13px] shadow-xl backdrop-blur">{prompt}</div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 inline-flex rounded-2xl bg-[#e8f4f2] p-3 text-[#0b777b]"><Icon size={21} /></div>
                    <h3 className="text-[21px] font-semibold tracking-[-0.02em]">{title}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-black/50">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-y border-black/5 bg-[#f2eee6] py-16 md:py-20">
          <div className="mx-auto max-w-[1220px] px-5 md:px-8">
            <div className="text-[11px] uppercase tracking-[0.27em] text-black/40">Así funciona</div>
            <h2 className="mt-3 max-w-[720px] text-[38px] font-semibold tracking-[-0.045em] md:text-[50px]">La conversación sigue siendo humana. El sistema aparece cuando hace falta.</h2>
            <div className="mt-10 grid gap-7 border-t border-black/10 pt-8 md:grid-cols-3">
              {[
                ['01','Escriben como siempre','Texto libre, preguntas reales y lenguaje normal.'],
                ['02','Aparece el Flow correcto','Calendario, catálogo, servicios o datos cuando se necesitan.'],
                ['03','Queda una acción concreta','Cita, reserva, cotización o seguimiento.'],
              ].map(([num,title,copy]) => <div key={num}><div className="text-[12px] font-semibold text-[#0b777b]">{num}</div><h3 className="mt-4 text-[20px] font-semibold">{title}</h3><p className="mt-3 text-[14px] leading-6 text-black/48">{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section id="contacto" className="relative overflow-hidden bg-[#0c1114] text-white">
          <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1114] via-[#0c1114]/92 to-[#0c1114]/55" />
          <div className="relative mx-auto grid max-w-[1220px] gap-8 px-5 py-16 md:grid-cols-[1fr_.7fr] md:items-center md:px-8 md:py-20">
            <div><div className="text-[11px] uppercase tracking-[0.27em] text-white/50">Listo para verlo en acción</div><h2 className="mt-4 max-w-[560px] text-[42px] font-semibold leading-[1.02] tracking-[-0.045em] md:text-[56px]">Prueba el sistema en WhatsApp.</h2><button type="button" onClick={scrollToExamples} className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-[#10161a]"><MessageCircle size={18} /> Empezar ahora <ChevronRight size={17} /></button></div>
            <div className="grid gap-3 text-[15px] text-white/78 md:justify-self-end">{['Sin instalar nada','Sin compromiso','Funciona con tu negocio'].map((x) => <div key={x}>✓ &nbsp; {x}</div>)}</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WhatsAppDemoLanding;