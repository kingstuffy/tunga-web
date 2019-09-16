import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ImageBox.scss";


class ImageBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { img, position, children } = this.props;

        return (
            <div className="ImageBox">
                <div className="ImageBox__img"
                     style={{ backgroundImage: `url(${img})` }}>
                </div>
                <div className="ImageBox__content"
                     style={{ [position]: 0 }}>
                    {children}
                </div>
            </div>
        );
    }
}

ImageBox.propTypes = {};

export default ImageBox;
