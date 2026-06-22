import { NavLink } from "react-router-dom";

// Composant Navbar
// Props reçues : menuOuvert et setMenuOuvert viennent de App.jsx
function Navbar({ menuOuvert, setMenuOuvert }) {

  // Les liens de navigation, chacun pointe vers sa propre page
  const liens = [
    { label: "Accueil",     to: "/" },
    { label: "À propos",    to: "/apropos" },
    { label: "Compétences", to: "/competences" },
    { label: "Projets",     to: "/projets" },
    { label: "Contact",     to: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">Sanjai.dev</div>

      <ul className={`nav-links ${menuOuvert ? "ouvert" : ""}`}>
        {liens.map((lien) => (
          <li key={lien.to}>
            <NavLink
              to={lien.to}
              end={lien.to === "/"}
              className={({ isActive }) => (isActive ? "nav-link-actif" : "")}
              onClick={() => setMenuOuvert(false)}
            >
              {lien.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Bouton hamburger pour mobile */}
      <button
        className="hamburger"
        onClick={() => setMenuOuvert(!menuOuvert)}
        aria-label="Menu"
      >
        {menuOuvert ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;
