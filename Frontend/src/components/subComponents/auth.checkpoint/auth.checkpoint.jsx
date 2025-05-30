// Code starts from Here


// importin necessary packages
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';



// Backend URL
const BackendURL = import.meta.env.VITE_BACKEND_URL;



// Importing Loading screen

import LoadingScreen from "/src/components/subComponents/loading.screens/Loading.jsx"



// Creating component

function Authcheckpoint({ children }) {
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(null);

    // getting auth response

    useEffect(() => {
        async function checkAuth() {
            try {
                const token = localStorage.getItem('userToken');
                if (!token) {
                    setIsLogged(false);
                    return;
                }
                
                const res = await axios.get(`${BackendURL}api/auth/isLogged/status`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });
                console.log("Response:", res.data);
                setIsLogged(true);
            } catch (error) {
                localStorage.removeItem('userToken'); // Clear invalid token
                setIsLogged(false);
            } finally {
                setLoading(false)
            }
        };

        checkAuth();
    }, [])

    if (loading) return <LoadingScreen/>;
    return (
        isLogged ? children : <Navigate to="/login" />
    )
}




// Exporting Component
export default Authcheckpoint;