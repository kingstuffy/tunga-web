import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AboutUs.scss';
import { Col, Media, Row } from "reactstrap";
import About from '../../assets/img/about/about.png';
class AboutUs extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section className="AboutUs">
          <Row>
              <Col sm="12" lg="6" md="6" className="AboutMsg p-5">
                  <h4 className="text-primary text-uppercase abt-title">About Us</h4>
                  <h5 className="text-blue w-85 abt-summary">
                      Tunga helps companies every step of the way in building new software products
                  </h5>
                  <div className="abt-content w-85 text-justify">
                      We have first-hand experience in what it takes to both develop rapid innovations and to untap the potential of Africa’s undiscovered tech talents. With our low rates and short lead times, we can have your product up and running super fast!
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
AboutUs.propTypes = {
}

export default AboutUs;
