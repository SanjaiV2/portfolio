import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

// On importe chaque composant depuis son propre fichier
import Navbar      from "./components/Navbar";
import Accueil     from "./components/Accueil";
import APropos     from "./components/APropos";
import Competences from "./components/Competences";
import Projets     from "./components/Projets";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";
import Particles   from "./components/Particles";

// Remonte en haut de page à chaque changement de route
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <BrowserRouter>
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

        <ScrollToTop />
        <Navbar menuOuvert={menuOuvert} setMenuOuvert={setMenuOuvert} />

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
