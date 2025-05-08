// Code starts from Here

import express from 'express';
import allPostController from '../controllers/allpost.controller.js';
const router = express.Router();
import isLogged from '../middlewares/isLogged.middleware.js';





// Setting Route
//get routes

router.get("/all-posts", isLogged, allPostController);






// Exporting router
export default router;