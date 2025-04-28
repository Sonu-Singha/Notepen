// Code starts from Here


// Importing jwt and other packages

import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();




// Importing DB user model

import userRegisterModel from "../models/user.reg.model.js"







// Creating Middleware

async function isLogged(req, res, next) {
    const hasCookie = req.cookies.userToken;

    try {
        // checking hasCookie
        if (!hasCookie) {
            return res.status(400).send("user token not found!!")
        }


        // verifying jwt
        const jwtToken = jwt.verify(hasCookie, process.env.JWT_SECRET);
        console.log("id: " + jwtToken.id)

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
        res.status(500).send("something went wrong!! try again")
        console.log("Got error in isLogged Middleware: ", error);
    }
}

export default isLogged;