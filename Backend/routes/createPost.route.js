// Code starts from Here


// Importing postController

import postController from "../controllers/post.controller.js";

import express from "express";
const router = express.Router();


// Importing isLogged middleware

import isLogged from "../middlewares/isLogged.middleware.js";




// post requests

router.post("/create-post", isLogged, postController);




export default router;
