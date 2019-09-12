import React, { Component } from "react";
import ReactDOM from 'react-dom';
import qs from "qs";
import PageScroller from "../../../components/pageScroller";

import "./OurTeam.scss";
import CoreTeam from "./CoreTeam/CoreTeam";
import TalentPool from "./TalentPool/TalentPool";
import ScheduleCall from "../ScheduleCall/ScheduleCall";
import Nav from "../../layout/Nav/Nav";
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
import Iryn from "../../assets/img/our-team/team/Iryn.jpg";
import Viola from "../../assets/img/our-team/team/Viola.jpg";
import Prossy from "../../assets/img/our-team/team/Prossy.jpg";
import Joel from "../../assets/img/our-team/team/Joel";

import Footer from "../../layout/Footer/Footer";
import PageScroll from "../../shared/PageScroll/PageScroll";

const pages = [
    {
        hash: "OurTeam",
        title: "Our Team",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64",
        theme: "light",
    },
    {
        hash: "TalentPool",
        title: "Talent Pool",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64",
        theme: "light",
    },
    {
        hash: "ScheduleCall",
        title: "Schedule Call",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff",
        theme: "dark",
    },
    {
        hash: "Contact",
        title: "Contact",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff",
        theme: "dark",
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
                    designation: "Backend architect",
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
                    designation: "Solutions architect",
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
                {
                    name: "Viola Nuwaha",
                    designation: "Project manager",
                    imgUrl: Viola,
                    social: [
                        {
                            url: "https://linkedin.com/in/viola-nuwaha",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:viola@tunga.io",
                            network: "email",
                            icon: "envelope"
                        },
                    ]
                },
                {
                    name: "Prossy Mugeni",
                    designation: "Intern, Frontend Developer",
                    imgUrl: Prossy,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/mugeni-prossy-145843187",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:mugeniprossy53@gmail.com",
                            network: "email",
                            icon: "envelope"
                        },
                    ]
                },
                {
                    name: "Iryn Mbabali",
                    designation: "Intern, Backend Developer",
                    imgUrl: Iryn,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/mbabali-iryn-206177177",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:mbabaliiryn@gmail.com",
                            network: "email",
                            icon: "envelope"
                        },
                    ]
                },
                {
                    name: "Joel Katuula",
                    designation: "Frontend architect",
                    imgUrl: Joel,
                    social: [
                        {
                            url: "https://www.linkedin.com/in/gerald-odur-10b95116",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "mailto:katuula-joel-456764116",
                            network: "email",
                            icon: "envelope"
                        },
                    ]
                },
            ],
        };
    }

    render() {
        const { location } = this.props;
        // replace with another lib;; build issues with query-string
        const urlQuery = location.search ? location.search.replace('?', '') : (location.hash.split('?').length > 1 ? location.hash.split('?')[1] : '');
        const { query } = qs.parse(urlQuery);

        return (
            <section className="OurTeam">
                <PageScroll pages={pages}>
                    <div id="OurTeam" className="OurTeam__core-team">
                        <div className="OurTeam__nav">
                            <Nav onNavToggle={this.onNavToggle}/>
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
                </PageScroll>
            </section>
        );
    }
}

OurTeam.propTypes = {};

export default OurTeam;
