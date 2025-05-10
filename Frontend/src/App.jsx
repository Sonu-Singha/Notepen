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

// Viewpage
import Viewpage from './components/pages/viewpage/Viewpage.jsx';

// Allpostpgae
import Allpostpgae from './components/pages/allpostpage/Allpostpgae.jsx';

// Outline
import Outline from './components/subComponents/outline/Outiline.jsx';

// auth check-point
import Authcheckpoint from "./components/subComponents/auth.checkpoint/auth.checkpoint.jsx";






function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/register' element={<Registerpage />} />


        <Route path='/view/:id' element={<Viewpage />} />

        {/* routes with auth checking */}
        <Route path='/create' element={ <Createpage />} />
        <Route path='/myposts' element={<Authcheckpoint> <Allpostpgae /> </Authcheckpoint>} />

      </Routes>
    </BrowserRouter >

  )
}

export default App
