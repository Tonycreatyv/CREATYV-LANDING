import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <span className="brand-mark" />
          <span>CREATYV</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-a active" : "nav-a")}>
            Inicio
          </NavLink>
          <NavLink to="/dental" className={({ isActive }) => (isActive ? "nav-a active" : "nav-a")}>
            DentalConnect
          </NavLink>
          <a className="nav-a" href="#como-funciona">
            Cómo funciona
          </a>
          <a className="nav-a" href="#contacto">
            Contacto
          </a>
        </div>

        <div className="nav-cta">
          <Link className="btn btn-small btn-primary" to="/dental">
            Trial 7 días
          </Link>
        </div>
      </div>
    </nav>
  );
}
