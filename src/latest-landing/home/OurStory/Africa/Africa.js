import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Africa.scss";
import Button from "../../../shared/core/Button";
import AfricaBg from "../../../assets/img/our-story/africa.png";


class Africa extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Africa">
                <div className="text-center Africa__header">
                    <div className="text-primary OurStory__title mb-2">
                        WHY AFRICA
                    </div>
                    <div className="text-blue OurStory__summary mb-2">
                        Tackling huge youth unemployment
                    </div>
                </div>
                <div className="Africa__bg"
                     style={{ backgroundImage: `url(${AfricaBg})` }}/>
                <div className="Africa__content">
                    <div className="Africa__item Africa__item--left">
                        Tunga’s clients come from all over the world, but our developers exclusively come from
                        Africa. At this moment mostly from Uganda, Nigeria and Egypt. We started operations in
                        Uganda and that’s also where our own core team is based.
                    </div>
                    <div className="Africa__item Africa__item--right">
                        Partly because of the infrastructure, availability of developers and the English language.
                        But also because we can make a huge impact there.
                        <div>
                            <span className="text-primary font-weight-bolder">According to the ADB</span> youth unemployment in
                            Uganda is as high as 83%. With 78% of the population being under 30 this is a huge
                            challenge.
                        </div>
                    </div>
                    <div className="clearfix">

                    </div>
                </div>
            </div>
        );
    }
}

Africa.propTypes = {};
export default Africa;
