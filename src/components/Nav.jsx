import React from "react";

import "../App.css";

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item nav__item--home">
                    <a className="nav__link" href="#">
                        Home
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">
                        Sign the Agreement
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">
                        Browse Gear
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
