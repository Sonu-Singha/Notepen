// Code starts from Here


// Importing CSS
import "../googleAuthpage/loginpage.css"




// Creating Component

// Main Component(MAIN)-----------------------------------------------1

function Herocomponent() {
    return (
        <div className="Login_Main_Component">
            <LoginBox />
        </div>
    )
}



// Sub Component(LOGIN)-----------------------------------------------2

function LoginBox() {
    const handleGoogleLogin = () => {
        window.location.href = `${import.meta.env.VITE_BACKEND_URL}api/google`;
    };

    return (
        <div className="Main_Login_Wrapper">
            <div className="Login_Container">
                <div className="login_t">
                    <span className="login_text">Register on Notepen</span>
                </div>
                <div className="login_button_container">
                    <button onClick={handleGoogleLogin} className="google_login_button">
                        <img 
                            src="../src/assets/icons/google.png" 
                            alt="Google" 
                            className="google_icon"
                        />
                        Click Here to Login
                    </button>
                </div>
                <div className="terms_container">
                    <span className="terms_text">
                        By continuing, you agree to Notepen's
                    </span>
                    <div className="terms_links">
                        <a href="/#" className="terms_link">Terms of Service</a>
                        <span className="terms_separator">&</span>
                        <a href="/#" className="terms_link">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}















// Exporting Main component

export default Herocomponent;