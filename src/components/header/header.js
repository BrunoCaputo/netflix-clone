import React from "react";
import "./header.css";

const Header = ({ black }) => {
    const logoImgUrl =
        "https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5-1.png";
    const userImgUrl =
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src={logoImgUrl} alt="Netflix Logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={userImgUrl} alt="User" />
                </a>
            </div>
        </header>
    );
};

export default Header;
