import axios from 'axios';

// Create an axios instance with auth header
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});

// Add interceptor to add token to all requests
api.interceptors.request.use(config => {
    const token = localStorage.getItem('userToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
