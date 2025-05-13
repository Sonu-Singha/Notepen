// Code starts from Here


// Importing necessary packages
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();


// Creating controller
function handleGoogleLogin(req, res) {
    try {
        // Create JWT token
        const jwtToken = jwt.sign(
            {
                id: req.user._id,
                email: req.user.email,
                googleId: req.user.googleId
            },
            process.env.JWT_SECRET
        );

        // Instead of setting a cookie, redirect with token in URL
        res.redirect(`${process.env.FRONTEND_URL}/auth-callback?token=${jwtToken}`);
    } catch (error) {
        console.log('Error in Google callback:', error);
        res.redirect(process.env.FRONTEND_URL + '/login');
    }
}


// Logout controller
function handleLogout(req, res) {
    res.status(200).send('Logged out successfully');
}


// Export controllers
export { handleGoogleLogin, handleLogout }; 