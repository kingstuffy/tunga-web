import PropTypes from 'prop-types';
import React from 'react';


import Smiley_1 from '../../../../assets/images/icons/1_5_smiley.svg';
import Smiley_2 from '../../../../assets/images/icons/2_5_smiley.svg';
import Smiley_3 from '../../../../assets/images/icons/3_5_smiley.svg';
import Smiley_4 from '../../../../assets/images/icons/4_5_smiley.svg';
import Smiley_5 from '../../../../assets/images/icons/5_5_smiley.svg';


export default class SurveyIcon extends React.Component {
    constructor(props) {
        super();
        this.state = {
            icons: [
                {
                    rating: 5,
                    img: Smiley_5,
                },
                {
                    rating: 4,
                    img: Smiley_4,
                },
                {
                    rating: 3,
                    img: Smiley_3,
                },
                {
                    rating: 2,
                    img: Smiley_2,
                },
                {
                    rating: 1,
                    img: Smiley_1,
                },
            ]
        };
    }


    render() {
        return (
            <div className="survey-icon">
                <ul className="survey-icon__list">
                    {
                        this.state.icons.map((icon, i) => (
                            <li
                                key={i}
                                className="survey-icon__item"
                            >
                                <a className="survey-icon__btn">
                                    <img className="survey-icon__icon" src={icon.img}/>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
