// Code starts from Here
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoadingScreen from '../../subComponents/loading.screens/Loading.jsx';

function AuthCallback() {
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        
        if (token) {
            // Store token in localStorage
            localStorage.setItem('userToken', token);
            navigate('/myposts');
        } else {
            navigate('/login');
        }
    }, [navigate, location]);
    
    return <LoadingScreen message="Signing In" />;
}

export default AuthCallback;