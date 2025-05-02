// Code starts from Here


// Importing CSS
import { useState } from "react";
import "../loginpage/LoginPage.css";




// Creating Component

// Main component(HEAD)----------------------------------------1

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="Login_Main_Component">
            <LoginComponent email={email} setEmail={(event) => setEmail(event.target.value)} password={password} setPassword={(event) => setPassword(event.target.value)} />
        </div>
    )
}



// Sub component(Login)----------------------------------------2

function LoginComponent({ email, setEmail, password, setPassword }) {
    return (
        <div className="Main_Login_Wrapper">
            <div className="Login_Container">
                <div className="login_t">
                    <span className="login_text">Login Yourself</span>
                </div>
                <form action="/login" method="post" className="Login_Inputs">
                    <div className="input_container">
                        <span className="email_textt">Email</span>
                        <input type="email" onChange={setEmail} value={email} placeholder="Enter your email address" className="email_input" required="true" />
                        <span className="password_text">Password</span>
                        <input type="text" onChange={setPassword} value={password} placeholder="Enter your password" className="password_input" required="true" />
                    </div>
                    <div className="submit_container">
                        <button className="login_submit">Login</button>
                        <a className="not_logged" href="/register">not registered? click here to register</a>
                    </div>
                </form>
            </div>
        </div>
    )
}


















// Exporting main component
export default LoginPage;