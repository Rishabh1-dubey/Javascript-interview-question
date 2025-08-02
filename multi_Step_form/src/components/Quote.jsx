import React, { useState } from "react";

const Quote = () => {
  const quotes = [
    "Believe in yourself.",
    "Stay positive.",
    "Never give up.",
    "Code. Sleep. Repeat.",
    "Keep pushing forward.",
  ];

  const [quote, setQuote] = useState("");

  const addQuotes = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  console.log(quote)
  return (
    <div>
      <h1>Random Quotes Generator</h1>

     <p>{quote}</p>

      <button onClick={addQuotes}>add</button>
    </div>
  );
};

export default Quote;
