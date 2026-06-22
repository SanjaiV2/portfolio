// Composant APropos
// La section qui parle de qui je suis

function APropos() {
  const parcours = [
    {
      year: "2021 - 2022",
      school: "Lycée Mozart",
      details: "en général (à Le Blanc-Mesnil)"
    },
    {
      year: "2022 - 2024",
      school: "Lycée Voillaume",
      details: "en STI2D (à Aulnay-sous-Bois)"
    },
    {
      year: "2024 - en cours",
      school: "Université de Villetaneuse",
      details: "2e année de BUT informatique (à Villetaneuse)"
    }
  ];

  const evolution = [
    {
      titre: "BUT1",
      sousTitre: "Découverte de l'informatique",
      points: [
        "Premières applications en Java",
        "Bases de données relationnelles",
        "Linux et notions réseaux (adressage IP, routage, DHCP)",
        "Premiers projets réalisés en équipe (SAÉ)"
      ]
    },
    {
      titre: "BUT2",
      sousTitre: "Approfondissement et professionnalisation",
      points: [
        "Développement d'une application web complète en PHP (SAÉ)",
        "Utilisation de Git dans des projets collaboratifs",
        "Administration système, virtualisation et déploiement",
        "Exploitation de bases de données et SQL avancé"
      ]
    }
  ];

  return (
    <section id="apropos" className="container section-apropos">
      <div className="section-header">
        <h2 className="section-title">À propos de moi</h2>
        <p className="section-subtitle">
          J'explique mon profil et mon parcours de façon élégante, claire et structurée.
        </p>
      </div>

      <div className="about-panel">
        <article className="about-card intro-card">
          <div className="eyebrow">Profil</div>

          <div className="apropos-question">
            <div className="eyebrow eyebrow--violet">Pourquoi l'informatique ?</div>
            <p>
              J'ai toujours préféré comprendre comment fonctionnent les outils que j'utilise plutôt
              que simplement m'en servir. En découvrant un peu la programmation au lycée puis en BUT
              Informatique, j'ai pris plaisir à développer des applications et à résoudre des
              problèmes mais j'apprécie aussi le domaine lié aux réseaux et aux systèmes, qui
              complètent le développement en apportant une meilleure compréhension du fonctionnement
              global d'une infrastructure informatique.
            </p>
          </div>

          <div className="evolution-inline">
            <div className="eyebrow">Mon évolution</div>
            <div className="evolution-but-grid">
              {evolution.map((bloc, index) => (
                <div key={index} className="evolution-but-bloc">
                  <h4 className="evolution-but-titre">{bloc.titre}</h4>
                  <p className="evolution-but-soustitre">{bloc.sousTitre}</p>
                  <ul className="evolution-but-liste">
                    {bloc.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="about-col-right">
          <article className="about-card timeline-card">
            <div className="eyebrow">Mon parcours</div>
            <div className="timeline">
              {parcours.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-icon" />
                  <div className="timeline-body">
                    <span className="timeline-year">{item.year}</span>
                    <h4>{item.school}</h4>
                    <p>{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="about-card objectif-card">
            <div className="eyebrow">Mon objectif</div>
            <p>
              Je m'oriente principalement vers le développement logiciel, tout en conservant un
              intérêt pour l'administration système et les réseaux. Une alternance me permettrait
              d'approfondir ces domaines et de préciser mon projet professionnel.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default APropos;
