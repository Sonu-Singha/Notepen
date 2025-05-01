// Code starts from Here

// Importing CSS
import "./Hero.component.css"
import React, { useState } from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

// Creating Components

// Main component(HEAD)-------------------------------------------1

function HeroComponent() {
    return (
        <>
            <div className="Hero_Component_Wrapper">
                <BannerComponent />
                <TitleComponent />
                <ContentComponent />
            </div>
        </>
    );
}




// Sub component(Banner)-------------------------------------------2

function BannerComponent() {
    const [Banner, setBanner] = useState(null);

    return (
        <>
            <div className="Banner_Container">
                {Banner ? (
                    <>
                        <div className="Banner_Display_Container">
                            <img className="Banner_Img" src={Banner} alt="banner" />
                            <span className="remove" onClick={() => { setBanner(null) }}>
                                <span>X</span>
                            </span>
                        </div>
                    </>
                ) : (
                    <label className="Banner_Input_Label" htmlFor="Banner_Input">
                        <span className="Banner_Input_Text">Add Banner Image</span>
                        <span className="Banner_Ins">use wider image for banner</span>
                    </label>
                )
                }

                {/* hide the main input */}
                <input id="Banner_Input" type="file" accept="image/*" onChange={bannerHanlder} />
            </div>
        </>
    )

    // BannerHandler function

    function bannerHanlder(event) {
        const File = event.target.files[0];

        //setting image url to Banner if there is file!
        if (File) {
            setBanner(URL.createObjectURL(File));
        }
    }
}






// Sub component(Title)-------------------------------------------2

function TitleComponent() {

    return (
        <div className="Title_Container">
            <div className="title_input_container">
                <input className="Title_Input" type="text" placeholder="Enter your post TITLE// make it catchy & shorter" />
            </div>
        </div>
    )
}







// Sub component(Content)-------------------------------------------3

function ContentComponent() {
    const [content, setContent] = useState('');
    console.log(content)

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
            <div className="post_content_cont">
                <button className="draft_post">Make Draft</button>
                <button className="publish_post">Publish</button>
            </div>
        </div>
    )
}






















// exporting main component

export default HeroComponent;