// Compétences techniques, regroupées par domaine (front, back, bases de
// données, outils) plutôt que par UE du BUT.
// "depart" = niveau en début de BUT1, "niveau" = niveau actuel (BUT2).
// Les deux pilotent uniquement la barre visuelle, jamais affichés en chiffres.

const DEVICON = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;
const SIMPLEICON = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex}`;

const competences = [
  {
    id: "frontend",
    label: "Front-end",
    description: "Construire des interfaces claires et agréables à utiliser.",
    technologies: [
      { nom: "HTML / CSS", logo: DEVICON("html5"), depart: 30, niveau: 60 },
      { nom: "JavaScript", logo: DEVICON("javascript"), depart: 45, niveau: 75 },
      { nom: "React", logo: DEVICON("react"), depart: 15, niveau: 55 },
      { nom: "TypeScript", logo: DEVICON("typescript"), depart: 35, niveau: 40 },
      { nom: "Vue", logo: DEVICON("vuejs"), depart: 10, niveau: 50 },
      { nom: "Android", logo: DEVICON("android"), depart: 10, niveau: 45 },
    ],
  },
  {
    id: "backend",
    label: "Back-end",
    description: "Faire tourner la logique métier et les règles derrière l'app.",
    technologies: [
      { nom: "Java", logo: DEVICON("java"), depart: 40, niveau: 60 },
      { nom: "PHP", logo: DEVICON("php"), depart: 30, niveau: 55 },
      { nom: "Python", logo: DEVICON("python"), depart: 45, niveau: 75 },
      { nom: "Express", logo: SIMPLEICON("express", "ffffff"), depart: 10, niveau: 50 },
      { nom: "JUnit", logo: DEVICON("junit", "plain"), depart: 30, niveau: 50 },
      { nom: "C", logo: DEVICON("c"), depart: 10, niveau: 40 },
    ],
  },
  {
    id: "bdd",
    label: "Base de données",
    description: "Modéliser, stocker et interroger les données proprement.",
    technologies: [
      { nom: "MySQL", logo: DEVICON("mysql"), depart: 20, niveau: 50 },
      { nom: "MariaDB", logo: DEVICON("mariadb"), depart: 15, niveau: 55 },
      { nom: "PostgreSQL", logo: DEVICON("postgresql"), depart: 30, niveau: 60 },
      { nom: "MongoDB", logo: DEVICON("mongodb"), depart: 10, niveau: 40 },
    ],
  },
  {
    id: "outils",
    label: "Outils & Système",
    description: "Ce qui entoure le code : versioning, système, réseau, design.",
    technologies: [
      { nom: "Git", logo: DEVICON("git"), depart: 20, niveau: 40 },
      { nom: "GitHub", logo: SIMPLEICON("github", "ffffff"), depart: 40, niveau: 75 },
      { nom: "Linux", logo: DEVICON("linux"), depart: 30, niveau: 80 },
      { nom: "VS Code", logo: DEVICON("vscode"), depart: 40, niveau: 80 },
      { nom: "VirtualBox", logo: SIMPLEICON("virtualbox", "2F61B4"), depart: 30, niveau: 75 },
      { nom: "Wireshark", logo: SIMPLEICON("wireshark", "1679A7"), depart: 25, niveau: 45 },
      { nom: "Trello", logo: SIMPLEICON("trello", "0052CC"), depart: 20, niveau: 45 },
      { nom: "Figma", logo: SIMPLEICON("figma", "ffffff"), depart: 10, niveau: 30 },
      { nom: "Canva", logo: DEVICON("canva"), depart: 20, niveau: 50 },
      { nom: "Office 365", logo: SIMPLEICON("libreoffice", "18A303"), depart: 30, niveau: 60 },
    ],
  },
];

export default competences;
