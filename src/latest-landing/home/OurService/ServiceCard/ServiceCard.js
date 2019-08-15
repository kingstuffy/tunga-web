import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ServiceCard.scss";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import arrow from "../../../assets/img/service/Vector-1.png";


class ServiceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showVideo: false,
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }


    onMouseEnter() {
        this.setState({ showVideo: true });
    }


    onMouseLeave() {
        this.setState({ showVideo: false });
    }


    render() {
        const { service, onServiceSelection } = this.props;
        return (
            <div className="ServiceCard" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <Card className="border-0">
                    <div className="ServiceCard__video-card">
                        {
                            this.state.showVideo
                                ?
                                <video
                                    className="ServiceCard__video"
                                    autoPlay
                                    loop
                                    muted>
                                    <source
                                        src={service.videoMain}
                                        type="video/mp4"
                                    />
                                </video>
                                :
                                <div className="ServiceCard__img"
                                     style={{ backgroundImage: `url('${service.imgUrl}')` }}></div>
                        }
                    </div>
                    <CardBody className="">
                        <CardTitle className="text-blue font-weight-bold">
                            {service.title}
                        </CardTitle>
                        <CardText className="size-16">{service.description}</CardText>
                        <div className="text-blue font-weight-bold">
                            LEAD TIME
                        </div>
                        <CardText className="size-14">{service.leadTime}</CardText>
                        <div className="text-blue font-weight-bold">
                            PRICE INDICATION
                        </div>
                        <CardText className="size-14">{service.price}</CardText>
                        <a className="ServiceCard__cta text-primary font-weight-bold size-18"
                           onClick={() => {
                               onServiceSelection(service);
                           }}
                        >
                            <span className="ServiceCard__cta-text">Learn more</span>
                            <img src={arrow}/>
                        </a>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

ServiceCard.propTypes = {};

export default ServiceCard;
