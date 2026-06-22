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
  return (
    <section id="projets" className="container section-projets">
      <div className="section-header">
        <h2 className="section-title">Mes Projets</h2>
        <p className="section-subtitle">
          Les principaux projets et SAÉ réalisés durant mon BUT Informatique — clique sur un
          projet pour voir le détail.
        </p>
      </div>

      <div className="projets-grille">
        {projets.map((projet) => (
          <ProjetCard key={projet.id} projet={projet} />
        ))}
      </div>
    </section>
  );
}

export default Projets;
