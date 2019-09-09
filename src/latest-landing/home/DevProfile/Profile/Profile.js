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
        const { talent } = this.props;

        return (
            <div className="Profile">
                <Row>
                    <Col sm="4">
                        <Info talent={talent}/>
                    </Col>
                    <Col sm="8">
                        {
                            !!(talent.badges || (talent.ratings && talent.ratings.details.length))
                            &&
                            <Row className="Profile__badges-ratings">
                                {
                                    !!talent.badges
                                    &&
                                    <Col md="5" sm="12">
                                        <Badges/>
                                    </Col>
                                }
                                {
                                    !!(talent.ratings && talent.ratings.details.length)
                                    &&
                                    <Col md="7" sm="12">
                                        <Ratings talent={talent}/>
                                    </Col>
                                }
                            </Row>
                        }
                        <Row className="Profile__map-skill-set">
                            <Col md="7" sm="12">
                                <SkillSet talent={talent}/>
                            </Col>
                            <Col md="5" sm="12">
                                <Map user={talent}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

Profile.propTypes = {};

export default Profile;
