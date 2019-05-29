import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Hero.scss";
import Icon from "../../../../shared/core/Icon";


class Hero extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { member } = this.props;
        return (
            <div className="Hero"
                 style={{ backgroundImage: `url(${member.imgUrl})` }}>
                <div className="Hero__info">
                    <div className="Hero__name">
                        {member.name}
                    </div>
                    <div className="Hero__designation">
                        {member.designation}
                    </div>
                    <div>&nbsp;</div>
                </div>
                <div className="Hero__cta">
                    {
                        member.social.map((social, i) => (
                            <a className="Hero__social-link" href={social.link} key={i}>
                                <Icon className="text-white" name={social.icon} size='md'/>
                            </a>
                        ))
                    }
                </div>
            </div>
        );
    }
}

Hero.propTypes = {};

export default Hero;
