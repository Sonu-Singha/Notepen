// Code starts from Here

import mongoose from "mongoose"
import { config } from "dotenv";
config();






async function dbConnection(req, res) {
    try {
        // Wait for mongoose to connect
        await mongoose.connect(process.env.DB_URI, {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true,
        });

        res.status(200).send("Database connected successfully!");
    } catch (error) {

        // Send an error response
        res.status(500).send("Internal server error");
    }
}



export default dbConnection;