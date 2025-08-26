import { useEffect, useRef, useState } from "react";
// import './App.css'

function App() {
  const OTP_DIGIT = 5;

  const [inputArr, setinputArr] = useState(new Array(OTP_DIGIT).fill(""));

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleInputChange = (value, index) => {
    if (isNaN(value)) return;

    console.log(value);
    const newValue = value.trim(); // ye tb kregne jb mera last box mai kuch na hho and wo backsapnce ho jaye

    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setinputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  // backspace kre to mera peeche aya

  const handleONkeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };
  return (
    <div>
      <h1>Otp login</h1>
      {inputArr.map((input, index) => (
        <input
          key={index}
          className="input-otp"
          type="text"
          value={inputArr[index]}
          ref={(input) => (refArr.current[index] = input)}
          onChange={(e) => handleInputChange(e.target.value, index)}
          //last step
          onKeyDown={(e) => handleONkeyDown(e, index)}
        />
      ))}
    </div>
  );
}

export default App;
