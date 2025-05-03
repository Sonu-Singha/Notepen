// Code starts from Here


// Importing CSS
import { useState } from "react";
import "../loginpage/LoginPage.css";



// Importin BackendURL & axios

import axios from "axios";
const BackendURL = import.meta.env.VITE_BACKEND_URL;



// Creating Component

// Main component(HEAD)----------------------------------------1

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginHandler = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post(`${BackendURL}api/login`, { email, password }, { withCredentials: true });
            alert(res.data)
        }
        catch (error) {
            alert("Failed to pass datas: " + error);
            console.log("Failed to pass datas: " + error);
        }
    }


    return (
        <div className="Login_Main_Component">
            <LoginComponent
                email={email}
                setEmail={(event) => setEmail(event.target.value)}
                password={password}
                setPassword={(event) => setPassword(event.target.value)}
                loginHandler={loginHandler}
            />
        </div>
    )
}



// Sub component(Login)----------------------------------------2

function LoginComponent({ email, setEmail, password, setPassword, loginHandler }) {
    return (
        <div className="Main_Login_Wrapper">
            <div className="Login_Container">
                <div className="login_t">
                    <span className="login_text">Login Yourself</span>
                </div>
                <form onSubmit={loginHandler} className="Login_Inputs">
                    <div className="input_container">

                        <span className="email_textt">Email</span>
                        <input
                            type="email"
                            onChange={setEmail}
                            value={email}
                            placeholder="Enter your email address"
                            className="email_input"
                            required
                        />

                        <span className="password_text">Password</span>
                        <input
                            type="password"
                            onChange={setPassword}
                            value={password}
                            placeholder="Enter your password"
                            className="password_input"
                            required
                        />
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