import {
  Activity,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Home,
  MessageCircle,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  Sparkles,
  Users,
} from 'lucide-react';

const leads = [
  { name: 'María López', meta: 'Inmigración · Nuevo', note: 'Entró hace 4 min', tone: 'bg-emerald-50 text-emerald-700' },
  { name: 'Carlos Mejía', meta: 'Seguimiento · Hoy 3:00 PM', note: 'WhatsApp pendiente', tone: 'bg-amber-50 text-amber-700' },
  { name: 'Ana Torres', meta: 'Accidente · Nuevo', note: 'Entró hace 18 min', tone: 'bg-sky-50 text-sky-700' },
];

const ProductWorkspacePreview = () => {
  return (
    <div className="min-h-screen bg-[#f6f4ef] text-[#1d2528]">
      <div className="mx-auto flex min-h-screen max-w-[1480px]">
        <aside className="hidden w-[244px] shrink-0 border-r border-black/5 bg-white/70 px-4 py-5 backdrop-blur-xl lg:flex lg:flex-col">
          <div className="px-3 pb-7">
            <div className="text-[16px] font-semibold tracking-[0.24em]">CREATY<span className="text-[#0b8d8f]">V</span></div>
            <div className="mt-1 text-[9px] tracking-[0.24em] text-black/35">OPERATIONS</div>
          </div>

          <nav className="space-y-1.5 text-[13px]">
            {[
              [Home, 'Inicio', true],
              [Users, 'Clientes', false],
              [MessageCircle, 'Mensajes', false],
              [CalendarDays, 'Agenda', false],
              [Activity, 'Seguimientos', false],
            ].map(([Icon, label, active]) => (
              <button key={label as string} className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${active ? 'bg-[#152124] text-white shadow-sm' : 'text-black/55 hover:bg-white hover:text-black'}`}>
                <Icon size={17} />
                <span className="font-medium">{label as string}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-[22px] border border-black/6 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[12px] font-medium"><Sparkles size={15} className="text-[#0b8d8f]" /> Creatyv está activo</div>
            <p className="mt-2 text-[11px] leading-5 text-black/45">Respondiendo, organizando y dando seguimiento en segundo plano.</p>
          </div>
        </aside>

        <main className="min-w-0 flex-1 pb-24 lg:pb-8">
          <header className="sticky top-0 z-20 border-b border-black/5 bg-[#f6f4ef]/88 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-medium text-black/38">Clínica Pastor · Partner workspace</div>
                <h1 className="mt-0.5 text-[22px] font-semibold tracking-[-0.025em] sm:text-[25px]">Buenos días, Martha</h1>
              </div>
              <div className="flex items-center gap-2">
                <button className="hidden h-10 items-center gap-2 rounded-full border border-black/7 bg-white px-4 text-[12px] text-black/55 shadow-sm sm:flex"><Search size={15} /> Buscar</button>
                <button className="relative grid h-10 w-10 place-items-center rounded-full border border-black/7 bg-white shadow-sm"><Bell size={16} /><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#df684e] ring-2 ring-white" /></button>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#152124] text-[12px] font-semibold text-white">MP</div>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <section className="grid gap-4 md:grid-cols-[1.45fr_.8fr]">
              <div className="overflow-hidden rounded-[30px] border border-black/6 bg-[#172427] p-6 text-white shadow-[0_20px_55px_rgba(26,39,42,.10)] sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-2 text-[11px] text-white/72"><span className="h-2 w-2 rounded-full bg-[#71d6ad]" /> Datos en vivo</div>
                    <h2 className="mt-5 text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[36px]">Tenés 6 cosas que merecen atención hoy.</h2>
                    <p className="mt-3 max-w-[610px] text-[13px] leading-6 text-white/58">Creatyv ya organizó los nuevos contactos, priorizó seguimientos y dejó listo lo que requiere acción humana.</p>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-[12px] font-semibold text-[#172427] shadow-sm"><Plus size={16} /> Agregar cliente</button>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    ['4', 'Nuevos'],
                    ['2', 'Seguimientos'],
                    ['1', 'Aprobado hoy'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-[20px] border border-white/8 bg-white/[0.045] p-4">
                      <div className="text-[24px] font-semibold tracking-[-0.04em]">{value}</div>
                      <div className="mt-1 text-[10px] leading-4 text-white/50 sm:text-[11px]">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-black/6 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between"><div><div className="text-[11px] text-black/38">Siguiente</div><h3 className="mt-1 text-[19px] font-semibold tracking-[-0.02em]">Seguimiento 3:00 PM</h3></div><Clock3 size={20} className="text-[#b47a32]" /></div>
                <div className="mt-5 rounded-[22px] bg-[#faf7f1] p-4">
                  <div className="font-medium">Carlos Mejía</div>
                  <div className="mt-1 text-[12px] text-black/45">Inmigración · No respondió</div>
                  <div className="mt-4 flex gap-2">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#152124] px-3 py-3 text-[11px] font-medium text-white"><Phone size={14} /> Llamar</button>
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/7 bg-white px-3 py-3 text-[11px] font-medium"><MessageCircle size={14} /> WhatsApp</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_.72fr]">
              <div className="rounded-[28px] border border-black/6 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex items-center justify-between px-1 pb-4">
                  <div><h3 className="text-[18px] font-semibold tracking-[-0.02em]">Necesitan atención</h3><p className="mt-1 text-[11px] text-black/42">Ordenados por urgencia, no por fecha de ingreso.</p></div>
                  <button className="rounded-full border border-black/7 px-3 py-2 text-[11px] text-black/48">Ver todos</button>
                </div>
                <div className="space-y-2">
                  {leads.map((lead) => (
                    <div key={lead.name} className="group flex items-center gap-3 rounded-[20px] border border-black/[0.055] bg-[#fcfbf8] p-3.5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-[12px] font-semibold shadow-sm">{lead.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</div>
                      <div className="min-w-0 flex-1"><div className="truncate text-[13px] font-semibold">{lead.name}</div><div className="mt-1 truncate text-[11px] text-black/42">{lead.meta}</div></div>
                      <div className="hidden text-right sm:block"><span className={`rounded-full px-2.5 py-1.5 text-[10px] font-medium ${lead.tone}`}>{lead.note}</span></div>
                      <ChevronRight size={16} className="text-black/22" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-black/6 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between"><h3 className="text-[18px] font-semibold tracking-[-0.02em]">Actividad en vivo</h3><MoreHorizontal size={17} className="text-black/30" /></div>
                <div className="mt-5 space-y-5">
                  {[
                    ['Ahora', 'Nuevo cliente recibido', 'WhatsApp · María López'],
                    ['Hace 8 min', 'Seguimiento enviado', 'Carlos Mejía'],
                    ['Hace 26 min', 'Caso aprobado', 'Andrea Ruiz'],
                    ['Hace 41 min', 'Cliente agregado manualmente', 'Ana Torres'],
                  ].map(([time, title, detail], index) => (
                    <div key={title + time} className="flex gap-3">
                      <div className="relative mt-0.5"><div className={`grid h-8 w-8 place-items-center rounded-full ${index === 0 ? 'bg-[#e8f7f1] text-[#2b8c66]' : 'bg-[#f4f1ea] text-black/38'}`}>{index === 0 ? <Activity size={14} /> : <CheckCircle2 size={14} />}</div>{index < 3 ? <div className="absolute left-1/2 top-8 h-7 w-px -translate-x-1/2 bg-black/8" /> : null}</div>
                      <div className="min-w-0"><div className="text-[10px] text-black/35">{time}</div><div className="mt-0.5 text-[12px] font-medium">{title}</div><div className="mt-0.5 truncate text-[11px] text-black/42">{detail}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <nav className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-4 rounded-[22px] border border-black/7 bg-white/94 p-1.5 shadow-[0_18px_48px_rgba(28,40,44,.16)] backdrop-blur-xl lg:hidden">
        {[
          [Home, 'Inicio', true],
          [Users, 'Clientes', false],
          [MessageCircle, 'Mensajes', false],
          [MoreHorizontal, 'Más', false],
        ].map(([Icon, label, active]) => (
          <button key={label as string} className={`flex flex-col items-center justify-center gap-1 rounded-[16px] py-2.5 text-[10px] font-medium ${active ? 'bg-[#172427] text-white' : 'text-black/45'}`}><Icon size={17} /><span>{label as string}</span></button>
        ))}
      </nav>
    </div>
  );
};

export default ProductWorkspacePreview;
