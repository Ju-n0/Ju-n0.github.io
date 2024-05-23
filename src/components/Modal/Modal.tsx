import { useEffect, useMemo, useState } from "react";
import { X } from "react-feather";
import "./modal.scss";
import { proArray, flowerArray, darkArray } from "../../data/data";
import CV from "../../assets/CV.pdf";
import Card from "../Card/Card";
import MessageCV from "../MessageCV/MessageCV";

interface ModalProps {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ isHidden, setIsHidden }: ModalProps) {
  const [imageSrcArray, setImageSrcArray] = useState<string[]>(proArray);
  const [theme, setTheme] = useState("pro");
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [firstCard, setFirstCard] = useState<string | null>(null);
  const [isDiscovered, setIsDiscovered] = useState<number[]>([]);
  const [isClickable, setIsClickable] = useState(true);

  const [cardIsHidden, setCardIsHidden] = useState(false);
  const randomArray = useMemo(() => {
    return imageSrcArray.toSorted(() => 0.5 - Math.random());
  }, [imageSrcArray]);

  useEffect(() => {
    if (!isHidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isHidden]);

  const resetGame = (theme: string) => {
    setIsDiscovered([]);
    setFirstCard(null);
    setActiveCards([]);

    if (theme === "pro") {
      setImageSrcArray([...proArray]);
    } else if (theme === "flower") {
      setImageSrcArray([...flowerArray]);
    } else if (theme === "dark") {
      setImageSrcArray([...darkArray]);
    }
  };

  const classThemeContainer = (theme: string) => {
    if (theme === "flower") {
      return "memo-container memo-container-flower";
    }
    if (theme === "dark") {
      return "memo-container memo-container-dark";
    } else return "memo-container";
  };

  const classThemeButton = (theme: string) => {
    if (theme === "flower") {
      return "memo-container-theme-button memo-container-theme-button-flower";
    }
    if (theme === "dark") {
      return "memo-container-theme-button memo-container-theme-button-dark";
    } else return "memo-container-theme-button";
  };

  return (
    <div className={isHidden ? "modal modal-hidden" : "modal"}>
      <div
        className="blur-container"
        onClick={() => {
          setIsHidden(true);
          resetGame(theme);
        }}
      ></div>
      <div className={classThemeContainer(theme)}>
        <div className="header-memo-container">
          <button
            className={[classThemeButton(theme), "new-game"].join(" ")}
            onClick={() => {
              resetGame(theme);
            }}
          >
            Nouveau jeu
          </button>
          <a
            className={[classThemeButton(theme), "new-game", "CV-link"].join(" ")}
            href={CV}
            download={"CV Juliette Nogueira.pdf"}
          >
            Téléchargement rapide
          </a>
          <h2>Memory : mon CV à gagner !</h2>
          <X
            className="memo-container-close"
            onClick={() => {
              setIsHidden(true);
              resetGame(theme);
            }}
          />
        </div>
        <div className="header-memo-container">
          <p className="memo-container-theme">Thème : </p>
          <button
            className={classThemeButton(theme)}
            onClick={() => {
              resetGame(theme);
              setTheme("pro");
              setImageSrcArray(proArray);
            }}
          >
            Pro
          </button>
          <button
            className={classThemeButton(theme)}
            onClick={() => {
              resetGame(theme);
              setTheme("flower");
              setImageSrcArray(flowerArray);
            }}
          >
            Fleurs
          </button>
          <button
            className={classThemeButton(theme)}
            onClick={() => {
              resetGame(theme);
              setTheme("dark");
              setImageSrcArray(darkArray);
            }}
          >
            Dark
          </button>
        </div>
        <div className="game-container">
          {randomArray.map((image, index) => (
            <Card
              key={index + new Date().getTime()}
              image={image}
              index={index}
              isDiscovered={isDiscovered}
              cardIsHidden={!activeCards.includes(index)}
              onClick={() => {
                if (!isClickable || activeCards.includes(index)) return;
                setIsClickable(false);

                if (activeCards.length < 2) {
                  setActiveCards([...activeCards, index]);
                } else {
                  setActiveCards([index]);
                }

                setCardIsHidden(!cardIsHidden);

                if (!firstCard) {
                  setFirstCard(image);
                }

                if (firstCard && firstCard !== image) {
                  setTimeout(() => {
                    setFirstCard(null);
                    setActiveCards([]);
                    setIsClickable(true);
                  }, 1000);

                  return;
                }

                if (firstCard === image) {
                  const newDiscoveredArray = [...isDiscovered];

                  newDiscoveredArray.push(firstCard);
                  setFirstCard(null);

                  setIsDiscovered(newDiscoveredArray);
                }

                setIsClickable(true);
              }}
            />
          ))}

          {isDiscovered.length === imageSrcArray.length / 2 ? <MessageCV /> : null}
        </div>
      </div>
    </div>
  );
}

export default Modal;
