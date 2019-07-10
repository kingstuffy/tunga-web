import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TheProblem.scss";
import Button from "../../../shared/core/Button";
import Icon from "../../../shared/core/Icon";
import ImageBox from "../ImageBox/ImageBox";
import ProblemImg from "../../../assets/img/our-story/the-problem.png";


class TheProblem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TheProblem">
                <ImageBox
                    img={ProblemImg}
                    position="left"
                >
                    <div className="TheProblem__content">
                        <div className="text-primary size-14 font-weight-bold mb-2">
                            THE PROBLEM
                        </div>
                        <div className="text-blue size-18 font-weight-bold mb-2">
                            African youths don’t have the same opportunities
                        </div>
                        <div className="mb-4">
                            But the reality is that in many parts of the world, the opportunity you have to determine
                            your own destiny is limited by circumstances. By factors outside of your own control. In our
                            search for software developers, we ended up on the African continent.
                        </div>
                        <div className="mb-4">
                            Through the <span className="text-primary font-weight-normal">WeAreBits school
                            network</span> we
                            met many young Africans that are as brilliant and skilled as their
                            counterparts from other parts of the world. But who have limited access to interesting,
                            worthwhile and well-paying work.
                        </div>
                    </div>
                </ImageBox>
            </div>
        );
    }
}

TheProblem.propTypes = {};
export default TheProblem;
