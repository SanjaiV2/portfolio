import { useState } from "react";

// On importe les données depuis le dossier data/
import projets from "../data/projets";

// Petit composant pour une seule carte de projet
function CarteProjet({ projet }) {
  const [survole, setSurvole] = useState(false);

  return (
    <div
      className={`project-card ${survole ? "survole" : ""}`}
      onMouseEnter={() => setSurvole(true)}
      onMouseLeave={() => setSurvole(false)}
    >
      <h3>{projet.titre}</h3>
      <p>{projet.description}</p>

      {/* On affiche les tags avec un .map() */}
      <div className="tags">
        {projet.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <a href={projet.lien} className="link">
        GitHub →
      </a>
    </div>
  );
}

// Composant principal de la section projets
function Projets() {
  return (
    <section id="projets" className="container">
      <h2 className="section-title">Mes Projets</h2>
      <div className="projects-grid">
        {/* On boucle sur le tableau importé depuis data/projets.js */}
        {projets.map((projet) => (
          <CarteProjet key={projet.id} projet={projet} />
        ))}
      </div>
    </section>
  );
}

export default Projets;