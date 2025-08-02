import React from "react";
import { useState } from "react";

const ButtonDisalbe = () => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>button disable</h1>
      <input type="text" value={input} placeholder="Type somehthing" onChange={changeHandler} />
      <button disabled={input.trim() === ""}>adddd</button>
    </div>
  );
};

export default ButtonDisalbe;
