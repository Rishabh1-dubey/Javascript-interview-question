import React from "react";
import { useState } from "react";

const StarRating = ({ size = 5, rating, onChange=()=>{ } }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarHover = (hoverRating) => {
    setHoverRating(hoverRating);
  };

  return (
    <div className="star-rating">
      {Array(size)
        .fill("")
        .map((_, index) => {
          const starValue = index + 1;

          let starClass = "star";
          if (hoverRating >= starValue) {
            starClass += " hover";
          }
else if(rating>= starValue){
  starClass+= " active"
}
          return (
            <span
              className={starClass}
              key={index}
              onClick={()=>onChange(starValue)}
              onMouseEnter={() => handleStarHover(starValue)}
              onMouseLeave={() => handleStarHover(0)}
            >
              &#9733;
            </span>
          );
        })}
    </div>
  );
};

export default StarRating;
