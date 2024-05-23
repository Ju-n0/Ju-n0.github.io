import { useState } from "react";
import backCard from "../../assets/backCard.png";
import { log } from "console";

interface CardProps {
  image: string;
  index: number;
  key: number;
  onClick: () => void;
  cardIsHidden: boolean;
  isDiscovered: string[];
}
function Card({ image, onClick, cardIsHidden, isDiscovered }: CardProps) {
  const classCardfront = () => {
    if (isDiscovered.includes(image)) {
      return "game-container-img game-container-img-discovered";
    }

    if (cardIsHidden) {
      return "game-container-img game-container-img-hidden";
    }

    return "game-container-img";
  };

  const classCardback = () => {
    if (isDiscovered.includes(image)) {
      return "game-container-img game-container-img-hidden";
    }
    if (cardIsHidden) {
      return "game-container-img game-container-img";
    } else return "game-container-img-hidden";
  };
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      <img src={backCard} alt="" className={classCardback()} />
      <img src={image} alt="" className={classCardfront()} />
    </button>
  );
}

export default Card;
