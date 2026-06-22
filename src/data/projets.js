// Données des projets / SAÉ présentés en détail dans la page Projets
// Chaque technologie a un logo (CDN devicon/simpleicons) ou un emoji de repli.

const DEVICON = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;
const SIMPLEICON = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex}`;

const projets = [
  {
    id: "projet1",
    code: "SAÉ 3.01",
    titre: "Application de gestion des colis",
    images: [
      "/projets/colis-devis-liste.png",
      "/projets/colis-devis-creation.png",
    ],
    objectif:
      "L'objectif de ce projet était de concevoir une application web permettant d'améliorer le suivi des colis au sein de l'IUT de Villetaneuse. L'application devait centraliser les différentes étapes du processus, depuis la création d'une demande de devis jusqu'au retrait final du colis, tout en proposant des interfaces adaptées aux différents acteurs impliqués.",
    travailGroupe: [
      "Analyse des besoins et rédaction des fonctionnalités attendues",
      "Conception du modèle relationnel de la base de données",
      "Mise en place de l'architecture MVC",
      "Développement des interfaces pour chaque rôle utilisateur",
      "Implémentation des fonctionnalités de gestion des devis, commandes et colis",
      "Génération automatique des documents PDF",
      "Réalisation des tests et correction des anomalies",
      "Préparation de la documentation et de la soutenance",
    ],
    monRole: [
      "Développement de plusieurs interfaces utilisateurs (Département, Service Postal IUT)",
      "Développement back-end uniquement",
      "Conception et amélioration de requêtes SQL (PDO)",
      "Participation à la conception et aux évolutions de la base de données",
      "Développement de tableaux de bord adaptés à certains rôles",
      "Participation aux tests et à la documentation",
    ],
    resultat:
      "À la fin du projet, nous avons obtenu une application web fonctionnelle permettant de suivre les devis, les commandes et les colis. Les différents rôles disposent de leurs propres pages et fonctionnalités. Le projet est aujourd'hui terminé et fonctionne conformément aux objectifs que nous nous étions fixés au départ. Même si l'application répond aux besoins initiaux, certaines fonctionnalités pourraient encore être améliorées ou complétées afin de faciliter son évolution et son utilisation au quotidien.",
    apprentissage:
      "Cette SAÉ m'a surtout appris à travailler sur une application plus importante et plus complexe que celles réalisées auparavant. J'ai découvert l'architecture MVC, utilisé pour la première fois une bibliothèque externe comme TCPDF et davantage travaillé avec Git sur un projet partagé avec plusieurs personnes. J'ai aussi appris à écrire des requêtes SQL plus complexes avec PDO, à mieux comprendre les relations entre les tables d'une base de données et à résoudre des erreurs parfois difficiles à trouver. Enfin, ce projet m'a montré qu'il était important de bien s'organiser, d'échanger régulièrement avec les autres membres du groupe et de répartir les tâches pour éviter de prendre du retard.",
    competences: ["UE1", "UE2", "UE4", "UE5", "UE6"],
    technologies: [
      { nom: "PHP", logo: DEVICON("php") },
      { nom: "HTML5", logo: DEVICON("html5") },
      { nom: "CSS3", logo: DEVICON("css3") },
      { nom: "MariaDB", logo: DEVICON("mariadb") },
      { nom: "PDO", emoji: "🔌" },
      { nom: "GitHub", logo: SIMPLEICON("github", "ffffff") },
    ],
  },
  {
    id: "projet2",
    code: "SAÉ 2.03",
    titre: "Installation de services réseaux",
    vignette: "/projets/reseau-services.png",
    images: ["/projets/reseau-wireshark.png"],
    objectif:
      "L'objectif de cette SAÉ était de mettre en place et configurer plusieurs services réseaux sur une machine Linux. Nous devions installer un environnement LAMP (Linux, Apache, MariaDB et PHP), puis configurer différents services comme FTP, SSH et Apache, tout en s'assurant de leur bon fonctionnement. Une partie du travail consistait également à utiliser des outils d'administration et d'analyse réseau afin de mieux comprendre les échanges entre les machines et le fonctionnement des protocoles étudiés.",
    travailGroupe: [],
    monRole: [
      "Installation et configuration de MariaDB",
      "Mise en place d'un environnement LAMP",
      "Configuration d'Apache et de pages personnelles PHP",
      "Création et gestion d'utilisateurs Linux et MariaDB",
      "Installation et configuration de VirtualBox",
      "Analyse de trames réseau avec Wireshark",
      "Installation et configuration des serveurs FTP et SSH",
      "Mise en place d'une authentification avec clés SSH",
    ],
    resultat:
      "À la fin de la SAÉ, l'ensemble des services demandés était correctement installé et configuré. J'étais capable d'héberger des pages PHP reliées à une base de données MariaDB, de transférer des fichiers via FTP, de me connecter à distance en SSH avec une paire de clés et d'analyser des échanges réseau avec Wireshark. Cette SAÉ m'a permis d'obtenir une machine Linux disposant de plusieurs services fonctionnels et utilisables pour les futurs TP et projets liés aux réseaux.",
    apprentissage:
      "Cette SAÉ m'a permis d'aller plus loin sur des notions que j'avais déjà découvertes avant le BUT. J'ai appris à installer et configurer plusieurs services sous Linux, à comprendre leur fonctionnement et à modifier leurs paramètres selon un besoin précis. J'ai aussi découvert des outils comme Wireshark et mieux compris comment circulent les données sur un réseau grâce à l'analyse des paquets échangés.",
    competences: ["UE3"],
    technologies: [
      { nom: "Linux", logo: DEVICON("linux") },
      { nom: "MariaDB", logo: DEVICON("mariadb") },
      { nom: "PHP", logo: DEVICON("php") },
      { nom: "Wireshark", logo: SIMPLEICON("wireshark", "1679A7") },
    ],
  },
  {
    id: "projet3",
    code: "SAÉ 1.01",
    titre: "Jeu d'échecs",
    vignette: "/projets/echecs.png",
    images: [],
    objectif: "À compléter.",
    travailGroupe: [],
    monRole: [],
    resultat: "À compléter.",
    apprentissage: "À compléter.",
    competences: [],
    technologies: [{ nom: "Java", logo: DEVICON("java") }],
  },
];

export default projets;
