import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header className="header">

                <div className="container header__container">

                    <a
                        href="/"
                        className="header__logo"
                        aria-label="Carcamo Studios Home"
                    >
                        CARCAMO
                        <span>STUDIOS</span>
                    </a>

                    <nav
                        className="header__nav"
                        aria-label="Primary Navigation"
                    >
                        <ul className="header__menu">

                            <li>
                                <a href="#about">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#services">
                                    Services
                                </a>
                            </li>

                            <li>
                                <a href="#launch-status">
                                    Launch
                                </a>
                            </li>

                            <li>
                                <a href="#contact">
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </nav>

                    <div className="header__actions">

                        <a
                            href="mailto:hello@carcamostudios.com"
                            className="header__button"
                        >
                            Let's Talk
                        </a>

                    </div>

                </div>

            </header>
        );
    }
}

export default Header;