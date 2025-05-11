// Code starts from Here

import "./Footer.component.css"






// Creating Components

// main component(HEAD)----------------------------------------1

function Footer() {
    return (
        <div className="Footer_Wrapper">
            <footer className="Footer_Component">
                <InfoSection />
                <CopyrightSection />
            </footer>
        </div>
    )
}


// sub component(info section)----------------------------------------3

function InfoSection() {
    return (
        <div className="Info_Section">

            {/* Box1 */}

            <div className="info_box1">
                <span className="box1_text">
                    Site Details
                </span>
                <span className="box1_info">
                    Welcome to Notepen, your modern platform for creating and sharing text content. Our intuitive editor combines simplicity with powerful features, making it perfect for writers, developers, and content creators. With secure Google authentication, real-time preview, and a clean interface, you can focus on what matters most - your content. Whether you're drafting documentation, writing blog posts, or taking notes, Notepen provides the tools you need in an elegant, distraction-free environment.
                </span>
            </div>

            {/* Box 2 */}

            <div className="info_box2">

                {/* Box1 */}

                <span className="box2_text">
                    Developer Contacts
                </span>

                {/* Box1 */}

                <div className="box2_profiles">
                    <span className="twitter">
                        <span className="twitter_text" onClick={XclickHandler}>Twitter</span>
                        <img className="twitter_icon" src="src\assets\icons\twitter.icon.png" alt="" />
                    </span>
                    <span className="email">
                        <a href="mailto:deyk64032@gmail.com" className="email_text">Email</a>
                        <img className="email_icon" src="src\assets\icons\email.icon.png" alt="" />
                    </span>
                </div>
            </div>
        </div>
    )

    function XclickHandler() {
        window.open("https://x.com/Sonu_Singha_", "_blank");
    }
}



// sub component(copyright section)----------------------------------------3

function CopyrightSection() {
    return (
        <div className="Copyright_Section">
            <span className="Copyright_Section_Text">&copy; All rights reserved</span>
        </div>
    )
}



















// Exporting Footer

export default Footer;