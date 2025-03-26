import React from 'react'
import { useState } from 'react'

const Accordian = ({title , content}) => {
const[ShowAccodian, setShowAccodian] = useState(false)


const handleClick=()=>{
    setShowAccodian(!ShowAccodian)
}
  return (
    <div className='accordion'>

        <div className='accordion-title'>
            {title}
            <span className='plus' onClick={handleClick}> +
            </span>
        </div>
        {ShowAccodian && <p className='accordion-content'>{content}</p>}
    </div>
  )
}

export default Accordian