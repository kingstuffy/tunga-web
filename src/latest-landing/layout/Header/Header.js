import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import { openCalendlyWidget } from "../../../components/utils/calendly";
import "./Header.scss";
import Nav from "../Nav/Nav";
import Button from "../../shared/core/Button";
import BgVideo from "../../assets/videos/home/section-1.mp4";
import BgVideoMobile from "../../assets/videos/home/section-1-mobile.mp4";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onTalentPoolRequest, isMobile } = this.props;

        return (
            <div className="Header text-white position-relative" id="Header">
                <div className="Header__video-bg">
                    {
                        !isMobile
                        &&
                        <video
                            className="Header__video"
                            autoPlay
                            loop
                            muted>
                            <source
                                src={BgVideo}
                                type="video/mp4"
                            />
                            <source
                                src={BgVideoMobile}
                                type="video/mp4"
                                media="all and (max-width: 768px)"
                            />
                        </video>
                    }
                </div>
                <Nav/>
                <Row>
                    <Col lg="12" sm="12" md="12">
                        <div className="text-center Header-Text  font-weight-bold">
                            The Quickest Road to Innovation Leads Through Africa
                        </div>
                        <div className="Header-Text-P font-weight-normal mt-3">
                            Companies worldwide use Tunga’s workforce of
                            exclusively African software engineers to build new
                            tech products quickly, affordably and smoothly
                        </div>
                    </Col>
                    <Col lg="12" sm="12" md="12">
                        <div className="mt-3 mb-5" align="center">
                            <Button
                                onClick={() => openCalendlyWidget()}
                                size="lg"
                                className="ml-2 p-4 mt-2 border-radius-0 Header-button"
                            >
                                Schedule a Call
                            </Button>
                            <Button
                                onClick={onTalentPoolRequest}
                                size="lg"
                                className="ml-2 p-4 mt-2 border-radius-0 bg-transparent border-color-white Header-button"
                            >
                                Search for Developer
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
