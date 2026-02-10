import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [log, setLog] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hola 👋 ¿Qué duda tienes sobre DentalConnect?" },
  ]);

  async function send() {
    const text = q.trim();
    if (!text) return;

    setLog((l) => [...l, { role: "user", text }]);
    setQ("");

    try {
      const res = await fetch("/functions/v1/marketing-bot", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: text, intent: "dental_interest" }),
      });

      const data = await res.json().catch(() => null);
      setLog((l) => [...l, { role: "bot", text: data?.reply || "Gracias. Un asesor te escribe pronto ✅" }]);
    } catch {
      setLog((l) => [...l, { role: "bot", text: "No pude responder ahora. Intenta de nuevo en un minuto." }]);
    }
  }

  return (
    <div style={wrap}>
      {open && (
        <div style={panel}>
          <div style={head}>
            <div style={{ fontWeight: 800 }}>Creatyv</div>
            <button style={xBtn} onClick={() => setOpen(false)}>×</button>
          </div>

          <div style={msgs}>
            {log.map((m, i) => (
              <div key={i} style={m.role === "user" ? bubbleUser : bubbleBot}>
                {m.text}
              </div>
            ))}
          </div>

          <div style={inputRow}>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Escribe tu pregunta…"
              style={input}
              onKeyDown={(e) => {
                if (e.key === "Enter") send();
              }}
            />
            <button style={sendBtn} onClick={send}>Enviar</button>
          </div>
        </div>
      )}

      <button style={fab} onClick={() => setOpen((v) => !v)}>
        {open ? "—" : "💬"}
      </button>
    </div>
  );
}

const wrap: React.CSSProperties = { position: "fixed", right: 18, bottom: 18, zIndex: 9999 };
const panel: React.CSSProperties = {
  width: 340,
  height: 420,
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(10,10,10,0.92)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
  overflow: "hidden",
  marginBottom: 12,
  display: "flex",
  flexDirection: "column",
};
const head: React.CSSProperties = {
  padding: "12px 14px",
  borderBottom: "1px solid rgba(255,255,255,0.10)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "white",
};
const xBtn: React.CSSProperties = {
  width: 34,
  height: 34,
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "transparent",
  color: "white",
  cursor: "pointer",
  fontSize: 18,
};
const msgs: React.CSSProperties = {
  flex: 1,
  padding: 12,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  overflow: "auto",
};
const bubbleBot: React.CSSProperties = {
  alignSelf: "flex-start",
  padding: "10px 12px",
  borderRadius: 14,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.10)",
  color: "rgba(255,255,255,0.92)",
  maxWidth: "86%",
  lineHeight: 1.35,
};
const bubbleUser: React.CSSProperties = {
  alignSelf: "flex-end",
  padding: "10px 12px",
  borderRadius: 14,
  background: "white",
  color: "black",
  maxWidth: "86%",
  lineHeight: 1.35,
  fontWeight: 600,
};
const inputRow: React.CSSProperties = {
  padding: 12,
  borderTop: "1px solid rgba(255,255,255,0.10)",
  display: "flex",
  gap: 10,
};
const input: React.CSSProperties = {
  flex: 1,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  padding: "10px 12px",
  outline: "none",
};
const sendBtn: React.CSSProperties = {
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "white",
  color: "black",
  fontWeight: 900,
  padding: "10px 12px",
  cursor: "pointer",
};
const fab: React.CSSProperties = {
  width: 56,
  height: 56,
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.10)",
  color: "white",
  cursor: "pointer",
  fontSize: 18,
  fontWeight: 900,
};
