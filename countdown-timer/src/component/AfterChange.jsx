import React from 'react'

const AfterChange = ({
    handlePaused,
    handleResume,
    handleReset
    ,paused
}) => {
  return (
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
  )
}

export default AfterChange