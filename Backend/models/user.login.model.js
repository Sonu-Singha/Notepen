// Code starts from Here



// Importing Mongoose'

import mongoose from "mongoose";




// Creating Register Schema

const userLoginSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default userLoginSchema;