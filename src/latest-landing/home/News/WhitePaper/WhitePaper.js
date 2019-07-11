import React, { Component } from "react";
import "./WhitePaper.scss";
import { Col, Row } from "reactstrap";
import BgImg from "../../../assets/img/blog/white-paper.png";
import { Button } from "../../../shared/Form/Form";
import WpDownload from "./WpDownload/WpDownload";

class WhitePaper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDownloadOpen: false,
        };

        this.onDownloadOpen = this.onDownloadOpen.bind(this);
        this.onDownloadClose = this.onDownloadClose.bind(this);
    }


    onDownloadOpen() {
        this.setState({ isDownloadOpen: true });
    }


    onDownloadClose() {
        this.setState({ isDownloadOpen: false });
    }


    render() {
        return (
            <div className="WhitePaper">
                <div className="WhitePaper__bg" style={{ backgroundImage: `url(${BgImg})` }}></div>
                <div className="WhitePaper__body">
                    <div className="WhitePaper__heading font-weight-bold">
                        WHITEPAPER
                    </div>
                    <Row>
                        <Col sm="12" md="4">
                            <div className="WhitePaper__section">
                                <div className="WhitePaper__subheading font-weight-bold">
                                    Best African countries for sourcing software developers in 2019
                                </div>
                                <div className="WhitePaper__text">
                                    The African continent is emerging as a region for sourcing software developers that
                                    still has a lot of untapped potential. Tech giants like Google and Microsoft are
                                    investing significantly to get African tech talent into their ecosystems. It's
                                    getting increasingly difficult to hire good software developers, so the African
                                    talent pool could turn out to be an interesting opportunity.
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md="4">
                            <div className="WhitePaper__section">
                                <div className="WhitePaper__text">
                                    But where to start? Download our whitepaper and get the hard numbers on sourcing
                                    software programmers from Africa:
                                </div>
                                <ul className="WhitePaper__list">
                                    <li className="WhitePaper__point">
                                        Which African countries have the largest software developers pool?
                                    </li>
                                    <li className="WhitePaper__point">
                                        Where are the developers most proficient in English?
                                    </li>
                                    <li className="WhitePaper__point">
                                        What is the salary level and how does it differ between countries?
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm="12" md="4">
                            <div className="WhitePaper__section">
                                <ul className="WhitePaper__list">
                                    <li className="WhitePaper__point">
                                        Which countries have the most potential moving forward in terms of business and
                                        innovation climate?
                                    </li>
                                    <li className="WhitePaper__point">
                                        What software languages and frameworks are most popular in which African
                                        country?
                                    </li>
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
                {
                    this.state.isDownloadOpen
                    &&
                    <WpDownload onDownloadClose={this.onDownloadClose}/>
                }
            </div>
        );
    }
}

WhitePaper.propTypes = {};

export default WhitePaper;
