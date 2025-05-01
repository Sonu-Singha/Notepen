// Code starts from Here

// Importing CSS
import "./Hero.component.css"
import React, { useState } from 'react';

// Creating Components

// Main component(HEAD)-------------------------------------------1

function HeroComponent() {
    return (
        <>
            <div className="Hero_Component_Wrapper">
                <BannerComponent />
                <TitleComponent />
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






// Sub component(Banner)-------------------------------------------2

function TitleComponent() {

    return (
        <div className="Title_Container">
            <div className="title_input_container">
            <input className="Title_Input" type="text" placeholder="Enter your post TITLE// make it catchy & shorter" />
            </div>
        </div>
    )
}






















// exporting main component

export default HeroComponent;