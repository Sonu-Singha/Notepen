// Code starts from Here

// Importing CSS & other necessary packages
import "./Hero.component.css"
import React, { useState } from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from "axios";


// Importing Backend URL
const BackendURL = import.meta.env.VITE_BACKEND_URL;


// Creating Components

// Main component(HEAD)-------------------------------------------1

function HeroComponent() {

    // Banner
    const [banner, setBanner] = useState(null);

    // Title
    const [title, setTitle] = useState("");
    // console.log(title)

    // Content
    const [content, setContent] = useState('');
    console.log(content)


    // Creating FormData

    const formdata = new FormData();
    formdata.append("post_title", title);
    formdata.append("content", content);

    if (banner) {
        formdata.append("banner", banner)
    }


    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post(`${BackendURL}api/create-post`, formdata,
                { withCredentials: true })

            alert(res.data)
            console.log(res.data)
        }
        catch (error) {
            alert("got an error in titleHandler: " + error);
            console.log("got an error in titleHandler: " + error);

        }

    }


    return (
        <>
            <form onSubmit={submitHandler} encType="multipart/form-data" className="Hero_Component_Wrapper">

                <BannerComponent banner={banner} setBanner={setBanner} />
                <TitleComponent title={title} setTitle={setTitle} />
                <ContentComponent content={content} setContent={setContent} />
                <SubmitComponent />
            </form>
        </>
    );
}




// Sub component(Banner)-------------------------------------------2

function BannerComponent({ banner, setBanner }) {

    const [bannerPreview, setBannerPreview] = useState(null);

    // BannerHandler function

    function bannerHanlder(event) {
        const File = event.target.files[0];

        //setting image url to Banner if there is file!
        if (File) {
            setBanner(File);//saving the file
            setBannerPreview(URL.createObjectURL(File));//for preview the banner
        }
    }


    return (
        <>
            <div className="Banner_Container">
                {bannerPreview ? (
                    <>
                        <div className="Banner_Display_Container">
                            <img className="Banner_Img" src={bannerPreview} alt="banner" />
                            <span className="remove" onClick={() => { setBannerPreview(null); setBanner(null); }}>
                                <span>X</span>
                            </span>
                        </div>
                    </>
                ) : (
                    <label className="Banner_Input_Label" htmlFor="Banner_Input">
                        <span className="Banner_Input_Text">Add Banner Image</span>
                        <span className="Banner_Ins">use wider image for banner</span>
                    </label>
                )}

                {/* hide the main input */}
                <input id="Banner_Input" type="file" accept="image/*" onChange={bannerHanlder} />
            </div>
        </>
    )

}






// Sub component(Title)-------------------------------------------2

function TitleComponent({ title, setTitle }) {

    return (
        <div className="Title_Container">
            <div className="title_input_container">
                <input
                    className="Title_Input"
                    value={title}
                    onChange={(event) => { setTitle(event.target.value) }}
                    type="text"
                    placeholder="Enter your post TITLE// make it catchy & shorter"
                    required
                />
            </div>
        </div>
    )
}







// Sub component(Content)-------------------------------------------3

function ContentComponent({ content, setContent }) {

    // Defining the custom toolbar options
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'align': [] }],
            ['link'],
            ['blockquote', 'code-block'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }]
        ],
    };


    return (
        <div className="Content_Container">
            <ReactQuill className="QuillEditor" theme="snow" value={content} modules={modules} onChange={setContent} />
        </div>
    )
}




// Sub component(Submit)-------------------------------------------4

function SubmitComponent() {
    return (
        <div className="post_content_cont">
            <button className="draft_post">Make Draft</button>
            <button type="submit" className="publish_post">Publish</button>
        </div>
    )
}






















// exporting main component

export default HeroComponent;