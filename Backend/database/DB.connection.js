// Code starts from Here

import mongoose from "mongoose"
import { config } from "dotenv";
config();





async function dbConnection(req, res) {
    try {
        mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.DB_NAME
        });
    } catch (error) {
        res.status(500).send("Internal server error")
        console.log(error)
    }
}



export default dbConnection;