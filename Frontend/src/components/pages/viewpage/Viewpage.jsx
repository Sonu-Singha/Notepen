// Importing sub components

// Importing Hooks & axios
import { useState, useEffect } from "react";
import axios from "axios";

// Navbar
import Navbar from "../../subComponents/navbar/Nav.component.jsx";
// Footer
import Footer from '../../subComponents/footer/Footer.component.jsx';
// Hero Component
import HeroComponent from "./HeroComponent.jsx";



// Importing Backend URL
const BackendURL = import.meta.env.VITE_BACKEND_URL;






// Creating Component

function Viewpage() {
    const [isLogged, setIsLogged] = useState(null);

    useEffect(() => {
        async function checkAuth() {
            const res = await axios.get(`${BackendURL}api/auth/isLogged/status`, { withCredentials: true });
            if (res.data) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        }
        checkAuth();
    }, [])

    return (
        <>
            {isLogged && (
                <>
                    <Navbar />
                    <HeroComponent />
                    <Footer />
                </>
            )}
            {!isLogged && (
                <>
                    <HeroComponent />
                    <Footer />
                </>
            )}
        </>
    )
}




export default Viewpage;