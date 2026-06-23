import { useState } from "react";
import { Link } from "react-router-dom";
import projets from "../data/projets";

function ProjetCard({ projet }) {
  const apercu = projet.technologies.slice(0, 4);
  const vignette = projet.vignette || projet.images?.[0];

  return (
    <Link to={`/projets/${projet.id}`} className="projet-card">
      <div className="projet-thumbnail">
        {vignette && <img src={vignette} alt={projet.titre} />}
      </div>

      <div className="projet-card-content">
        <h3 className="projet-titre">{projet.titre}</h3>
        <div className="projet-langs">
          {apercu.map((tech) => (
            <span key={tech.nom} className="projet-lang-badge">
              {tech.nom}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function Projets() {
  const [filtre, setFiltre] = useState("sae");
  const projetsFiltres = projets.filter((p) => p.type === filtre);

  return (
    <section id="projets" className="container section-projets">
      <div className="section-header">
        <h2 className="section-title">Mes Projets</h2>
        <p className="section-subtitle">
          Les principaux projets et SAÉ réalisés durant mon BUT Informatique
        </p>

        <div className="projets-filtre">
          <button
            type="button"
            className={`projets-filtre-btn ${filtre === "sae" ? "projets-filtre-btn--actif" : ""}`}
            onClick={() => setFiltre("sae")}
          >
            Projets SAÉ
          </button>
          <button
            type="button"
            className={`projets-filtre-btn ${filtre === "personnel" ? "projets-filtre-btn--actif" : ""}`}
            onClick={() => setFiltre("personnel")}
          >
            Projets personnels
          </button>
        </div>
      </div>

      <div className="projets-grille">
        {projetsFiltres.map((projet) => (
          <ProjetCard key={projet.id} projet={projet} />
        ))}
      </div>
    </section>
  );
}

export default Projets;
