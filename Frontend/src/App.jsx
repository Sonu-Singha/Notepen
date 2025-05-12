import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";



// Importing Indivisual Components

// Createpage
import Createpage from './components/pages/createpage/Createpage.component';

// Loginpage
import LoginPage from "./components/pages/googleAuthpage/Loginpage.jsx";

// Viewpage
import Viewpage from './components/pages/viewpage/Viewpage.jsx';

// Allpostpage
import Allpostpage from './components/pages/allpostpage/Allpostpage.jsx';

// auth check-point
import Authcheckpoint from "./components/subComponents/auth.checkpoint/auth.checkpoint.jsx";

// Hero
import HeroComponent from './components/pages/createpage/Hero.component.jsx';






function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />


        <Route path='/view/:id' element={<Viewpage />} />

        {/* routes with auth checking */}
        <Route path='/create' element={ <Authcheckpoint> <Createpage /> </Authcheckpoint>} />
        <Route path='/myposts' element={<Authcheckpoint> <Allpostpage /> </Authcheckpoint>} />

      </Routes>
    </BrowserRouter >

  )
}

export default App
