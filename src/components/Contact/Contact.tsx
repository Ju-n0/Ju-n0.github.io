import { useState } from "react";
import "./contact.scss";

function Contact() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className={isHidden ? "contact contact-hidden" : "contact"}>
      <div>
        <button
          className="contact-title"
          type="button"
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          Me contacter
        </button>
      </div>
      <div className="contact-container">
        <div className="contact-form">
          <fieldset className="details">
            <p>Civilités</p>
            <div>
              <label htmlFor="lastname">Nom</label>
              <input type="text" name="lastname" />
            </div>
            <div>
              <label htmlFor="firstname">Prénom</label>
              <input type="text" name="firstname" />
            </div>
          </fieldset>

          <fieldset className="details">
            <p>Vos coordonnées</p>
            <div>
              <label htmlFor="phone-number"> Téléphone</label>
              <input className="shadow" type="tel" name="phone-number" />
            </div>
            <div>
              <label htmlFor="email">Adresse email</label>
              <input className="shadow" type="email" name="email" />
            </div>
          </fieldset>
        </div>
        <div className="contact-form">
          <fieldset>
            <label className="description-part" htmlFor="project-description">
              Votre message
            </label>
            <textarea className="description-area shadow" name="project-description"></textarea>
            <button className="submit-form">Envoyer le message</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Contact;
