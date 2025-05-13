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
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        // console.log(jwtToken)

        // Get date for 24 hours from now
        const expiryDate = new Date();
        expiryDate.setHours(expiryDate.getHours() + 48);

        // Set cookie
        res.cookie('userToken', jwtToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            expires: expiryDate,
            path: '/'
        });

        // Redirect to frontend dashboard
        res.redirect(process.env.FRONTEND_URL + '/myposts');
    } catch (error) {
        console.log('Error in Google callback:', error);
        res.redirect(process.env.FRONTEND_URL + '/login');
    }
}


// Logout controller
function handleLogout(req, res) {
    res.clearCookie('userToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 72 * 60 * 60 * 1000
    });
    res.status(200).send('Logged out successfully');
}


// Export controllers
export { handleGoogleLogin, handleLogout }; 