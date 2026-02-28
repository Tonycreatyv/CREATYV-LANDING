import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';

type Industry = 'general' | 'dental' | 'autos' | 'builders';
type Role = 'assistant' | 'user';

type DemoMessage = {
  id: string;
  role: Role;
  text: string;
  ts: number;
};

type DemoConfig = {
  brandName: string;
  address: string;
  hoursMonFri: string;
  hoursSat: string;
};

type AppointmentCard = {
  id: string;
  whenText: string;
  summary: string;
  captured: {
    name: string;
    phone: string;
    preferredTime: string;
  };
};

type Evidence = {
  leadCaptured: boolean;

  intent?: string;
  confidence?: number; // 0-100
  tags?: string[];
  slaMs?: number;

  // Nuevo: labels “SaaS”
  statusLabel?: string;     // p.ej. "Booked ✅"
  scheduledLabel?: string;  // p.ej. "Programado: esta semana (tarde)"

  nextAction?: string;      // p.ej. "Confirmación enviada"
  nextAutomation?: string;  // p.ej. "Recordatorio 24h"

  summaryLine?: string;

  captured?: {
    name?: string;
    phone?: string;
    preferredTime?: string;
  };

  appointment?: AppointmentCard;
};

type Mode = 'setup' | 'chat';

type Stage =
  | 'idle'
  | 'greeted'
  | 'need_intent'
  | 'dental_need_service'
  | 'dental_close_timeframe'
  | 'autos_need_topic'
  | 'autos_finance_preference'
  | 'autos_close_timeframe'
  | 'builders_need_project'
  | 'builders_close_timeframe'
  | 'capture_contact'
  | 'done';

const uid = () => Math.random().toString(16).slice(2);

function getQueryIndustry(): Industry {
  const params = new URLSearchParams(window.location.search);
  const raw = (params.get('industry') || '').toLowerCase();
  if (raw === 'dental') return 'dental';
  if (raw === 'autos' || raw === 'autolote' || raw === 'car') return 'autos';
  if (raw === 'builders' || raw === 'builder' || raw === 'constructores') return 'builders';
  return 'general';
}

function titleFor(industry: Industry) {
  if (industry === 'dental') return 'Asistente de Clínica (Demo)';
  if (industry === 'autos') return 'Asistente de Creatyv Autos';
  if (industry === 'builders') return 'Asistente de Constructores (Demo)';
  return 'Asistente de Creatyv';
}

function initialConfig(industry: Industry): DemoConfig {
  if (industry === 'dental') {
    return {
      brandName: 'Clínica Demo',
      address: 'Barrio X, Tegucigalpa',
      hoursMonFri: '8am–5pm',
      hoursSat: '9am–1pm',
    };
  }
  if (industry === 'autos') {
    return {
      brandName: 'Creatyv Autos',
      address: 'Barrio X, Tegucigalpa',
      hoursMonFri: '8am–5pm',
      hoursSat: '9am–1pm',
    };
  }
  if (industry === 'builders') {
    return {
      brandName: 'Constructores Demo',
      address: 'Tegucigalpa',
      hoursMonFri: '8am–5pm',
      hoursSat: '9am–1pm',
    };
  }
  return {
    brandName: 'Creatyv',
    address: 'Tegucigalpa',
    hoursMonFri: '8am–5pm',
    hoursSat: '9am–1pm',
  };
}

/** Normaliza: lower, sin acentos, sin símbolos raros */
const norm = (s: string) =>
  (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const hasAny = (t: string, keys: string[]) => keys.some((k) => t.includes(k));

function parsePhone(text: string): string | undefined {
  const cleaned = (text || '').replace(/[^\d]/g, '');
  if (cleaned.length >= 7 && cleaned.length <= 15) return cleaned;
  return undefined;
}

function parseName(text: string): string | undefined {
  const t = norm(text);
  const bad = [
    'hoy',
    'manana',
    'esta',
    'semana',
    'proxima',
    'tarde',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
  ];
  const parts = t.split(' ').filter(Boolean);
  if (parts.length < 2) return undefined;
  if (parts.every((p) => bad.includes(p))) return undefined;
  if (/\d/.test(t)) return undefined;
  return parts.slice(0, 4).join(' ');
}

function parsePreferredTime(text: string): string | undefined {
  const t = norm(text);
  if (hasAny(t, ['hoy'])) return 'hoy';
  if (hasAny(t, ['manana'])) return 'mañana';
  if (hasAny(t, ['esta semana'])) return 'esta semana';
  if (hasAny(t, ['proxima semana', 'la proxima'])) return 'la próxima';
  if (hasAny(t, ['tarde'])) return 'tarde';
  if (hasAny(t, ['manana temprano', 'temprano'])) return 'mañana (temprano)';
  if (hasAny(t, ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'])) return text.trim();
  return undefined;
}

/** Intent simple con tolerancia a typos */
function detectIntent(
  industry: Industry,
  rawText: string,
): Pick<Evidence, 'leadCaptured' | 'intent' | 'confidence' | 'tags'> {
  const t = norm(rawText);

  const phone = parsePhone(rawText);
  const name = parseName(rawText);
  const leadCaptured = Boolean(phone || name);

  if (industry === 'autos') {
    if (hasAny(t, ['financia', 'financiamiento', 'cuota', 'prima', 'credito', 'credit'])) {
      return { leadCaptured, intent: 'financiamiento', confidence: 88, tags: ['financing'] };
    }
    if (hasAny(t, ['precio', 'cuanto', 'vale', 'costo'])) {
      return { leadCaptured, intent: 'precio', confidence: 80, tags: ['pricing'] };
    }
    if (hasAny(t, ['dispon', 'stock', 'hay', 'tienen'])) {
      return { leadCaptured, intent: 'disponibilidad', confidence: 72, tags: ['availability'] };
    }
    if (hasAny(t, ['donde', 'ubic', 'direccion'])) {
      return { leadCaptured, intent: 'ubicacion', confidence: 78, tags: ['location'] };
    }
    return { leadCaptured, confidence: 40 };
  }

  if (industry === 'dental') {
    if (hasAny(t, ['implante', 'implantes', 'implant', 'implam', 'implan'])) {
      return { leadCaptured, intent: 'implantes', confidence: 86, tags: ['implants'] };
    }
    if (hasAny(t, ['blanque', 'blanqueamiento', 'blanqueo'])) {
      return { leadCaptured, intent: 'blanqueamiento', confidence: 84, tags: ['whitening'] };
    }
    if (hasAny(t, ['dolor', 'me duele', 'urg', 'urgencia', 'emergencia'])) {
      return { leadCaptured, intent: 'urgencia', confidence: 90, tags: ['urgent'] };
    }
    if (hasAny(t, ['cita', 'agendar', 'agenda', 'turno'])) {
      return { leadCaptured, intent: 'cita', confidence: 82, tags: ['appointment'] };
    }
    if (hasAny(t, ['limpieza', 'limpiesa', 'chequeo', 'revision'])) {
      return { leadCaptured, intent: 'limpieza/chequeo', confidence: 78, tags: ['checkup'] };
    }
    return { leadCaptured, confidence: 45 };
  }

  if (industry === 'builders') {
    if (hasAny(t, ['remodel', 'constru', 'pint', 'techo', 'obra'])) {
      return { leadCaptured, intent: 'proyecto', confidence: 82, tags: ['project'] };
    }
    if (hasAny(t, ['precio', 'cotiz', 'estimad', 'presupuesto'])) {
      return { leadCaptured, intent: 'estimado', confidence: 78, tags: ['estimate'] };
    }
    return { leadCaptured, confidence: 45 };
  }

  if (hasAny(t, ['citas', 'agenda', 'agendar'])) return { leadCaptured, intent: 'citas', confidence: 75, tags: ['appointment'] };
  if (hasAny(t, ['leads'])) return { leadCaptured, intent: 'leads', confidence: 72, tags: ['leads'] };
  if (hasAny(t, ['respuestas', 'respuesta', 'rapido'])) return { leadCaptured, intent: 'respuestas', confidence: 70, tags: ['support'] };
  return { leadCaptured, confidence: 40 };
}

/** ✅ Merge: mantiene intent y usa confianza MAX para que no “baje” por mensajes neutros */
function mergeEvidence(prev: Evidence, next: Partial<Evidence>): Evidence {
  const prevConf = prev.confidence ?? 0;
  const nextConf = next.confidence ?? 0;

  return {
    ...prev,
    ...next,
    intent: next.intent || prev.intent,
    confidence: Math.max(prevConf, nextConf),
    leadCaptured: Boolean(prev.leadCaptured || next.leadCaptured),
    tags: Array.from(new Set([...(prev.tags || []), ...((next.tags as string[]) || [])])),
    captured: { ...(prev.captured || {}), ...(next.captured || {}) },
  };
}

function buildSummaryLine(industry: Industry, ev: Evidence): string {
  const intent = ev.intent || 'consulta';
  const name = ev.captured?.name ? ` | ${ev.captured.name}` : '';
  const phone = ev.captured?.phone ? ` | ${ev.captured.phone}` : '';
  return `${industry.toUpperCase()}: ${intent}${name}${phone}`.trim();
}

/** ✅ Close computation: si ya hay cita -> no vender followups */
function computeClose(industry: Industry, ev: Evidence): Evidence {
  if (ev.appointment) {
    return {
      ...ev,
      statusLabel: ev.statusLabel || 'Booked ✅',
      scheduledLabel: ev.scheduledLabel || `Programado: ${ev.appointment.whenText}`,
      nextAction: ev.nextAction || 'Confirmación enviada',
      nextAutomation: ev.nextAutomation || '✅ Recordatorio 24h (demo)',
    };
  }

  if (!ev.intent) return ev;

  if (industry === 'autos') {
    return {
      ...ev,
      statusLabel: ev.statusLabel,
      scheduledLabel: ev.scheduledLabel,
      nextAction: 'Pedir nombre + teléfono + horario preferido',
      nextAutomation: '✅ Follow-up 15 min + 24h (demo)',
    };
  }
  if (industry === 'dental') {
    return {
      ...ev,
      statusLabel: ev.statusLabel,
      scheduledLabel: ev.scheduledLabel,
      nextAction: 'Pedir nombre + teléfono + 2 horarios',
      nextAutomation: '✅ Follow-up 15 min + 24h (demo)',
    };
  }
  if (industry === 'builders') {
    return {
      ...ev,
      statusLabel: ev.statusLabel,
      scheduledLabel: ev.scheduledLabel,
      nextAction: 'Pedir ubicación + horario',
      nextAutomation: '✅ Follow-up 15 min + 24h (demo)',
    };
  }

  return ev;
}

function botReply(args: {
  industry: Industry;
  stage: Stage;
  userText: string;
  config: DemoConfig;
  evidence: Evidence;
}): { text: string; nextStage: Stage; patchEvidence?: Partial<Evidence>; botKey: string } {
  const { industry, stage, userText, config, evidence } = args;
  const t = norm(userText);

  if (stage === 'done') {
    return { text: 'Listo ✅ Si querés, podés probar otro caso o crear un nuevo lead.', nextStage: 'done', botKey: 'done_keep' };
  }

  const askMissingContact = (missing: string[]) => {
    const parts: string[] = [];
    if (missing.includes('name')) parts.push('tu nombre completo');
    if (missing.includes('phone')) parts.push('tu número');
    if (missing.includes('preferredTime')) parts.push('si te queda mejor hoy o mañana / esta semana');
    return {
      text: `Perfecto 😊 Solo me falta ${parts.join(' + ')}.`,
      nextStage: 'capture_contact' as Stage,
      botKey: `ask_missing_${missing.join('_')}`,
    };
  };

  if (stage === 'greeted') {
    if (industry === 'autos') {
      return { text: 'De una 👌 ¿Qué ocupás ahorita: precio, financiamiento, disponibilidad o ubicación?', nextStage: 'autos_need_topic', botKey: 'autos_need_topic' };
    }
    if (industry === 'dental') {
      return { text: 'Claro 😊 ¿Es por blanqueamiento, limpieza/chequeo, implantes o dolor/urgencia?', nextStage: 'dental_need_service', botKey: 'dental_need_service' };
    }
    if (industry === 'builders') {
      return { text: 'Listo 👷‍♂️ ¿Qué tipo de trabajo es: remodelación, techo, pintura o construcción?', nextStage: 'builders_need_project', botKey: 'builders_need_project' };
    }
    return { text: 'Claro 😊 ¿Qué buscas: más leads, respuestas rápidas o agendar citas?', nextStage: 'need_intent', botKey: 'general_need_intent' };
  }

  if (industry === 'autos') {
    if (stage === 'autos_need_topic') {
      if (hasAny(t, ['financia', 'financiamiento', 'cuota', 'prima', 'credito', 'credit'])) {
        return { text: 'Buenísimo 😎 ¿Preferís cuota mensual baja o prima baja?', nextStage: 'autos_finance_preference', patchEvidence: { intent: 'financiamiento' }, botKey: 'autos_finance_pref' };
      }
      if (hasAny(t, ['precio', 'cuanto', 'vale', 'costo'])) {
        return { text: 'Dale 👌 Decime: ¿qué carro andas buscando (modelo/año) y rango de presupuesto?', nextStage: 'autos_close_timeframe', patchEvidence: { intent: 'precio' }, botKey: 'autos_price_probe' };
      }
      if (hasAny(t, ['dispon', 'stock', 'hay', 'tienen'])) {
        return { text: 'Perfecto. ¿Qué modelo/año andas buscando? (Aunque sea aproximado.)', nextStage: 'autos_close_timeframe', patchEvidence: { intent: 'disponibilidad' }, botKey: 'autos_availability_probe' };
      }
      if (hasAny(t, ['ubic', 'donde', 'direccion'])) {
        return { text: `Estamos en ${config.address}. Horario: Lun–Vie ${config.hoursMonFri}, Sáb ${config.hoursSat}. ¿Querés pasar hoy o mañana?`, nextStage: 'capture_contact', patchEvidence: { intent: 'ubicacion' }, botKey: 'autos_location_close' };
      }
      return { text: 'Va 👌 ¿Te interesa más precio, financiamiento, disponibilidad o ubicación?', nextStage: 'autos_need_topic', botKey: 'autos_need_topic_repeat' };
    }

    if (stage === 'autos_finance_preference') {
      if (hasAny(t, ['cuota'])) {
        return { text: 'Excelente ✅ Te armo opciones con cuota baja. ¿Te queda mejor hoy o mañana para venir?', nextStage: 'capture_contact', patchEvidence: { intent: 'financiamiento', tags: ['cuota_baja'] }, botKey: 'autos_finance_cuota_close' };
      }
      if (hasAny(t, ['prima'])) {
        return { text: 'Perfecto ✅ Te armo opciones con prima baja. ¿Te queda mejor hoy o mañana para pasar?', nextStage: 'capture_contact', patchEvidence: { intent: 'financiamiento', tags: ['prima_baja'] }, botKey: 'autos_finance_prima_close' };
      }
      return { text: 'Para guiarte mejor: ¿preferís cuota mensual baja o prima baja?', nextStage: 'autos_finance_preference', botKey: 'autos_finance_pref_repeat' };
    }

    if (stage === 'autos_close_timeframe') {
      return { text: 'De una ✅ ¿Querés visita esta semana o la próxima? (Así te lo dejo listo.)', nextStage: 'capture_contact', botKey: 'autos_close_timeframe' };
    }
  }

  if (industry === 'dental') {
    if (stage === 'dental_need_service') {
      if (hasAny(t, ['blanque', 'blanqueamiento', 'blanqueo'])) {
        return { text: 'Sí 😊 Hacemos blanqueamiento. Normalmente 1–2 sesiones (depende del caso). ¿Lo querés por evento pronto o solo estética?', nextStage: 'dental_close_timeframe', patchEvidence: { intent: 'blanqueamiento' }, botKey: 'dental_whitening_probe' };
      }
      if (hasAny(t, ['implante', 'implantes', 'implant', 'implam', 'implan'])) {
        return { text: 'Perfecto 😊 Para implantes se hace valoración y radiografía. ¿Te queda mejor cita esta semana o la próxima?', nextStage: 'capture_contact', patchEvidence: { intent: 'implantes' }, botKey: 'dental_implants_close' };
      }
      if (hasAny(t, ['dolor', 'urg', 'urgencia', 'emergencia', 'me duele'])) {
        return { text: 'Entiendo 😬 ¿El dolor es fuerte hoy o leve desde hace días? Si querés te aparto hoy o mañana.', nextStage: 'capture_contact', patchEvidence: { intent: 'urgencia' }, botKey: 'dental_pain_close' };
      }
      if (hasAny(t, ['limpieza', 'limpiesa', 'chequeo', 'revision'])) {
        return { text: 'Listo 😊 Limpieza/chequeo. ¿Te queda mejor esta semana o la próxima?', nextStage: 'capture_contact', patchEvidence: { intent: 'limpieza/chequeo' }, botKey: 'dental_clean_close' };
      }
      return { text: 'Para guiarte rápido: escribí “blanqueamiento”, “implantes”, “limpieza” o “dolor”.', nextStage: 'dental_need_service', botKey: 'dental_need_service_help' };
    }

    if (stage === 'dental_close_timeframe') {
      return { text: 'Perfecto 😊 ¿Te queda mejor esta semana o la próxima? Luego te pido nombre + número.', nextStage: 'capture_contact', botKey: 'dental_timeframe_to_contact' };
    }
  }

  if (industry === 'builders') {
    if (stage === 'builders_need_project') {
      return { text: 'Perfecto 👌 ¿En qué zona es el trabajo y para cuándo lo querés? (Esta semana o la próxima.)', nextStage: 'capture_contact', patchEvidence: { intent: 'proyecto' }, botKey: 'builders_close_probe' };
    }
    if (stage === 'builders_close_timeframe') {
      return { text: 'De una ✅ ¿Te queda mejor esta semana o la próxima para visita?', nextStage: 'capture_contact', botKey: 'builders_close_timeframe' };
    }
  }

  if (stage === 'need_intent') {
    return { text: 'Listo. ¿Querés ver cómo capturamos leads, cómo respondemos rápido, o cómo agendamos citas?', nextStage: 'capture_contact', patchEvidence: { intent: evidence.intent || 'consulta' }, botKey: 'general_show_value' };
  }

  if (stage === 'capture_contact') {
    const phone = parsePhone(userText);
    const name = parseName(userText);
    const pref = parsePreferredTime(userText);

    const nextCaptured = {
      name: evidence.captured?.name || name,
      phone: evidence.captured?.phone || phone,
      preferredTime: evidence.captured?.preferredTime || pref,
    };

    const missing: string[] = [];
    if (!nextCaptured.name) missing.push('name');
    if (!nextCaptured.phone) missing.push('phone');
    if (!nextCaptured.preferredTime) missing.push('preferredTime');

    if (missing.length > 0) {
      return {
        ...askMissingContact(missing),
        patchEvidence: { leadCaptured: Boolean(nextCaptured.phone || nextCaptured.name), captured: nextCaptured },
      };
    }

    // ✅ listo -> done + appointment card + labels “Booked”
    const whenText = nextCaptured.preferredTime;
    const summary = buildSummaryLine(industry, { ...evidence, captured: nextCaptured });

    const statusLabel = 'Booked ✅';
    const scheduledLabel = `Programado: ${whenText}${whenText === 'tarde' ? ' (preferencia: tarde)' : ''}`;

    return {
      text: 'Perfecto ✅ Quedó agendada la preferencia. (Demo) En producción: guardamos el lead, agendamos y un asesor confirma disponibilidad.',
      nextStage: 'done',
      patchEvidence: {
        leadCaptured: true,
        captured: nextCaptured,
        summaryLine: summary,

        statusLabel,
        scheduledLabel,
        nextAction: 'Confirmación enviada',
        nextAutomation: '✅ Recordatorio 24h (demo)',

        appointment: {
          id: uid(),
          whenText,
          summary,
          captured: {
            name: String(nextCaptured.name),
            phone: String(nextCaptured.phone),
            preferredTime: String(nextCaptured.preferredTime),
          },
        },
      },
      botKey: 'capture_done_once',
    };
  }

  return { text: 'Dale 👌 Contame un poquito más y te guío.', nextStage: stage, botKey: 'fallback' };
}

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/80">
      {label}
    </span>
  );
}

function StatCard({ title, value, sub }: { title: string; value: ReactNode; sub?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-4">
      <div className="text-[11px] tracking-[0.25em] uppercase text-white/55">{title}</div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
      {sub ? <div className="mt-1 text-sm text-white/60">{sub}</div> : null}
    </div>
  );
}

function AppointmentResult({ appt }: { appt: AppointmentCard }) {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4">
      <div className="text-[11px] tracking-[0.25em] uppercase text-white/60">Appointment creado</div>
      <div className="mt-2 text-base font-semibold">✅ {appt.whenText}</div>
      <div className="mt-2 text-sm text-white/70">
        <div><span className="text-white/50">Nombre:</span> {appt.captured.name}</div>
        <div><span className="text-white/50">Tel:</span> {appt.captured.phone}</div>
        <div><span className="text-white/50">Preferencia:</span> {appt.captured.preferredTime}</div>
      </div>
      <div className="mt-3 rounded-xl border border-white/10 bg-[#0b0b0b] p-3 text-sm text-white/75">
        <div className="text-white/50 text-xs tracking-[0.25em] uppercase">Resumen</div>
        <div className="mt-1">{appt.summary}</div>
      </div>
    </div>
  );
}

export default function Demo() {
  const { language } = useLanguage(); // por ahora no lo usamos
  const { goTo } = useNavigation();

  const [industry, setIndustry] = useState<Industry>(() => getQueryIndustry());
  const [config, setConfig] = useState<DemoConfig>(() => initialConfig(industry));
  const [mode, setMode] = useState<Mode>('setup');

  const [stage, setStage] = useState<Stage>('idle');
  const [messages, setMessages] = useState<DemoMessage[]>([]);
  const [input, setInput] = useState('');

  const [evidence, setEvidence] = useState<Evidence>({ leadCaptured: false, tags: [] });
  const lastBotKeyRef = useRef<string>('');
  const containerRef = useRef<HTMLDivElement | null>(null);

  const headerTitle = useMemo(() => titleFor(industry), [industry]);

  useEffect(() => {
    const next = getQueryIndustry();
    setIndustry(next);
    setConfig(initialConfig(next));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length]);

  const resetConversation = (nextIndustry?: Industry) => {
    const ind = nextIndustry ?? industry;
    setIndustry(ind);
    setConfig(initialConfig(ind));
    setMode('setup');
    setStage('idle');
    setMessages([]);
    setInput('');
    setEvidence({ leadCaptured: false, tags: [] });
    lastBotKeyRef.current = '';
  };

  const startChat = () => {
    setMode('chat');
    setStage('greeted');
    const greet = `¡Hola! 😊 Soy el asistente de ${config.brandName}. ¿En qué te puedo ayudar hoy?`;
    setMessages([{ id: uid(), role: 'assistant', text: greet, ts: Date.now() }]);
    lastBotKeyRef.current = 'greeting';
  };

  const setIndustryAndURL = (next: Industry) => {
    const params = new URLSearchParams(window.location.search);
    params.set('industry', next);
    const nextUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', nextUrl);
    resetConversation(next);
  };

  const handleSend = () => {
    const raw = input.trim();
    if (!raw) return;

    const t0 = performance.now();

    const userMsg: DemoMessage = { id: uid(), role: 'user', text: raw, ts: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    const detected = detectIntent(industry, raw);

    // evidencia “local”
    const nextEv0 = computeClose(industry, mergeEvidence(evidence, detected));
    nextEv0.slaMs = Math.max(1, Math.round(performance.now() - t0));
    nextEv0.summaryLine = buildSummaryLine(industry, nextEv0);

    const reply = botReply({
      industry,
      stage,
      userText: raw,
      config,
      evidence: nextEv0,
    });

    if (reply.botKey && reply.botKey === lastBotKeyRef.current) {
      setStage(reply.nextStage);
      setEvidence(nextEv0);
      return;
    }
    lastBotKeyRef.current = reply.botKey;

    const botMsg: DemoMessage = { id: uid(), role: 'assistant', text: reply.text, ts: Date.now() };
    setMessages((prev) => [...prev, botMsg]);
    setStage(reply.nextStage);

    const nextEv1 = computeClose(industry, mergeEvidence(nextEv0, reply.patchEvidence || {}));
    nextEv1.summaryLine = buildSummaryLine(industry, nextEv1);
    setEvidence(nextEv1);
  };

  const isBooked = Boolean(evidence.appointment);

  return (
    <main className="min-h-[calc(100vh-120px)] bg-[#0f0f0f] text-white">
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-semibold">{headerTitle}</h1>
              <p className="text-white/70">
                Selecciona un nicho y prueba la conversación. <span className="text-white/50">(Sin botones pregrabados; todo por texto.)</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button type="button" onClick={() => setIndustryAndURL('dental')}
                className={`px-4 py-2 border text-xs tracking-[0.25em] uppercase ${industry === 'dental' ? 'border-white text-white' : 'border-white/20 text-white/70 hover:text-white'}`}>
                Dental
              </button>
              <button type="button" onClick={() => setIndustryAndURL('autos')}
                className={`px-4 py-2 border text-xs tracking-[0.25em] uppercase ${industry === 'autos' ? 'border-white text-white' : 'border-white/20 text-white/70 hover:text-white'}`}>
                Autos
              </button>
              <button type="button" onClick={() => setIndustryAndURL('builders')}
                className={`px-4 py-2 border text-xs tracking-[0.25em] uppercase ${industry === 'builders' ? 'border-white text-white' : 'border-white/20 text-white/70 hover:text-white'}`}>
                Builders
              </button>
              <button type="button" onClick={() => setIndustryAndURL('general')}
                className={`px-4 py-2 border text-xs tracking-[0.25em] uppercase ${industry === 'general' ? 'border-white text-white' : 'border-white/20 text-white/70 hover:text-white'}`}>
                General
              </button>

              <button type="button" onClick={() => goTo('/')}
                className="ml-2 px-4 py-2 border border-white/20 text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white">
                Volver
              </button>
            </div>
          </div>

          {mode === 'setup' ? (
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 p-6 rounded-2xl border border-white/10 bg-[#111111]">
                <h2 className="text-sm tracking-[0.3em] uppercase text-white/70">Configura tu demo</h2>
                <p className="mt-2 text-white/70">
                  Esto simula cómo quedaría el bot con tu marca. Luego: <span className="text-white">“Listo. Ahora escribí como un cliente real.”</span>
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-xs tracking-[0.25em] uppercase text-white/60">Nombre del negocio</span>
                    <input
                      value={config.brandName}
                      onChange={(e) => setConfig((p) => ({ ...p, brandName: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-white/10 outline-none focus:border-white/30"
                      placeholder="Ej. Clínica Sonrisa"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-xs tracking-[0.25em] uppercase text-white/60">Dirección / zona</span>
                    <input
                      value={config.address}
                      onChange={(e) => setConfig((p) => ({ ...p, address: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-white/10 outline-none focus:border-white/30"
                      placeholder="Ej. Col. Palmira, Tegucigalpa"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-xs tracking-[0.25em] uppercase text-white/60">Horario Lun–Vie</span>
                    <input
                      value={config.hoursMonFri}
                      onChange={(e) => setConfig((p) => ({ ...p, hoursMonFri: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-white/10 outline-none focus:border-white/30"
                      placeholder="8am–5pm"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-xs tracking-[0.25em] uppercase text-white/60">Horario Sábado</span>
                    <input
                      value={config.hoursSat}
                      onChange={(e) => setConfig((p) => ({ ...p, hoursSat: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-white/10 outline-none focus:border-white/30"
                      placeholder="9am–1pm"
                    />
                  </label>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={startChat}
                    className="px-6 py-3 bg-white text-[#0f0f0f] font-semibold uppercase tracking-[0.2em] text-xs"
                  >
                    Iniciar demo
                  </button>
                  <div className="text-white/60 text-sm">
                    Ejemplos: <span className="text-white">“blanqueamiento”</span>, <span className="text-white">“financiamiento”</span>, <span className="text-white">“quiero cita”</span>.
                  </div>
                </div>
              </div>

              <aside className="p-6 rounded-2xl border border-white/10 bg-[#111111]">
                <h3 className="text-sm tracking-[0.3em] uppercase text-white/70">Qué se simula</h3>
                <ul className="mt-4 space-y-3 text-white/75 text-sm">
                  <li>Personalización instantánea (marca, horario, dirección)</li>
                  <li>Detección de intención + confianza (demo)</li>
                  <li>Stage machine (no se repite)</li>
                  <li>Booked ✅ + Appointment card (resultado)</li>
                </ul>
                <p className="mt-4 text-white/50 text-xs">
                  En producción: esto sale de DB (org_settings/org_kb/leads/messages/outbox) + workers.
                </p>
              </aside>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#111111] overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                  <div className="text-xs tracking-[0.3em] uppercase text-white/70">Conversación</div>
                  <div className="text-xs text-white/50">industry: {industry} | stage: {stage}</div>
                </div>

                <div ref={containerRef} className="h-[520px] overflow-y-auto px-6 py-6 space-y-4">
                  {messages.map((m) => (
                    <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={[
                          'max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
                          m.role === 'user'
                            ? 'bg-white text-[#0f0f0f]'
                            : 'bg-[#0f0f0f] text-white border border-white/10',
                        ].join(' ')}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-4 border-t border-white/10 flex items-center gap-3">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                    className="flex-1 px-4 py-3 rounded-xl bg-[#0f0f0f] border border-white/10 outline-none focus:border-white/30"
                    placeholder="Escribe un mensaje..."
                  />
                  <button
                    type="button"
                    onClick={handleSend}
                    className="px-6 py-3 bg-white text-[#0f0f0f] font-semibold uppercase tracking-[0.2em] text-xs"
                  >
                    Enviar
                  </button>
                </div>
              </div>

              <aside className="rounded-2xl border border-white/10 bg-[#111111] p-6">
                <div className="flex items-center justify-between">
                  <div className="text-xs tracking-[0.3em] uppercase text-white/70">Evidencia</div>
                  <div className="text-xs text-white/50">{config.brandName}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill label={`Intent: ${evidence.intent || '—'}`} />
                  <Pill label={`Confianza: ${evidence.confidence ?? '—'}%`} />
                  <Pill label={`SLA: ${evidence.slaMs ?? '—'}ms`} />
                </div>

                <div className="mt-4 grid gap-3">
                  <StatCard
                    title="Lead"
                    value={evidence.leadCaptured ? 'Capturado ✅' : 'Aún no'}
                    sub={evidence.leadCaptured ? 'Nombre/teléfono detectado' : 'Falta nombre/teléfono'}
                  />

                  {/* ✅ Antes del cierre: Próximo paso | Después: Estado */}
                  {!isBooked ? (
                    <StatCard
                      title="Próximo paso"
                      value={evidence.nextAction || '—'}
                      sub={evidence.intent ? 'Para cerrar y agendar' : 'Detectar intención'}
                    />
                  ) : (
                    <StatCard
                      title="Estado"
                      value={evidence.statusLabel || 'Booked ✅'}
                      sub={evidence.scheduledLabel || 'Programado'}
                    />
                  )}

                  <StatCard
                    title="Automatización"
                    value={evidence.nextAutomation || '—'}
                    sub={isBooked ? 'post-booking (recordatorios)' : 'conversión (follow-ups)'}
                  />

                  <StatCard
                    title="Resumen"
                    value={evidence.summaryLine || '—'}
                    sub="1 línea para el dueño"
                  />
                </div>

                {evidence.appointment ? <AppointmentResult appt={evidence.appointment} /> : null}

                <div className="mt-6 flex gap-2">
                  <button
                    type="button"
                    onClick={() => resetConversation(industry)}
                    className="px-4 py-2 border border-white/20 text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white"
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStage('greeted');
                      setMessages([{ id: uid(), role: 'assistant', text: `¡Hola! 😊 Soy el asistente de ${config.brandName}. ¿En qué te puedo ayudar hoy?`, ts: Date.now() }]);
                      setInput('');
                      setEvidence({ leadCaptured: false, tags: [] });
                      lastBotKeyRef.current = 'greeting';
                    }}
                    className="px-4 py-2 border border-white/20 text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white"
                  >
                    Nuevo lead
                  </button>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
