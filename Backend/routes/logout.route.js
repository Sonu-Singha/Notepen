// Code starts from Here


// Importing the express & necessary packages

import express from 'express';
const router = express.Router();




// Importing the logout controller
import {handleLogout} from '../controllers/auth.controller.js';

// Setting routes

router.get('/logout', handleLogout);



// Exporting router
export default router;