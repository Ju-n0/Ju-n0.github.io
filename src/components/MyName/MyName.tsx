import Carrousel from "../Carrousel/Carrousel";
import { Smile, Linkedin, GitHub } from "react-feather";
import "./myName.scss";

interface MyNameProps {
  setModalIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}
function MyName({ setModalIsHidden }: MyNameProps) {
  const moodArray = [
    "/images/mood/mood1.jpg",
    "/images/mood/mood2.jpg",
    "/images/mood/mood3.jpg",
    "/images/mood/mood4.jpg",
    "/images/mood/mood5.jpg",
  ];
  const eyeArray = [
    "/images/eye/eye1.jpg",
    "/images/eye/eye2.jpg",
    "/images/eye/eye3.jpg",
    "/images/eye/eye4.jpg",
    "/images/eye/eye5.jpg",
  ];
  const mouthArray = [
    "/images/mouth/mouth1.jpg",
    "/images/mouth/mouth2.jpg",
    "/images/mouth/mouth3.jpg",
    "/images/mouth/mouth4.jpg",
    "/images/mouth/mouth5.jpg",
  ];
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
