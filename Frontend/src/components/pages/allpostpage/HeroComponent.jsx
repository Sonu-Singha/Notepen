// Code starts from Here


// Importing CSS
import "./HeroComponent.css";





// Creating Component
// Main Component(MAIN)------------------------------------------------1

function HeroComponent() {
    return (
        <div className="APM_Con_Wrapper">
            <div className="cards_container">
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
            </div>
        </div>
    )
}




// Sub Component(Post Card Wrapper)------------------------------------------------2

function Postcard() {
    return (
        <div className="Card_Wrapper">
            <Postbanner />
            <Posttitle />
        </div>
    )
}




// Sub Component(Post Card Banner component)------------------------------------------------2

function Postbanner() {
    return (
        <div className="PostBanner_Wrapper">
            <img 
                src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg" 
                alt="post banner" 
                className="post_banner_img"
            />
        </div>
    )
}




// Sub Component(Post Card Title + date, author component)------------------------------------------------2

function Posttitle() {
    return (
        <div className="PostTitle_Wrapper">
            <span className="post_title">This is a very long title that will be truncated with dots...</span>
            <div className="post_info">
                <span className="post_date">12 March, 2024</span>
                <span className="post_author">Created By: John Doe</span>
            </div>
        </div>
    )
}



















// Exporting main component
export default HeroComponent;