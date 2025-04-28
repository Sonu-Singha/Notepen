// Code starts from Here

// Importing CSS

import "./Nav.component.css"





// Creating Navbar Component

// Main component
function Navbar() {
    return (
        <div className="Navbar_Wrapper">
            <nav className="Main_Navbar_Component">
                <ThemeToggle />
                <ExtraNavButtons />
            </nav>
        </div>
    )
}


// Theme Toggle component
function ThemeToggle() {
    return (
        <div className="Main_Theme_Toggle">
            <div className="theme_logo" />
            <span className="theme_text">Theme</span>

        </div>
    )
}


// Extra Nav components
function ExtraNavButtons() {
    return (
        <div className="Main_Extra_Nav_Buttons">
            <ViewButtonComponent />
            <CreateButtonComponent />
            <LogoutComponent />
        </div>
    )
}


// View Component
function ViewButtonComponent() {
    return (
        <div className="View_Button_Component">
            <span className="View_Text">
                My Posts
            </span>
        </div>
    )
}


// Create Button
function CreateButtonComponent() {
    return (
        <div className="Create_Button_Component">
            <img className="create_icon" src="/src/assets/icons/create.icon.svg" alt="create icon" />
        </div>
    )
}


// Logout Component
function LogoutComponent() {
    return (
        <div className="Logout_Component">
            <img className="logout_button" src="/src/assets/icons/logout.icon.svg" alt="logout" />
        </div>

    )
}












// exporting the main component

export default Navbar;