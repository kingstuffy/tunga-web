import React, { Component } from "react";
import "./Default.scss";
import AboutUs from "../../home/AboutUs/AboutUs";
import OurService from "../../home/OurService/OurService";
import ScheduleCall from "../../home/ScheduleCall/ScheduleCall";
import CaseStudies from "../../home/CaseStudies/CaseStudies";
import Header from "../Header/Header";
import sidenav from "../../../components/sidenav";
import SideNav from "../../../components/sidenav";

const anchors = [
    {
        hash: "Header",
        title: "Tunga",
        isActive: false,
    },
    {
        hash: "AboutUs",
        title: "AboutUs",
        isActive: false,
    },
    {
        hash: "OurService",
        title: "OurService",
        isActive: false,
    },
    {
        hash: "CaseStudies",
        title: "CaseStudies",
        isActive: false,
  },
];

class Default extends Component {
    constructor(props) {
      super(props);
  }

    render() {
      return (
      <div className="Default">
        <SideNav anchors={anchors} />
        <Header/>
        <AboutUs/>
        <OurService/>
        <ScheduleCall/>
        <CaseStudies/>
      </div>
    );
  }
}

Default.propTypes = {};

export default Default;
