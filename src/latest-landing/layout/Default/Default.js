import React, { Component } from "react";
import "./Default.scss";
import AboutUs from "../../home/AboutUs/AboutUs";
import OurService from "../../home/OurService/OurService";
import ScheduleCall from "../../home/ScheduleCall/ScheduleCall";
import CaseStudies from "../../home/CaseStudies/CaseStudies";
import Header from "../Header/Header";
import SideNav from "../../../components/sidenav";

const anchors = [
    {
        hash: "Header",
        title: "Tunga",
        isActive: false,
        isActiveBar: false,
    },
    {
        hash: "AboutUs",
        title: "About Us",
        isActive: false,
        isActiveBar: false,
    },
    {
        hash: "OurService",
        title: "Our Service",
        isActive: false,
        isActiveBar: false,
    },
    {
        hash: "CaseStudies",
        title: "Case Studies",
        isActive: false,
        isActiveBar: false,
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
