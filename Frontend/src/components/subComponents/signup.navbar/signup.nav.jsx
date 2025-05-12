// Code starts from Here

// Importing CSS
import { useNavigate } from "react-router-dom"
import "./signup.nav.css"


// Creating Signup Navbar Component

// Main component
function SignupNavbar() {
    return (
        <div className="Signup_Navbar_Wrapper">
            <nav className="Main_Signup_Navbar_Component">
                <BrandText />
                <SignupNavButtons />
            </nav>
        </div>
    )
}


// Brand Text component
function BrandText() {
    return (
        <div className="Brand_Text_Container">
            <span className="Brand_Text">
                <span className="Created_Text">Created with</span>
                <span className="Logo_Text">Notepen</span>
            </span>
        </div>
    )
}


// Login/Signup Nav component
function SignupNavButtons() {
    return (
        <div className="Main_Signup_Nav_Buttons">
            <div className="Signup_Text_Container">
                <span className="Signup_Free_Text">Upload for free</span>
            </div>
            <LoginButtonComponent />
        </div>
    )
}


// Login Button Component
function LoginButtonComponent() {
    const Navigate = useNavigate();

    return (
        <div className="Login_Button_Component">
            <button className="Login_Text" onClick={clickHandler}>
                Get Started
            </button>
        </div>
    )

    function clickHandler() {
        Navigate("/login")
    }
}












// exporting the main component

export default SignupNavbar;