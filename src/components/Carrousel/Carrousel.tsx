import { useState } from "react";

import "./carrousel.scss";

import { ArrowLeft, ArrowRight } from "react-feather";

interface CarrouselProps {
  imageSrcArray: string[];
  first?: boolean;
  last?: boolean;
}

function Carrousel({ imageSrcArray, first, last }: CarrouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const changePrevSlide = () => {
    setActiveIndex(activeIndex === 0 ? imageSrcArray.length - 1 : activeIndex - 1);
  };
  const changeNextSlide = () => {
    setActiveIndex(activeIndex === imageSrcArray.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="carrousel-container">
      <ArrowLeft
        className="arrow"
        onClick={() => {
          changePrevSlide();
        }}
      />
      {imageSrcArray.map((image, index) => (
        <img
          src={image}
          key={index}
          className={[
            activeIndex === index ? "visible" : "hidden",
            first ? "first" : "",
            last ? "last" : "",
          ].join(" ")}
          alt=""
        />
      ))}

      <ArrowRight
        className="arrow"
        onClick={() => {
          changeNextSlide();
        }}
      />
    </div>
  );
}

export default Carrousel;
