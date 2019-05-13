import React, { Component } from "react";
import "./_OurService.scss";
import { Col, Row } from "reactstrap";
import _ServiceCard from "./_ServiceCard/_ServiceCard";
import Service1 from "../../assets/img/service/service1.png";
import Service2 from "../../assets/img/service/service2.png";
import Service3 from "../../assets/img/service/service3.png";
import Service4 from "../../assets/img/service/service4.png";
import Icon from "../../shared/core/Icon";
import { paging } from "../../Utils/Utils";
import PaginateArrow from "../../shared/PaginateArrow/PaginateArrow";

class _OurService extends Component {
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
                perPage: 4,
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
                    <h4 className="text-primary text-uppercase">
                        Our Services
                        <PaginateArrow This={this}  float="float-right" color="text-primary" />
                    </h4>
                    <div className="card-min-height">
                        {this.state.paginate.transition && <Row className="animated fadeInRight">
                            {this.state.dataPerPage.map((service, i) =>
                                <Col key={i} sm="12" lg="3" md="3" xs="12" xl="3" className="p-2 mt-2">
                                    <_ServiceCard service={service}/>
                                </Col>)}
                        </Row>}
                    </div>
                </div>
            </section>
        );
    }
}

_OurService.propTypes = {};

export default _OurService;
