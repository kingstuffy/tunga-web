import React, { Component } from "react";
import "./AboutUs.scss";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import About from "../../assets/img/about/about.jpg";
import AboutMobile from "../../assets/img/about/about-mobile.jpg";
import Icon from "../../shared/core/Icon";

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="AboutUs" id="AboutUs">
                <div
                    className="about"
                    style={{
                        // border: "2px solid black",
                        height: "60vh",
                        width: "100vw",
                        backgroundImage: `url(${About})`
                    }}
                >
                </div>
                <div style={{ height: "50vh"}} className="ml-5 AboutMsg">
                    <Row>
                        <Col sm="12" lg="6" md="6">
                            <div>
                                <h4 className="text-primary text-uppercase abt-title">
                                    About Us
                                </h4>
                                <h5 className="text-blue abt-summary">
                                    Tunga helps companies every step of the way in
                                    building new software products
                                </h5>
                                <div className="abt-content text-justify">
                                    We were founded by tech and hospitality entrepreneurs turned aid workers. As a result we
                                    have first hand experience in what it takes to both develop rapid innovations and to
                                    untap the potential of Africa’s undiscovered tech talents. With our low rates and short
                                    lead times we can have your product up and running super fast!
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" lg="6" md="6">
                            <div className="ml-4 mr-4">
                                <ListGroup className="p-0">
                                    <ListGroupItem className="border-0 pl-0">
                                        <Icon
                                            name="check-circle-o"
                                            size="xs"
                                            className="text-primary"
                                        />
                                        <span className="AboutUs__feature">
                                            &nbsp; Fixed prices, no surprises
                                        </span>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 pl-0">
                                        <Icon
                                            name="check-circle-o"
                                            size="xs"
                                            className="text-primary"
                                        />
                                        <span className="AboutUs__feature">
                                            &nbsp; On-demand access to software
                                            developers
                                        </span>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 pl-0">
                                        <Icon
                                            name="check-circle-o"
                                            size="xs"
                                            className="text-primary"
                                        />
                                        <span className="AboutUs__feature">
                                            &nbsp; Reachable 7 days per week during
                                            projects
                                        </span>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 pl-0">
                                        <Icon
                                            name="check-circle-o"
                                            size="xs"
                                            className="text-primary"
                                        />
                                        <span className="AboutUs__feature">
                                            &nbsp; All popular software languages and
                                            frameworks
                                        </span>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 pl-0">
                                        <Icon
                                            name="check-circle-o"
                                            size="xs"
                                            className="text-primary"
                                        />
                                        <span className="AboutUs__feature">
                                            &nbsp; Contact person in your country and/or
                                            language
                                        </span>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

AboutUs.propTypes = {};

export default AboutUs;
