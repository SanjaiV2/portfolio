import { Link } from "react-router-dom";

// Composant Hero
// Grande section d'accueil : nom, poste, et deux appels à l'action

function Accueil() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <span className="hero-badge">N°01 · Dev</span>

        <h1 className="hero-nom">
          RAMASAMY <span className="accent">Sanjai</span>
        </h1>

        <h3 className="hero-poste">Étudiant en 2ᵉ année de BUT Informatique</h3>

        <p className="hero-desc">
          À la recherche d'une alternance pour 2026/2027
        </p>

        <p className="hero-domaines">
          Développement logiciel <span className="hero-sep">•</span> Système et Réseaux
        </p>

        <p className="hero-signature">
          Esprit d'équipe sur le terrain de badminton, même rigueur derrière un clavier.
        </p>

        <div className="hero-btns">
          <Link to="/apropos" className="btn btn-outline">Voir Présentation</Link>
          <Link to="/projets" className="btn">Voir mes projets</Link>
        </div>
      </div>
    </section>
  );
}

export default Accueil;
