// Code starts from Here


// Importing DB Schema

import postModel from "../models/markdown.model.js";
import user from "../models/user.reg.model.js";


// Importing cloudinary & necessary packages

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import cloudinaryConfig from "../config/cloudinary.config.js";





// Creating Controller

async function postController(req, res) {
    const { banner, post_title, content } = req.body;

    const bannerFile = req.file;

    try {

        let bannerURL = null;

        // getting the file path for cloudinary

        if (bannerFile) {
            // getting the file path
            const filePath = req.file.path

            // uploading the file to cloudinary
            const uploadResult = await cloudinary.uploader.upload(filePath, {
                folder: "uploads",
                public_id: `banner${Date.now()}`
            }).catch((error) => {
                console.log( error);
            });

            // if not uploadResult then return error

            if (!uploadResult) {
                return res.status(500).send("failed to upload banner");
            }

            // deleting the file from loalDisk
            fs.unlinkSync(filePath);

            // storing the cloudinary url in bannerURL
            bannerURL = uploadResult.secure_url;
        }

        // creating new post
        const newPost = await postModel.create({
            banner: bannerURL,
            post_title,
            content,
            author_username: req.user.username,
            author_id: req.user._id
        })

        res.status(200).send("created new post")


    } catch (error) {
        res.status(500).send("somethign went wrong!! try again");
        console.log("Got error in postController", error);
    }
}




// Exporting postController

export default postController;