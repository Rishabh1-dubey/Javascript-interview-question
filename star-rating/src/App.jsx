import { useState } from 'react'
import './App.css'
import StarRating from './components/Star-Rating'
import Basicfrom from './components/Basicfrom'

function App() {
 
  const [CurrentRating , setCurrentRating] = useState(3)

const handleRatingChange=(newRating)=>{
  setCurrentRating(newRating)
}

  return (
    <div>
      <StarRating  size={5} rating={CurrentRating} onChange={handleRatingChange} />
      <p>Current star Rating : {CurrentRating}</p>
      <Basicfrom/>
    </div>
  )
}

export default App
