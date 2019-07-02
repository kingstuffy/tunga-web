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
            <div className="CaseStudyCard w-100" style={{ marginTop: "-20px"}}>
                <Card className="border-0 pt-0 w-100">
                    <CardBody className="pt-0">
                        <img src={caseStudy.icon} alt={caseStudy.title} />
                        <CardTitle className="text-blue size-12 mt-3">
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
                                <CardTitle className="text-blue text-uppercase size-12 mt-3">
                                    Technology
                                </CardTitle>
                                <CardText className="size-10">
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
                                <CardTitle className="text-blue text-uppercase size-16 mt-3">
                                    Lead Time
                                </CardTitle>
                                <CardText className="size-12">
                                    {caseStudy.leadTime}
                                </CardText>
                            </Col>
                            <Col sm={12} md={4} lg={4} xs={12} xl={4}>
                                <CardTitle className="text-blue text-uppercase size-16 mt-3">
                                    Production Time
                                </CardTitle>
                                <CardText className="size-12">
                                    {caseStudy.price}
                                </CardText>
                            </Col>
                        </Row>
                        <CardText className="mt-4 mb-3 size-12">
                            {" "}
                            {caseStudy.description}
                        </CardText>
                        <Media style={{marginTop: "-5px"}}>
                            <Media left href="#">
                                <Media
                                    object
                                    src={caseStudy.user.pic}
                                    className="img-fluid rounded-circle"
                                    alt="Generic placeholder image"
                                />
                            </Media>
                            <Media body className="pl-2 size-12">
                                <Media heading className="size-12 text-blue">
                                    {caseStudy.user.name}
                                </Media>
                                {caseStudy.user.position +
                                    ", " +
                                    caseStudy.user.company}
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
