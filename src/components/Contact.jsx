import { useState } from "react";

// Composant Contact
// Contient le formulaire avec useState pour gérer les champs

function Contact() {
  // Un seul useState avec un objet pour les 3 champs du formulaire
  const [champs, setChamps] = useState({
    nom: "",
    email: "",
    message: "",
  });

  // useState pour savoir si le message a été envoyé
  const [envoye, setEnvoye] = useState(false);

  // Cette fonction met à jour le bon champ quand on tape
  function handleChange(e) {
    const { name, value } = e.target;
    // "...champs" garde les autres champs intacts
    setChamps({ ...champs, [name]: value });
  }

  // Cette fonction s'exécute quand on clique sur "Envoyer"
  function handleSubmit(e) {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log("Message envoyé :", champs);
    setEnvoye(true);
    setChamps({ nom: "", email: "", message: "" }); // Remet les champs à vide
  }

  return (
    <section id="contact" className="container contact-section">
      <h2 className="section-title">Me contacter</h2>
      <p className="contact-sous-titre">
        Je suis à la recherche d'un stage ou d'une alternance.
      </p>

      <div className="contact-form-container">
        {/* Affichage conditionnel : message de succès ou formulaire */}
        {envoye ? (
          <div className="succes-message">
            <p>✅ Message envoyé ! Je vous répondrai dès que possible.</p>
            <button onClick={() => setEnvoye(false)}>
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={champs.nom}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={champs.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Votre message..."
              rows="5"
              value={champs.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn">
              Envoyer le message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;