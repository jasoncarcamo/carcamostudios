import React, { Component } from "react";
import "./App.css";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import StackPanel from "./StackPanel/StackPanel";
import Countdown from "./Countdown/Countdown";
import ServicePills from "./ServicePills/ServicePills";
import ServiceGrid from "./ServiceGrid/ServiceGrid";
import Footer from "./Footer/Footer";

class App extends Component {
    render() {
        return (
            <main className="app">

                <Header />

                <section className="hero-section">
                    <div className="container hero-grid">
                        <Hero />
                        <StackPanel />
                    </div>
                </section>

                <section
                    id="about"
                    className="about-section"
                >
                    <div className="container about-grid">

                        <article className="section-label">
                            <h2>About Carcamo Studios</h2>
                        </article>

                        <article className="about-content">

                            <p>
                                Carcamo Studios specializes in modern web
                                development, responsive websites,
                                full-stack applications, UI/UX implementation,
                                and scalable digital solutions.
                            </p>

                            <p>
                                Every project is built with performance,
                                accessibility, maintainability, and
                                long-term scalability in mind while
                                providing exceptional user experiences.
                            </p>

                        </article>

                    </div>
                </section>

                <section
                    id="launch-status"
                    className="launch-section"
                >

                    <div className="container launch-grid">

                        <article className="section-label">
                            <h2>Launch Status</h2>
                        </article>

                        <article>

                            <Countdown
                                targetDate="2026-07-23T00:00:00"
                            />

                            <ServicePills />

                        </article>

                    </div>

                </section>

                <ServiceGrid />

                <Footer />

            </main>
        );
    }
}

export default App;