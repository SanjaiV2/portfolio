import { useState } from "react";

// Composant Navbar
// Props reçues : menuOuvert et setMenuOuvert viennent de App.jsx
function Navbar({ menuOuvert, setMenuOuvert }) {

  // Les liens de navigation dans un tableau
  // Comme ça si on veut en ajouter un, c'est facile
  const liens = ["Accueil", "À propos", "Compétences", "Projets", "Contact"];

  return (
    <nav className="navbar">
      <div className="logo">Sanjai.dev</div>

      <ul className={`nav-links ${menuOuvert ? "ouvert" : ""}`}>
        {/* On boucle sur le tableau avec .map() */}
        {liens.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace("à ", "").replace(" ", "")}`}
              onClick={() => setMenuOuvert(false)}
            >
              {item}
            </a>
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