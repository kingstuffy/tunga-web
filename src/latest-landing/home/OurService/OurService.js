import React, { Component } from "react";
import "./OurService.scss";
import { CardBody, Col, Media, Row } from "reactstrap";
import ServiceCard from "./ServiceCard/ServiceCard";
import Service1 from "../../assets/img/service/service1.png";
import Service2 from "../../assets/img/service/service2.png";
import Service3 from "../../assets/img/service/service3.png";
import Service4 from "../../assets/img/service/service4.png";
import Icon from "../../shared/core/Icon";
import { paging } from "../../Utils/Utils";
import PaginateArrow from "../../shared/PaginateArrow/PaginateArrow";
import UseCase from "./UseCase/UseCase";

class OurService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: "Dedicated developers",
                    description: "Reinforce your team with remote developers - full time or part time; temporary or permanent",
                    imgUrl: Service1,
                    leadTime: "1 - 2 weeks",
                    price: "23 - 26 EUR per hour"
                },
                {
                    title: "Project outsourcing",
                    description: "We run the show for you from idea to launch - x.0 versions, beta’s, alpha’s, MVP’s, prototypes ",
                    imgUrl: Service2,
                    leadTime: "2 - 3 weeks",
                    price: "5,000 EUR (prototype) - 18,000 EUR (v1.0) "
                },
                {
                    title: "Scoping & design",
                    description: "Rough idea? We help you work out the details - Architecture, UI/UX design, Detailed project plan",
                    imgUrl: Service3,
                    leadTime: "1 - 2 weeks",
                    price: "1,000 - 3,000 EUR"
                },
                {
                    title: "Developers on-demand",
                    description: "Quick access to a developer for incidental needs - Product improvements, additional func",
                    imgUrl: Service4,
                    leadTime: "< 1 week",
                    price: "23 - 26 EUR per hour"
                },
                {
                    title: "Developers on-demand",
                    description: "Quick access to a developer for incidental needs - Product improvements, additional func",
                    imgUrl: Service4,
                    leadTime: "< 1 week",
                    price: "23 - 26 EUR per hour"
                },
                {
                    title: "Scoping & design",
                    description: "Rough idea? We help you work out the details - Architecture, UI/UX design, Detailed project plan",
                    imgUrl: Service3,
                    leadTime: "1 - 2 weeks",
                    price: "1,000 - 3,000 EUR"
                },
                {
                    title: "Dedicated developers",
                    description: "Reinforce your team with remote developers - full time or part time; temporary or permanent",
                    imgUrl: Service1,
                    leadTime: "1 - 2 weeks",
                    price: "23 - 26 EUR per hour"
                }
            ],
            dataPerPage: [],
            paginate: {
                perPage: 1,
                current: 1,
                transition: false
            }
        };
    }

    paging = (current) => this.setState({ dataPerPage: paging(current, this) });

    componentDidMount() {
        this.setState({ dataPerPage: paging(this.state.paginate.current, this) });
    }

    render() {
        return (
            <section className="OurService p-lg-5">
                <div className="ml-3 mr-3">
                    <Row>
                        <Col sm="12" lg="7" md="7" xl="7" xs="12" className="service-bg position-relative">
                            <div className="service-lead-time">
                                <Row>
                                    <Col>
                                        <Media>
                                            <Media left href="#" className="mr-1">
                                                <Icon name="speed-up" size="md"  className="text-white"/>
                                            </Media>
                                            <Media body className="pl-2 size-9 text-white">
                                                <Media heading className="size-9 text-white text-uppercase">
                                                    Lead Time
                                                </Media>
                                                1-2 weeks
                                            </Media>
                                        </Media>
                                    </Col>
                                    <Col>
                                        <Media>
                                            <Media left href="#"  className="mr-1">
                                                <Icon name="tag" size="md" className="text-white"/>
                                            </Media>
                                            <Media body className="pl-2 size-9 text-white">
                                                <Media heading className="size-9 text-white text-uppercase">
                                                    Price Indication
                                                </Media>
                                                23 - 26 EUR per hour <br/>
                                                23 - 26 EUR per hour <br/>
                                                23 - 26 EUR per hour <br/>
                                                23 - 26 EUR per hour <br/>
                                            </Media>
                                        </Media>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm="12" lg="5" md="5" xl="5" xs="12">
                            <section>
                                <div className="text-primary size-16 text-uppercase">
                                    Our Services
                                    <PaginateArrow This={this} float="float-right" color="text-primary"/>
                                </div>
                                <div className="card-min-height">
                                    {this.state.paginate.transition && <Row className="animated fadeInRight">
                                        {this.state.dataPerPage.map((service, i) =>
                                            <Col key={i} sm="12" lg="12" md="12" xs="12" xl="12" className="p-2 mt-2">
                                                <ServiceCard service={service}/>
                                            </Col>)}
                                    </Row>}
                                </div>
                            </section>
                            <section>
                                <p className="text-primary size-16 text-uppercase">
                                    Use Case
                                </p>
                                <UseCase />
                            </section>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

OurService.propTypes = {};

export default OurService;
