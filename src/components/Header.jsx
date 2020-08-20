import React from "react";

import "../App.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <iframe
                    src="https://giphy.com/embed/EO8j7ItruGZaM"
                    frameBorder="0"
                    className="giphy-embed"
                    title="logo-gif"
                ></iframe>
                <div className="header__logo">
                    <span className="diy">DIY</span>
                    <br />
                    <span className="music-action-network">
                        <span className="music">Music</span>
                        <br />
                        <span className="action">Action</span>
                        <br />
                        Network
                    </span>
                </div>
            </div>
            <div className="header__title">
                <h1 className="header__title-text">Gear Share</h1>
            </div>
        </header>
    );
};

export default Header;
