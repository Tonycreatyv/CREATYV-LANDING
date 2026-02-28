import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Dental() {
  return (
    <main className="lp">
      <nav className="lp-nav">
        <div className="lp-container lp-nav-inner">
          <Link to="/" className="lp-brand">
            <span className="lp-brand-mark" />
            <span>CREATYV</span>
          </Link>

          <div className="lp-nav-links">
            <Link className="lp-nav-a" to="/">
              Inicio
            </Link>
            <a className="lp-nav-a" href="#features">
              Features
            </a>
            <a className="lp-nav-a" href="#trial">
              Trial
            </a>
          </div>

          <div className="lp-nav-cta">
            <a href="#trial" className="lp-btn lp-btn-primary lp-btn-sm">
              Trial 7 días
            </a>
          </div>
        </div>
      </nav>

      <header className="lp-page-hero">
        <div className="lp-container">
          <div className="lp-badge">DentalConnect</div>
          <h1 className="lp-h1">Soporte comercial por Messenger para clínicas dentales</h1>
          <p className="lp-lead">
            Responde preguntas comunes, captura leads y deja todo listo para que tu equipo confirme.
            No prometemos “cita agendada” sin hora/nombre.
          </p>

          <div className="lp-cta-row">
            <a className="lp-btn lp-btn-primary" href="#trial">
              Probar gratis 7 días
            </a>
            <Link className="lp-btn lp-btn-ghost" to="/">
              Volver
            </Link>
          </div>
        </div>
      </header>

      <section id="features" className="lp-section">
        <div className="lp-container">
          <h2 className="lp-h2">Lo esencial para una clínica</h2>

          <div className="lp-grid-3">
            <div className="lp-card">
              <h3 className="lp-h3">Registro de conversaciones</h3>
              <p className="lp-muted">Historial por paciente para seguimiento y control.</p>
            </div>
            <div className="lp-card">
              <h3 className="lp-h3">Captura de leads</h3>
              <p className="lp-muted">Nombre/teléfono cuando el usuario los deja.</p>
            </div>
            <div className="lp-card">
              <h3 className="lp-h3">Escalado al humano</h3>
              <p className="lp-muted">Cuando toca confirmar o cotizar, lo toma tu equipo.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="trial" className="lp-section lp-section-soft">
        <div className="lp-container">
          <h2 className="lp-h2">Trial 7 días</h2>
          <p className="lp-muted">
            Activación: conectamos tu página de Facebook (Messenger) + bot + panel esencial.
          </p>

          <div className="lp-card">
            <h3 className="lp-h3">Qué incluye</h3>
            <ul className="lp-list">
              <li>Bot comercial (respuestas inteligentes + KB)</li>
              <li>Captura de leads + historial</li>
              <li>Panel simple (quién preguntó qué)</li>
            </ul>

            <a className="lp-btn lp-btn-primary" href="mailto:contact@creatyv.io">
              Activar por correo
            </a>

            <div className="lp-subtext">Cancelas cuando quieras.</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
