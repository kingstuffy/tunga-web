import PropTypes from 'prop-types';
import React from 'react';


import Smiley1 from './icons/Smiley1';
import Smiley2 from './icons/Smiley2';
import Smiley3 from './icons/Smiley3';
import Smiley4 from './icons/Smiley4';
import Smiley5 from './icons/Smiley5';


const IconSvg = ({ rating, active }) => {
    switch (rating) {
        case 1:
            return <Smiley1 active={active}/>;
        case 2:
            return <Smiley2 active={active}/>;
        case 3:
            return <Smiley3 active={active}/>;
        case 4:
            return <Smiley4 active={active}/>;
        case 5:
            return <Smiley5 active={active}/>;
    }
};


export default class SurveyIcon extends React.Component {
    constructor(props) {
        super();
        this.state = {
            icons: [
                {
                    rating: 5,
                },
                {
                    rating: 4,
                },
                {
                    rating: 3,
                },
                {
                    rating: 2,
                },
                {
                    rating: 1,
                },
            ]
        };
        this.onIconClick = this.onIconClick.bind(this);
    }


    onIconClick(icon) {
        const icons = this.state.icons.map((stateIcon) => {
            const active = stateIcon === icon;
            return {
                ...stateIcon,
                active,
            };
        });

        this.setState({ icons });
        this.props.onRating({ rating: icon.rating });
    }


    render() {
        const { rating } = this.props;

        return (
            <div className="survey-icon">
                <ul className="survey-icon__list">
                    {
                        this.state.icons.map((icon, i) => (
                            <li
                                key={i}
                                className="survey-icon__item"
                            >
                                <a className={`survey-icon__btn survey-icon__btn--${icon.active || icon.rating === rating ? 'active' : ''}`}
                                   onClick={() => !rating && this.onIconClick(icon)}>
                                    <IconSvg rating={icon.rating}/>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
