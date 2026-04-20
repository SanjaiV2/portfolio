import { useState } from "react";
import "./index.css";

// On importe chaque composant depuis son propre fichier
// C'est tout ce que fait App.jsx : assembler les morceaux
import Navbar      from "./components/Navbar";
import Accueil     from "./components/Accueil";
import APropos     from "./components/APropos";
import Competences from "./components/Competences";
import Projets     from "./components/Projets";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";
import Particles   from "./components/Particles";

function App() {
  // useState pour le menu mobile, passé en props à Navbar
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <div className="app">
      <div className="background-root">
        <Particles
          particleColors={["#0d67de", "#00bcd4", "#7c3aed"]}
          particleCount={3000}
          particleSpread={12}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* On place chaque composant dans l'ordre */}
      <Navbar menuOuvert={menuOuvert} setMenuOuvert={setMenuOuvert} />
      <Accueil />
      <APropos />
      <Competences />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;