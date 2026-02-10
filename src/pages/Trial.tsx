// src/pages/Trial.tsx  (LANDING)
export default function Trial() {
  const dashboardUrl =
    import.meta.env.VITE_DASHBOARD_URL || 'https://gentle-chaja-c50980.netlify.app';

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `${dashboardUrl}?from=trial`;
  }

  return (
    <main style={{ padding: '80px 20px', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontSize: 44 }}>Prueba DentalConnect gratis 7 días</h1>
      <p style={{ opacity: 0.8 }}>
        Deja tus datos y mira el dashboard en acción.
      </p>

      <form onSubmit={onSubmit} style={{ marginTop: 24, maxWidth: 520 }}>
        <input placeholder="Nombre" required />
        <input placeholder="Email" required />
        <input placeholder="Clínica" />
        <button>Ver demo</button>
      </form>
    </main>
  );
}
