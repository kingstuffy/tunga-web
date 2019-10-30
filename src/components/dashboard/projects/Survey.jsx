import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Row, Col } from 'reactstrap';

import IconButton from '../../core/IconButton';
import Icon from '../../core/Icon';
import MilestoneForm from "./modals/MilestoneForm";
import PlanningForm from "./modals/PlanningForm";
import ProjectDateForm from "./modals/ProjectDateForm";

import { openModal } from '../../core/utils/modals';
import { isAdmin, isAdminOrPMOrClient, isDevOrClient } from '../../utils/auth';

import Smiley_1 from '../../../assets/images/icons/1_5_smiley.svg';
import Smiley_2 from '../../../assets/images/icons/2_5_smiley.svg';
import Smiley_3 from '../../../assets/images/icons/3_5_smiley.svg';
import Smiley_4 from '../../../assets/images/icons/4_5_smiley.svg';
import Smiley_5 from '../../../assets/images/icons/5_5_smiley.svg';
import CaseStudyCard from "../../../latest-landing/home/CaseStudies/CaseStudyCard/CaseStudyCard";
import Button from "../../core/Button";


export default class Survey extends React.Component {
    static propTypes = {
        project: PropTypes.object,
        ProjectActions: PropTypes.object,
        isSaving: PropTypes.object,
        isSaved: PropTypes.object,
    };


    constructor(props) {
        super();
        this.state = {
            icons: [
                {
                    rating: 1,
                    img: Smiley_1,
                },
                {
                    rating: 2,
                    img: Smiley_2,
                },
                {
                    rating: 3,
                    img: Smiley_3,
                },
                {
                    rating: 4,
                    img: Smiley_4,
                },
                {
                    rating: 5,
                    img: Smiley_5,
                },
            ]
        }
    }


    render() {
        const { project } = this.props;

        return (
            <div className="survey">
                <div className="survey__header">
                    <div>
                        Client survey
                    </div>
                    <div>
                        Due date 14th, October 2019
                    </div>
                </div>
                <div className="survey__cta">
                    How would you rate the collaboration with Tunga for [Project_name]?
                </div>
                <ul className="survey__icon-list">
                    {
                        this.state.icons.map((icon, i) => (
                            <li
                                key={i}
                                className="survey__icon-item"
                            >
                                <a className="survey__icon-btn">
                                    <img className="survey__icon" src={icon.img}/>
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="survey__btn-wrapper">
                    <Button>
                        Submit Report
                    </Button>
                </div>
            </div>
        );
    }
}
