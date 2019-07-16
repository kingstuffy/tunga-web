import React, { Component } from "react";
import "./CaseStudies.scss";
import Case1Img from "../../assets/img/case-study/Casestudy1.jpg";
import Case2Img from "../../assets/img/case-study/Casestudy2.jpg";
import Case3Img from "../../assets/img/case-study/Casestudy3.jpg";
import Case4Img from "../../assets/img/case-study/Casestudy4.jpg";
import Icon1 from "../../assets/img/case-study/impulse.png";
import Icon2 from "../../assets/img/case-study/tree.png";
import Icon3 from "../../assets/img/case-study/cuurios-logo.png";
import Icon4 from "../../assets/img/case-study/Provolve.png";
import Icon5 from "../../assets/img/case-study/CZW.png";
import Icon6 from "../../assets/img/case-study/Logo_niluk.png";
import User1 from "../../assets/img/user/user1.png";
import User2 from "../../assets/img/case-study/Ineke.png";
import User3 from "../../assets/img/case-study/Leen.png";
import User4 from "../../assets/img/case-study/Dereck.png";
import User5 from "../../assets/img/case-study/Kasper.png";
import User6 from "../../assets/img/case-study/Elena.png";
import { paging } from "../../Utils/Utils";
import { Col, Row } from "reactstrap";
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard";
import Carousel from "../../shared/Carousel/Carousel";

class CaseStudies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: "Project outsourcing",
                    description:
                        "As a startup with a technical proposition but not being developers ourselves, we needed a reliable partner to develop our product with. Tunga has consulted us to figure out the best technical approach and developed our product in clear sprints ever since ",
                    imgUrl: Case1Img,
                    leadTime: "1 week",
                    price: "Ongoing development",
                    icon: Icon1,
                    tech: "PHP, Vue.js",
                    user: {
                        name: "Annemiek Pronk",
                        pic: User1,
                        position: "Product owner",
                        company: "Impusle"
                    }
                },
                {
                    title: "Project outsourcing",
                    description:
                        "We've been developing several mobile applications with the guys from Tunga. What I like about working with them is that they are communicating clearly, and are very knowledgeable and proactive. Via the Tunga platform and its daily progress report, I am always in control over the progress of the projects that are running for our company. The Tunga people have a great customer mindset: they make things work for no matter what happens or changes.",
                    imgUrl: Case2Img,
                    leadTime: "2 weeks",
                    price: "3 - 4 months ",
                    icon: Icon2,
                    tech: "Android",
                    user: {
                        name: "Ineke Aquarius",
                        pic: User2,
                        position: "Managing director",
                        company: "Mango Tree"
                    }
                },
                {
                    title: "Dedicated developer",
                    description:
                        "Tunga was able to provide us very good candidates at short notice. Within two weeks from the initial contact Michael joined the team as a dedicated front-end developer. This was exactly the kickstart we'd hoped for! After a few months, we expanded the team with another dedicated developer.",
                    imgUrl: Case3Img,
                    leadTime: "2 weeks",
                    price: "3 - 4 months",
                    icon: Icon3,
                    tech: "Angular, Java, Spring",
                    user: {
                        name: "Leen de Graaff",
                        pic: User3,
                        position: "Co-Founder Cuurios",
                        company: "Cuurios"
                    }
                },
                {
                    title: "Dedicated developer",
                    description:
                        "We didn't have any experience of outsourcing work to another country. From second hand experiences I can say things can go terribly wrong. But we took the plunge as an experiment and were quickly delighted by their way of working. Communication is top notch either in writing (we use Slack as a main communication channel) but also when talking on audio or in a video session. We initially started with Tunga on just one walled off project for expansion of our product. We wanted to see if this was feasible and doable. Luckily it was! Tunga managed this perfectly.",
                    imgUrl: Case4Img,
                    leadTime: "2 weeks",
                    price: "Ongoing development",
                    icon: Icon4,
                    tech: ".NET",
                    user: {
                        name: "Dereck Breuning",
                        pic: User4,
                        position: " Co-Founder Provolve IT",
                        company: "Provolve IT"
                    }
                },
                {
                    title: "Project outsourcing",
                    description:
                        "Tunga is a great development partner. After finishing a first app, we are currently developing a second mobile application for our elderly care company with a team of Tunga developers. I am not a techy person myself, so it is great that Tunga offers project managers that take care of planning, scoping and managing the team. Having a single point of contact at Tunga that effectively keeps me in the loop, gives me the freedom to work on the growth of my company.",
                    imgUrl: Case1Img,
                    leadTime: "2 weeks",
                    price: "5 months",
                    icon: Icon5,
                    tech: "React native",
                    user: {
                        name: "Kasper Spruyt",
                        pic: User5,
                        position: "Founder CWZ",
                        company: "CWZ"
                    }
                },
                {
                    title: "Project outsourcing",
                    description:
                        "Tunga's African teal talents have the technical knowledge and experience and they immediately said they loved working Niluk because of our social goals. The collaboration is very professional, with respect and appreciation from both sides. If deadlines are not met, the team indicated this in time, which is very nice. I trust them 100% and can recommend Tunga to anyone.",
                    imgUrl: Case3Img,
                    leadTime: "1 week",
                    price: "5 months",
                    icon: Icon6,
                    tech: "React Native",
                    user: {
                        name: "Elena Köstler",
                        pic: User6,
                        position: "Founder",
                        company: "Niluk"
                    }
                }
            ],
        };

        this.state.currentStudy = this.state.data[0];
        this.onPageChange = this.onPageChange.bind(this);
    }


    getDataPerPage() {
        return [
            {
                breakpoint: 768000,
                perPage: 1,
            },
        ];
    }


    onPageChange(current) {
        const currentStudy = this.state.data[current - 1];
        this.setState({ currentStudy });
    }


    render() {
        const pagination = {
            total: this.state.data.length,
            perPage: this.getDataPerPage()
        };

        return (
            <section id="CaseStudies" className="CaseStudies"
                     style={{ backgroundImage: `url(${this.state.currentStudy.imgUrl})` }}>
                {/*<div className="position-absolute" style={{ bottom: 0 }}>*/}
                <div className="col-11 col-sm-11 col-lg-6 col-md-6 pl-0 bg-transparent case-top pb-5">
                    <div className="case-content bg-white">
                        <div className="CaseStudies__body">
                            <h4 className="case-title text-primary text-uppercase size-16 mb-1">
                                Case Studies
                            </h4>
                            <p className="case-subtitle text-blue font-weight-bold">
                                Tunga has completed work for over 100 clients in 12
                                countries
                            </p>
                            <p className="case-summary size-16 w-75 mb-2">
                                Our clients come from all kinds of industries and
                                require a variety of technologies, but usually have
                                one thing in common: they want to go live ASAP!
                            </p>
                            <Carousel
                                pagination={pagination}
                                onPageChange={this.onPageChange}
                                float="float-right k"
                                color="text-primary"
                            >
                                <div className="card-min-height pb-3px">
                                    <ul className="CaseStudies__list mt-2">
                                        {this.state.data.map((data, i) => (
                                            <li
                                                key={i}
                                                className="CaseStudies__item"
                                            >
                                                <CaseStudyCard caseStudy={data}/>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                {/*</div>*/}
            </section>
        );
    }
}

CaseStudies.propTypes = {};

export default CaseStudies;
