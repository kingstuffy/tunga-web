import React, { Component } from "react";
import PropTypes from "prop-types";
import { groupBy, map } from "lodash";
import "./Experience.scss";
import TungaIcon from "../../../assets/img/common/icons/icon-tunga.png";
import WorkIcon from "../../../assets/img/common/icons/icon-work-experience.png";
import Carousel from "../../../shared/Carousel/Carousel";


const Header = ({ title, icon }) => {
    return (
        <div className="Experience__header">
            <img src={icon} className="Experience__header-icon"/>
            <div className="Experience__header-title">{title}</div>
        </div>
    );
};

const TungaProject = (project) => {
    const { title, description, end_date, start_date, closed } = project;
    return (
        <div className="Experience__project">
            <div className="Experience__title">
                {title}
            </div>
            <div className="Experience__date">
                {start_date} - {closed ? end_date : 'Ongoing'}
            </div>
            <div className="Experience__description">
                {description}
            </div>
        </div>
    );
};

const WorkProject = (work) => {
    return (
        <div className="Experience__project">
            <div className="Experience__title">
                {work.company}
            </div>
            <div className="Experience__date">
                {work.start_month_display} {work.start_year} - {work.end_month_display} {work.end_year}
            </div>
            <div className="Experience__description">
                {work.details}
            </div>
        </div>
    );
};


const ExperienceItem = ({ experience }) => {
    if (experience.header) {
        return <Header {...experience}/>;
    }

    if (experience.company) {
        return <WorkProject {...experience}/>;
    }

    return <TungaProject {...experience}/>;
};


class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            talentId: false,
            experiences: [
                {
                    project: "Company/Project",
                    price: "20XX - 20XX",
                    position: "Position",
                    description: "Job description goes here. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Checkmate... Yeah, but John, if The Pirates of the Caribbean. "
                },
                {
                    project: "Company/Project",
                    price: "20XX - 20XX",
                    position: "Position",
                    description: "Job description goes here. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Checkmate... Yeah, but John, if The Pirates of the Caribbean. "
                },
                {
                    project: "Company/Project",
                    price: "20XX - 20XX",
                    position: "Position",
                    description: "Job description goes here. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Checkmate... Yeah, but John, if The Pirates of the Caribbean. "
                },
            ]
        };
    }


    componentDidUpdate() {
        if (!this.state.talentId && this.props.talent.id) {
            this.setState({ talentId: this.props.talent.id });
            this.props.onPageLoad && this.props.onPageLoad();
        }
    }


    getDataPerPage() {
        return [
            {
                breakpoint: 992,
                perPage: 1,
                width: 100
            },
            {
                breakpoint: 768000,
                perPage: 3,
                width: 33.33,
            },
        ];
    }


    render() {
        const { talent } = this.props;

        let items = [];
        if (talent.projects && talent.projects.length) {
            items.push({
                header: true,
                title: 'Tunga projects',
                icon: TungaIcon,
            });
            items = items.concat([], talent.projects);
        }

        if (talent.work && talent.work.length) {
            items.push({
                header: true,
                title: 'Work experience',
                icon: WorkIcon,
            });
            items = items.concat([], talent.work);
        }

        const keyedItems = items.map((item, index) => ({ ...item, index }))


        const groupedRows = groupBy(keyedItems, (({ index }) => {
            return Math.floor(index / 4);
        }));
        const rows = map(groupedRows, (row) => row);
        const pagination = {
            total: rows.length,
            perPage: this.getDataPerPage()
        };


        return (
            <div className="Experience">
                <div className="Experience__heading">
                    EXPERIENCE
                </div>
                <div className="Experience__container">
                    <Carousel
                        pagination={pagination}
                        float="float-right"
                        color="text-primary"
                    >
                        <ul className="Experience__rows">
                            {
                                rows.map((row, key) => (
                                    <li className={`Experience__row Experience__row--${key}`} key={key}>
                                        <div
                                            className={`Experience__item-container Experience__item-container--${key}`}>
                                            <ul className="Experience__list">
                                                {
                                                    row.map((experience, j) => (
                                                        <li className="Experience__item" key={j}>
                                                            <ExperienceItem experience={experience}/>
                                                        </li>
                                                    ))
                                                }
                                                <li className="clearfix"></li>
                                            </ul>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </Carousel>
                </div>
            </div>
        );
    }
}

Experience.propTypes = {};

export default Experience;
