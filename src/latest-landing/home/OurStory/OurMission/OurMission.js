import React, { Component } from "react";
import PropTypes from "prop-types";
import "./OurMission.scss";
import ButteryflyWorks from "../../../assets/img/our-story/butterfly_works.png";
import TridonBank from "../../../assets/img/our-story/triodos.png";
import Doen from "../../../assets/img/our-story/doen.png";
// import Oxfam from "../../../assets/img/our-story/oxfam.png";
import Edukans from "../../../assets/img/our-story/edukans.png";
import Dioraphte from "../../../assets/img/our-story/dioraphte.png";


class OurMission extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logos: [
                ButteryflyWorks,
                TridonBank,
                Doen,
                Edukans,
                Dioraphte,
            ]
        };
    }

    render() {
        return (
            <div className="OurMission">
                <div className="row">
                    <div className="OurMission__logos col-md-6 col-sm-12">
                        <ul className="OurMission__logos-list row">
                            {
                                this.state.logos.map((logo, i) => (
                                    logo === ButteryflyWorks || logo === Dioraphte ? (
                                    <li className="OurMission__logos-item col-md-4 col-xs-6 mb-4 mt-4" key={i}>
                                        <img src={logo} className="OurMission__logo"/>
                                    </li> ) : (
                                    <li className="OurMission__logos-item col-md-4 col-xs-6 mb-4 mt-4" key={i}>
                                        <img src={logo} className="OurMission__logo"/>
                                    </li>
                                    )
                                ))
                            }
                        </ul>
                    </div>
                    <div className="OurMission__content col-md-6 col-sm-12">
                        <div className="text-primary size-14 font-weight-normal mb-2 mt-3">
                            OUR MISSION
                        </div>
                        <div className="text-blue size-18 font-weight-normal mb-2">
                            21st century jobs for African youths
                        </div>
                        <div>
                            That’s why in 2015 we embarked on a mission to create 21st century jobs for African youths.
                            With
                            the support of institutions like Dioraphte, Oxfam, the DOEN Foundation, Edukans and Triodos
                            Bank
                            we started Tunga. To help talented African youths get access to the cool tech jobs that
                            define
                            this generation. So that they can become independent and make their mark in the
                            international
                            economic marketplace.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

OurMission.propTypes = {};
export default OurMission;
