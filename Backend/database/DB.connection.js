// Code starts from Here

import mongoose from "mongoose"
import { config } from "dotenv";
config();

async function dbConnection() {
    try {
        // Wait for mongoose to connect
        await mongoose.connect(process.env.DB_URI, {
            dbName: process.env.DB_NAME,
            ssl: true,
        });

        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

export default dbConnection;