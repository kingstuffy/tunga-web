import React, { Component } from "react";
import "./OurService.scss";
import { CardBody, Col, Media, Row } from "reactstrap";
import ServiceCard from "./ServiceCard/ServiceCard";
import Service1 from "../../assets/img/service/dedicated-developers.jpg";
import Service2 from "../../assets/img/service/project-outsourcing.jpg";
import Service3 from "../../assets/img/service/design-and-scoping.jpg";
import Service4 from "../../assets/img/service/developer-on-demand.jpg";
import Service5 from "../../assets/img/service/recruitement.jpg";
import Service6 from "../../assets/img/service/software-maintenance.jpg";

import DedicatedDevelopers from "../../assets/videos/home/our-services/Dedicated developers - vid.mp4";
import DedicatedDevelopersDetail from "../../assets/videos/home/our-services/Dedicated developers - big page.mp4";
import DesignScoping from "../../assets/videos/home/our-services/Design and scoping.mp4";
import DesignScopingDetail from "../../assets/videos/home/our-services/Design and scoping - detail page.mp4";
import DeveloperDemand from "../../assets/videos/home/our-services/Developer on demand.mp4";
import DeveloperDemandDetail from "../../assets/videos/home/our-services/Developer on demand detail page.mp4";
import ProjectOutsourcing from "../../assets/videos/home/our-services/Project outsourcing.mp4";
import ProjectOutsourcingDetail from "../../assets/videos/home/our-services/Project outsourcing - detail page.mp4";
import Recruitment from "../../assets/videos/home/our-services/Recruitment .mp4";
import RecruitmentDetail from "../../assets/videos/home/our-services/Recruitment - detail page.mp4";
import SoftwareMaintenance from "../../assets/videos/home/our-services/Software maintenance.mp4";
import SoftwareMaintenanceDetail from "../../assets/videos/home/our-services/Software maintenace detail page.mp4";


import case1 from "../../assets/img/service/service1.png";
import case2 from "../../assets/img/service/service2.png";
import Icon from "../../shared/core/Icon";
import { paging } from "../../Utils/Utils";
import PaginateArrow from "../../shared/PaginateArrow/PaginateArrow";
import ServiceDetail from "./ServiceDetail/ServiceDetail";
import Carousel from "../../shared/Carousel/Carousel";


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
                    videoMain: DedicatedDevelopers,
                    videoDetails: DedicatedDevelopersDetail,
                    leadTime: "1 - 2 weeks",
                    price: "26 - 29 EUR per hour",
                    useCases: [
                        {
                            title: "Cuurios",
                            description: "This is where case two title goes",
                            imgUrl: case1,
                            useCase: 3,
                        },
                        {
                            title: "Provolve IT",
                            description: "This is where case two title goes",
                            imgUrl: case2,
                            useCase: 4,
                        }
                    ],
                    useCase: 3,
                    tag: 'dedicated-developers'
                },
                {
                    title: "Project outsourcing",
                    description:
                        "We run the show for you from idea to launch - x.0 versions, beta’s, alpha’s, MVP’s, prototypes ",
                    imgUrl: Service2,
                    videoMain: ProjectOutsourcing,
                    videoDetails: ProjectOutsourcingDetail,
                    leadTime: "2 - 3 weeks",
                    price: "5,000 EUR (prototype) - 18,000 EUR (v1.0) ",
                    useCases: [
                        {
                            title: "Impulse",
                            description: "This is where case two title goes",
                            imgUrl: case1,
                            useCase: 1,
                        },
                        {
                            title: "CWZ",
                            description: "This is where case two title goes",
                            imgUrl: case2,
                            useCase: 5,
                        }
                    ],
                    useCase: 1,
                    tag: 'project-outsourcing',
                },
                {
                    title: "Scoping & design",
                    description:
                        "Rough idea? We help you work out the details - Architecture, UI/UX design, Detailed project plan",
                    imgUrl: Service3,
                    videoMain: DesignScoping,
                    videoDetails: DesignScopingDetail,
                    leadTime: "1 - 2 weeks",
                    price: "1,000 - 3,000 EUR",
                    useCases: [
                        {
                            title: "CoffeeChat",
                            description: "This is where case two title goes",
                            imgUrl: case1
                        }
                    ],
                    useCase: 2,
                    tag: 'scoping',
                },
                {
                    title: "Developers on-demand",
                    description:
                        "Quick access to a developer for incidental needs - Product improvements, additional functions",
                    imgUrl: Service4,
                    videoMain: DeveloperDemand,
                    videoDetails: DeveloperDemandDetail,
                    leadTime: "< 1 week",
                    price: "26 - 29 EUR per hour"
                },
                /*{
                    title: "Recruitment",
                    description:
                        "Quick access to a developer for incidental needs - Product improvements, additional functions",
                    imgUrl: Service5,
                    videoMain: Recruitment,
                    videoDetails: RecruitmentDetail,
                    leadTime: "< 1 week",
                    price: "26 - 29 EUR per hour"
                },*/
                {
                    title: "Software Maintenance",
                    description:
                        "Keep your product up to date. Bug-fixing, version upgrades, Server maintenance",
                    imgUrl: Service6,
                    videoMain: SoftwareMaintenance,
                    videoDetails: SoftwareMaintenanceDetail,
                    leadTime: "Service contract",
                    price: "1,000 - 3,000 EUR"
                },
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
        return [
            {
                breakpoint: 768,
                perPage: 1,
            },
            {
                breakpoint: 992,
                perPage: 2,
            },
            {
                breakpoint: 768000,
                perPage: 3,
            },
        ];
    }


    render() {
        const { onUseCaseClick, isMobile } = this.props;
        const pagination = {
            total: this.state.data.length,
            perPage: this.getDataPerPage()
        };

        return (
            <section className="OurService" id="OurService">
                <div className="text-primary OurService__header font-weight-bold">
                    Our Services
                </div>
                <div className="OurService__container">
                    <Carousel
                        pagination={pagination}
                        float="float-right"
                        color="text-primary"
                    >
                        <ul className="OurService__list" style={{ left: this.state.leftPosition }}>
                            {this.state.data.map(
                                (service, i) => (
                                    <li
                                        key={i}
                                        className="OurService__item"
                                    >
                                        <ServiceCard
                                            isMobile={isMobile}
                                            service={
                                                service
                                            }
                                            onServiceSelection={this.onServiceSelection}
                                        />
                                    </li>
                                )
                            )}
                        </ul>
                    </Carousel>
                </div>
                {
                    this.state.selectedService &&
                    <div className="OurService__detail">
                        <ServiceDetail
                            isMobile={isMobile}
                            service={this.state.selectedService}
                            nextService={this.state.nextService}
                            onServiceSelection={this.onServiceSelection}
                            onCloseServiceDetail={this.onCloseServiceDetail}
                            onUseCaseClick={onUseCaseClick}
                        />
                    </div>
                }
            </section>
        );
    }
}

OurService.propTypes = {};

export default OurService;
