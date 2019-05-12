import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Default.scss';
import AboutUs from "../../home/AboutUs/AboutUs";
import OurService from "../../home/OurService/OurService";
import ScheduleCall from "../../home/ScheduleCall/ScheduleCall";

class Default extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Default">
          <AboutUs />
          <OurService />
          <ScheduleCall />
      </div>
    );
  }
}
Default.propTypes = {
}

export default Default;
