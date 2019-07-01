import React, { Component } from "react";
import PropTypes from "prop-types";
import "./_CaseStudyCard.scss";
import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Media,
    Row
} from "reactstrap";
import Icon from "../../../shared/core/Icon";

class _CaseStudyCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { caseStudy } = this.props;
    return (
            <div className="CaseStudyCard">
                <Row>
                    <Col
                        sm="6"
                        lg="3"
                        md="3"
                        xs="6"
                        xl="3"
                        className="p-0"
                        style={{
                          background:
                                "url(" +
                                caseStudy.imgUrl +
                                ") no-repeat center",
                          backgroundSize: "cover",
                        //   minHeight: "375px"
                        }}
                    />
                    <Col
                        sm="6"
                        lg="3"
                        md="3"
                        xs="6"
                        xl="3"
                        className="p-0 border-0"
                    >
                        <Card className="border-0 pt-0">
                            {/*<CardImg top width="100%" height="195px" src={caseStudy.imgUrl} alt="Card image cap" />*/}
                            <CardBody className="pt-0">
                                {/*width="15%" height="15%"*/}
                                <img
                                    src={caseStudy.icon}
                                    alt={caseStudy.title}
                                />
                                <CardTitle className="text-blue size-10 mt-2">
                                    {caseStudy.title}
                                </CardTitle>
                                <CardTitle className="text-blue text-uppercase size-10 mt-2">
                                    Technology
                                </CardTitle>
                                <CardText className="size-8">
                                    {caseStudy.tech}
                                </CardText>
                                <CardTitle className="text-blue text-uppercase size-10 mt-2">
                                    Lead Time
                                </CardTitle>
                                <CardText className="size-10">
                                    {caseStudy.leadTime}
                                </CardText>
                                <CardTitle className="text-blue text-uppercase size-12 mt-3">
                                    Production Time
                                </CardTitle>
                                <CardText className="size-8">
                                    {caseStudy.price}
                                </CardText>
                                <CardText className="size-8">
                                    {" "}
                                    {caseStudy.description}
                                </CardText>
                                {/*<img src={caseStudy.user.pic} alt="User"/>*/}
                                <Media>
                                    <Media left href="#">
                                        <Media
                                            object
                                            src={caseStudy.user.pic}
                                            className="img-fluid rounded-circle"
                                            alt="Generic placeholder image"
                                        />
                                    </Media>
                                    <Media body className="pl-2 size-4">
                                        <Media
                                            heading
                                            className="size-7 text-blue"
                                        >
                                            {caseStudy.user.name}
                                        </Media>
                                        {caseStudy.user.position +
                                            ", " +
                                            caseStudy.user.company}
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

_CaseStudyCard.propTypes = {};

export default _CaseStudyCard;
