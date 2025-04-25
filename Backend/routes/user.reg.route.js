// Code starts from Here


// Importing controller & express

import userRegisterController from "../controllers/user.reg.controller.js";

import express from "express";
const router = express.Router();




// post requests

router.post("/register", userRegisterController);




export default router;