import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Ratings.scss";

class Ratings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ratings: [
                {
                    rating: "4.5/5",
                    title: "Peer review"
                },
                {
                    rating: "4.7/5",
                    title: "Client review"
                },
                {
                    rating: "4yrs",
                    title: "Experience"
                }
            ]
        };
    }


    render() {
        return (
            <div className="Ratings">
                <ul className="Ratings__list">
                    {
                        this.state.ratings.map((rating, key) => (
                            <li className="Ratings__item" key={key}>
                                <div className="Ratings__rating">
                                    {rating.rating}
                                </div>
                                <div className="Ratings__title">
                                    {rating.title}
                                </div>
                            </li>
                        ))
                    }
                    <li className="clearfix"></li>
                </ul>
            </div>
        );
    }
}

Ratings.propTypes = {};

export default Ratings;
