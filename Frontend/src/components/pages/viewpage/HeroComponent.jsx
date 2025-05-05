// Code starts from Here

import { useState } from "react"
import "./HeroComponent.css"
import parse from "html-react-parser";
import 'react-quill/dist/quill.snow.css';
import "quill/dist/quill.snow.css"




// Creating Component
// Main Component(HERO)-----------------------------------------------1

function HeroComponent() {
    return (
        <div className="Main_Component_Wrapper">
            <BannerComponent />
            <TitleComponent />
            <ContentComponent />
        </div>
    )
}




// Main Component(Banner)-----------------------------------------------2

function BannerComponent() {
    return (
        <div className="Banner_Component">
            <div className="Banner_Container">
                <img
                    src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                    alt="Banner"
                    className="Banner_Image"
                />
            </div>
        </div>
    )
}




// Main Component(Title)-----------------------------------------------2

function TitleComponent() {
    return (
        <div className="Title2_Component">
            <div className="Title2_Container">
                <span className="Title2_Text">First Hello world</span>
                <div className="creation_credit">
                    <span className="Date_Text">Created on: 12 March, 2024</span>
                    <span className="Author_Text">Created By: Demo</span>
                </div>
            </div>
        </div>
    )
}




// Main Component(Content)-----------------------------------------------2

function ContentComponent() {
    const [text, setText] = useState(`<pre class="ql-syntax ql-align-center" spellcheck="false">Hello world
</pre><p class="ql-align-center"><br></p><p>this something else</p><p class="ql-align-right">scscscscscscscscsc<sub>sccscsc</sub><sup>scscscscscsc</sup>s cscscscsc</p>`)

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