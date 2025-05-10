// Code starts from Here


// Importing postController & multer middleware, express

import postController from "../controllers/post.controller.js";
import upload from "../middlewares/multer.middleware.js";

import express from "express";
const router = express.Router();


// Importing isLogged middleware

import isLogged from "../middlewares/isLogged.middleware.js";




// post requests

router.post("/create-post", upload.single('banner'), postController);




export default router;
