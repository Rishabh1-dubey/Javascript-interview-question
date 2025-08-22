import React from "react";

const ProgressBarPro = ({ progress, color }) => {
  const styleObject = {
    width: `${progress}%`,
    color: progress > 50 ? "black" : "white",
    backgroundColor:
      progress >= 60 ? `${color}` : progress >= 40 ? "red" : "pink",
  };
  return (
    <div className="container">
      <div className="progress-bar">
        <div style={styleObject}>{`${progress}%`}</div>
      </div>
    </div>
  );
};

export default ProgressBarPro;
