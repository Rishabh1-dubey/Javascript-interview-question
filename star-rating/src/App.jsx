import { useState } from 'react'
import './App.css'
import StarRating from './components/Star-Rating'

function App() {
 
  const [CurrentRating , setCurrentRating] = useState(3)

const handleRatingChange=(newRating)=>{
  setCurrentRating(newRating)
}

  return (
    <div>
      <StarRating  size={5} rating={CurrentRating} onChange={handleRatingChange} />
      <p>Current star Rating : {CurrentRating}</p>
    </div>
  )
}

export default App
