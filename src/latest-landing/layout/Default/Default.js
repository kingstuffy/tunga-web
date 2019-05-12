import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Default.scss';
import AboutUs from "../../home/AboutUs/AboutUs";
import OurService from "../../home/OurService/OurService";

class Default extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Default">
          <AboutUs />
          <OurService />
      </div>
    );
  }
}
Default.propTypes = {
}

export default Default;
