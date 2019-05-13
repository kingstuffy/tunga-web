import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ServiceCard.scss';
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

class ServiceCard extends Component {
  constructor(props){
    super(props);
  }
  render(){
     const { service } = this.props;
    return (
      <div className="ServiceCard">
          <Card className="border-0">
              <CardBody className="p-2">
                  <CardTitle className="text-blue">{service.title}</CardTitle>
                  <CardText> {service.description}</CardText>
              </CardBody>
          </Card>
      </div>
    );
  }
}
ServiceCard.propTypes = {};

export default ServiceCard;
