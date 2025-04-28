// Code starts from Here


// Importing Mongoos

import mongoose from "mongoose";





// Creating DB Schema

const markdownSchema = mongoose.Schema({
    banner: {
        type: String
    },
    post_title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author_username: {
        type: String
    },
    author_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user"
    }
}, { timestamps: true });




// Exporting Schema Model

const post = mongoose.model("post", markdownSchema);
export default post;