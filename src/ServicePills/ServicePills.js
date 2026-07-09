import React, { Component } from "react";
import "./ServicePills.css";

class ServicePills extends Component {

    render() {

        const services = [
            "Custom Website Design",
            "Website Redesign",
            "Responsive Web Design",
            "Small Business Websites",
            "Full-Stack Web Development",
            "E-Commerce Websites",
            "Search Engine Optimization (SEO)",
            "Website Performance Optimization",
            "Accessibility (WCAG)",
            "Website Maintenance & Support",
            "Hosting & Deployment",
            "Lead Generation & Contact Forms"
        ];

        return (

            <section className="service-pills">

                <header className="service-pills__header">

                    <h2>Services</h2>

                    <p>
                        Everything needed to launch a modern digital experience.
                    </p>

                </header>

                <ul className="service-pills__list">

                    {services.map((service, index) => (

                        <li key={index}>

                            <span className="service-pill">

                                {service}

                            </span>

                        </li>

                    ))}

                </ul>

            </section>

        );

    }

}

export default ServicePills;