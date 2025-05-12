// Code starts from Here
// Importing sub components

// Navbar
import Navbar from "../../subComponents/navbar/Nav.component.jsx";
// Footer
import Footer from '../../subComponents/footer/Footer.component.jsx';
// Hero Component
import HeroComponent from "./HeroComponent.jsx";






// Creating Component

function Allpostpage() {
    return (
        <>
            <Navbar />
            <HeroComponent />
            <Footer />
        </>
    )
}




export default Allpostpage;