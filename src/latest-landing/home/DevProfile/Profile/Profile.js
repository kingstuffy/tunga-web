import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Profile.scss";
import Icon from "../../../shared/core/Icon";
import Info from "../Info/Info";
import { CardBody, Col, Media, Row } from "reactstrap";
import Badges from "../Badges/Badges";
import Ratings from "../Ratings/Ratings";
import Map from "../Map/Map";
import SkillSet from "../SkillSet/SkillSet";
import Experience from "../Experience/Experience";
import Interest from "../Interest/Interest";


class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Profile">
                <Row>
                    <Col sm="4">
                        <Info/>
                    </Col>
                    <Col sm="8">
                        <Row className="Profile__badges-ratings">
                            <Col md="5" sm="12">
                                <Badges/>
                            </Col>
                            <Col md="7" sm="12">
                                <Ratings/>
                            </Col>
                        </Row>
                        <Row className="Profile__map-skill-set">
                            <Col md="5" sm="12">
                                <Map/>
                            </Col>
                            <Col md="7" sm="12">
                                <SkillSet/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="Profile__experience">
                    <Col md="6" sm="12">
                        <Experience/>
                    </Col>
                    <Col md="6" sm="12">
                        <Interest/>
                    </Col>
                </Row>
            </div>
        );
    }
}

Profile.propTypes = {};

export default Profile;
