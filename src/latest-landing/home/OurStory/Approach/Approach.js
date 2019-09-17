import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Approach.scss";
import ApproachLeft from "../../../assets/img/our-story/approach-left.png";
import ApproachRight from "../../../assets/img/our-story/approach-right.png";


class Approach extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Approach">
                <div className="Approach__section">
                    <div className="Approach__bg Approach__bg--top"
                         style={{ backgroundImage: `url(${ApproachRight})` }}/>
                    <div className="Approach__content">
                        <div className="text-primary OurStory__title mb-2">
                            APPROACH
                        </div>
                        <div className="text-blue OurStory__summary">
                            Our human-centered approach cuts both ways
                        </div>
                        <div>
                            Our way of working allows us to do software outsourcing better than traditional players in
                            the market. Users of outsourcing services are generally complaining about 2 things: quality
                            and communication. Tunga works with highly motivated and loyal developers who are eager to
                            learn and understand that meeting client expectations in terms of quality and communication
                            is key.
                        </div>
                    </div>
                </div>
                <div className="Approach__section">
                    <div className="Approach__bg"
                         style={{ backgroundImage: `url(${ApproachLeft})` }}/>
                    <div className="Approach__content">
                        <div>
                            Our platform is set-up to help the developers be successful by matching only verified
                            skills, by using best practice templates in project planning and specifying requirements,
                            and by requiring them to report daily on progress and quality so that any hiccup can be
                            dealt with early on. Building experience and client relations like this, our developers
                            eventually can take charge of their own careers and ultimately their lives. And that’s
                            exactly what we aim for.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Approach.propTypes = {};
export default Approach;
