import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import projets from "../data/projets";

function TechChip({ tech }) {
  return (
    <div className="projet-tech-item">
      {tech.logo ? (
        <img src={tech.logo} alt={tech.nom} />
      ) : (
        <span className="projet-tech-emoji">{tech.emoji}</span>
      )}
      <span>{tech.nom}</span>
    </div>
  );
}

function ProjetDetail() {
  const { id } = useParams();
  const projet = projets.find((p) => p.id === id);
  const [imageAgrandie, setImageAgrandie] = useState(null);

  if (!projet) {
    return (
      <section className="container">
        <p>Projet introuvable.</p>
        <Link to="/projets" className="projet-retour">← Retour aux projets</Link>
      </section>
    );
  }

  return (
    <section className="container projet-detail">
      <Link to="/projets" className="projet-retour">← Retour aux projets</Link>

      <div className="projet-detail-header">
        <span className="projet-code">{projet.code}</span>
        <h1>{projet.titre}</h1>
      </div>

      <div className="projet-detail-layout">
        <div className="projet-detail-main">
          <div className="projet-bloc">
            <h4 className="projet-bloc-titre">Objectif</h4>
            <p>{projet.objectif}</p>
          </div>

          {projet.travailGroupe?.length > 0 && (
            <div className="projet-bloc">
              <h4 className="projet-bloc-titre">Travail réalisé en groupe</h4>
              <ul className="projet-liste">
                {projet.travailGroupe.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="projet-bloc">
            <h4 className="projet-bloc-titre">Mon rôle</h4>
            <ul className="projet-liste">
              {projet.monRole.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="projet-bloc">
            <h4 className="projet-bloc-titre">Résultat obtenu</h4>
            <p>{projet.resultat}</p>

            {projet.images?.length > 0 && (
              <div
                className={`projet-preview-galerie ${
                  projet.images.length === 1 ? "projet-preview-galerie--unique" : ""
                }`}
              >
                {projet.images.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    className="projet-preview"
                    onClick={() => setImageAgrandie(src)}
                    aria-label="Agrandir l'aperçu"
                  >
                    <img src={src} alt={`${projet.titre} — aperçu ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="projet-bloc projet-bloc--apprentissage">
            <h4 className="projet-bloc-titre">Ce que j'ai appris</h4>
            <p>{projet.apprentissage}</p>
          </div>
        </div>

        <aside className="projet-detail-sidebar">
          <div className="projet-sidebar-bloc">
            <h4 className="projet-bloc-titre">Compétences mobilisées</h4>
            <div className="projet-competences">
              {projet.competences.map((ue) => (
                <span key={ue} className="projet-competence-badge">
                  {ue}
                </span>
              ))}
            </div>
          </div>

          <div className="projet-sidebar-bloc">
            <h4 className="projet-bloc-titre">Technologies utilisées</h4>
            <div className="projet-tech-grid">
              {projet.technologies.map((tech) => (
                <TechChip key={tech.nom} tech={tech} />
              ))}
            </div>
          </div>
        </aside>
      </div>

      {imageAgrandie && (
        <div className="lightbox" onClick={() => setImageAgrandie(null)}>
          <button
            type="button"
            className="lightbox-fermer"
            onClick={() => setImageAgrandie(null)}
            aria-label="Fermer"
          >
            ✕
          </button>
          <img src={imageAgrandie} alt={projet.titre} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

export default ProjetDetail;
