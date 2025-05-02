import { useState } from 'react'
import './App.css'



// Importing Indivisual Components

// Createpage
import Createpage from './components/pages/createpage/Createpage.component';

// Loginpage
import Loginpage from "./components/pages/loginpage/LoginPage.jsx";

// Registerpage
import Registerpage from './components/pages/registerpage/RegisterPage.jsx';




function App() {
  return (
    <>
      {/* <Createpage /> */}
      {/* <Loginpage /> */}
      <Registerpage />
    </>
  )
}

export default App
