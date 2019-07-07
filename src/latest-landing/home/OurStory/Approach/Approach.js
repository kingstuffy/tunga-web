import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Approach.scss";
import Button from "../../../shared/core/Button";
import ApproachLeft from "../../../assets/img/our-story/approach-left.png";
import ApproachRight from "../../../assets/img/our-story/approach-right.png";


class Approach extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Approach">
                <div className="row" style={{ height: "50vh", zIndex: 1, overflowY: "hidden"}}>
                    <div className="col-md-6 col-sm-12 p-0 order-md-2">
                        <div className="Approach__bg"
                             style={{ backgroundImage: `url(${ApproachRight})` }}/>
                    </div>
                    <div className="col-md-6 col-sm-12 Approach__section order-md-1">
                        <div className="text-primary size-14 font-weight-normal mb-2">
                            WHY AFRICA
                        </div>
                        <div className="text-blue size-18 font-weight-normal">
                            Tackling huge youth unemployment
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
                <div className="row" style={{height: "50vh", zIndex: 1, overflowY: "hidden"}}>
                    <div className="col-md-6 col-sm-12 p-0">
                        <div className="Approach__bg"
                             style={{ backgroundImage: `url(${ApproachLeft})` }}/>
                    </div>
                    <div className="col-md-6 col-sm-12 Approach__section">
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
