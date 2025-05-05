// Code starts from Here


// Importing post model Schema
import post from "../models/markdown.model.js";


// Creating controller

async function viewController(req, res) {
    const postID = req.params.id;

    try {
        const currentPost = await post.findById(postID);
        res.status(200).send(currentPost)

    } catch (error) {
        res.status(500).send("got error in backend viewController", error);
    }
}







// Exporting viewController

export default viewController