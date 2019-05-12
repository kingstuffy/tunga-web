import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ServiceCard.scss';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import Icon from "../../../shared/core/Icon";

class ServiceCard extends Component {
  constructor(props){
    super(props);
  }
  render(){
     const { service } = this.props;
    return (
      <div className="ServiceCard">
          <Card>
              <CardImg top width="100%" height="195px" src={service.imgUrl} alt="Card image cap" />
              <CardBody>
                  <CardTitle className="text-blue">{service.title}</CardTitle>
                  {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
                  <CardText> {service.description}</CardText>
                  <CardTitle className="text-blue text-uppercase mt-3">Lead Time</CardTitle>
                  <CardText>{service.leadTime}</CardText>
                  <CardTitle className="text-blue text-uppercase mt-3">Price Indication</CardTitle>
                  <CardText>{service.price}</CardText>
                  <a className="text-primary p-0">Learn More <Icon name="arrow-right" size="md"/></a>
              </CardBody>
          </Card>
      </div>
    )
  }
}
ServiceCard.propTypes = {};

export default ServiceCard;
