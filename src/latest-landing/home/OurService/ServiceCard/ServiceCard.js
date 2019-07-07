import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ServiceCard.scss";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import Icon from "../../../shared/core/Icon";


class ServiceCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { service, onServiceSelection } = this.props;
        return (
            <div className="ServiceCard">
                <Card className="border-0">
                    <CardImg top width="100%"
                             className="ServiceCard__img"
                             src={service.imgUrl}
                             alt="Card image cap"/>
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
                        <a className="ServiceCard__cta text-primary size-18"
                           onClick={() => {
                               onServiceSelection(service);
                           }}
                        >
                            Learn more <Icon name='arrow-right' size='card'/>
                        </a>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

ServiceCard.propTypes = {};

export default ServiceCard;
