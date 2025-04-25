// Code starts from Here



// Importing express & other required packages

import express, { json } from "express";
import { config } from "dotenv";
config();





// Importing Database Connection

import dbConnection from "./database/DB.connection.js";
dbConnection();






// setting some other configuration

const app = express();
app.use(express.json());








// Importing routes modules

// user register route
import userRegisterRoute from "./routes/user.reg.route.js";












// Setting routes

// get routes







// post routes

// user register
app.use("/api", userRegisterRoute);









// server listening

app.listen(process.env.PORT)