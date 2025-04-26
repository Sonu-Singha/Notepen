// Code starts from Here


// Importing controller & express

import userLoginController from "../controllers/user.login.controller.js";

import express from "express";
const router = express.Router();





// Creating Routes

// post requests

router.post("/login", userLoginController)



export default router;