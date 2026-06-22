// Données des 6 compétences (UE) du BUT Informatique
// Chaque technologie a un logo (CDN devicon/simpleicons) ou un emoji de repli,
// et deux niveaux de progression en % (BUT1 / BUT2) qui pilotent uniquement la
// largeur de la barre visuelle — le pourcentage n'est jamais affiché en texte.

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
      { nom: "Java", logo: DEVICON("java"), but1: 40, but2: 60 },
      { nom: "PHP", logo: DEVICON("php"), but1: 30, but2: 55 },
      { nom: "JavaScript", logo: DEVICON("javascript"), but1: 45, but2: 75 },
      { nom: "Vue", logo: DEVICON("vuejs"), but1: 10, but2: 50 },
      { nom: "Express", logo: SIMPLEICON("express", "ffffff"), but1: 10, but2: 50 },
      { nom: "Android", logo: DEVICON("android"), but1: 10, but2: 45 },
      { nom: "TypeScript", logo: DEVICON("typescript"), but1: 35, but2: 40 },
      { nom: "HTML / CSS", logo: DEVICON("html5"), but1: 30, but2: 60 },
    ],
  },
  {
    id: "ue2",
    code: "UE2",
    titre: "Optimiser des applications informatiques",
    apprentissage:
      "Cette compétence m'a surtout appris qu'une application qui fonctionne n'est pas forcément une bonne application, et qu'il faut aussi penser à la qualité du code et aux performances.",
    technologies: [
      { nom: "JUnit", logo: DEVICON("junit", "plain"), but1: 30, but2: 50 },
      { nom: "Python", logo: DEVICON("python"), but1: 45, but2: 75 },
      { nom: "C", logo: DEVICON("c"), but1: 10, but2: 40 },
    ],
  },
  {
    id: "ue3",
    code: "UE3",
    titre: "Administrer des systèmes informatiques communicants",
    apprentissage:
      "J'avais déjà un intérêt pour les systèmes et les réseaux avant le BUT. Cette compétence m'a surtout appris à utiliser Linux plus facilement, à configurer des machines virtuelles et à mettre en place certains services réseau.",
    technologies: [
      { nom: "Linux", logo: DEVICON("linux"), but1: 30, but2: 80 },
      { nom: "VirtualBox", logo: SIMPLEICON("virtualbox", "2F61B4"), but1: 30, but2: 75 },
      { nom: "Wireshark", logo: SIMPLEICON("wireshark", "1679A7"), but1: 25, but2: 45 },
    ],
  },
  {
    id: "ue4",
    code: "UE4",
    titre: "Gérer des données de l'information",
    apprentissage:
      "J'ai appris à concevoir des bases de données plus efficacement, à mieux structurer les données et à écrire des requêtes SQL plus complexes pour les exploiter.",
    technologies: [
      { nom: "MySQL", logo: DEVICON("mysql"), but1: 20, but2: 50 },
      { nom: "MongoDB", logo: DEVICON("mongodb"), but1: 10, but2: 40 },
      { nom: "PostgreSQL", logo: DEVICON("postgresql"), but1: 30, but2: 60 },
    ],
  },
  {
    id: "ue5",
    code: "UE5",
    titre: "Conduire un projet",
    apprentissage:
      "Cette compétence m'a appris à mieux organiser mon travail, à répartir les tâches au sein d'un groupe et à utiliser des outils comme Git pour suivre l'avancement d'un projet.",
    technologies: [
      { nom: "Git", logo: DEVICON("git"), but1: 20, but2: 40 },
      { nom: "GitHub", logo: SIMPLEICON("github", "ffffff"), but1: 40, but2: 75 },
      { nom: "Trello", logo: SIMPLEICON("trello", "0052CC"), but1: 20, but2: 45 },
    ],
  },
  {
    id: "ue6",
    code: "UE6",
    titre: "Travailler dans une équipe informatique",
    apprentissage:
      "Cette compétence m'a appris à travailler plus efficacement en équipe, à partager mon code avec Git et à échanger davantage avec les autres membres pour résoudre des problèmes ou prendre des décisions.",
    technologies: [
      { nom: "Git", logo: DEVICON("git"), but1: 20, but2: 40 },
      { nom: "Figma", logo: SIMPLEICON("figma", "ffffff"), but1: 10, but2: 30 },
      { nom: "GitHub", logo: SIMPLEICON("github", "ffffff"), but1: 40, but2: 75 },
    ],
  },
];

export default competences;
