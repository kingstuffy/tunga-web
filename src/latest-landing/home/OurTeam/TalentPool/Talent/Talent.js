import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Talent.scss";
import Icon from "../../../../shared/core/Icon";


class Talent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { talent } = this.props;
        return (
            <div className="Talent"
                 style={{ backgroundImage: `url(${talent.image})` }}>
                <div className="Talent__info">
                    <div className="Talent__name">
                        {talent.display_name}
                    </div>
                    <div className="Talent__location">
                        {talent.profile.location}
                    </div>
                    <div className="Talent__skills">
                        {
                            talent.profile.skills.slice(0, 4).map((skill, i) => (
                                <div className="Talent__skill" key={skill.id}>
                                    {skill.name}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="Talent__cta">
                    <a className="Talent__cta-link" href={talent.url}>
                        View full profile <Icon className="text-white" name="arrow-right"/>
                    </a>
                </div>
            </div>
        );
    }
}

Talent.propTypes = {};

export default Talent;
