import { Link } from "react-router-dom";
import competences from "../data/competences";
import projets from "../data/projets";

// Cherche le premier projet qui utilise la techno donnée (par nom).
// "HTML / CSS" est éclaté pour matcher "HTML5" et "CSS3" séparément.
function trouverProjetPourTech(nomTech) {
  const parties = nomTech.split("/").map((p) => p.trim().toLowerCase());
  const correspond = (nomProjetTech) => {
    const n = nomProjetTech.trim().toLowerCase();
    return parties.length > 1
      ? parties.some((p) => n.startsWith(p))
      : n === parties[0];
  };

  const projet = projets.find((p) => p.technologies.some((t) => correspond(t.nom)));
  return projet?.id ?? null;
}

// Une ligne technologie : logo + nom + barre de niveau (avec repère du niveau de départ)
function TechRow({ tech, index }) {
  const projetId = trouverProjetPourTech(tech.nom);

  const contenu = (
    <>
      <div className="skill-icone">
        {tech.logo ? (
          <img src={tech.logo} alt="" />
        ) : (
          <span className="skill-emoji">{tech.emoji}</span>
        )}
      </div>
      <span className="skill-nom">{tech.nom}</span>
      <div className="skill-bar">
        <span className="skill-bar-depart" style={{ left: `${tech.depart}%` }} />
        <span className="skill-bar-fill" style={{ width: `${tech.niveau}%` }} />
      </div>
    </>
  );

  if (projetId) {
    return (
      <Link
        to={`/projets/${projetId}`}
        className="skill-row skill-row--clickable"
        style={{ animationDelay: `${index * 0.05}s` }}
        title={`Voir le projet utilisant ${tech.nom}`}
      >
        {contenu}
      </Link>
    );
  }

  return (
    <div className="skill-row" style={{ animationDelay: `${index * 0.05}s` }}>
      {contenu}
    </div>
  );
}

function CategorieCard({ categorie }) {
  return (
    <article className="skill-card">
      <div className="skill-card-header">
        <h3 className="skill-card-titre">{categorie.label}</h3>
        <p className="skill-card-desc">{categorie.description}</p>
      </div>

      <div className="skill-rows">
        {categorie.technologies.map((tech, i) => (
          <TechRow key={tech.nom} tech={tech} index={i} />
        ))}
      </div>
    </article>
  );
}

// La catégorie "Outils" a deux fois plus d'entrées que les autres : au lieu
// de la forcer dans la même grille (ce qui casse la symétrie), elle défile
// horizontalement en boucle, comme un bandeau d'outils.
function ToolsMarquee({ categorie }) {
  const doubled = [...categorie.technologies, ...categorie.technologies];

  return (
    <article className="tools-section">
      <div className="skill-card-header">
        <h3 className="skill-card-titre">{categorie.label}</h3>
        <p className="skill-card-desc">{categorie.description}</p>
      </div>

      <div className="tools-marquee">
        <div className="tools-track">
          {doubled.map((tech, i) => (
            <div className="tool-chip" key={`${tech.nom}-${i}`}>
              <div className="skill-icone">
                {tech.logo ? (
                  <img src={tech.logo} alt="" />
                ) : (
                  <span className="skill-emoji">{tech.emoji}</span>
                )}
              </div>
              <span className="tool-chip-nom">{tech.nom}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function Competences() {
  const principales = competences.filter((c) => c.id !== "outils");
  const outilsCategorie = competences.find((c) => c.id === "outils");

  return (
    <section id="competences" className="container section-competences">
      <div className="section-header">
        <h2 className="section-title">Mes Compétences</h2>
        <p className="section-subtitle">
          Organisées par domaine. Le repère clair sur chaque barre marque mon niveau de départ en
          BUT1 — le reste, c'est le chemin parcouru depuis.
        </p>
      </div>

      <div className="skill-grid">
        {principales.map((categorie) => (
          <CategorieCard key={categorie.id} categorie={categorie} />
        ))}
      </div>

      {outilsCategorie && <ToolsMarquee categorie={outilsCategorie} />}
    </section>
  );
}

export default Competences;
