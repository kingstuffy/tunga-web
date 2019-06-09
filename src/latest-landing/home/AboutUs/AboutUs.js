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
            <section className="AboutUs">
                <Row>
                    <Col sm="12" lg="12" md="12" className="object-fit">
                        <picture>
                            <source media="(max-width: 768px)" srcSet={AboutMobile}/>
                            <img src={About} className="w-100" alt="About Us"/>
                        </picture>
                    </Col>
                    <Col sm="12" lg="6" md="6" className="AboutMsg p-lg-5 mt-5">
                        <div className="ml-4 mr-4">
                            <h4 className="text-primary text-uppercase abt-title">
                                About Us
                            </h4>
                            <h5 className="text-blue w-85 abt-summary">
                                Tunga helps companies every step of the way in
                                building new software products
                            </h5>
                            <div className="abt-content w-85 text-justify">
                                We were founded by tech and hospitality entrepreneurs turned aid workers. As a result we
                                have first hand experience in what it takes to both develop rapid innovations and to
                                untap the potential of Africa’s undiscovered tech talents. With our low rates and short
                                lead times we can have your product up and running super fast!
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" lg="6" md="6" className="AboutMsg p-lg-5 mt-5">
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
            </section>
        );
    }
}

AboutUs.propTypes = {};

export default AboutUs;
