import { Link } from "react-router-dom";

// Composant Hero
// C'est la grande section d'accueil avec le nom et les boutons

function Accueil() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <h4 className="hero-tag">Bonjour, je suis</h4>
        <h1 className="hero-nom">RAMASAMY Sanjai</h1>
        <h3 className="hero-poste">Étudiant en 2e année de BUT Informatique</h3>
        <p className="hero-desc">
          À la recherche d'une alternance pour 2026
        </p>
        <p className="hero-domaines">
          Développement logiciel <span className="hero-sep">•</span> Système et Réseaux
        </p>
        <div className="hero-btns">
          <Link to="/projets" className="btn">Voir mes projets</Link>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Mon CV</a>
        </div>
      </div>
    </section>
  );
}

export default Accueil;