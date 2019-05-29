import React, { Component } from "react";
import "./OurStory.scss";
import Nav from "../../layout/Nav/Nav";
import Hero from "./Hero/Hero";
import HeroBg from "../../assets/img/our-story/hero-bg.png";

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
                        &nsbp;
                    </div>
                </div>
                <div className="OurStory__body p-3 pl-5 pr-5">
                </div>
            </section>
        );
    }
}

OurStory.propTypes = {};

export default OurStory;
