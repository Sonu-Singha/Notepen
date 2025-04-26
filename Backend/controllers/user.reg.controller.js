// Code starts from Here


// Importing DB Schema Model & necessary packages and jwt

import userRegisterModel from "../models/user.reg.model.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { config } from "dotenv"
config();
import cookies from "cookie-parser"



// Creating controller

async function userRegisterController(req, res) {
    const { username, email, password } = req.body;

    const alreadyUser = await userRegisterModel.findOne({ email });

    if (alreadyUser) {
        return res.status(400).send("user already registered!!")
    }

    // hashing pass input
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);


    // registering new user
    try {
        const newUser = await userRegisterModel.create({
            username, email,
            password: hashedPass
        })

        
        // creating jwt token
        const jwtToken = jwt.sign({
            id: newUser._id,
            email: newUser.email
        }, process.env.JWT_SECRET);
        console.log(jwtToken)


        // setting jwtToken to cookies
        res.cookie("userToken", jwtToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        })


        res.status(201).send("user created successfully")
    }

    catch (error) {
        if (error.code === 11000) {
            res.status(400).send("user already registered with same inputs")
        }
        else {
            res.status(500).send("something went wrong! try again")
            console.log("Got an error in userRegister controller", error);
        }
    }

}


export default userRegisterController;