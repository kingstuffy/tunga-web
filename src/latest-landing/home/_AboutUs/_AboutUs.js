import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './_AboutUs.scss';
import { Col, ListGroup, ListGroupItem, Media, Row } from "reactstrap";
import About from '../../assets/img/about/about.png';
import Icon from "../../shared/core/Icon";
class _AboutUs extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section className="AboutUs">
          <Row>
              <Col sm="12" lg="6" md="6" className="AboutMsg p-lg-5 mt-5">
                  <div className="ml-4 mr-4">
                  <h4 className="text-primary text-uppercase abt-title">About Us</h4>
                  <h5 className="text-blue w-85 abt-summary">
                      Tunga helps companies every step of the way in building new software products
                  </h5>
                  <div className="abt-content w-85 text-justify">
                      We have first-hand experience in what it takes to both develop rapid innovations and to untap the potential of Africa’s undiscovered tech talents. With our low rates and short lead times, we can have your product up and running super fast!
                      <ListGroup className="p-0">
                          <ListGroupItem className="border-0 pl-0">
                              <Icon name='check-circle-o' size='xs' className="text-blue"/>
                              &nbsp; Fixed prices, no surprises
                          </ListGroupItem>
                          <ListGroupItem className="border-0 pl-0">
                              <Icon name='check-circle-o' size='xs' className="text-blue"/>
                              &nbsp; On-demand access to software developers
                          </ListGroupItem>
                          <ListGroupItem className="border-0 pl-0">
                              <Icon name='check-circle-o' size='xs' className="text-blue"/>
                              &nbsp; Reachable 7 days per week during projects
                          </ListGroupItem>
                          <ListGroupItem className="border-0 pl-0">
                              <Icon name='check-circle-o' size='xs' className="text-blue"/>
                              &nbsp; All popular software languages and frameworks
                          </ListGroupItem>
                          <ListGroupItem className="border-0 pl-0">
                              <Icon name='check-circle-o' size='xs' className="text-blue"/>
                              &nbsp; Contact person in your country and/or language
                          </ListGroupItem>
                      </ListGroup>
                  </div>
                  </div>
              </Col>
              <Col sm="12" lg="6" md="6" className="object-fit">
                 <img src={About} className="w-100" alt="About Us"/>
              </Col>
          </Row>
      </section>
    );
  }
}
_AboutUs.propTypes = {
}

export default _AboutUs;
