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
                            "Custom Website Design",
                            "Professional custom websites designed to reflect your brand, engage visitors, generate leads, and help your business grow online."
                        )}

                        {this.renderCard(
                            "Responsive Web Development",
                            "Mobile-first websites that deliver a seamless experience across desktops, laptops, tablets, and smartphones while meeting modern web standards."
                        )}

                        {this.renderCard(
                            "Full-Stack Web Development",
                            "Scalable full-stack web applications and custom business solutions built for performance, security, and long-term growth."
                        )}

                        {this.renderCard(
                            "SEO & Website Performance",
                            "SEO-optimized websites with fast loading speeds, Core Web Vitals optimization, structured data, and technical SEO to improve search visibility."
                        )}

                        {this.renderCard(
                            "Social Media & Search Integration",
                            "Google-ready websites featuring Open Graph, X (Twitter) Cards, rich metadata, XML sitemaps, robots.txt, and Schema.org structured data."
                        )}

                        {this.renderCard(
                            "Website Maintenance & Support",
                            "Reliable website maintenance, security updates, content changes, performance monitoring, backups, and ongoing technical support."
                        )}

                    </div>

                </div>

            </section>

        );

    }

}

export default ServiceGrid;