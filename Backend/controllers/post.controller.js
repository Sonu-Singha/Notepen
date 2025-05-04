// Code starts from Here


// Importing DB Schema

import postModel from "../models/markdown.model.js";
import user from "../models/user.reg.model.js";





// Creating Controller

async function postController(req, res) {
    const { banner, post_title, content } = req.body;

    const bannerFile = req.file;

    //getting the banner filename
    const bannerURL = bannerFile ? bannerFile.filename : null;


    try {
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