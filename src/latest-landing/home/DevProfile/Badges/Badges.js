import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Badges.scss";
import Icon from "../../../shared/core/Icon";
import ProfileImg from "../../../assets/img/our-story/hero-bg.png";
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
                    imgUrl: ProfileImg,
                    title: "Badge A"
                },
                {
                    imgUrl: ProfileImg,
                    title: "Badge B"
                },
                {
                    imgUrl: ProfileImg,
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
