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
        const { talent } = this.props;
        const skillSets = Object.keys(talent.profile.skills_details).map((type) => {
            return {
                type,
                skills: talent.profile.skills_details[type],
            };
        }).filter((skillSet) => skillSet.skills.length);

        return (
            <div className="SkillSet">

                {
                    skillSets.length
                    &&
                    <div>
                        <div className="SkillSet__title">
                            SKILLSET
                        </div>
                        <ul className="SkillSet__types">
                            {
                                skillSets.map((skillSet) => (
                                    <li className="SkillSet__item-type" key={skillSet.type}>
                                        <div className="SkillSet__type">
                                            {skillSet.type}
                                        </div>
                                        <ul className="SkillSet__skills">
                                            {
                                                skillSet.skills.map((skill) => (
                                                    <li className="SkillSet__skill" key={skill.id}>
                                                        {skill.name}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

SkillSet.propTypes = {};

export default SkillSet;
