import React, { Component } from "react";
import "./Countdown.css";

class Countdown extends Component {

    constructor(props) {

        super(props);

        this.state = {

            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0

        };

    }

    componentDidMount() {

        this.updateCountdown();

        this.timer = setInterval(() => {

            this.updateCountdown();

        }, 1000);

    }

    componentWillUnmount() {

        clearInterval(this.timer);

    }

    updateCountdown() {

        const targetDate = new Date(this.props.targetDate).getTime();

        const currentDate = new Date().getTime();

        const distance = targetDate - currentDate;

        if (distance <= 0) {

            clearInterval(this.timer);

            this.setState({

                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0

            });

            return;

        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        this.setState({

            days,
            hours,
            minutes,
            seconds

        });

    }

    renderCard(label, value) {

        return (

            <article className="countdown__card">

                <span className="countdown__number">

                    {String(value).padStart(2, "0")}

                </span>

                <span className="countdown__label">

                    {label}

                </span>

            </article>

        );

    }

    render() {

        return (

            <section className="countdown">

                <header className="countdown__header">

                    <h2>

                        Launch Countdown

                    </h2>

                    <p>

                        Something amazing is almost here.

                    </p>

                </header>

                <div className="countdown__grid">

                    {this.renderCard("Days", this.state.days)}

                    {this.renderCard("Hours", this.state.hours)}

                    {this.renderCard("Minutes", this.state.minutes)}

                    {this.renderCard("Seconds", this.state.seconds)}

                </div>

            </section>

        );

    }

}

export default Countdown;