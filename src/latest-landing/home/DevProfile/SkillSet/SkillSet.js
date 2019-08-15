import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SkillSet.scss";

class SkillSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillSets: [
                {
                    type: "Language",
                    skills: [
                        "PHP",
                        "Python",
                        "Java",
                        "Ruby"
                    ]
                },
                {
                    type: "Language",
                    skills: [
                        "PHP",
                        "Python",
                        "Java"
                    ]
                },
                {
                    type: "Database",
                    skills: [
                        "Oracle",
                        "Python",
                        "Java",
                        "Ruby"
                    ]
                },
                {
                    type: "Language",
                    skills: [
                        "PHP",
                        "Python",
                        "Java",
                        "Ruby"
                    ]
                }
            ]
        };
    }


    render() {
        return (
            <div className="SkillSet">
                <div className="SkillSet__title">
                    SKILLSET
                </div>
                <ul className="SkillSet__types">
                    {
                        this.state.skillSets.map((type, typeKey) => (
                            <li className="SkillSet__item-type" key={typeKey}>
                                <div className="SkillSet__type">
                                    {type.type}
                                </div>
                                <ul className="SkillSet__skills">
                                    {
                                        type.skills.map((skill, skillKey) => (
                                            <li className="SkillSet__skill" key={skillKey}>
                                                {skill}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

SkillSet.propTypes = {};

export default SkillSet;
