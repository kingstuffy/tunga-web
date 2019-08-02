import React, { Component } from "react";
import "./Default.scss";
import AboutUs from "../../home/AboutUs/AboutUs";
import OurService from "../../home/OurService/OurService";
import ScheduleCall from "../../home/ScheduleCall/ScheduleCall";
import CaseStudies from "../../home/CaseStudies/CaseStudies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageScroller from "../../../components/pageScroller";
import PageScroll from "../../shared/PageScroll/PageScroll";

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
        this.state = {};
        this.onUseCaseClick = this.onUseCaseClick.bind(this);
        this.onPageScroll = this.onPageScroll.bind(this);
    }

    onUseCaseClick() {
        this.setState({ gotToPage: 4 });
    }

    onPageScroll() {
        this.setState({ gotToPage: false });
    }

    render() {
        return (
            <div className="Default">
                <PageScroll
                    pages={pages}
                    onPageScroll={this.onPageScroll}
                    goToPage={this.state.gotToPage}
                >
                    <div>
                        <Header/>
                    </div>
                    <div>
                        <AboutUs/>
                    </div>
                    <div>
                        <OurService onUseCaseClick={this.onUseCaseClick}/>
                    </div>
                    <div>
                        <ScheduleCall showCaseStudies={true}/>
                    </div>
                    <div>
                        <CaseStudies/>
                    </div>
                    <Footer/>
                </PageScroll>
            </div>
        );
    }
}

Default.propTypes = {};

export default Default;
