// Code starts from Here

import express from 'express';
import viewController from '../controllers/view.controller.js';
const router = express.Router();





// Setting Route
//get routes

router.get("/post/:id", viewController);






// Exporting router
export default router;