import React, { Component } from "react";
import "./Default.scss";
import AboutUs from "../../home/AboutUs/AboutUs";
import OurService from "../../home/OurService/OurService";
import ScheduleCall from "../../home/ScheduleCall/ScheduleCall";
import CaseStudies from "../../home/CaseStudies/CaseStudies";

class Default extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
            <div className="Default">
                <AboutUs />
                <OurService />
                <ScheduleCall />
                <CaseStudies />
            </div>
    );
  }
}
Default.propTypes = {};

export default Default;
