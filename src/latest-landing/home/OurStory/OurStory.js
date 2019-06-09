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

import HeroBg from "../../assets/img/our-story/hero-bg.png";
import BgVideo from "../../assets/videos/our-story/bg-video.mp4";

class OurStory extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="OurStory">
                <div className="OurStory__header"
                     style={{ backgroundImage: `url(${HeroBg})` }}>
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
                <div className="OurStory__our-dream">
                    <OurDream/>
                </div>
                <div className="OurStory__the-problem">
                    <TheProblem/>
                </div>
                <div className="OurStory__our-mission">
                    <OurMission/>
                </div>
                <div className="OurStory__our-solution">
                    <OurSolution/>
                </div>
                <div>
                    <ImpactSourcing/>
                </div>
                <div>
                    <Africa/>
                </div>
                <div>
                    <Approach/>
                </div>
            </section>
        );
    }
}

OurStory.propTypes = {};

export default OurStory;
