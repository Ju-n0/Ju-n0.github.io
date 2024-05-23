import { useState } from "react";
import idCardPicture from "../../assets/idCardPicture.jpg";
import idCardSignature from "../../assets/signature.png";

import "./idCard.scss";

function IdCard() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={isHidden ? "idCard idCard-hidden" : "idCard"}>
      <div className="idCard-container">
        <div className="card">
          <div className="card--republic">
            <span>république</span>
            <span>française</span>
          </div>
          <div className="card--number">
            <span className="card--number-cni">carte nationale d'identité n°:</span>
            <span className="idNumber">000000000000</span>
            <span className="card--number-nf">Nationalité Française</span>
          </div>
          <div className="card--body-picture">
            <img src={idCardPicture} alt="" />
          </div>
          <div className="card--body-details">
            <div>
              <span className="label">Nom :</span>
              <span>NOGUEIRA</span>
            </div>
            <div>
              <span className="label">Prénom(s):</span>
              <span>JULIETTE</span>
            </div>
            <div>
              <div>
                <span className="label">Sexe :</span>
                <span>F</span>
              </div>
              <div>
                <span className="label">Né(e) le :</span>
                <span>01.05.1991</span>
              </div>
            </div>
            <div>
              <span className="label">à :</span>
              <span>la maternité</span>
            </div>
            <div>
              <span className="label">Taille :</span>
              <span>3m40 au moins</span>
            </div>
            <div className="signature-container">
              <span className="label">
                Signature <br />
                du titulaire :
              </span>
              <span className="signature">
                <img src={idCardSignature} alt="" />
              </span>
            </div>
          </div>
          <div className="card--footer">
            <span>IDFRANOGUEIRA&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;091019</span>
            <span>0000000000JUNOxxJUNO&gt;&gt;&gt;00000000M0</span>
          </div>
        </div>
      </div>
      <button
        className="idCard-title"
        type="button"
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        Unpeu de CSS
      </button>
    </div>
  );
}

export default IdCard;
