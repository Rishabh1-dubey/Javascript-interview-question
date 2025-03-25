import React, { useEffect, useState } from "react";
import { imageData } from "../data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Crousal = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const images = imageData;

  const prevBtn = () => {
    setcurrentIndex((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );
  };

  const nextBtn = () => {
    setcurrentIndex((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  };

  return (
    <div className="crousal-container">
      <button className="btn" onClick={prevBtn}>
        <ChevronLeft></ChevronLeft>
      </button>

      <img
        key={images[currentIndex]}
        src={images[currentIndex]}
        className="crousal-images"
      />

      <button className="btn" onClick={nextBtn}>
        <ChevronRight></ChevronRight>
      </button>
    </div>
  );
};

export default Crousal;
