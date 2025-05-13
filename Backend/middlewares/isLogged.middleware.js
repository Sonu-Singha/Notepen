// Code starts from Here


// Importing jwt and other packages

import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();




// Importing DB user model

import userRegisterModel from "../models/user.reg.model.js"







// Creating Middleware

async function isLogged(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "No bearer token provided" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "token not found" });
    }
    try {

        // verifying jwt
        const jwtToken = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("id: " + jwtToken.id)

        // getting the user(if logged in)
        const user = await userRegisterModel.findById(jwtToken.id)


        // returing(if not logged in)
        if (!user) {
            return res.status(400).send("user not found!!")
        }

        req.user = user;

        next();
    }

    catch (error) {
        console.log("Got error in isLogged Middleware: ", error);
        return res.status(401).json({ error: "something went wrong!! try again" })
    }
}

export default isLogged;