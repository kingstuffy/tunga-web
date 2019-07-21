import React, { Component } from "react";
import "./CaseStudyCard.scss";
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Media,
    Row
} from "reactstrap";

class CaseStudyCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { caseStudy } = this.props;
        return (
            <div className="CaseStudyCard w-100">
                <Card className="border-0 pt-0 w-100">
                    <CardBody className="pt-0 p-0">
                        <img src={caseStudy.icon} alt={caseStudy.title} className="rounded"/>
                        <CardTitle className="text-blue size-18 mt-3 font-weight-bold">
                            {caseStudy.title}
                        </CardTitle>
                        <Row>
                            <Col
                                sm={12}
                                md={4}
                                lg={4}
                                xs={12}
                                xl={4}
                                className="border-right-2"
                            >
                                <CardTitle className="text-blue text-uppercase size-14 mt-2 mb-1">
                                    Technology
                                </CardTitle>
                                <CardText className="size-16">
                                    {caseStudy.tech}
                                </CardText>
                            </Col>
                            <Col
                                sm={12}
                                md={4}
                                lg={4}
                                xs={12}
                                xl={4}
                                className="border-right-2"
                            >
                                <CardTitle className="text-blue text-uppercase size-14 mt-2 mb-1">
                                    Lead Time
                                </CardTitle>
                                <CardText className="size-16">
                                    {caseStudy.leadTime}
                                </CardText>
                            </Col>
                            <Col sm={12} md={4} lg={4} xs={12} xl={4}>
                                <CardTitle className="text-blue text-uppercase size-14 mt-2 mb-1">
                                    Production Time
                                </CardTitle>
                                <CardText className="size-16">
                                    {caseStudy.price}
                                </CardText>
                            </Col>
                        </Row>
                        <CardText className="mt-4 mb-4 size-16 font-italic">
                            {" "}
                            {caseStudy.description}
                        </CardText>
                        <Media className="mt-3">
                            <Media left href="#">
                                <Media
                                    object
                                    src={caseStudy.user.pic}
                                    className="img-fluid rounded-circle round"
                                    alt="Generic placeholder image"
                                />
                            </Media>
                            <Media body className="pl-2 size-16">
                                <Media heading className="size-16 text-blue mb-0">
                                    {caseStudy.user.name}
                                </Media>
                                <Media className="size-14 font-italic">
                                    {caseStudy.user.position +
                                    ", " +
                                    caseStudy.user.company}
                                </Media>
                            </Media>
                        </Media>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

CaseStudyCard.propTypes = {};

export default CaseStudyCard;
