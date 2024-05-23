import "./messageCV.scss";
import CV from "../../assets/CV.pdf";

function MessageCV() {
  return (
    <div className="message-cv">
      <span>Bravo ! Vous avez gagné !</span>
      <a href={CV} download={"CV Juliette Nogueira.pdf"}>
        CV Juliette Nogueira
      </a>
    </div>
  );
}

export default MessageCV;
