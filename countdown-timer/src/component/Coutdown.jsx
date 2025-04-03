import React, { useEffect, useState } from "react";
import InputChange from "./InputChange";

const Coutdown = () => {
  const [start, setStart] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [timerId, setTimerId] = useState(0);



const reUse=()=>{
  setHour(0);
  setMinute(0);
  setSecond(0);
  clearInterval(timerId);
}


  const handlStart = () => {
    if (hour < 0 || minute < 0 || second <= 0) {
      alert("Invalid input");
    } else {
      setStart(true);
    }
  };
  const handleReset = () => {
    setStart(false);
    reUse()
   
  };

  const handlePaused = () => {
    setPaused(true);
    runtime(second, minute, hour);
  };
  const handleResume = () => {
    setPaused(false);
    clearInterval(timerId);
  };

  const handleChange = (e) => {
    console.log(e.target.value, e.target.id);

    const value = parseInt(e.target.value);
    const id = e.target.id;
    if ("hour" === id) {
      setHour(value);
    } else if ("minute" === id) {
      setMinute(value);
    } else {
      setSecond(value);
    }
  };

  const runtime = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSecond((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinute((m) => m - 1);
      setSecond(59);
    } else {
      setHour((h) => h - 1);
      setMinute(59);
      setSecond(59);
    }
    if (sec === 0 && min === 0 && hr === 0) {
      reUse() 
    }
  };

  useEffect(() => {
    let tid;
    if (start) {
      tid = setInterval(() => {
        runtime(second, minute, hour, tid);
      }, 1000);
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [start, hour, minute, second]);

  return (
    <div className="container">
      <h1>Countdown timer</h1>
      {!start && <InputChange handleChange={handleChange} handlStart={handlStart}/>}
      {start && (
        <div>
          <div className="after-click">
            <div>{hour < 10 ? `0${hour}` : hour}</div>
            <span>:</span>
            <div>{minute < 10 ? `0${minute}` : minute}</div>
            <span>:</span>
            <div>{second < 10 ? `0${second}` : second}</div>
          </div>
          {!paused && (
            <button onClick={handlePaused} className="button">
              Pause
            </button>
          )}{" "}
          {paused && (
            <button onClick={handleResume} className="button">
              Resume
            </button>
          )}
          <button onClick={handleReset} className="button">
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default Coutdown;
