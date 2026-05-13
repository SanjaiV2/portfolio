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
          <p>
            Actuellement en <strong>2ème année de BUT Informatique</strong>, je me spécialise dans
            la conception et le développement d'applications. Curieux et rigoureux, j'aime résoudre
            des problèmes complexes grâce au code. Mon objectif est de devenir un développeur Full
            Stack accompli.
          </p>

          <div className="about-meta">
            <div>
              <span>Style</span>
              <strong>Moderne & professionnel</strong>
            </div>
            <div>
              <span>Ambition</span>
              <strong>Full Stack</strong>
            </div>
          </div>

          <div className="about-highlights">
            <span>Curiosité</span>
            <span>Rigoureux</span>
            <span>Créatif</span>
            <span>Orienté résultat</span>
          </div>
        </article>

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
      </div>
    </section>
  );
}

export default APropos;