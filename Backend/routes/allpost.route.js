// Code starts from Here

import express from 'express';
import allPostController from '../controllers/allpost.controller.js';
const router = express.Router();





// Setting Route
//get routes

router.get("/all-posts", allPostController);






// Exporting router
export default router;