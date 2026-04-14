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

function App() {
  // useState pour le menu mobile, passé en props à Navbar
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <div>
      {/* Les 3 cercles animés du fond */}
      <div className="bg-cercle cercle-1"></div>
      <div className="bg-cercle cercle-2"></div>
      <div className="bg-cercle cercle-3"></div>

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