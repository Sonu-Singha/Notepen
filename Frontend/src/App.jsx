import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';



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

// AuthCallback
import AuthCallback from './components/pages/authCallback/AuthCallback.jsx';






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

        <Route path='/auth-callback' element={<AuthCallback />} />

      </Routes>
    </BrowserRouter >

  )
}

// Add this to your main index.js or App.jsx
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('userToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default App
