import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CaseStudies.scss";
import Case1 from "../../assets/img/case-study/case1.png";
import Case2 from "../../assets/img/case-study/case2.png";
import Icon1 from "../../assets/img/case-study/impulse.png";
import Icon2 from "../../assets/img/case-study/maker.png";
import User1 from "../../assets/img/user/user1.png";
import User2 from "../../assets/img/user/user2.png";
import { paging } from "../../Utils/Utils";
import { Col, Row } from "reactstrap";
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard";
import Icon from "../../shared/core/Icon";

class CaseStudies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: "Dedicated developers",
                    description: "Reinforce your team with remote developers - full time or part time; temporary or permanent",
                    imgUrl: Case1,
                    leadTime: "2 weeks",
                    price: "23 - 26 EUR per hour",
                    icon: Icon1,
                    tech: "Nodejs, Angular",
                    user: {
                        name: "Kazeem Olanipekun",
                        pic: User1,
                        position: "Project Manager",
                        company: "Impusle"
                    }
                },
                {
                    title: "Project outsourcing",
                    description: "We run the show for you from idea to launch - x.0 versions, beta’s, alpha’s, MVP’s, prototypes ",
                    imgUrl: Case2,
                    leadTime: "3 weeks",
                    price: "5,000 EUR (prototype) - 18,000 EUR (v1.0) ",
                    icon: Icon2,
                    tech: "Nodejs, Angular",
                    user: {
                        name: "Kazeem Olanipekun",
                        pic: User2,
                        position: "Project Manager",
                        company: "Impusle"
                    }
                },
                {
                    title: "Scoping & design",
                    description: "Rough idea? We help you work out the details - Architecture, UI/UX design, Detailed project plan",
                    imgUrl: Case1,
                    leadTime: "2 weeks",
                    price: "1,000 - 3,000 EUR",
                    icon: Icon2,
                    tech: "Nodejs, Angular",
                    user: {
                        name: "Kazeem Olanipekun",
                        pic: User2,
                        position: "Project Owner",
                        company: "Impusle"
                    }
                },
                {
                    title: "Developers on-demand",
                    description: "Quick access to a developer for incidental needs - Product improvements, additional func",
                    imgUrl: Case2,
                    leadTime: "1 week",
                    price: "23 - 26 EUR per hour",
                    icon: Icon1,
                    tech: "Nodejs, Angular",
                    user: {
                        name: "Kazeem Olanipekun",
                        pic: User1,
                        position: "Project Manager",
                        company: "Impusle"
                    }
                },
                {
                    title: "Developers on-demand",
                    description: "Quick access to a developer for incidental needs - Product improvements, additional func",
                    imgUrl: Case2,
                    leadTime: "1 week",
                    price: "23 - 26 EUR per hour",
                    icon: Icon1,
                    tech: "Nodejs, Angular",
                    user: {
                        name: "Kazeem Olanipekun",
                        pic: User2,
                        position: "Project Manager",
                        company: "Impusle"
                    }
                },
                {
                    title: "Scoping & design",
                    description: "Rough idea? We help you work out the details - Architecture, UI/UX design, Detailed project plan",
                    imgUrl: Case1,
                    leadTime: "2 weeks",
                    price: "1,000 - 3,000 EUR",
                    icon: Icon2,
                    tech: "Nodejs, Angular",
                    user: {
                        name: "Kazeem Olanipekun",
                        pic: User1,
                        position: "Project Manager",
                        company: "Impusle"
                    }
                },
                {
                    title: "Dedicated developers",
                    description: "Reinforce your team with remote developers - full time or part time; temporary or permanent",
                    imgUrl: Case1,
                    leadTime: "2 weeks",
                    price: "23 - 26 EUR per hour",
                    icon: Icon1,
                    tech: "Nodejs, Angular",
                    user: {
                        name: "Kazeem Olanipekun",
                        pic: User2,
                        position: "Project Manager",
                        company: "Impusle"
                    }
                }
            ],
            dataPerPage: [],
            paginate: {
                perPage: 2,
                current: 1
            }
        };
    }

    paging = (current) => this.setState({ dataPerPage: paging(current, this) });

    componentDidMount() {
        this.setState({ dataPerPage: paging(this.state.paginate.current, this) });
    }

    render() {
        return (
            <section className="CaseStudies p-lg-5">
                <div className="ml-4 mr-4">
                    <h4 className="case-title text-primary mb-3">Case Studies</h4>
                    <p className="case-subtitle text-blue w-75 font-weight-bold">Tunga has completed work for over 100
                        clients in 12 countries</p>
                    <p className="case-summary size-16 w-50">Our clients come from all kinds of industries and require a
                        variety of technologies, but usually have one thing in common: they want to go live ASAP!</p>
                    <p className="float-right">
                        <Icon onClick={() => this.paging(this.state.paginate.current - 1)} name="previous"
                              className="text-primary" size="md"/>&nbsp;
                        <Icon onClick={() => this.paging(this.state.paginate.current + 1)} name="next"
                              className="text-primary" size="md"/>
                        <button onClick={() => this.paging(this.state.paginate.current - 1)}>Previous</button>
                        <button onClick={() => this.paging(this.state.paginate.current + 1)}>Next</button>
                    </p>
                    <p className="clearfix"/>

                    <div className="card-min-height">
                        {this.state.paginate.transition && <Row className="animated fadeInRight">
                        {this.state.dataPerPage.map((data, i) =>
                            <Col key={i} sm="12" lg="6" md="6" className="p-4 mt-2">
                                <CaseStudyCard caseStudy={data}/>
                            </Col>)}
                    </Row>}
                    </div>
                </div>
            </section>
        );
    }
}

CaseStudies.propTypes = {};

export default CaseStudies;
