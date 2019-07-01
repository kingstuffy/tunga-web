import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Talent.scss";
import Icon from "../../../../shared/core/Icon";
import { Link } from "react-router-dom";
import Routing from "../../../../constants/Routing";


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
                    <Link to={`${Routing.devProfile.path}/${talent.id}`} className="Talent__cta-link">
                        View full profile <Icon className="text-white" name="arrow-right"/>
                    </Link>
                </div>
            </div>
        );
    }
}

Talent.propTypes = {};

export default Talent;
