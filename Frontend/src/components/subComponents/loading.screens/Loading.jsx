// Code starts from Here


// Importing CSS
import "./loading.css"




// Creating Component
// Main Component(LOADING)-----------------------------------------------1

function LoadingScreen() {
    return (
        <div className="Loading_Main_Component">
            <LoaderComponent />
        </div>
    )
}




// Sub Component(LOADER)-----------------------------------------------2

function LoaderComponent() {
    return (
        <div className="Loader_Container">
            <img 
                src="/src/assets/icons/loader.gif" 
                alt="Loading..." 
                className="loader_gif"
            />
            <span className="loading_text">Loading</span>
        </div>
    )
}















// Exporting Main component
export default LoadingScreen;