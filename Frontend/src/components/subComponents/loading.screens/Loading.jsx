// Code starts from Here


// Importing CSS
import "./loading.css"




// Creating Component
// Main Component(LOADING)-----------------------------------------------1

function LoadingScreen({ message = "Loading" }) {
    return (
        <div className="Loading_Main_Component">
            <LoaderComponent message={message} />
        </div>
    )
}




// Sub Component(LOADER)-----------------------------------------------2

function LoaderComponent({ message }) {
    return (
        <div className="Loader_Container">
            <img
                src="/assets/icons/loader.gif"
                alt="Loading..."
                className="loader_gif"
            />
            <span className="loading_text">{message}</span>
        </div>
    )
}















// Exporting Main component
export default LoadingScreen;