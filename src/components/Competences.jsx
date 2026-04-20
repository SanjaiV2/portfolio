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
  const outils = [
    {
      nom: "Canva",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      alt: "Logo Canva"
    },
    {
      nom: "Office 365",
      logo: "https://cdn.simpleicons.org/libreoffice/18A303",
      alt: "Logo Office 365"
    },
    {
      nom: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      alt: "Logo VS Code"
    },
    {
      nom: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "Logo GitHub"
    },
    {
      nom: "VirtualBox",
      logo: "https://cdn.simpleicons.org/virtualbox/2F61B4",
      alt: "Logo VirtualBox"
    },
    {
      nom: "SolidWorks",
      logo: "https://cdn.simpleicons.org/dassaultsystemes/ff2c2c",
      alt: "Logo SolidWorks"
    },
    {
      nom: "UTM",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      alt: "Logo UTM"
    },
    {
      nom: "Wireshark",
      logo: "https://cdn.simpleicons.org/wireshark/1679A7",
      alt: "Logo Wireshark"
    }
  ];

  return (
    <section id="compétences" className="container">
      <h2 className="section-title">Mes Compétences</h2>
      <div className="skills-grid">
        {/* On boucle sur le tableau importé depuis data/competences.js */}
        {competences.map((competence) => (
          <CarteCompetence key={competence.id} competence={competence} />
        ))}
      </div>

      {/* Section des outils qui défilent */}
      <div className="outils-section">
        <h3 className="outils-title">Mes Outils</h3>
        <div className="outils-marquee">
          <div className="outils-track">
            {/* Première copie pour l'effet infini */}
            {outils.map((outil, index) => (
              <div key={`first-${index}`} className="outil-item">
                <img src={outil.logo} alt={outil.alt} className="outil-logo" />
                <span className="outil-nom">{outil.nom}</span>
              </div>
            ))}
            {/* Deuxième copie pour l'effet infini */}
            {outils.map((outil, index) => (
              <div key={`second-${index}`} className="outil-item">
                <img src={outil.logo} alt={outil.alt} className="outil-logo" />
                <span className="outil-nom">{outil.nom}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competences;