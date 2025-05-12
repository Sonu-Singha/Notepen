// Importing sub components

// Importing Hooks & axios
import { useState, useEffect } from "react";
import axios from "axios";

// Navbar
import Navbar from "../../subComponents/navbar/Nav.component.jsx";
// Signup Navbar
import SignupNavbar from "../../subComponents/signup.navbar/signup.nav.jsx";
// Footer
import Footer from '../../subComponents/footer/Footer.component.jsx';
// Hero Component
import HeroComponent from "./HeroComponent.jsx";
// Loading Component
import LoadingScreen from "../../subComponents/loading.screens/Loading.jsx";



// Importing Backend URL
const BackendURL = import.meta.env.VITE_BACKEND_URL;






// Creating Component

function Viewpage() {
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(null);

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await axios.get(`${BackendURL}api/auth/isLogged/status`, { withCredentials: true });
                setIsLogged(true);
            } catch (error) {
                console.error("Auth check failed", error);
                setIsLogged(false);
            } finally {
                setLoading(false);
            }
        }
        checkAuth();
    }, [])

    // if loading is true, show loading screen
    if (loading) {
        return <LoadingScreen />
    }

    return (
        isLogged ? (
            <>
                <Navbar />
                <HeroComponent />
                <Footer />
            </>
        ) : (
            <>
                <SignupNavbar />
                <HeroComponent />
                <Footer />
            </>
        )
    )
}




export default Viewpage;