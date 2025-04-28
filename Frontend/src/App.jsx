import { useState } from 'react'
import './App.css'



// Importing Indivisual Components

// Createpage
import Createpage from './components/pages/Createpage.component'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Createpage />
    </>
  )
}

export default App
