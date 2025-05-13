// Code starts from Here


// Importing isLogged & express

import isLogged from "../middlewares/isLogged.middleware.js";
import express from "express";
const router = express.Router();



// Creating route

router.get("/auth/isLogged/status", isLogged, (req, res) => {
    try {
        res.status(200).json({ Logged: true });
    } catch (error) {
        console.error('Auth check error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// Exporting route
export default router;