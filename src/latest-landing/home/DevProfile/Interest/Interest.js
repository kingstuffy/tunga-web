import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Interest.scss";

class Interest extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render() {
        return (
            <div className="Interest">
                <div className="Interest__title">
                    INTERESTS & INSPIRATION
                </div>
            </div>
        );
    }
}

Interest.propTypes = {};

export default Interest;
