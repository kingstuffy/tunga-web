import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Experience.scss";

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: [
                {
                    project: "Company/Project",
                    price: "20XX - 20XX",
                    position: "Position",
                    description: "Job description goes here. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Checkmate... Yeah, but John, if The Pirates of the Caribbean. "
                },
                {
                    project: "Company/Project",
                    price: "20XX - 20XX",
                    position: "Position",
                    description: "Job description goes here. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Checkmate... Yeah, but John, if The Pirates of the Caribbean. "
                },
                {
                    project: "Company/Project",
                    price: "20XX - 20XX",
                    position: "Position",
                    description: "Job description goes here. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Checkmate... Yeah, but John, if The Pirates of the Caribbean. "
                },
            ]
        };
    }


    render() {
        return (
            <div className="Experience">
                <div className="Experience__title">
                    EXPERIENCE
                </div>
                <ul className="Experience__list">
                    {
                        this.state.experiences.map((experience, key) => (
                            <li className="Experience__item" key={key}>
                                <div className="Experience__project">
                                    {experience.project}
                                </div>
                                <div className="Experience__price">
                                    {experience.price}
                                </div>
                                <div className="Experience__position">
                                    {experience.position}
                                </div>
                                <div className="Experience__description">
                                    {experience.description}
                                </div>
                            </li>
                        ))
                    }
                    <li className="clearfix"></li>
                </ul>
            </div>
        );
    }
}

Experience.propTypes = {};

export default Experience;
