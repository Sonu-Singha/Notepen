// Code start from Here


// Importing DB Schema Model & necessary packages and jwt

import userRegisterModel from "../models/user.reg.model.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { config } from "dotenv"
config();
import cookies from "cookie-parser"




// Creating Login Controller

async function userLoginController(req, res) {
    const { email, password } = req.body;

    try {

        // checking email existing
        const HasEmail = await userRegisterModel.findOne({ email })
        if (!HasEmail) {
            return res.status(400).send("user not found!! register first")
        }


        // verying input & hashed password
        const hashedPass = bcrypt.compare(password, HasEmail.password)
        if (!hashedPass) {
            return res.status(400).send("email or password is incorrect!! try again")
        }


        // creating jwt token
        const jwtToken = jwt.sign({
            id: HasEmail._id,
            email: HasEmail.email
        }, process.env.JWT_SECRET);


        // Setting jwtToken to cookies
        res.cookie("userToken", jwtToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        })



        res.status(200).send("logged in successfully!!")
    } catch (error) {
        res.status(500).send("something went wrong!! try again");
        console.log("Got error in Login userLogin Controller", error);
    }
}




export default userLoginController;