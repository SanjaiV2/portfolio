import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

// On importe chaque composant depuis son propre fichier
import Navbar      from "./components/Navbar";
import Accueil     from "./components/Accueil";
import APropos     from "./components/APropos";
import Competences from "./components/Competences";
import Projets     from "./components/Projets";
import ProjetDetail from "./components/ProjetDetail";
import Stage       from "./components/Stage";
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

// Contenu de l'app : a besoin d'être à l'intérieur du BrowserRouter pour
// pouvoir utiliser useLocation et masquer navbar/footer sur la page de détail projet
function AppContent({ menuOuvert, setMenuOuvert }) {
  const { pathname } = useLocation();
  const estPageDetailProjet = /^\/projets\/.+/.test(pathname);

  return (
    <>
      <ScrollToTop />
      {!estPageDetailProjet && (
        <Navbar menuOuvert={menuOuvert} setMenuOuvert={setMenuOuvert} />
      )}

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/projets/:id" element={<ProjetDetail />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!estPageDetailProjet && <Footer />}
    </>
  );
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

        <AppContent menuOuvert={menuOuvert} setMenuOuvert={setMenuOuvert} />
      </div>
    </BrowserRouter>
  );
}

export default App;
