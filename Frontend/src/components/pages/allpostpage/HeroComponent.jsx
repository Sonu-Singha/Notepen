// Code starts from Here


// Importing CSS & other necessary packages
import { useEffect, useState } from "react";
import "./HeroComponent.css";
import axios from "axios";
import { compareAsc, format } from "date-fns";
import { useNavigate } from "react-router-dom";





// Backend URL
const BackendURL = import.meta.env.VITE_BACKEND_URL;
const BackendImgPath = `${BackendURL}public/uploads/`;




// Importing Loading screen

import LoadingScreen from "/src/components/subComponents/loading.screens/Loading.jsx"


// Creating Component
// Main Component(MAIN)------------------------------------------------1

function HeroComponent() {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        async function getAllPosts() {
            try {
                const res = await axios.get(`${BackendURL}api/all-posts`, { withCredentials: true });
                setPosts([...res.data].reverse());
                // console.log(posts)
            } catch (error) {
                console.log("got error while getting all posts in Frontend" + error);
            }
        }
        getAllPosts();
    }, [])

    // delete handler
    async function handleDeletePost(postId) {
        try {
            await axios.delete(`${BackendURL}api/delete-post/${postId}`, { withCredentials: true });
            setPosts(prev => prev.filter(post => post._id !== postId));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    }


    return (
        <div className="APM_Con_Wrapper">
            <div className="cards_container">
                {posts === null ? (
                    <LoadingScreen />
                ) : posts.length === 0 ? (
                    <div style={{ display: "flex", justifyContent: "center", height: "100vh", width: "100%" }}>
                        <span style={{ color: "rgb(169, 169, 169)", marginTop: "100px", fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "2px" }}>No posts found</span>
                    </div>
                ) : (
                    posts.map((post, key) => (
                        <Postcard key={key} data={post} onDelete={handleDeletePost} />
                    ))
                )}
            </div>
        </div>
    )
}




// Sub Component(Post Card Wrapper)------------------------------------------------2

function Postcard({ data, onDelete }) {

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/view/${data._id}`);
    }

    return (
        <div className="Card_Wrapper" onClick={handleClick} >
            {data.banner ? (<Postbanner data={data} onDelete={onDelete} />) : (null)}
            <Posttitle data={data} onDelete={onDelete} />
        </div>
    )
}




// Sub Component(Post Card Banner component)------------------------------------------------2

function Postbanner({ data, onDelete }) {

    async function handleDelete(event) {
        event.stopPropagation();
        await onDelete(data._id)
    }

    async function handleCopy(event) {
        const postUrl = `${window.location.origin}/view/${data._id}`;
        try {
            event.stopPropagation();
            await navigator.clipboard.writeText(postUrl);
        } catch (error) {
            console.log("Failed to copy: ", error);
        }
    }

    return (

        <div className="PostBanner_Wrapper" style={{
            backgroundImage: `url(${data.banner})`
        }}>
            <div className="post_banner_button_wrapper">
                <span className="delete_button" onClick={handleDelete}>
                    <img className="delete_icon" src={`src/assets/icons/remove.png`} alt="delete" />
                </span>
                <span className="copy_link_button" onClick={handleCopy}>
                    <img className="copy_icon" src={`src/assets/icons/copy.png`} alt="copy" />
                </span>
            </div>
        </div>


    )
}




// Sub Component(Post Card Title + date, author component)------------------------------------------------2

function Posttitle({ data, onDelete }) {
    const date = new Date(data.createdAt);
    const createdAt = format(date, "d MMMM yyyy")

    // delete, copy handlers

    async function handleDelete(event) {
        event.stopPropagation();
        await onDelete(data._id)
    }

    async function handleCopy(event) {
        const postUrl = `${window.location.origin}/view/${data._id}`;
        try {
            event.stopPropagation();
            await navigator.clipboard.writeText(postUrl);
        } catch (error) {
            console.log("Failed to copy: ", error);
        }
    }


    return (
        <div className="PostTitle_Wrapper">
            {/* delete, copy buttons */}
            {
                !data.banner && (
                    <div className="post_banner_button_wrapper">
                        <span className="delete_button" onClick={handleDelete}>
                            <img className="delete_icon" src={`src/assets/icons/remove.png`} alt="delete" />
                        </span>
                        <span className="copy_link_button" onClick={handleCopy} >
                            <img className="copy_icon" src={`src/assets/icons/copy.png`} alt="copy" />
                        </span>
                    </div>
                )
            }

            <span className="post_title">{data.post_title}</span>
            <div className="post_info">
                <span className="post_date">{createdAt}</span>
                <span className="post_author">Author: {data.author_username}</span>
            </div>
        </div>
    )
}



















// Exporting main component
export default HeroComponent;