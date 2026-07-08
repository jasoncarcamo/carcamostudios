import React, { Component } from "react";
import "./Hero.css";

class Hero extends Component {
    render() {
        return (
            <section className="hero">

                <div className="hero__status">

                    <span className="hero__status-dot"></span>

                    <span>Website Currently In Development</span>

                </div>

                <h1 className="hero__title">

                    <span
                        className="hero__carcamo"
                        data-text="Carcamo"
                    >
                        Carcamo
                    </span>

                    <span className="hero__studios">

                        Studios

                    </span>

                </h1>

                <h2 className="hero__subtitle">

                    Custom Websites, Full-Stack Web Development &
                    Search Engine Optimization for Growing Businesses

                </h2>

                <p className="hero__description">

                    Carcamo Studios helps businesses establish a powerful online presence with
                    custom websites and full-stack web applications that are mobile responsive,
                    fast, secure, and optimized for search engines. Every project is built to
                    improve user experience, increase visibility, and support long-term
                    business growth.

                </p>

                <div className="hero__buttons">

                    <a
                        href="#services"
                        className="hero__button hero__button--primary"
                    >
                        Explore Services
                    </a>

                    <a
                        href="#contact"
                        className="hero__button hero__button--secondary"
                    >
                        Contact Us
                    </a>

                </div>

                <footer className="hero__social">

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://x.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        X
                    </a>

                    <a
                        href="mailto:hello@carcamostudios.com"
                    >
                        Email
                    </a>

                </footer>

            </section>
        );
    }
}

export default Hero;