import React from 'react'

const ProgressBarPro = ({progress,color}) => {

    const styleObject={
        width:`${progress}%`,
        backgroundColor:progress>=30 ?color || "lightgreen":"pink",
        height:30,
        borderRadius:20,
        color:progress>50 ? "white":"black"
      
    }
  return (
    <div className='container'>
        <div className='progress-bar'>
            <div style={styleObject}>
        {`${progress}%`}
            </div>
        </div>
    </div>
  )
}

export default ProgressBarPro