import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Badges.scss";
import Icon from "../../../shared/core/Icon";
import BadgeA from "../../../assets/img/dev-profile/badge-a.png";
import BadgeB from "../../../assets/img/dev-profile/badge-b.png";
import BadgeC from "../../../assets/img/dev-profile/badge-c.png";
import Button from "../../../shared/core/Button";


const Badge = ({ imgUrl, title }) => {
    return (
        <div className="Badge">
            <img src={imgUrl} className="Badge__img"/>
            <div className="Badge__title">
                {title}
            </div>
        </div>
    );
};


class Badges extends Component {
    constructor(props) {
        super(props);

        this.state = {
            badges: [
                {
                    imgUrl: BadgeA,
                    title: "Badge A"
                },
                {
                    imgUrl: BadgeB,
                    title: "Badge B"
                },
                {
                    imgUrl: BadgeC,
                    title: "Badge C"
                }
            ]
        };
    }


    render() {
        return (
            <div className="Badges">
                <ul className="Badges__list">
                    {
                        this.state.badges.map((badge, key) => (
                            <li className={`Badges__item Badges__item--${key}`} key={key}>
                                <Badge {...badge}/>
                            </li>
                        ))
                    }
                    <li className="clearfix"></li>
                </ul>
            </div>
        );
    }
}

Badges.propTypes = {};

export default Badges;
