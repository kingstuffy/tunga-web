import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CaseStudyCard.scss";
import { Card, CardBody, CardText, CardTitle, Col, Media, Row } from "reactstrap";

class CaseStudyCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { caseStudy}= this.props;
        return (
            <div className="CaseStudyCard">
                <Row>
                    <Col sm="12" lg="7" md="7" xs="12" xl="7" className="p-0 border-0">
                        <Card className="border-0 pt-0">
                            <CardBody className="pt-0">
                                {/*width="15%" height="15%"*/}
                                <img src={caseStudy.icon} alt={caseStudy.title}/>
                                <CardTitle className="text-blue size-12 mt-3">{caseStudy.title}</CardTitle>
                                <Row>
                                    <Col className="border-right-2">
                                        <CardTitle className="text-blue text-uppercase size-12 mt-3">Technology</CardTitle>
                                        <CardText className="size-10">{caseStudy.tech}</CardText>
                                    </Col>
                                    <Col className="border-right-2">
                                        <CardTitle className="text-blue text-uppercase size-12 mt-3">Lead Time</CardTitle>
                                        <CardText className="size-10">{caseStudy.leadTime}</CardText>
                                    </Col>
                                    <Col>
                                        <CardTitle className="text-blue text-uppercase size-12 mt-3">Production Time</CardTitle>
                                        <CardText className="size-10">{caseStudy.price}</CardText>
                                    </Col>
                                </Row>
                                <CardText className="size-10"> {caseStudy.description}</CardText>
                                <Media>
                                    <Media left href="#">
                                        <Media object src={caseStudy.user.pic} className="img-fluid rounded-circle" alt="Generic placeholder image" />
                                    </Media>
                                    <Media body className="pl-2 size-9">
                                        <Media heading className="size-9 text-blue">
                                            {caseStudy.user.name}
                                        </Media>
                                        {caseStudy.user.position + ', ' + caseStudy.user.company}
                                       </Media>
                                </Media>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

CaseStudyCard.propTypes = {};

export default CaseStudyCard;
