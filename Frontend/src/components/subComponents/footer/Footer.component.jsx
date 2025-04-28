// Code starts from Here

import "./Footer.component.css"






// Creating Components

// main component(HEAD)----------------------------------------1

function Footer() {
    return (
        <>
            <footer className="Footer_Component">
                <InfoSection />
                <CopyrightSection />
            </footer>
        </>
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium labore dolores cum. Deleniti iusto provident laboriosam reprehenderit sunt ullam officiis vitae commodi, libero cumque exercitationem velit quis ipsum rerum nesciunt necessitatibus, voluptate eius tempora fuga minus at consequuntur quidem delectus cum. Nam dolorem, non autem eligendi voluptatibus inventore voluptate accusantium.
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
                        <span className="twitter_text">Twitter</span>
                        <img className="twitter_icon" src="src\assets\icons\twitter.icon.png" alt="" />
                    </span>
                    <span className="email">
                    <span className="email_text">Email</span>
                    <img className="email_icon" src="src\assets\icons\email.icon.png" alt="" />
                    </span>
                </div>
            </div>
        </div>
    )
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