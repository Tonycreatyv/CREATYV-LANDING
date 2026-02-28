import { useState } from "react";

type Props = {
  intent?: string;
  title?: string;
  subtitle?: string;
};

export default function FAQWidget({
  intent = "dental_interest",
  title = "¿Tienes dudas?",
  subtitle = "Escribe tu pregunta y te respondemos al instante 👇",
}: Props) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState<string | null>(null);

  async function sendFAQ() {
    const q = question.trim();
    if (!q) return;

    setLoading(true);
    setReply(null);

    try {
      const res = await fetch("/functions/v1/marketing-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: q,
          intent,
        }),
      });

      const data = await res.json().catch(() => null);
      setReply(data?.reply || "Gracias 😊 Un asesor revisará tu consulta.");
      setQuestion("");
    } catch {
      setReply("No pude enviar tu pregunta. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="lp-card">
      <h3 className="lp-h3">{title}</h3>
      <p className="lp-muted">{subtitle}</p>

      <div className="lp-faq">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Escribe tu pregunta…"
          className="lp-input"
        />
        <button
          onClick={sendFAQ}
          className="lp-btn lp-btn-primary lp-btn-sm"
          disabled={loading || !question.trim()}
        >
          {loading ? "Enviando…" : "Enviar"}
        </button>
      </div>

      {reply && <div className="lp-reply">{reply}</div>}

      <div className="lp-subtext">
        Endpoint: <code>/functions/v1/marketing-bot</code>
      </div>
    </div>
  );
}
