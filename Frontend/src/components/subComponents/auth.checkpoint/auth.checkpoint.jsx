// Code starts from Here


// importin necessary packages
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';



// Backend URL
const BackendURL = import.meta.env.VITE_BACKEND_URL;





// Creating component

function Authcheckpoint({ children }) {
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(null);

    // getting auth response

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await axios.get(`${BackendURL}api/auth/isLogged/status`, { withCredentials: true });
                setIsLogged(true);
            } catch (error) {
                setIsLogged(false);
            } finally {
                setLoading(false)
            }
        };

        checkAuth();
    }, [])

    if (loading) return <div>Loading...</div>;
    return (
        isLogged ? children : <Navigate to="/login" />
    )
}




// Exporting Component
export default Authcheckpoint;