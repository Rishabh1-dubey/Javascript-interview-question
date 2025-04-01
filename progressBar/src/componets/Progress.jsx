import React, { useEffect, useState } from 'react'

const Progress = ({value}) => {

const[precentage , setPercentage] = useState(value)

useEffect(()=>{
    setPercentage(Math.min(100, Math.max(0,value)))
},[value])

  return (
    <div className='progress'>
  
    <span style={{color:precentage >25 ?"white":"black"}}>{precentage.toFixed()}%</span>
    <div style={{width:`${precentage}%`}}></div>
    </div>
  )
}

export default Progress