import React, { Component } from "react";
import "./OurStory.scss";

import Nav from "../../layout/Nav/Nav";
import Hero from "./Hero/Hero";
import OurDream from "./OurDream/OurDream";
import TheProblem from "./TheProblem/TheProblem";
import OurMission from "./OurMission/OurMission";
import OurSolution from "./OurSolution/OurSolution";
import ImpactSourcing from "./ImpactSourcing/ImpactSourcing";
import Africa from "./Africa/Africa";
import Approach from "./Approach/Approach";
import PageScroller from "../../../components/pageScroller";
import Footer from "../../layout/Footer/Footer";

import HeroBg from "../../assets/img/our-story/hero-bg.png";
import BgVideo from "../../assets/videos/our-story/bg-video.mp4";

const pages = [
    {
        hash: "OurStory",
        title: "Our Story",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff"
    },
    {
        hash: "OurDream",
        title: "Our Dream",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64"
    },
    {
        hash: "TheProblem",
        title: "The Problem",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64"
    },
    {
        hash: "OurMission",
        title: "Our Mission",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff"
    },
    {
        hash: "OurSolution",
        title: "Our Solution",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64"
    },
    {
        hash: "ImpactSourcing",
        title: "Impact Sourcing",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff"
    },
    {
        hash: "Africa",
        title: "Africa",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff"
    },
    {
        hash: "Approach",
        title: "Aproach",
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

class OurStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gotToPage: false,
        };

        this.onLearnMore = this.onLearnMore.bind(this);
        this.onPageScroll = this.onPageScroll.bind(this);
    }

    onLearnMore() {
        this.setState({ gotToPage: 1 });
    }

    onPageScroll() {
        this.setState({ gotToPage: false });
    }

    render() {
        return (
            <section className="OurStory">
                <PageScroller pages={pages} onPageScroll={this.onPageScroll} goToPage={this.state.gotToPage}>
                    <div id="OurStory" className="OurStory__header">
                        <div className="OurStory__nav">
                            <Nav/>
                        </div>
                        <div className="OurStory__hero">
                            <Hero onLearnMore={this.onLearnMore}/>
                        </div>
                        <div className="OurStory__hero-mask">
                        </div>
                        <div className="OurStory__video-bg">
                            <video
                                className="OurStory__video"
                                autoPlay
                                loop
                                muted>
                                <source
                                    src={BgVideo}
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                    <div id="OurDream" className="OurStory__our-dream">
                        <OurDream/>
                    </div>
                    <div id="TheProblem" className="OurStory__the-problem">
                        <TheProblem/>
                    </div>
                    <div id="OurMission" className="OurStory__our-mission">
                        <OurMission/>
                    </div>
                    <div id="OurSolution" className="OurStory__our-solution">
                        <OurSolution/>
                    </div>
                    <div id="ImpactSourcing" className="OurStory__impact-sourcing">
                        <ImpactSourcing/>
                    </div>
                    <div id="Africa" className="OurStory__africa">
                        <Africa/>
                    </div>
                    <div id="Approach" className="OurStory__approach">
                        <Approach/>
                    </div>
                    <Footer/>
                </PageScroller>
            </section>
        );
    }
}

OurStory.propTypes = {};

export default OurStory;
