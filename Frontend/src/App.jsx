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






function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* without outline */}
        <Route path='/' element={<Loginpage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/register' element={<Registerpage />} />

        {/* with outline */}
        <Route element={<Outline />}>
          <Route path='/create' element={<Createpage />} />
          <Route path='/view/:id' element={<Viewpage />} />
          <Route path='/myposts' element={<Allpostpgae />} />
        </Route>
      </Routes>
    </BrowserRouter >

  )
}

export default App
