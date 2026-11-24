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

        <h3 className="hero-poste">Étudiant en 3ᵉ année de BUT Informatique</h3>

        <p className="hero-desc">
          À la recherche d'un stage de fin d'études à partir du 08/03/2027, d'une durée de 14 à 16 semaines
        </p>

        <p className="hero-domaines">
          Développement logiciel <span className="hero-sep">•</span> Système et Réseaux
        </p>

        <p className="hero-signature">
          La rigueur que j'applique à mon code, je l'applique aussi au reste.
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
