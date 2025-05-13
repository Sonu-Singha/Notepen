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
    origin: "https://notepen.vercel.app",
    credentials: true
}));
app.use("/public", express.static("public"))// will use the Backend server url for serving static files







// Importing routes modules

// google loging route
import googleLogin from "./routes/auth.routes.js";

// create-post route
import createPost from "./routes/createPost.route.js";

// viewpost route
import viewPost from "./routes/view.route.js";

// all posts route
import allPosts from "./routes/allpost.route.js";

// auth check-point
import authCheck from "./routes/auth.checkpoing.route.js";

// logout route
import logout from "./routes/logout.route.js";

// delete-post route
import deletePost from "./routes/deletepost.route.js";













// Setting routes

// get routes

// view post
app.use("/api", viewPost);

// all posts
app.use("/api", allPosts);

// auth check-point
app.use("/api", authCheck);






// Post routes

// create-post
app.use("/api", createPost);

// google login
app.use("/api", googleLogin);

// logout
app.use("/api", logout);






// Delete routes

// delete-post
app.use("/api", deletePost);










// server listening

app.listen(process.env.PORT || 3000)