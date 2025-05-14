import React from "react";
import '../style/Contact.css';
import po from '../images/po.jpg';


function Contacte() {
  return (
    <div className="join">

      {/* Côté gauche - image */}
      <div className="cotegauche">
        <img src={po} alt="Paysage" />
      </div>

      {/* Côté droit - form */}
      <div className="cotedroit">
        <h1><strong>Rejoignez-nous</strong></h1>
        <form id="contactform" method="post">

          <label htmlFor="name">Nom Complet</label>
          <input id="name" name="name" type="text" placeholder="Entrez votre nom complet" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Entrez votre email" required />

          <label htmlFor="subject">Sujet</label>
          <input id="subject" name="subject" type="text" placeholder="Sujet du message" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Entrez votre message" required></textarea>

          <div className="checkbox-container">
            <input id="consent" type="checkbox" required />
            <label htmlFor="consent">J'accepte que mes données soient utilisées pour me recontacter.</label>
          </div>

          <button type="submit">Envoyer le message</button>
        </form>
      </div>

    </div>
  );
}

export default Contacte;

