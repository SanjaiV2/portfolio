import { Link } from "react-router-dom";

// Composant Footer
// Le bas de page avec informations de contact et liens

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>RAMASAMY Sanjai</h3>
          <p>Étudiant en BUT Informatique</p>
          <p>Développeur Full Stack en devenir</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: votre.email@example.com</p>
          <p>LinkedIn: linkedin.com/in/votreprofil</p>
        </div>
        
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/apropos">À propos</Link></li>
            <li><Link to="/competences">Compétences</Link></li>
            <li><Link to="/projets">Projets</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Réseaux sociaux</h4>
          <div className="social-links">
            <a href="https://github.com/votre-github" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/votre-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 RAMASAMY Sanjai. Tous droits réservés.</p>
        <Link to="/" className="back-to-top">Retour en haut ↑</Link>
      </div>
    </footer>
  );
}

export default Footer;