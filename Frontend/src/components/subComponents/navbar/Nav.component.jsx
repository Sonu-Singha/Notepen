// Code starts from Here

// Importing CSS

import { useNavigate } from "react-router-dom"
import "./Nav.component.css"

import { useEffect } from "react";
import axios from "axios";





// Creating Navbar Component

// Main component
function Navbar() {
    return (
        <div className="Navbar_Wrapper">
            <nav className="Main_Navbar_Component">
                <ThemeToggle />
                <ExtraNavButtons />
            </nav>
        </div>
    )
}


// Theme Toggle component
function ThemeToggle() {
    return (
        <div className="Main_Theme_Toggle">
            <div className="theme_logo" />
            <span className="theme_text">Theme</span>

        </div>
    )
}


// Extra Nav components
function ExtraNavButtons() {
    return (
        <div className="Main_Extra_Nav_Buttons">
            <ViewButtonComponent />
            <CreateButtonComponent />
            <LogoutComponent />
        </div>
    )
}


// View Component
function ViewButtonComponent() {
    const Navigate = useNavigate();

    return (
        <div className="View_Button_Component">
            <span className="View_Text" onClick={clickHandler}>
                My Posts
            </span>
        </div>
    )

    function clickHandler() {
        Navigate("/myposts")
    }
}


// Create Button
function CreateButtonComponent() {
    const Navigate = useNavigate();

    return (
        <div className="Create_Button_Component">
            <img className="create_icon" src="/src/assets/icons/create.icon.svg" alt="create icon" onClick={clickHandler} />
        </div>
    )

    function clickHandler() {
        Navigate("/create")
    }
}


// Logout Component
function LogoutComponent() {
    const Backend_URL = import.meta.env.VITE_BACKEND_URL;

    async function logoutHandler() {
        try {
            const res = await axios.get(`${Backend_URL}api/logout`)
            if(res.status===200){
                localStorage.removeItem("userToken")
                window.location.href="/login"
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="Logout_Component">
            <img className="logout_button" src="/src/assets/icons/logout.icon.svg" alt="logout" onClick={logoutHandler} />
        </div>

    )
}












// exporting the main component

export default Navbar;