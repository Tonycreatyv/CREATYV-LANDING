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
        <div className="mx-auto flex max-w-[1220px] items-center justify-between px-5 py-4 md:px-8">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left">
            <div className="text-[19px] font-semibold tracking-[0.28em]">CREATY<span className="text-[#0a9ca3]">V</span></div>
            <div className="mt-0.5 text-[8px] tracking-[0.36em] text-black/38">TECHNOLOGIES</div>
          </button>
          <nav className="hidden items-center gap-8 text-[13px] text-black/58 md:flex">
            <a href="#soluciones" className="hover:text-black">Soluciones</a>
            <a href="#ejemplos" className="hover:text-black">Ejemplos</a>
            <a href="#como-funciona" className="hover:text-black">Cómo funciona</a>
            <a href="#contacto" className="hover:text-black">Contacto</a>
          </nav>
          <button type="button" onClick={scrollToExamples} className="rounded-full bg-[#10161a] px-5 py-3 text-[13px] font-medium text-white">
            Probar por WhatsApp →
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-black/5">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,244,238,0.98)_0%,rgba(247,244,238,0.95)_36%,rgba(247,244,238,0.52)_66%,rgba(247,244,238,0.18)_100%)]" />

          <div className="relative mx-auto grid max-w-[1220px] items-center gap-12 px-5 py-16 md:grid-cols-[0.93fr_1.07fr] md:px-8 md:py-24">
            <div className="max-w-[560px]">
              <div className="text-[11px] font-medium uppercase tracking-[0.27em] text-black/45">Conversaciones que hacen crecer tu negocio</div>
              <h1 className="mt-6 text-[52px] font-semibold leading-[0.96] tracking-[-0.055em] sm:text-[62px] md:text-[72px]">Tu WhatsApp<br />puede hacer más.</h1>
              <p className="mt-7 max-w-[510px] text-[19px] leading-[1.6] text-black/58">Citas, reservas, cotizaciones y seguimiento. La conversación sigue siendo natural; Creatyv organiza el siguiente paso.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={scrollToExamples} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0b7478] px-6 py-3.5 text-[15px] font-medium text-white shadow-lg shadow-[#0b7478]/15">
                  <MessageCircle size={19} /> Probar por WhatsApp <ChevronRight size={17} />
                </button>
              </div>
              <p className="mt-4 text-[13px] text-black/42">Sin compromiso. Solo mirá cómo funciona.</p>
              <div className="mt-8 grid max-w-[520px] grid-cols-3 gap-3 text-[12px] text-black/60">
                {['Responde 24/7', 'Convierte más conversaciones', 'Ahorra tiempo y da seguimiento'].map((label) => (
                  <div key={label} className="rounded-2xl border border-white/60 bg-white/65 px-3 py-3 backdrop-blur">{label}</div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto min-h-[560px] w-full max-w-[560px]">
              <div className="absolute right-[6%] top-[2%] h-[540px] w-[280px] rounded-[48px] border-[8px] border-[#17191b] bg-[#efeae0] shadow-[0_35px_85px_rgba(8,18,22,.32)]">
                <div className="mx-auto mt-2 h-5 w-[42%] rounded-full bg-[#17191b]" />
                <div className="px-3 pb-3 pt-4">
                  <div className="flex items-center gap-2 border-b border-black/5 pb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10161a] text-[11px] font-semibold text-white">V</div>
                    <div><div className="text-[11px] font-semibold">Creatyv</div><div className="text-[9px] text-[#298e63]">en línea</div></div>
                  </div>
                  <div className="space-y-2.5 py-4 text-[11px] leading-[1.45]">
                    <div className="max-w-[89%] rounded-[15px] rounded-bl-[4px] bg-white px-3 py-2.5 shadow-sm">¡Hola! 👋<br />¿Cómo te gustaría empezar?</div>
                    {['Agendar una cita', 'Ver información', 'Solicitar cotización', 'Hablar con un asesor'].map((item, index) => (
                      <div key={item} className="flex items-center gap-2 rounded-[12px] border border-black/5 bg-white px-3 py-2.5 text-[#176fc8] shadow-sm">
                        {index === 0 ? <CalendarDays size={14} /> : <span className="text-[12px]">●</span>} {item}
                      </div>
                    ))}
                    <div className="ml-auto max-w-[72%] rounded-[14px] rounded-br-[4px] bg-[#d8f6cb] px-3 py-2">Quiero una cita</div>
                    <div className="max-w-[90%] rounded-[15px] rounded-bl-[4px] bg-white px-3 py-2.5">Perfecto. ¿Qué día te gustaría? Aquí tienes algunos horarios disponibles:</div>
                    <div className="grid grid-cols-3 gap-1.5 text-center text-[9px] text-[#176fc8]">
                      {['Hoy', 'Mañana', 'Otro día'].map((item) => <div key={item} className="rounded-[10px] bg-white px-2 py-2 shadow-sm">{item}</div>)}
                    </div>
                  </div>
                  <div className="rounded-full bg-white px-3 py-2 text-[10px] text-black/30">Mensaje</div>
                </div>
              </div>

              <div className="absolute left-[2%] top-[270px] w-[245px] rounded-[24px] border border-black/8 bg-white p-4 shadow-[0_30px_70px_rgba(11,28,31,0.19)]">
                <div className="text-[9px] text-black/36">Flow de WhatsApp</div>
                <div className="mt-1 text-[13px] font-semibold">Agendar una cita</div>
                <div className="mt-4 text-[11px] font-medium">Selecciona una fecha</div>
                <div className="mt-1 text-[9px] text-black/38">Octubre 2026</div>
                <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[8px] text-black/40">
                  {['L','M','M','J','V','S','D','20','21','22','23','24','25','26','27','28','29','30','31','1','2'].map((v, i) => (
                    <div key={`${v}-${i}`} className={`rounded-[7px] py-1.5 ${v === '24' ? 'bg-[#0a9ca3] font-semibold text-white' : ''}`}>{v}</div>
                  ))}
                </div>
                <div className="mt-4 text-[10px] font-medium">Horarios disponibles</div>
                <div className="mt-2 grid grid-cols-3 gap-1.5 text-center text-[9px]">
                  {['9:00','10:00','11:00','2:00','3:00','4:00'].map((t, i) => <div key={t} className={`rounded-[9px] border px-1 py-2 ${i === 1 ? 'border-[#0a9ca3] bg-[#eaf7f5] text-[#08757a]' : 'border-black/7 text-black/52'}`}>{t}</div>)}
                </div>
                <div className="mt-4 rounded-[10px] bg-[#0a9ca3] py-2.5 text-center text-[10px] font-semibold text-white">Continuar</div>
              </div>
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
