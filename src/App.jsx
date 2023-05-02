import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Floorplan from './Components/Floorplan'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Floorplan />
      </div>
    </>
  )
}

export default App
