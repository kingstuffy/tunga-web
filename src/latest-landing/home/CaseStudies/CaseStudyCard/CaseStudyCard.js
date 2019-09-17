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
                        <div className="CaseStudyCard__skills">
                            <div className="CaseStudyCard__skill CaseStudyCard__skill--first">
                                <CardTitle className="CaseStudyCard__title text-blue font-weight-bold text-uppercase mt-2 mb-1">
                                    Technology
                                </CardTitle>
                                <CardText className="CaseStudyCard__desc">
                                    {caseStudy.tech}
                                </CardText>
                            </div>
                            <div className="CaseStudyCard__skill">
                                <CardTitle className="text-blue font-weight-bold text-uppercase CaseStudyCard__title mt-2 mb-1">
                                    Lead Time
                                </CardTitle>
                                <CardText className="CaseStudyCard__desc">
                                    {caseStudy.leadTime}
                                </CardText>
                            </div>
                            <div className="CaseStudyCard__skill CaseStudyCard__skill--last">
                                <CardTitle className="text-blue font-weight-bold text-uppercase CaseStudyCard__title mt-2 mb-1">
                                    Production Time
                                </CardTitle>
                                <CardText className="CaseStudyCard__desc">
                                    {caseStudy.price}
                                </CardText>
                            </div>
                        </div>
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
                                <Media className="size-14">
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
