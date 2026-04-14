// Composant Hero
// C'est la grande section d'accueil avec le nom et les boutons

function Accueil() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <h4 className="hero-tag">Bonjour, je suis</h4>
        <h1 className="hero-nom">RAMASAMY Sanjai</h1>
        <h3 className="hero-poste">Étudiant en 2e année de BUT Informatique</h3>
        <p className="hero-desc">
          Passionné par le développement web, logiciel et les nouvelles technologies.
        </p>
        <div className="hero-btns">
          <a href="#projets" className="btn">Voir mes projets</a>
          <a href="#contact" className="btn btn-outline">Me contacter</a>
        </div>
      </div>
    </section>
  );
}

export default Accueil;