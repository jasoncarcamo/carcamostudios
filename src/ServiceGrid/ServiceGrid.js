import React, { Component } from "react";
import "./ServiceGrid.css";

class ServiceGrid extends Component {

    renderCard(title, description) {

        return (

            <article className="service-card">

                <h3>

                    {title}

                </h3>

                <p>

                    {description}

                </p>

            </article>

        );

    }

    render() {

        return (

            <section
                id="services"
                className="service-grid"
            >

                <div className="container">

                    <header className="service-grid__header">

                        <h2>

                            What We Build

                        </h2>

                        <p>

                            Professional digital solutions built for
                            performance and growth.

                        </p>

                    </header>

                    <div className="service-grid__cards">

                        {this.renderCard(
                            "Custom Business Websites",
                            "Professionally designed websites tailored to your brand, built to engage visitors and convert them into customers."
                        )}

                        {this.renderCard(
                            "Mobile-Responsive Design",
                            "Every website is fully responsive, providing a seamless experience across desktops, tablets, and smartphones."
                        )}

                        {this.renderCard(
                            "Full-Stack Web Solutions",
                            "From business websites to custom web applications, we develop scalable solutions that grow with your business."
                        )}

                        {this.renderCard(
                            "Performance & SEO",
                            "Fast-loading websites optimized for search engines, Core Web Vitals, and improved online visibility."
                        )}

                        {this.renderCard(
                            "Social Media Integration",
                            "Built with Open Graph, X (Twitter) Cards, and Google-ready metadata so your website looks professional when shared online."
                        )}

                        {this.renderCard(
                            "Ongoing Support & Growth",
                            "Whether you need updates, new features, or continued improvements, we're here to help your website evolve with your business."
                        )}

                    </div>

                </div>

            </section>

        );

    }

}

export default ServiceGrid;