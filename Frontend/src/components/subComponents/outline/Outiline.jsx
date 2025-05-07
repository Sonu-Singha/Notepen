// Code starts from Here

import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Nav.component';
import Footer from '../footer/Footer.component';




// Creating Component

function Outline() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}




// Exporting Component

export default Outline;
