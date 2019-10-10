import React, { Component } from "react";
import PropTypes from "prop-types";
import "./OurDream.scss";
import Button from "../../../shared/core/Button";
import Icon from "../../../shared/core/Icon";
import ImageBox from "../ImageBox/ImageBox";
import DreamImg from "../../../assets/img/our-story/our-dream.png";
import ButterflyWorksLogo from "../../../assets/img/our-story/butterfly-works-logo.png";


class OurDream extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="OurDream">
                <ImageBox
                    img={DreamImg}
                    position="right"
                >
                    <div className="OurDream__content">
                        <div className="OurStory__title text-primary size-14 font-weight-bold mb-2">
                            OUR DREAM
                        </div>
                        <div className="OurStory__summary  text-blue size-18 font-weight-bold mb-2">
                            Equal opportunity for all youths
                        </div>
                        <div className="mb-4 OurDream__paragraph ">
                            Being able to take control of and choose your own destiny is a universal value. And it
                            probably is disproportionately so among software developers and startup entrepreneurs like
                            ourselves. Tunga is founded by not-for-profit
                            design studio <span className="text-primary font-weight-normal">Butterfly Works</span> and
                            long-time social
                            entrepreneur Ernesto Spruyt, who together with his colleague Bart Leijssenaar (CMO) and
                            Michiel Huisman (Board Advisor) is not only a tech person, but also has a background in
                            hospitality
                            management.
                        </div>
                        <div className="mb-4">
                            In short: Tunga is founded by ‘people-people’. We think that what you make of
                            your life is your own responsibility. But we would like for everyone, especially the youth
                            that
                            holds the world’s future, to be free and able to take control of their own destiny.
                        </div>
                        <img src={ButterflyWorksLogo} className="OurDream__logo"/>
                    </div>
                </ImageBox>
            </div>
        );
    }
}

OurDream.propTypes = {};
export default OurDream;
