// Code starts from Here


// Importing CSS & other necessary packages
import { useEffect, useState } from "react";
import "./HeroComponent.css";
import axios from "axios";
import { compareAsc, format } from "date-fns";
import { useNavigate } from "react-router-dom";





// Backend URL
const BackendURL = import.meta.env.VITE_BACKEND_URL;
const BackendImgPath = "http://localhost:3000/public/uploads/";




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
                setPosts(res.data);
                // console.log(posts)
            } catch (error) {
                console.log("got error while getting all posts in Frontend" + error);
            }
        }
        getAllPosts();
    }, [])


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
                        <Postcard key={key} data={post} />
                    ))
                )}
            </div>
        </div>
    )
}




// Sub Component(Post Card Wrapper)------------------------------------------------2

function Postcard({ data }) {

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/view/${data._id}`);
    }

    return (
        <div className="Card_Wrapper" onClick={handleClick} >
            {data.banner ? (<Postbanner data={data} />) : (null)}
            <Posttitle data={data} />
        </div>
    )
}




// Sub Component(Post Card Banner component)------------------------------------------------2

function Postbanner({ data }) {
    return (

        <div className="PostBanner_Wrapper">
            <img
                src={`${BackendImgPath}${data.banner}`}
                alt="post banner"
                className="post_banner_img"
            />
        </div>



    )
}




// Sub Component(Post Card Title + date, author component)------------------------------------------------2

function Posttitle({ data }) {
    const date = new Date(data.createdAt);
    const createdAt = format(date, "d MMMM yyyy")

    return (
        <div className="PostTitle_Wrapper">
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