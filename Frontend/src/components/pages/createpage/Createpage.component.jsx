// Importing sub components

// Navbar
import Navbar from "../../subComponents/navbar/Nav.component.jsx";
// Footer
import Footer from '../../subComponents/footer/Footer.component.jsx';

// Createpage
import HeroComponent from "./hero.component.jsx";




// Creating Component

function Createpage() {
    return (
        <>
            <Navbar />
            <HeroComponent />
            <Footer />
        </>
    )
}




export default Createpage;