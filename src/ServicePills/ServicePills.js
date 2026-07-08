import React, { Component } from "react";
import "./ServicePills.css";

class ServicePills extends Component {

    render() {

        const services = [

            "Web Design",
            "Web Development",
            "UI / UX",
            "React",
            "JavaScript",
            "HTML5",
            "CSS3",
            "SEO",
            "Branding",
            "Hosting",
            "Accessibility",
            "Performance"

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