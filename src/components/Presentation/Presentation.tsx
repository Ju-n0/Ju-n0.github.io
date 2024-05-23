import { useState } from "react";
import juno from "../../assets/juno.png";

import "./presentation.scss";

function Presentation() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={isHidden ? "presentation presentation-hidden" : "presentation"}>
      <button
        className="presentation-title"
        type="button"
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        Présentation
      </button>
      <div className="presentation-container">
        <img className="presentation-img" src={juno} alt="une photo de moi" />
        <div className="presentation-text">
          <span className="presentation-text-title">Développeuse Frontend JS et React</span>
          <span>
            Après avoir travaillé 13 ans dans des départements financiers, j'ai fait le choix de me
            réorienter dans le domaine du dévelopement web. Je me suis formée en autodidacte, et
            chez O'Clock lors d'une formation intensive de 6 mois sur HTML, CSS/SCSS, des frameworks
            CSS (Bootstrap, Bulma, Semantic UI, Tailwind), JavaScript, TypeScript, NodeJs, Express,
            React, PostgreSQL. J'ai également découvert en parallèle de cette formation, JQuery et
            VueJS. Mes différentes expériences professionnelles m'ont permis de travailler auprès
            d'une clientèle diverse et parfois très éxigeante. J'ai donc un sens aigue de la
            relation client. Je mets à votre disposition toute ma sensibilité humaine et artisitique
            afin de vous accompagner dans votre projet de création de site web.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
