import React, { Component } from "react";
import "./ServiceDetail.scss";
import UseCase from "../UseCase/UseCase";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import IconDismiss from "../../../assets/img/common/icons/icon-dismiss.png";
import Icon from "../../../shared/core/Icon";

class ServiceDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { service, nextService, onServiceSelection, onCloseServiceDetail, onUseCaseClick } = this.props;
        return (
            <section className="ServiceDetail">
                <div className="ServiceDetail__left-bg">
                    <video
                        className="ServiceCard__video"
                        autoPlay
                        loop
                        muted>
                        <source
                            src={service.videoDetails}
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="ServiceDetail__card">
                    <Card className="border-0">
                        <CardBody className="">
                            <CardTitle className="text-blue font-weight-bold ServiceDetail__title">
                                {service.title}
                            </CardTitle>
                            <CardText className="ServiceDetail__desc">
                                {service.longDescription || service.description}
                            </CardText>
                            <div className="text-blue font-weight-bold ServiceDetail__subtitle">
                                LEAD TIME
                            </div>
                            <CardText className="ServiceDetail__lead-time">
                                {service.leadTime}
                            </CardText>
                            <div className="text-blue font-weight-bold ServiceDetail__subtitle">
                                PRICE INDICATION
                            </div>
                            <CardText className="ServiceDetail__price">
                                {service.price}
                            </CardText>
                            <div className="ServiceDetail__use-case">
                                <UseCase onUseCaseClick={() => {
                                    onUseCaseClick(service.useCase);
                                    onCloseServiceDetail();
                                }} useCases={service.useCases || []}/>
                            </div>
                            <div className="mt-5">
                                {nextService &&
                                <a className="ServiceDetail__cta text-primary size-14"
                                   onClick={() => {
                                       onServiceSelection(nextService);
                                   }}
                                >
                                    {nextService.title} <Icon name='arrow-right' size='card'/>
                                </a>
                                }
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="clearfix">
                </div>
                <a className="ServiceDetail__dismiss size-18"
                   onClick={() => {
                       onCloseServiceDetail();
                   }}>
                    <img className="ServiceDetail__dismiss-img" src={IconDismiss} alt="close section"/>
                </a>
            </section>
        );
    }
}

ServiceDetail.propTypes = {};

export default ServiceDetail;
