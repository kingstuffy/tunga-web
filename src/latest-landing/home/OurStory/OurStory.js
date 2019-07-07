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
import SideNav from "../../../components/sidenav";
import Footer from "../../layout/Footer/Footer";

import HeroBg from "../../assets/img/our-story/hero-bg.png";
import BgVideo from "../../assets/videos/our-story/bg-video.mp4";

const anchors = [
    {
        hash: "OurStory",
        title: "Our Story",
        isActive: false,
        isActiveBar: false,
    },
    {
        hash: "OurDream",
        title: "Our Dream",
        isActive: false,
        isActiveBar: false,
    },
    {
        hash: "TheProblem",
        title: "The Problem",
        isActive: false,
        isActiveBar: false,
    },
    {
        hash: "OurMission",
        title: "Our Mission",
        isActive: false,
        isActiveBar: false,
    },
    {
        hash: "OurSolution",
        title: "Our Solution",
        isActive: false,
        isActiveBar: false,
    },
    {
        hash: "ImpactSourcing",
        title: "Impact Sourcing",
        isActive: false,
        isActiveBar: false,
    },
    {
        hash: "Africa",
        title: "Africa",
        isActive: false,
        isActiveBar: false,
    },
    {
        hash: "Approach",
        title: "Aproach",
        isActive: false,
        isActiveBar: false,
    },
    {
        hash: "Footer",
        title: "Footer",
        isActive: false,
        isActiveBar: false,
    },
];

class OurStory extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="OurStory">
                <SideNav anchors={anchors}/>
                <div id="OurStory" className="OurStory__header">
                    <div className="OurStory__nav">
                        <Nav/>
                    </div>
                    <div className="OurStory__hero">
                        <Hero/>
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
            </section>
        );
    }
}

OurStory.propTypes = {};

export default OurStory;
