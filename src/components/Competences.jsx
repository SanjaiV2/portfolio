import { useState } from "react";

// On importe les données depuis le dossier data/
// Le ".." remonte d'un dossier (de components/ vers src/)
import competences from "../data/competences";

// Petit composant pour une seule carte de compétence
// On le met ici car il est uniquement utilisé dans Competences.jsx
function CarteCompetence({ competence }) {
  // useState pour l'animation au survol
  const [survole, setSurvole] = useState(false);

  return (
    <div
      className={`skill-card ${survole ? "animee" : ""}`}
      onMouseEnter={() => setSurvole(true)}
      onMouseLeave={() => setSurvole(false)}
    >
      <span className="skill-icone">{competence.icone}</span>
      <h3>{competence.titre}</h3>
      <p>{competence.details}</p>
    </div>
  );
}

// Composant principal de la section compétences
function Competences() {
  return (
    <section id="compétences" className="container">
      <h2 className="section-title">Mes Compétences</h2>
      <div className="skills-grid">
        {/* On boucle sur le tableau importé depuis data/competences.js */}
        {competences.map((competence) => (
          <CarteCompetence key={competence.id} competence={competence} />
        ))}
      </div>
    </section>
  );
}

export default Competences;