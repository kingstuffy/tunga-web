import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ScheduleCall.scss";
import { Col, Row } from "reactstrap";
import Button from "../../shared/core/Button";
import Icon from "../../shared/core/Icon";
import BgVideo from "../../assets/videos/home/section-4.mp4";
import { openCalendlyWidget } from "../../../components/utils/calendly";

class ScheduleCall extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showCaseStudies } = this.props;

        return (
            <div className="ScheduleCall text-white position-relative" id="ScheduleCall">
                <div className="ScheduleCall__video-bg">
                    <video
                        className="ScheduleCall__video"
                        autoPlay
                        loop
                        muted>
                        <source
                            src={BgVideo}
                            type="video/mp4"
                        />
                    </video>
                </div>
                <Row>
                    <Col lg="12" sm="12" md="12">
                        <div className="text-center ScheduleCall-Text  font-weight-bold">
                            Ready to build something amazing?
                        </div>
                        <div className="ScheduleCall-Text-P font-weight-normal">
                            Schedule a call to talk through your project
                            requirements
                        </div>
                    </Col>
                    <Col lg="12" sm="12" md="12">
                        <div className="mt-4 mb-5" align="center">
                            <Button
                                onClick={() => openCalendlyWidget()}
                                size="lg"
                                className="ml-2 p-4 mt-2 border-radius-0 ScheduleCall-button"
                            >
                                Schedule a Call
                            </Button>
                        </div>
                    </Col>
                    {showCaseStudies &&
                    <Col
                        lg="12"
                        sm="12"
                        md="12"
                        className="position-absolute notSure"
                    >
                        <div className="" align="center">
                            <p className="">Not sure? See Case Studies</p>
                            <p>
                                <Icon name="arrow-down" size="md"/>
                            </p>
                        </div>
                    </Col>
                    }
                </Row>
            </div>
        );
    }
}

ScheduleCall.propTypes = {};

export default ScheduleCall;
