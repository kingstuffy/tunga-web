import React, { Component } from "react";
import "./OurTeam.scss";
import CoreTeam from "./CoreTeam/CoreTeam";
import TalentPool from "./TalentPool/TalentPool";
import ScheduleCall from "../ScheduleCall/ScheduleCall";
import Nav from "../../layout/Nav/Nav";
import TeamImg from "../../assets/img/our-team/user.png";
import Routing from "../../constants/Routing";

class OurTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
                {
                    name: "Name Middle Surname",
                    designation: "Designation",
                    imgUrl: TeamImg,
                    social: [
                        {
                            url: "#",
                            network: "linkedIn",
                            icon: "linkedin"
                        },
                        {
                            url: "#",
                            network: "email",
                            icon: "envelope"
                        }
                    ]
                },
            ],
            talents: [
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
                {
                    name: "Name Middle Surname",
                    location: "Kampala, Nigeria",
                    imgUrl: TeamImg,
                    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
                    url: Routing.devProfile.path,
                },
            ]
        };
    }

    render() {
        return (
            <section className="OurTeam">
                <Nav/>
                <div className="OurTeam__body p-3 pl-5 pr-5">
                    <div className="OurTeam__core-team">
                        <CoreTeam team={this.state.team}/>
                    </div>
                    <div className="OurTeam__talent-pool">
                        <TalentPool talents={this.state.talents}/>
                    </div>
                </div>
                <ScheduleCall/>
            </section>
        );
    }
}

OurTeam.propTypes = {};

export default OurTeam;
