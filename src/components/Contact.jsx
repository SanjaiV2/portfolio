import { useState } from "react";
import emailjs from "@emailjs/browser";

// Composant Contact
// Envoie un vrai email via EmailJS (aucun backend nécessaire)

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [champs, setChamps] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [envoye, setEnvoye] = useState(false);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [erreur, setErreur] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setChamps({ ...champs, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnvoiEnCours(true);
    setErreur(false);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: champs.nom,
          from_email: champs.email,
          message: champs.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setEnvoye(true);
        setChamps({ nom: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Erreur EmailJS :", err);
        setErreur(true);
      })
      .finally(() => {
        setEnvoiEnCours(false);
      });
  }

  return (
    <section id="contact" className="container contact-section">
      <h2 className="section-title">Me contacter</h2>
      <p className="contact-sous-titre">
        Je suis à la recherche d'un stage ou d'une alternance.
      </p>

      <div className="contact-form-container">
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

            {erreur && (
              <p className="contact-erreur">
                ❌ L'envoi a échoué. Réessayez ou contactez-moi directement par email.
              </p>
            )}

            <button type="submit" className="btn" disabled={envoiEnCours}>
              {envoiEnCours ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
