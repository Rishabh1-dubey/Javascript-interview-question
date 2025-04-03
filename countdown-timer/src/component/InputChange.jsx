import React from 'react'

const InputChange = ({handleChange,handlStart}) => {
  return (
    <div>
    <div className="input-container">
      <input
        onChange={handleChange}
        id="hour"
        type="text"
        placeholder="HH"
      />
      <input
        onChange={handleChange}
        id="minute"
        type="text"
        placeholder="MM"
      />
      <input
        onChange={handleChange}
        id="second"
        type="text"
        placeholder="SS"
      />
    </div>
    <button onClick={handlStart} className="button">
      Start
    </button>
  </div>
  )
}

export default InputChange