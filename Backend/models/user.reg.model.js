// Code starts from Here


// Importing Mongoose'

import mongoose from "mongoose";




// Creating Register Schema

const useRegisterSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const user = mongoose.model("user", useRegisterSchema)

export default user;