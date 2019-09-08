import React, { Component } from "react";
import "./Privacy.scss";

import Nav from "../../layout/Nav/Nav";
import Footer from "../../layout/Footer/Footer";
import PageScroll from "../../shared/PageScroll/PageScroll";

import HeroBg from "../../assets/img/our-story/hero-bg.png";
import BgVideo from "../../assets/videos/our-story/bg-video.mp4";
import PrivacyContent from "../../../components/showcase/Privacy";

const pages = [
    {
        hash: "Content",
        title: "Content",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff",
        theme: "light",
    },
    {
        hash: "Contact",
        title: "Contact",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff",
        theme: "dark",
    },
];

class Privacy extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="Privacy">
                <PageScroll pages={pages} forceJumpToTop={true}>
                    <div id="Content" className="Privacy__content agreement-page">
                        <div className="DevProfile__nav">
                            <Nav/>
                        </div>
                        <PrivacyContent/>
                    </div>
                    <Footer/>
                </PageScroll>
            </section>
        );
    }
}

Privacy.propTypes = {};

export default Privacy;
