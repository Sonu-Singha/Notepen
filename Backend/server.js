// Code starts from Here



// Importing express & other required packages

import express, { json } from "express";
import { config } from "dotenv";
config();
import cookieParser from "cookie-parser";





// Importing Database Connection

import dbConnection from "./database/DB.connection.js";
dbConnection();






// setting some other configuration

const app = express();
app.use(express.json());
app.use(cookieParser());








// Importing routes modules

// user register route
import userRegisterRoute from "./routes/user.reg.route.js";

// user login route

import userLoingRoute from "./routes/user.login.route.js";












// Setting routes

// get routes







// Post routes

// user register
app.use("/api", userRegisterRoute);

// user login
app.use("/api", userLoingRoute);









// server listening

app.listen(process.env.PORT)