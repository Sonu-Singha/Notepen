import { useState } from 'react'
import './App.css'



// Importing Indivisual Components

// Navbar
import Navbar from "../src/components/navbar/Nav.component.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
