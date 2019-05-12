import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CaseStudyCard.scss";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Media, Row } from "reactstrap";
import Icon from "../../../shared/core/Icon";

class CaseStudyCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { caseStudy}= this.props;
        return (
            <div className="CaseStudyCard">
                <Row>
                    <Col sm="12" lg="5" md="5" xs="12" xl="5"
                         className="p-0"
                         style={{background: 'url(' + caseStudy.imgUrl + ') no-repeat center', backgroundSize: 'cover'}} />
                    <Col sm="12" lg="7" md="7" xs="12" xl="7" className="p-0">
                        <Card>
                            {/*<CardImg top width="100%" height="195px" src={caseStudy.imgUrl} alt="Card image cap" />*/}
                            <CardBody>
                                <img src={caseStudy.icon} alt={caseStudy.title} width="30%" height="30%"/>
                                <CardTitle className="text-blue size-12 mt-3">{caseStudy.title}</CardTitle>
                                <CardTitle className="text-blue text-uppercase size-12 mt-3">Technology</CardTitle>
                                <CardText className="size-10">{caseStudy.tech}</CardText>
                                <CardTitle className="text-blue text-uppercase size-12 mt-3">Lead Time</CardTitle>
                                <CardText className="size-10">{caseStudy.leadTime}</CardText>
                                <CardTitle className="text-blue text-uppercase size-12 mt-3">Production Time</CardTitle>
                                <CardText className="size-10">{caseStudy.price}</CardText>
                                <CardText className="size-10"> {caseStudy.description}</CardText>
                                {/*<img src={caseStudy.user.pic} alt="User"/>*/}
                                <Media>
                                    <Media left href="#">
                                        <Media object src={caseStudy.user.pic} className="img-fluid rounded-circle" alt="Generic placeholder image" />
                                    </Media>
                                    <Media body className="pl-1 size-9">
                                        <Media heading className="size-9">
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
