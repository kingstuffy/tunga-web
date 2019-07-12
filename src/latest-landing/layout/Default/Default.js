import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import "./Default.scss";
import AboutUs from "../../home/AboutUs/AboutUs";
import OurService from "../../home/OurService/OurService";
import ScheduleCall from "../../home/ScheduleCall/ScheduleCall";
import CaseStudies from "../../home/CaseStudies/CaseStudies";
import Header from "../Header/Header";
import SideNav from "../../../components/sidenav";
import Footer from "../Footer/Footer";

const pages = [
    {
        hash: "Header",
        title: "Tunga",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff"
    },
    {
        hash: "AboutUs",
        title: "About Us",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64"
    },
    {
        hash: "OurService",
        title: "Our Service",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64"
    },
    {
        hash: "ScheduleCall",
        title: "Schedule Call",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff"
    },
    {
        hash: "CaseStudies",
        title: "Case Studies",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64"
    },
    {
        hash: "Footer",
        title: "Footer",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff"
    },
];

class Default extends Component {
    constructor(props) {
        super(props);
    }

    goToPage = (pageNumber) => {
        return this.reactPageScroller.goToPage(pageNumber)
    }

    pageOnChange = (pageNumber) => {
        console.log("current page", pageNumber)
    }

    render() {
        return (
      <div className="Default">
        <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
            <Header/>
            <AboutUs/>
            <OurService/>
            <ScheduleCall showCaseStudies={true}/>
            <CaseStudies/>
            <Footer />
        </ReactPageScroller>
        <SideNav pages={pages}  bgColor="#062E64" color="#062E64" goToPage={this.goToPage}/>
      </div>
        );
    }
}

Default.propTypes = {};

export default Default;
