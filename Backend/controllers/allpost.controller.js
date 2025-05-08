// Code starts from Here


// Importing post model Schema
import post from "../models/markdown.model.js";



// Creating controller

async function allPostController(req, res) {

    try {
        const allPost = await post.find({ author_id: req.user._id });
        res.status(200).send(allPost)

    } catch (error) {
        res.status(500).send("got error in backend allPostController" + error);
    }
}







// Exporting viewController

export default allPostController