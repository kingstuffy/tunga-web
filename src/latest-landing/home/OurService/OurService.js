import React, { Component } from "react";
import "./OurService.scss";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import ServiceCard from "./ServiceCard/ServiceCard";
import Service1 from "../../assets/img/service/service1.png";
import Service2 from "../../assets/img/service/service2.png";
import Service3 from "../../assets/img/service/service3.png";
import Service4 from "../../assets/img/service/service4.png";
import Icon from "../../shared/core/Icon";

class OurService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
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
            perPage: 4,
            current: 1,
            spliceStart: 0,
            spliceEnd: 4
        };
    }

    paging = (current) => {
        console.log({ current });
        this.setState({ current: current });
        const { services, perPage } = this.state;
        if (current > Math.ceil(services.length / perPage)) {
            this.setState({ current: current - 1 });
            return;
        }
        if (current <= 1) return this.setState({ spliceStart: 0, spliceEnd: perPage, current: 1 });
        this.setState({ spliceStart: (current - 1) * perPage, spliceEnd: current * perPage });
        console.log(this.state.spliceStart, this.state.spliceEnd);
    };

    render() {
        const services = this.state.services.slice(this.state.spliceStart, this.state.spliceEnd);
        return (
            <section className="OurService p-lg-5">
                <h4 className="text-primary text-uppercase">
                    Our Services
                    <p className="float-right">
                        <Icon onClick={() => this.paging(this.state.current + 1)} name="next" size="md"/>&nbsp;
                        <Icon onClick={() => this.paging(this.state.current - 1)} name="previous" size="md"/>
                        <button onClick={() => this.paging(this.state.current - 1)}>Previous</button>
                        <button onClick={() => this.paging(this.state.current + 1)}>Next</button>
                    </p>
                    <p className="clearfix"/>
                </h4>
                <Row className="m-auto">
                    {services.map((service, i) =>
                        <Col key={i} sm="12" lg="3" md="3" className="p-2 mt-2">
                            <ServiceCard service={service}/>
                        </Col>)}
                </Row>
            </section>
        );
    }
}

OurService.propTypes = {};

export default OurService;
