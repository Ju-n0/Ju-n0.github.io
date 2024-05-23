import Carrousel from "../Carrousel/Carrousel";
import { Smile, Linkedin, GitHub } from "react-feather";
import "./myName.scss";

import mood1 from "../../assets/images/mood/mood1.jpg";
import mood2 from "../../assets/images/mood/mood2.jpg";
import mood3 from "../../assets/images/mood/mood3.jpg";
import mood4 from "../../assets/images/mood/mood4.jpg";
import mood5 from "../../assets/images/mood/mood5.jpg";
import eye1 from "../../assets/images/eye/eye1.jpg";
import eye2 from "../../assets/images/eye/eye2.jpg";
import eye3 from "../../assets/images/eye/eye3.jpg";
import eye4 from "../../assets/images/eye/eye4.jpg";
import eye5 from "../../assets/images/eye/eye5.jpg";
import mouth1 from "../../assets/images/mouth/mouth1.jpg";
import mouth2 from "../../assets/images/mouth/mouth2.jpg";
import mouth3 from "../../assets/images/mouth/mouth3.jpg";
import mouth4 from "../../assets/images/mouth/mouth4.jpg";
import mouth5 from "../../assets/images/mouth/mouth5.jpg";

interface MyNameProps {
  setModalIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}
function MyName({ setModalIsHidden }: MyNameProps) {
  const moodArray = [mood1, mood2, mood3, mood4, mood5];
  const eyeArray = [eye1, eye2, eye3, eye4, eye5];
  const mouthArray = [mouth1, mouth2, mouth3, mouth4, mouth5];
  return (
    <div className="name-container">
      <div className="carrousel-part">
        <p>Votre humeur ?</p>
        <Carrousel imageSrcArray={moodArray} first />
        <Carrousel imageSrcArray={eyeArray} />
        <Carrousel imageSrcArray={mouthArray} last />
      </div>
      <div className="name-part">
        <h1 className="name">
          Ju-N0<span>.dev</span>
        </h1>

        <button
          onClick={() => {
            setModalIsHidden(false);
          }}
        >
          <Smile className="name-part-emoticon" />
          Jeu pour obtenir mon CV
        </button>
        <a target="_blank" href="https://github.com/Ju-N0">
          <GitHub className="name-part-emoticon" />
          Lien vers mon Github
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/juliette-nogueira-dev">
          <Linkedin className="name-part-emoticon" />
          Lien vers mon LinkedIn
        </a>
      </div>
    </div>
  );
}

export default MyName;
