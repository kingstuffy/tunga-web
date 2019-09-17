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
            videos: {}
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }


    onVideoLoad(url) {
        const videos = this.state.videos;
        videos[url] = true;
        setTimeout(() => {
            this.setState({ videos });
        }, 200);
    }

    onMouseEnter() {
        this.setState({ showVideo: !this.props.isMobile });
    }


    onMouseLeave() {
        const videos = this.state.videos;
        videos[this.props.service.videoMain] = false;
        this.setState({ showVideo: false, videos });
    }


    render() {
        const { service, onServiceSelection } = this.props;
        const videoLoaded = this.state.videos[service.videoMain];

        return (
            <div className="ServiceCard" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <Card className="border-0">
                    <div className="ServiceCard__video-card">
                        {
                            this.state.showVideo
                                ?
                                <video
                                    onLoadedData={() => this.onVideoLoad(service.videoMain)}
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
                        {
                            this.state.showVideo && !videoLoaded
                            &&
                            <div className="ServiceCard__img ServiceCard__img--bg"
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
