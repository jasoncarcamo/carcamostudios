import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer
                id="contact"
                className="footer"
            >
                <div className="container">

                    <section className="footer__top">

                        <article className="footer__brand">

                            <h2>Carcamo Studios</h2>

                            <p>

                                Carcamo Studios creates custom websites and full-stack web solutions that
                                are responsive, SEO optimized, and designed to help businesses establish a
                                stronger online presence.

                            </p>

                        </article>

                        <nav
                            className="footer__navigation"
                            aria-label="Footer Navigation"
                        >

                            <h3>Navigation</h3>

                            <ul>

                                <li><a href="#about">About</a></li>

                                <li><a href="#services">Services</a></li>

                                <li><a href="#launch-status">Launch</a></li>

                                <li><a href="#contact">Contact</a></li>

                            </ul>

                        </nav>

                        <section className="footer__social">

                            <h3>Connect</h3>

                            <ul>

                                <li>
                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://linkedin.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://x.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        X
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="mailto:hello@carcamostudios.com"
                                    >
                                        Email
                                    </a>
                                </li>

                            </ul>

                        </section>

                    </section>

                    <section className="footer__bottom">

                        <p>
                            © {new Date().getFullYear()} Carcamo Studios.
                            All Rights Reserved.
                        </p>

                    </section>

                </div>
            </footer>
        );
    }
}

export default Footer;