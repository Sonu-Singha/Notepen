// Code starts from Here

import { useEffect, useState } from "react"
import "./HeroComponent.css"
import parse from "html-react-parser";
import 'react-quill/dist/quill.snow.css';
import "quill/dist/quill.snow.css"
import axios, { formToJSON } from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";



// Importing Loading screen

import LoadingScreen from "/src/components/subComponents/loading.screens/Loading.jsx"





// Backend URL
const BackendURL = import.meta.env.VITE_BACKEND_URL
const BackendImgPath = "http://localhost:3000/public/uploads/"



// Creating Component
// Main Component(HERO)-----------------------------------------------1

function HeroComponent() {

    const [postID, setPostID] = useState(useParams().id);
    const [currentPost, setCurrentPost] = useState(null);
    // console.log(currentPost?.content);

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await axios.get(`${BackendURL}api/post/${postID}`);
                // console.log(res.data);
                setCurrentPost(res.data);
            } catch (error) {
                console.log("got error in Frontend while fetching post" + error);
            }
        }
        fetchPost();
    }, [postID]);




    return (
        currentPost ?
            (<div className="Main_Component_Wrapper">

                <BannerComponent post={currentPost} />
                <TitleComponent post={currentPost} />
                <ContentComponent post={currentPost} />

            </div>) :
            
            <LoadingScreen />
    )
}




// Main Component(Banner)-----------------------------------------------2

function BannerComponent({ post }) {
    if (!post.banner) {
        return
    }
    return (
        <div className="Banner_Component">
            <div className="Banner_Container">
                <img
                    src={BackendImgPath + post.banner}
                    alt="Banner"
                    className="Banner_Image"
                />
            </div>
        </div>
    )
}




// Main Component(Title)-----------------------------------------------2

function TitleComponent({ post }) {
    const date = new Date(post.createdAt);
    const createdAt = format(date, "d MMMM yyyy")
    return (
        <div className="Title2_Component">
            <div className="Title2_Container">
                <span className="Title2_Text">{post.post_title}</span>
                <div className="creation_credit">
                    <span className="Date_Text">Created on: {createdAt}</span>
                    <span className="Author_Text">Created By: {post.author_username}</span>
                </div>
            </div>
        </div>
    )
}




// Main Component(Content)-----------------------------------------------2

function ContentComponent({ post }) {
    const [text, setText] = useState(post.content)

    return (
        <div className="Content2_Component">
            <div className="Content2_Container">
                <div className="Content2_Text ql-editor">
                    {parse(text)}
                </div>
            </div>
        </div>
    )
}















// Exporting main component
export default HeroComponent;