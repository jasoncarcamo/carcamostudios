import React, { Component } from "react";
import "./StackPanel.css";

class StackPanel extends Component {

    render() {

        return (

            <aside className="stack-panel">

                <article className="stack-card">

                    <header className="stack-card__header">
                        <p className="stack-card__eyebrow">
                            Current Status
                        </p>

                        <h2>
                            Launch Progress
                        </h2>
                    </header>

                    <div className="progress">

                        <div className="progress__bar">

                            <div
                                className="progress__fill"
                                style={{ width: "78%" }}
                            ></div>

                        </div>

                        <p className="progress__label">
                            78% Complete
                        </p>

                    </div>

                </article>

                <article className="stack-card">

                    <header className="stack-card__header">
                        <p className="stack-card__eyebrow">
                            Tech Stack
                        </p>
                    </header>

                    <ul className="stack-list">

                        <li>Mobile Responsive Design</li>

                        <li>Fast Loading Performance</li>

                        <li>Search Engine Optimization (SEO)</li>

                        <li>Google Search Ready</li>

                        <li>Open Graph & X (Twitter) Cards</li>

                        <li>Professional Custom Design</li>

                        <li>Secure Contact Forms</li>

                        <li>Accessibility Focused (WCAG)</li>

                        <li>Cross-Browser Compatibility</li>

                        <li>Scalable Full-Stack Web Solutions</li>
                            
                        <li>Responsive Design</li>

                    </ul>

                </article>

                <article className="stack-card">

                    <header className="stack-card__header">

                        <p className="stack-card__eyebrow">
                            Highlights
                        </p>

                    </header>

                    <ul className="stats">

                        <li>

                            <span className="stats__number">
                                100%
                            </span>

                            <span>
                                Responsive
                            </span>

                        </li>

                        <li>

                            <span className="stats__number">
                                SEO
                            </span>

                            <span>
                                Optimized
                            </span>

                        </li>

                        <li>

                            <span className="stats__number">
                                WCAG
                            </span>

                            <span>
                                Accessible
                            </span>

                        </li>

                        <li>

                            <span className="stats__number">
                                Fast
                            </span>

                            <span>
                                Performance
                            </span>

                        </li>

                    </ul>

                </article>

            </aside>

        );

    }

}

export default StackPanel;