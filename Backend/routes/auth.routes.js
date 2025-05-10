// Code starts from Here


// Importing necessary packages
import express from 'express';
import passport from '../config/passport.config.js';
import { handleGoogleLogin } from '../controllers/auth.controller.js';

const router = express.Router();


// Google OAuth routes
router.get('/google', passport.authenticate('google', { scope: ["profile", 'email'] }));

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login', session: false }),
    handleGoogleLogin
);


// Export router
export default router; 