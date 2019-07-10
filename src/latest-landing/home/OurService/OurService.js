import React, { Component } from "react";
import "./OurService.scss";
import { CardBody, Col, Media, Row } from "reactstrap";
import ServiceCard from "./ServiceCard/ServiceCard";
import Service1 from "../../assets/img/service/service1.png";
import Service2 from "../../assets/img/service/service2.png";
import Service3 from "../../assets/img/service/service3.png";
import Service4 from "../../assets/img/service/service4.png";
import case1 from "../../assets/img/service/service1.png";
import case2 from "../../assets/img/service/service2.png";
import Icon from "../../shared/core/Icon";
import { paging } from "../../Utils/Utils";
import PaginateArrow from "../../shared/PaginateArrow/PaginateArrow";
import ServiceDetail from "./ServiceDetail/ServiceDetail";

class OurService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: "Dedicated developers",
                    description:
                        "Reinforce your team with remote developers - full time or part time; temporary or permanent.",
                    longDescription: `
                        Reinforce your team with remote developers - full time or part time; temporary or permanent.
                        Reinforce your team with remote developers - full time or part time; temporary or permanent.
                        Reinforce your team with remote developers - full time or part time; temporary or permanent.
                    `,
                    imgUrl: Service1,
                    leadTime: "1 - 2 weeks",
                    price: "23 - 26 EUR per hour",
                    useCases: [
                        {
                            title: "This is where case one title goes",
                            description: "This is where case two title goes",
                            imgUrl: case1
                        },
                        {
                            title: "This is where case two title goes",
                            description: "This is where case two title goes",
                            imgUrl: case2
                        }
                    ]
                },
                {
                    title: "Project outsourcing",
                    description:
                        "We run the show for you from idea to launch - x.0 versions, beta’s, alpha’s, MVP’s, prototypes ",
                    imgUrl: Service2,
                    leadTime: "2 - 3 weeks",
                    price: "5,000 EUR (prototype) - 18,000 EUR (v1.0) ",
                    useCases: [
                        {
                            title: "This is where case one title goes",
                            description: "This is where case two title goes",
                            imgUrl: case1
                        },
                        {
                            title: "This is where case two title goes",
                            description: "This is where case two title goes",
                            imgUrl: case2
                        }
                    ]
                },
                {
                    title: "Scoping & design",
                    description:
                        "Rough idea? We help you work out the details - Architecture, UI/UX design, Detailed project plan",
                    imgUrl: Service3,
                    leadTime: "1 - 2 weeks",
                    price: "1,000 - 3,000 EUR"
                },
                {
                    title: "Developers on-demand",
                    description:
                        "Quick access to a developer for incidental needs - Product improvements, additional func",
                    imgUrl: Service4,
                    leadTime: "< 1 week",
                    price: "23 - 26 EUR per hour"
                },
                {
                    title: "Developers on-demand",
                    description:
                        "Quick access to a developer for incidental needs - Product improvements, additional func",
                    imgUrl: Service4,
                    leadTime: "< 1 week",
                    price: "23 - 26 EUR per hour"
                },
                {
                    title: "Scoping & design",
                    description:
                        "Rough idea? We help you work out the details - Architecture, UI/UX design, Detailed project plan",
                    imgUrl: Service3,
                    leadTime: "1 - 2 weeks",
                    price: "1,000 - 3,000 EUR"
                },
                {
                    title: "Dedicated developers",
                    description:
                        "Reinforce your team with remote developers - full time or part time; temporary or permanent",
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
            },
            windowWidth: 0,
            windowHeight: 0,
            leftPosition: 0,
            selectedService: null,
            nextService: null,
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onServiceSelection = this.onServiceSelection.bind(this);
        this.onCloseServiceDetail = this.onCloseServiceDetail.bind(this);
    }


    paging(current) {
        const perPage = this.getDataPerPage();
        if (current > this.state.data.length - parseInt(perPage, 10) + 1) {
            return;
        }

        const leftPosition = `-${(100 / perPage * (current - 1))}%`;
        this.setState({ leftPosition, dataPerPage: paging(current, this) });
    }


    componentDidMount() {
        this.setState({
            dataPerPage: paging(this.state.paginate.current, this)
        });
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }


    updateWindowDimensions() {
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
    }


    onServiceSelection(selectedService) {
        const index = this.state.data.indexOf(selectedService);
        if (index !== -1 && index !== this.state.data.length - 1) {
            const nextService = this.state.data[index + 1];
            this.setState({ selectedService, nextService });
            return;
        }

        this.setState({ selectedService, nextService: null });
    }


    onCloseServiceDetail() {
        this.setState({ selectedService: null, nextService: null });
    }


    getDataPerPage() {
        let perPage = 0;
        const windowWith = this.state.windowWidth;

        switch (true) {
            case windowWith <= 768:
                perPage = 1;
                break;
            case windowWith <= 992:
                perPage = 2;
                break;
            default:
                perPage = 3.22;
        }

        return perPage;
    }


    render() {
        return (
            <section className="OurService" id="OurService">
                <h4 className="text-primary size-18 text-uppercase header">
                    Our Services
                    <PaginateArrow
                        This={this}
                        float="float-right"
                        color="text-primary"
                    />
                </h4>
                <div className="OurService__container">
                    <ul className="OurService__list" style={{ left: this.state.leftPosition }}>
                        {this.state.data.map(
                            (service, i) => (
                                <li
                                    key={i}
                                    className="OurService__item"
                                >
                                    <ServiceCard
                                        service={
                                            service
                                        }
                                        onServiceSelection={this.onServiceSelection}
                                    />
                                </li>
                            )
                        )}
                    </ul>
                </div>
                {
                    this.state.selectedService &&
                    <div className="OurService__detail">
                        <ServiceDetail
                            service={this.state.selectedService}
                            nextService={this.state.nextService}
                            onServiceSelection={this.onServiceSelection}
                            onCloseServiceDetail={this.onCloseServiceDetail}
                        />
                    </div>
                }
            </section>
        );
    }
}

OurService.propTypes = {};

export default OurService;
