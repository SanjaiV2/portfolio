// Composant Stage
// Présente l'expérience professionnelle (stage)

function Stage() {
  const fiche = [
    { label: "Entreprise", valeur: "LOGIN" },
    { label: "Durée", valeur: "2 mois" },
    { label: "Période", valeur: "Février 2026 à Avril 2026" },
    { label: "Service", valeur: "Système et Réseau — Niveau 1" },
  ];

  const missions = [
    "Traitement des tickets sur FreshService",
    "Suivi de l'infrastructure informatique (serveurs, antivirus, VPN)",
    "Diagnostic et résolution d'incidents (VPN, imprimantes, logiciels…)",
    "Préparation et configuration de postes informatiques avec WDS",
    "Développement d'un script PowerShell pour automatiser la gestion des appels manqués",
    "Contribution au déploiement de la MFA pour plus de 300 utilisateurs",
    "Configuration d'équipements réseau (switchs, routeurs)",
  ];

  const outils = [
    "FreshService",
    "TeamViewer",
    "PowerShell",
    "Active Directory",
    "Microsoft 365",
    "WDS",
    "3CX",
    "Microsoft Teams",
    "SonicWall VPN",
    "NetExtender",
    "ESET",
    "Excel",
  ];

  return (
    <section id="stage" className="container section-stage">
      <div className="section-header">
        <h2 className="section-title">Mon Stage</h2>
        <p className="section-subtitle">Stage chez LOGIN — Service Système et Réseau</p>
      </div>

      <div className="stage-fiche">
        {fiche.map((item) => (
          <div key={item.label} className="stage-fiche-item">
            <span className="stage-fiche-label">{item.label}</span>
            <strong className="stage-fiche-valeur">{item.valeur}</strong>
          </div>
        ))}
      </div>

      <div className="stage-bloc">
        <h3 className="sous-titre-section sous-titre-section--left">Missions réalisées</h3>
        <ul className="stage-liste">
          {missions.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>

      <div className="stage-bloc">
        <h3 className="sous-titre-section sous-titre-section--left">Outils utilisés</h3>
        <div className="stage-outils">
          {outils.map((o) => (
            <span key={o} className="stage-outil-badge">
              {o}
            </span>
          ))}
        </div>
      </div>

      <div className="stage-bloc stage-bloc--accent">
        <h3 className="sous-titre-section sous-titre-section--left">Ce que j'ai découvert</h3>
        <p>
          Ce stage m'a permis de découvrir le fonctionnement d'un service support informatique dans une entreprise. J'ai pu voir comment les techniciens s'organisent pour gérer plusieurs demandes en parallèle tout en restant réactifs face aux incidents. J'ai également constaté que les échanges entre collègues sont essentiels, notamment lorsqu'un problème nécessite plusieurs avis ou compétences pour être résolu.
        </p>
      </div>

      <div className="stage-bloc stage-bloc--accent">
        <h3 className="sous-titre-section sous-titre-section--left">Ce que cela m'a apporté</h3>
        <p>
          Cette expérience m'a permis de gagner en autonomie et en confiance, notamment dans mes
          échanges avec les utilisateurs. J'ai aussi appris à prendre le temps d'analyser un
          problème avant de chercher une solution, ce qui m'a aidé à être plus rigoureux dans ma
          manière de travailler. Enfin, ce stage m'a confirmé mon intérêt pour les domaines des
          systèmes, des réseaux et de la sécurité informatique, et a renforcé mon envie de
          poursuivre mes études dans cette voie.
        </p>
      </div>
    </section>
  );
}

export default Stage;
