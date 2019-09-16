import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CoreMember.scss";
import Icon from "../../../../shared/core/Icon";


class CoreMember extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { member } = this.props;
        return (
            <div className="CoreMember"
                 style={{ backgroundImage: `url(${member.imgUrl})` }}>
                <div className="CoreMember__info">
                    <div className="CoreMember__name">
                        {member.name}
                    </div>
                    <div className="CoreMember__designation">
                        {member.designation}
                    </div>
                    <div>&nbsp;</div>
                </div>
                <div className="CoreMember__cta">
                    {
                        member.social.map((social, i) => (
                            <a className="CoreMember__social-link" href={social.url}
                               target="_blank" key={i}>
                                <Icon className="text-white" name={social.icon} size='md'/>
                            </a>
                        ))
                    }
                </div>
                <div className="CoreMember__bg-mask"></div>
            </div>
        );
    }
}

CoreMember.propTypes = {};

export default CoreMember;
