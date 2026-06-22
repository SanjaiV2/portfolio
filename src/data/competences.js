// Données des 6 compétences (UE) du BUT Informatique
// Chaque technologie a un logo (CDN devicon/simpleicons) ou un emoji de repli,
// et un niveau de familiarité estimé sur 5 (affiché en barre, jamais en %).

const DEVICON = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;
const SIMPLEICON = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex}`;

const competences = [
  {
    id: "ue1",
    code: "UE1",
    titre: "Réaliser un développement d'application",
    apprentissage:
      "J'ai appris à concevoir des applications plus complètes, en passant de petits programmes à des projets répondant à un besoin précis.",
    technologies: [
      { nom: "Java", logo: DEVICON("java"), niveau: 4 },
      { nom: "PHP", logo: DEVICON("php"), niveau: 4 },
      { nom: "JavaScript", logo: DEVICON("javascript"), niveau: 3 },
      { nom: "Vue", logo: DEVICON("vuejs"), niveau: 2 },
      { nom: "Express", logo: SIMPLEICON("express", "ffffff"), niveau: 2 },
      { nom: "Android", logo: DEVICON("android"), niveau: 2 },
      { nom: "TypeScript", logo: DEVICON("typescript"), niveau: 2 },
    ],
  },
  {
    id: "ue2",
    code: "UE2",
    titre: "Optimiser des applications informatiques",
    apprentissage:
      "Cette compétence m'a surtout appris qu'une application qui fonctionne n'est pas forcément une bonne application, et qu'il faut aussi penser à la qualité du code et aux performances.",
    technologies: [
      { nom: "JUnit", logo: DEVICON("junit", "plain"), niveau: 2 },
      { nom: "Python", logo: DEVICON("python"), niveau: 3 },
      { nom: "C", logo: DEVICON("c"), niveau: 3 },
      { nom: "UML", emoji: "🧩", niveau: 3 },
    ],
  },
  {
    id: "ue3",
    code: "UE3",
    titre: "Administrer des systèmes informatiques communicants",
    apprentissage:
      "J'avais déjà un intérêt pour les systèmes et les réseaux avant le BUT. Cette compétence m'a surtout appris à utiliser Linux plus facilement, à configurer des machines virtuelles et à mettre en place certains services réseau.",
    technologies: [
      { nom: "Linux", logo: DEVICON("linux"), niveau: 4 },
      { nom: "VirtualBox", logo: SIMPLEICON("virtualbox", "2F61B4"), niveau: 3 },
      { nom: "Wireshark", logo: SIMPLEICON("wireshark", "1679A7"), niveau: 2 },
    ],
  },
  {
    id: "ue4",
    code: "UE4",
    titre: "Gérer des données de l'information",
    apprentissage:
      "J'ai appris à concevoir des bases de données plus efficacement, à mieux structurer les données et à écrire des requêtes SQL plus complexes pour les exploiter.",
    technologies: [
      { nom: "SQL", emoji: "🗄️", niveau: 4 },
      { nom: "MySQL", logo: DEVICON("mysql"), niveau: 4 },
      { nom: "MongoDB", logo: DEVICON("mongodb"), niveau: 2 },
      { nom: "PostgreSQL", logo: DEVICON("postgresql"), niveau: 3 },
    ],
  },
  {
    id: "ue5",
    code: "UE5",
    titre: "Conduire un projet",
    apprentissage:
      "Cette compétence m'a appris à mieux organiser mon travail, à répartir les tâches au sein d'un groupe et à utiliser des outils comme Git pour suivre l'avancement d'un projet.",
    technologies: [
      { nom: "Git", logo: DEVICON("git"), niveau: 4 },
      { nom: "GitHub", logo: SIMPLEICON("github", "ffffff"), niveau: 4 },
      { nom: "Trello", logo: SIMPLEICON("trello", "0052CC"), niveau: 3 },
    ],
  },
  {
    id: "ue6",
    code: "UE6",
    titre: "Travailler dans une équipe informatique",
    apprentissage:
      "Cette compétence m'a appris à travailler plus efficacement en équipe, à partager mon code avec Git et à échanger davantage avec les autres membres pour résoudre des problèmes ou prendre des décisions.",
    technologies: [
      { nom: "Git", logo: DEVICON("git"), niveau: 4 },
      { nom: "Figma", logo: SIMPLEICON("figma", "ffffff"), niveau: 2 },
      { nom: "GitHub", logo: SIMPLEICON("github", "ffffff"), niveau: 4 },
    ],
  },
];

export default competences;
