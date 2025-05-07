// Code starts from Here


// Importing isLogged & express

import isLogged from "../middlewares/isLogged.middleware.js";
import express from "express";
const router = express.Router();



// Creating route

router.get("/auth/isLogged/status", isLogged, (req, res) => {
    res.status(200).send({ Logged: true })
})



// Exporting route
export default router;