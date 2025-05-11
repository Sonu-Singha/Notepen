// Code starts from Here


// Importing post model Schema
import post from "../models/markdown.model.js";


// Creating controller

async function deletePostController(req, res) {
    const postID = req.params.id;

    try {
        await post.findByIdAndDelete(postID);
        res.status(200).send("Post deleted successfully");
    } catch (error) {
        res.status(500).send("Error deleting post");
    }
}


// Exporting controller
export default deletePostController;
