import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Composant Hero
// C'est la grande section d'accueil avec le nom et les boutons

const NOM = "RAMASAMY Sanjai";
const CARACTERES = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// Effet de décodage : chaque lettre défile aléatoirement avant de se figer
// sur le bon caractère, de gauche à droite.
function useEffetDecodage(texte, vitesse = 35) {
  const [affichage, setAffichage] = useState(() => texte.split(""));

  useEffect(() => {
    let frame = 0;
    const revele = new Array(texte.length).fill(false);

    const intervalle = setInterval(() => {
      frame++;

      setAffichage(
        texte.split("").map((lettre, i) => {
          if (lettre === " ") return " ";
          if (revele[i]) return lettre;

          // chaque lettre se fige l'une après l'autre, avec un peu d'avance
          if (frame > i * 2 + 6) {
            revele[i] = true;
            return lettre;
          }
          return CARACTERES[Math.floor(Math.random() * CARACTERES.length)];
        })
      );

      if (revele.every((r, i) => texte[i] === " " || r)) {
        clearInterval(intervalle);
      }
    }, vitesse);

    return () => clearInterval(intervalle);
  }, [texte, vitesse]);

  return affichage;
}

function Accueil() {
  const lettres = useEffetDecodage(NOM);

  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <h4 className="hero-tag">Bonjour, je suis</h4>
        <h1 className="hero-nom">
          {lettres.map((lettre, i) => (
            <span key={i} className="hero-nom-lettre">
              {lettre}
            </span>
          ))}
        </h1>
        <h3 className="hero-poste">Étudiant en 2e année de BUT Informatique</h3>
        <p className="hero-desc">
          À la recherche d'une alternance pour 2026/2027
        </p>
        <p className="hero-domaines">
          Développement logiciel <span className="hero-sep">•</span> Système et Réseaux
        </p>
        <div className="hero-btns">
          <Link to="/apropos" className="btn btn-outline">Voir Présentation</Link>
          <Link to="/projets" className="btn">Voir mes projets</Link>
        </div>
      </div>
    </section>
  );
}

export default Accueil;
