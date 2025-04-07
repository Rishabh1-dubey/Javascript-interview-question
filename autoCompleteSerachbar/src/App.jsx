import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Serach from './Serach'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Serach/>
   </div>
  )
}

export default App
