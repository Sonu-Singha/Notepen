import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";



// Importing Indivisual Components

// Createpage
import Createpage from './components/pages/createpage/Createpage.component';

// Loginpage
import Loginpage from "./components/pages/loginpage/LoginPage.jsx";

// Registerpage
import Registerpage from './components/pages/registerpage/RegisterPage.jsx';




function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/register' element={<Registerpage />} />
        <Route path='/create' element={<Createpage />} />
        <Route path='/login' element={<Loginpage />} />
      </Routes>
    </BrowserRouter >

  )
}

export default App
