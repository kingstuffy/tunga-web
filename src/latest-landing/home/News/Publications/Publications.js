import React, { Component } from "react";
import "./Publications.scss";
import { Col, Row } from "reactstrap";
import ResearchImg from "../../../assets/img/news/publications/research-report.jpg";
import WhitePaperImg from "../../../assets/img/news/publications/white-paper.jpg";
import { Button } from "../../../shared/Form/Form";
import PublicationDownload from "./PublicationDownload/PublicationDownload";
import Carousel from "../../../shared/Carousel/Carousel";
import { isEqual, kebabCase } from "lodash";
import qs from "qs";

class Publications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDownloadOpen: false,
            activePage: 1,
            publications: [
                {
                    title: 'WHITEPAPER',
                    intro: 'Best African countries for sourcing software developers in 2019',
                    description: `The African continent is emerging as a region for sourcing
                                                            software developers that
                                                            still has a lot of untapped potential. Tech giants like
                                                            Google and Microsoft are
                                                            investing significantly to get African tech talent into
                                                            their ecosystems. It's
                                                            getting increasingly difficult to hire good software
                                                            developers, so the African
                                                            talent pool could turn out to be an interesting opportunity.`,
                    downloadCta: `But where to start? Download our whitepaper and get the hard
                                                            numbers on sourcing
                                                            software programmers from Africa:`,
                    leftPublications: [
                        `Which African countries have the largest software
                                                                developers pool?`,
                        `Where are the developers most proficient in English?`,
                        `What is the salary level and how does it differ between
                                                                countries?`,
                    ],
                    rightPublications: [
                        `Which countries have the most potential moving forward
                                                                in terms of business and
                                                                innovation climate?`,
                        `What software languages and frameworks are most popular
                                                                in which African
                                                                country?`,
                    ],
                    downloadTitle: 'Please fill in this form to download the whitepaper',
                    imgUrl: WhitePaperImg,
                    slug: 'white-paper',
                },
                {
                    title: 'RESEARCH PAPER',
                    intro: 'From startup to scaleup: How to use remote workers for scaling your software development team',
                    description: `Nowadays, scaling your business almost always requires using IT. Without software development no growth. Which explains why there is such a big shortage: 83% of companies have trouble finding tech talent. So what to do?`,
                    downloadCta: `Tech companies increasingly choose to mobilize remote workers and work with distributed teams. In this research report, we explore what are the best ways for startups and scaleups to deal with the shortage of tech talent:`,
                    leftPublications: [
                        'What does it take to grow from startup to scaleup?',
                        'How to grow your software team?',
                        'How to use outsourcing to stay flexible?',
                    ],
                    rightPublications: [
                        'Why is remote work becoming so popular?',
                        'How to organize software projects with distributed teams?',
                    ],
                    downloadTitle: 'Please fill in this form to download the research paper',
                    imgUrl: ResearchImg,
                    slug: 'research-paper',
                },
            ]
        };

        this.onPageChange = this.onPageChange.bind(this);
        this.onDownloadOpen = this.onDownloadOpen.bind(this);
        this.onDownloadClose = this.onDownloadClose.bind(this);
    }


    componentDidMount() {
        if (this.props.publicationQuery) {
            const page = this.state.publications.findIndex(({ slug }) => slug === this.props.publicationQuery) + 1;
            if (page) {
                this.setState({ activePage: page });
            }
        }
    }


    getDataPerPage() {
        return [
            {
                breakpoint: 768000,
                perPage: 1,
            },
        ];
    }


    onPageChange(page) {
        this.setState({ activePage: page });
        const slug = this.state.publications[page - 1].slug;
        const { hash, pathname } = this.props.history.location;
        const parsedHash = hash.split('?')[0];
        this.props.history.push(`${pathname}${parsedHash}?publication=${slug}`);
    }


    onDownloadOpen() {
        this.setState({ isDownloadOpen: true });
    }


    onDownloadClose() {
        this.setState({ isDownloadOpen: false });
    }


    render() {
        const pagination = {
            total: this.state.publications.length,
            perPage: this.getDataPerPage()
        };

        return (
            <div className="Publications">

                <div className="Publications__container">
                    <Carousel
                        onPageChange={this.onPageChange}
                        pagination={pagination}
                        activePage={this.state.activePage}
                        float="float-right"
                        color="text-primary"
                        transparent={true}
                    >
                        <ul className="Publications__list">
                            {
                                this.state.publications.map((publication, key) => (
                                    <li className={`Publications__item`} key={key}>
                                        <div className="Publications__item-container">
                                            <div className="Publications__bg"
                                                 style={{ backgroundImage: `url(${publication.imgUrl})` }}></div>
                                            <div className="Publications__body">
                                                <div className="Publications__heading font-weight-bold">
                                                    {publication.title}
                                                </div>
                                                <Row>
                                                    <Col sm="12" md="4">
                                                        <div className="Publications__section">
                                                            <div className="Publications__subheading font-weight-bold">
                                                                {publication.intro}
                                                            </div>
                                                            <div className="Publications__text">
                                                                {publication.description}
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col sm="12" md="4">
                                                        <div
                                                            className="Publications__section Publications__section--with-top">
                                                            <div className="Publications__text">
                                                                {publication.downloadCta}
                                                            </div>
                                                            <ul className="Publications__point-list">
                                                                {
                                                                    publication.leftPublications.map((point, key) => (
                                                                        <li className="Publications__point" key={key}>
                                                                            {point}
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col sm="12" md="4">
                                                        <div
                                                            className="Publications__section Publications__section--with-top">
                                                            <ul className="Publications__point-list">
                                                                {
                                                                    publication.rightPublications.map((point, key) => (
                                                                        <li className="Publications__point" key={key}>
                                                                            {point}
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                            <div className="text-center mt-5">
                                                                <Button onClick={this.onDownloadOpen}>
                                                                    Download
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                        {
                                            this.state.isDownloadOpen
                                            &&
                                            <PublicationDownload downloadTitle={publication.downloadTitle}
                                                                 onDownloadClose={this.onDownloadClose}/>
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </Carousel>
                </div>
            </div>
        );
    }
}

Publications.propTypes = {};

export default Publications;
