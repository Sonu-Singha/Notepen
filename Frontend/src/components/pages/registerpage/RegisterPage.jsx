// Coding starts from Here

import { useState } from "react";


// Importing CSS
import "../registerpage/RegisterPage.css"




// Creating Component

// Main component(HEAD)----------------------------------------1
function RegisterPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="Register_Main_Component">
            <RegisterComponent username={username} setUsername={(event) => setUsername(event.target.value)} email={email} setEmail={(event) => setEmail(event.target.value)} password={password} setPassword={(event) => setPassword(event.target.value)} />
        </div>
    )
}



// Sub component(Register)----------------------------------------2

function RegisterComponent({ username, setUsername, email, setEmail, password, setPassword }) {
    return (
        <div className="Main_Register_Wrapper">
            <div className="Register_Container">

                <div className="Register_t">
                    <span className="Register_text">Create your Account</span>
                </div>

                <form action="/Register" method="post" className="Register_Inputs">

                    <div className="reg_input_container">

                        <span className="username_text">Username</span>
                        <input
                            type="text"
                            value={username}
                            onChange={setUsername}
                            placeholder="Enter a username"
                            className="username_input"
                            required="true"
                        />

                        <span className="reg_email_text">Email</span>
                        <input
                            type="email"
                            onChange={setEmail}
                            value={email}
                            placeholder="Enter your email address"
                            className="reg_email_input"
                            required="true"
                        />

                        <span className="reg_password_text">Password</span>
                        <input
                            type="text"
                            onChange={setPassword}
                            value={password}
                            placeholder="Choose your password"
                            className="reg_password_input"
                            required="true"
                        />
                    </div>

                    <div className="reg_submit_container">
                        <button className="Register_submit">Register</button>
                        <a className="logged_in" href="/login">already registered? click here to login</a>
                    </div>

                </form>

            </div>
        </div>
    )
}



















// Exporting main component
export default RegisterPage;