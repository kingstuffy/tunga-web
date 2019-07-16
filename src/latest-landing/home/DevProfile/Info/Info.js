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
        const { talent } = this.props;

        return (
            <div className="Info">
                <img src={talent.image} className="Info__img mb-3"/>
                <div className="size-13 text-primary mb-1">
                    {talent.display_name}
                </div>
                <div className="size-12 mb-3">
                    {talent.profile.city}, {talent.profile.country_name}
                </div>
                <div className="size-13 mb-4">
                    {talent.profile.bio}
                </div>
                <ul className="Info__skills mb-3">
                    {
                        talent.profile.skills.map((skill) => (
                            <li className="Info__skill-item" key={skill.id}>
                                <div className="Info__skill">
                                    {skill.name}
                                </div>
                            </li>
                        ))
                    }
                    <li className="clearfix"></li>
                </ul>
                <div className="Info__cta">
                    <Button type="submit">
                        Hire {talent.first_name}
                    </Button>
                </div>
            </div>
        );
    }
}

Info.propTypes = {};

export default Info;
