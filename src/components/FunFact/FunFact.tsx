import { useState } from "react";
import ordiCafe from "../../assets/meghan-mosser-8FCNO3t7fso-unsplash.jpg";

import "./funFact.scss";

function FunFact() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={isHidden ? "funFact funFact-hidden" : "funFact"}>
      <button
        className="funFact-title"
        type="button"
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        Fun fact
      </button>
      <div className="funFact-container">
        <div className="funFact-text">
          <span className="funFact-text-title">Cette passion commune</span>
          <span>
            Nous sommes deux dev à la maison. C'est mon conjoint qui m'a fait découvrir son métier.
            Il parle code matin, midi et soir. Le développement web est son sujet de discussion
            préféré. En fait, il en parle même dans son sommeil. Résultat, sa veille technique
            enrichit ma veille technique. Ses conseils avisés me permettent d'avancer plus vite, de
            lever tout blocage et d'apprendre toujours davantage!
          </span>
        </div>
        <img className="funFact-img" src={ordiCafe} alt="ordinateur et café" />
      </div>
    </div>
  );
}

export default FunFact;
