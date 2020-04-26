import React from "react";

function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
    <footer className="navbar-fixed-bottom">
    <div className="footerContainer">
        <div className="footerStyle">
            <p className="footerText">© Natalie Castien {year}</p>
        </div>
    </div>
    </footer>)
}

export default Footer;