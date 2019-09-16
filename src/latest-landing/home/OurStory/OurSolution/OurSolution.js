import React, { Component } from "react";
import PropTypes from "prop-types";
import "./OurSolution.scss";
import solVideo from "../../../assets/videos/our-story/BG-ourstory.mp4";

// import  solVideoMobile from "../../../assets/videos/our-story/BG-ourstory-mobile.m4v";

class OurSolution extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="OurSolution">
                <div className="OurSolution__content-container">
                    <div className="OurSolution__content">
                        <div className="text-primary OurStory__title mb-2 mt-3">
                            OUR SOLUTION
                        </div>
                        <div className="text-blue OurStory__summary mb-2">
                            Link African software developers to international teams and projects
                        </div>
                        <div className="mb-4">
                            We believe in the power of business to transform society. And probably the most attractive
                            area for creating high skilled jobs and skills development for today’s ambitious youths is
                            software development.
                        </div>
                        <div className="mb-4">
                            As production methods from the open source community are increasingly
                            being adopted in the industry, software is often already being produced in virtual teams. At
                            the same time, there is a huge shortage of software developers around the world, resulting
                            in an infinite demand for software development skills.
                        </div>
                        <div>
                            So Tunga was set up as a platform to
                            remove all barriers for these youths to participate in international software teams and
                            projects.
                        </div>
                    </div>
                </div>
                <div className="OurSolution__video-container">
                    <div className="OurSolution__video">
                        <iframe allowFullScreen="allowFullScreen"
                                src="https://www.youtube.com/embed/RVVtyapBmuo?ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=100"
                                width="100%" height="100%" allowTransparency="true" frameBorder="0">
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}

OurSolution.propTypes = {};
export default OurSolution;
