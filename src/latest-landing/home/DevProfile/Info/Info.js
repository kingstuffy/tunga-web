import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Info.scss";
import Icon from "../../../shared/core/Icon";
import ProfileImg from "../../../assets/img/our-story/hero-bg.png";
import { Button } from "../../../shared/Form/Form";


class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: [
                "HTML/CSS",
                "JavaScript",
                "GraphQL",
                "Node.js",
                "React Native"
            ]
        };
    }


    render() {
        return (
            <div className="Info">
                <img src={ProfileImg} className="Info__img mb-3"/>
                <div className="size-13 text-primary mb-1">
                    John Chinedu
                </div>
                <div className="size-12 mb-3">
                    Lagos, Nigeria
                </div>
                <div className="size-13 mb-4">
                    Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.
                    Checkmate... Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the
                    tourists.
                </div>
                <ul className="Info__skills mb-3">
                    {
                        this.state.skills.map((skill, i) => (
                            <li className="Info__skill-item" key={i}>
                                <div className="Info__skill">
                                    {skill}
                                </div>
                            </li>
                        ))
                    }
                    <li className="clearfix"></li>
                </ul>
                <div className="Info__cta">
                    <Button type="submit">
                        Hire John
                    </Button>
                </div>
            </div>
        );
    }
}

Info.propTypes = {};

export default Info;
