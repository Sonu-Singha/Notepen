// Code starts from Here



// Importing express & other required packages

import express, { json } from "express";
import { config } from "dotenv";
config();
import cookieParser from "cookie-parser";
import cors from "cors";





// Importing Database Connection

import dbConnection from "./database/DB.connection.js";
dbConnection();






// setting some other configuration

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use("/public", express.static("public"))// will use the Backend server url for serving static files







// Importing routes modules

// user register route
import userRegisterRoute from "./routes/user.reg.route.js";

// user login route

import userLoingRoute from "./routes/user.login.route.js";

// create-post route
import createPost from "./routes/createPost.route.js";

// viewpost route
import viewPost from "./routes/view.route.js";

// all posts route
import allPosts from "./routes/allpost.route.js";












// Setting routes

// get routes

// view post
app.use("/api", viewPost);

// all posts
app.use("/api", allPosts);






// Post routes

// user register
app.use("/api", userRegisterRoute);

// user login
app.use("/api", userLoingRoute);

// create-post
app.use("/api", createPost);









// server listening

app.listen(process.env.PORT)