import { useState } from "react";
import competences from "../data/competences";

// Une ligne technologie : logo (ou emoji de repli) + barre de niveau
// `but` vaut "but1" ou "but2" et sélectionne quel pourcentage piloter la barre
function TechItem({ tech, index, but }) {
  return (
    <div className="tech-item" style={{ animationDelay: `${index * 0.06}s` }}>
      <div className="tech-icone">
        {tech.logo ? (
          <img src={tech.logo} alt={tech.nom} />
        ) : (
          <span className="tech-emoji">{tech.emoji}</span>
        )}
      </div>
      <span className="tech-nom">{tech.nom}</span>
      <div className="tech-niveau-bar">
        <div className="tech-niveau-fill" style={{ width: `${tech[but]}%` }} />
      </div>
    </div>
  );
}

// Une carte UE en accordéon, avec un sélecteur BUT1 / BUT2 par carte
function UECard({ ue }) {
  const [ouvert, setOuvert] = useState(false);
  const [but, setBut] = useState("but2");

  return (
    <div className={`ue-card ${ouvert ? "ue-card--ouvert" : ""}`}>
      <div
        className="ue-header"
        role="button"
        tabIndex={0}
        onClick={() => setOuvert(!ouvert)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOuvert(!ouvert);
          }
        }}
        aria-expanded={ouvert}
      >
        <div className="ue-header-top">
          <span className="ue-badge">{ue.code}</span>
          <span className="ue-titre">{ue.titre}</span>
          <span className="ue-chevron">▾</span>
        </div>

        <div className="ue-header-bottom">
          <span className="but-toggle" role="group" aria-label="Choisir l'année">
            <button
              type="button"
              className={`but-toggle-btn ${but === "but1" ? "but-toggle-btn--actif" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setBut("but1");
              }}
            >
              BUT1
            </button>
            <button
              type="button"
              className={`but-toggle-btn ${but === "but2" ? "but-toggle-btn--actif" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setBut("but2");
              }}
            >
              BUT2
            </button>
          </span>
        </div>
      </div>

      {ouvert && (
        <div className="ue-body">
          <div className="ue-tech-grid">
            {ue.technologies.map((tech, i) => (
              <TechItem key={tech.nom} tech={tech} index={i} but={but} />
            ))}
          </div>

          <div className="ue-apprentissage">
            <span className="ue-apprentissage-label">Ce que j'ai appris</span>
            <p>{ue.apprentissage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

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
    <section id="competences" className="container section-competences">
      <div className="section-header">
        <h2 className="section-title">Mes Compétences</h2>
        <p className="section-subtitle">
          Cette page présente l'évolution de mes connaissances entre le BUT1 et le BUT2 ainsi que les principaux outils et technologies que j'ai pu découvrir.
        </p>
      </div>

      <div className="ue-list">
        <div className="ue-col">
          {competences
            .filter((_, i) => i % 2 === 0)
            .map((ue) => (
              <UECard key={ue.id} ue={ue} />
            ))}
        </div>
        <div className="ue-col">
          {competences
            .filter((_, i) => i % 2 === 1)
            .map((ue) => (
              <UECard key={ue.id} ue={ue} />
            ))}
        </div>
      </div>

      {/* Section des outils qui défilent */}
      <div className="outils-section">
        <h3 className="outils-title">Mes Outils</h3>
        <div className="outils-marquee">
          <div className="outils-track">
            {outils.map((outil, index) => (
              <div key={`first-${index}`} className="outil-item">
                <img src={outil.logo} alt={outil.alt} className="outil-logo" />
                <span className="outil-nom">{outil.nom}</span>
              </div>
            ))}
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
