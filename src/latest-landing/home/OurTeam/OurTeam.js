import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import queryString from "query-string";

import "./OurTeam.scss";
import CoreTeam from "./CoreTeam/CoreTeam";
import TalentPool from "./TalentPool/TalentPool";
import ScheduleCall from "../ScheduleCall/ScheduleCall";
import Nav from "../../layout/Nav/Nav";
import TeamImg from "../../assets/img/our-team/user.png";
import Bart from "../../assets/img/our-team/team/Bart.jpg";
import David from "../../assets/img/our-team/team/David.jpg";
import Elijah from "../../assets/img/our-team/team/Elijah.jpg";
import Enock from "../../assets/img/our-team/team/Enock.jpg";
import Ernesto from "../../assets/img/our-team/team/Ernesto.jpg";
import Gerald from "../../assets/img/our-team/team/Gerald.jpg";
import Lawrence from "../../assets/img/our-team/team/Lawrence.jpg";
import Reinier from "../../assets/img/our-team/team/Reinier.jpg";
import Remo from "../../assets/img/our-team/team/Remo.jpg";
import Ronald from "../../assets/img/our-team/team/Ronald.jpg";
import Simon from "../../assets/img/our-team/team/Simon.jpg";
import Routing from "../../constants/Routing";
import SideNav from "../../../components/sidenav";
import Footer from "../../layout/Footer/Footer";

const pages = [
    {
        hash: "OurTeam",
        title: "Our Team",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64"
    },
    {
        hash: "TalentPool",
        title: "Talent Pool",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64"
    },
    {
        hash: "ScheduleCall",
        title: "Schedule Call",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff"
    },
    {
        hash: "Footer",
        title: "Footer",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff"
    },
];

class OurTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [
                {
                    name: "Ernesto Spruyt",
                    designation: "CEO",
                    imgUrl: Ernesto,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/ernestospruyt",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:ernesto@tunga.io",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Bart Leijssenaar",
                    designation: "CGO",
                    imgUrl: Bart,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/bart-leijssenaar-6b468375",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:bart@tunga.io",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Remo Samuel Paul",
                    designation: "Backend specialist",
                    imgUrl: Remo,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/remo-samuel-paul-58219a4a",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:remo@tunga.io",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Simon Capanna",
                    designation: "Business developer Africa",
                    imgUrl: Simon,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/simon-walter-capanna-19b56994",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:simon@tunga.io",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "David Semakula",
                    designation: "CTO",
                    imgUrl: David,
                    social: [
                        {
                            url: "mailto:david@tunga.io",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Elijah Atuhaire",
                    designation: "Project manager",
                    imgUrl: Elijah,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/atuhairelijah",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:elijah@tunga.io",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Ronald Nyakahuma",
                    designation: "Project manager",
                    imgUrl: Ronald,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/rnyakahuma",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:ronald@tunga.io",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Reinier van Scherpenzeel",
                    designation: "COO",
                    imgUrl: Reinier,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/reiniervanscherpenzeel",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:reinier@tunga.io",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Enock Mudde",
                    designation: "Architect specialist",
                    imgUrl: Enock,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/enock-mudde-b38a086b",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:enock@tunga.io",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Lawrence Onen",
                    designation: "Project manager",
                    imgUrl: Lawrence,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/lawrenceonenlakuma",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:lawrence@tunga.io",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Gerald Odur",
                    designation: "Project manager",
                    imgUrl: Gerald,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/gerald-odur-10b95116",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                    ]
                },
            ],
        };
    }


    goToPage = (pageNumber) => {
        return this.reactPageScroller.goToPage(pageNumber)
    }

    pageOnChange = (pageNumber) => {
        console.log("current page", pageNumber)
    }

    render() {
        const { location } = this.props;
        const query = queryString.parse(location.search).query;

        return (
            <section className="OurTeam">
                <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
                    <div id="OurTeam" className="OurTeam__core-team">
                        <div className="OurTeam__nav">
                            <Nav/>
                        </div>
                        <CoreTeam team={this.state.team}/>
                    </div>
                    <div id="TalentPool" className="OurTeam__talent-pool">
                        <TalentPool query={query} talents={this.state.talents}/>
                    </div>
                    <div className="OurTeam__schedule-call">
                        <ScheduleCall/>
                    </div>
                    <Footer/>
                </ReactPageScroller>
                <SideNav pages={pages} goToPage={this.goToPage}/>
            </section>
        );
    }
}

OurTeam.propTypes = {};

export default OurTeam;
