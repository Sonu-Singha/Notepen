// Code starts from Here


// Importing express
import express from "express";
const router = express.Router();


// Importing deleting controller & isLogged
import deletePostController from "../controllers/deletepost.controller.js";
import isLogged from "../middlewares/isLogged.middleware.js";




// Setting Routes

// delete route

router.delete("/delete-post/:id", isLogged, deletePostController);



// Exporting router
export default router;