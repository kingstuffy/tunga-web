import React, { Component } from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";
import Icon from "../../../components/core/Icon";
import { Col, Container, Row } from "reactstrap";

import "../Footer/slick/slick/slick.css";
import "../Footer/slick/slick/slick-theme.css";

import BBC from "./../../../latest-landing/assets/img/footer/BBC.png";
import campusparty from "./../../../latest-landing/assets/img/footer/campusparty.png";
import oneworld from "./../../../latest-landing/assets/img/footer/oneworld.png";
import trendwatching from "./../../../latest-landing/assets/img/footer/trendwatching.png";
import bnr1 from "./../../../latest-landing/assets/img/footer/bnr1.png";
import African from "./../../../latest-landing/assets/img/footer/African.png";
import NABC from "./../../../latest-landing/assets/img/footer/NABC.png";
import Detelegraph from "./../../../latest-landing/assets/img/footer/Detelegraph.png";
import "../Footer/slick/slick/slick.css";
import "../Footer/slick/slick/slick-theme.css";
import "./Footer.scss";
import { fetchBlogsRequest } from "../../../services/blogs/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Routing from "../../constants/Routing";
import { NavLink } from "react-router-dom";


const SectionLink = ({ title, goToUrl, url }) => {
    return (
        <a onClick={() => goToUrl(url)}>
            {title}
        </a>
    );
};


class Footer extends Component {
    constructor(props) {
        super(props);
        this.goToServices = this.goToServices.bind(this);
    }


    componentWillMount() {
        this.loadData(this.props.query);
    }


    loadData(search) {
        this.props.fetchBlogsRequest({ search, limit: 5 });
    }

    goToServices() {
        this.props.history.push('/#services');
    }


    render() {
        const { blogs, goToUrl } = this.props;
        const firstBlogs = blogs.slice(0, 5);

        var settings = ({
            dots: false,
            swipeToSlide: true,
            pauseOnHover: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            draggable: true,
            autoplaySpeed: 2000,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }

            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }


            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            }]
        });

        return (
            <footer id="Footer" className="Footer">
                {/*------------ Press------------- */}
                <div className="Footer__featured">
                    <div className="also-featured also-featured--label">
                        <h5>ALSO FEATURED IN</h5>
                    </div>
                    <div className="also-featured also-featured--carousel">
                        <Slider className="carousel" {...settings}>
                            <div className="bbc">
                                <a href="http://www.bbc.co.uk/news/world-africa-38294998" target="_blank">
                                    <img

                                        alt="BBC NEWS"
                                        src={BBC}
                                    />
                                </a>
                            </div>
                            <div className="party">
                                <a href="https://www.youtube.com/watch?v=v9uRtYpZDQs" target="_blank">
                                    <img
                                        alt="CAMPUS PARTY"
                                        src={campusparty}
                                    />
                                </a>
                            </div>
                            <div className="world">
                                <a href="https://www.oneworld.nl/startup-tunga-lanceert-pilot-programma-voor-nieuw-soort-freelance-platform" target="_blank">
                                    <img

                                        alt="ONE WORLD"
                                        src={oneworld}
                                    />
                                </a>
                            </div>

                            <div className="trend">
                                <a href="http://trendwatching.com/blog/featured-innovator-tunga/" target="_blank">
                                    <img

                                        alt="TREND WATCHING"
                                        src={trendwatching}
                                    />
                                </a>
                            </div>
                            <div className="afn hide-on-mobile">
                                <a href="https://soundcloud.com/african-tech-round-up/a-chat-with-ernesto-spruyt-of-tungaio?in=african-tech-round-up/sets/quick-chats" target="_blank">
                                    <img

                                        alt="AFRICAN TECH ROUND UP"
                                        src={African}
                                    />
                                </a>
                            </div>
                            <div className="nabc">
                                <a href="https://www.nabc.nl/africa-business-news/5/technology/377/tunga-founder-ernesto-spruyt-we-create-21st-century-jobs-in-africa" target="_blank">
                                    <img

                                        alt="NABC"
                                        src={NABC}
                                    />
                                </a>
                            </div>
                            <div className="bnr">
                                <a href="https://blog.tunga.io/our-developers-dont-want-aid-they-want-to-be-productive-4aba9173211e" target="_blank">
                                    <img

                                        alt="BNR"
                                        src={bnr1}
                                    />
                                </a>
                            </div>
                            <div className="graf hide-on-mobile">
                                <a href="https://www.telegraaf.nl/nieuws/1876342/podium-voor-afrikaans-it-talent">
                                    <img

                                        alt="DE TELEGRAAF"
                                        src={Detelegraph}
                                    />
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="clearfix"></div>
                <hr className="Footer__line Footer__line--no-b"/>
                {/*------------------Our Offices------------------- */}
                <Row>
                    <Col md="3" sm="6">
                        <div className="tunga-offices">
                            <h4>OFFICES</h4>
                            <div className="tunga-kampala">

                                <h5>KAMPALA</h5>
                                <p>Design Hub Kampala</p>
                                <p>5th Street, Industrial Area</p>
                                <p>Kampala, Uganda</p>
                            </div>

                            <div className="tunga-amsterdam">
                                <h5>AMSTERDAM</h5>
                                <p>The Collab Wibautstraat 131</p>
                                <p>1091 GL Amsterdam</p>
                                <p>The Netherlands</p>
                            </div>
                        </div>
                    </Col>

                    {/*--------------------------Connect With Us---------------------- */}

                    <Col md="3" sm="6">
                        <div className="connect">
                            <h4>CONNECT</h4>
                            <div className="hello-tunga">
                                <p>
                                    <a href="mailto:hello@tunga.io">
                                        hello@tunga.io
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:++31 20 220 2157">+31 20 220 2157</a>
                                </p>
                            </div>

                            {/* social networks */}
                            <div className="social-networks">
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/company/tunga"
                                    id="fb"
                                    title="LinkedIn"
                                >
                                    <Icon
                                        className="linkedin"
                                        name="linkedin"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/tunga.io"
                                    id="fb"
                                    title="Facebook"
                                >
                                    <Icon className="fb" name="facebook"/>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://twitter.com/tunga_io"
                                    id="twitter"
                                    title="Twitter"
                                >
                                    <Icon className="twitter" name="twitter"/>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://blog.tunga.io"
                                    id="medium"
                                    title="Medium"
                                >
                                    <Icon className="medium" name="medium"/>
                                </a>
                            </div>
                        </div>
                    </Col>

                    {/*-----------------explore-------------- -- */}
                    <Col md="3" sm="6">
                        <div className="explore">
                            <h4>EXPLORE</h4>
                            <ul>
                                <li>
                                    <NavLink to="/#case-studies">Case studies</NavLink>
                                </li>
                                <li>
                                    <NavLink to={Routing.ourStory.path}>Our Story</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`${Routing.ourTeam.path}#talent-pool`}>Browse Talent</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`${Routing.news.path}#news-article`}>Latest articles</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`${Routing.news.path}#vlogs`}>Vlogs</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`${Routing.news.path}#publications`}>Publications</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`${Routing.news.path}#blog`}>Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/#our-services">Our Services</NavLink>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    {/*--------------------Latest From Our Blog---------------------------- */}

                    <Col md="3" sm="6">
                        <div className="latest-from-our-blog">
                            <h4>LATEST FROM OUR BLOG</h4>
                            {firstBlogs.map(
                                (blog, i) => (
                                    <li key={i}>
                                        <a href={blog.url} target="_blank">
                                            {blog.title}
                                        </a>{" "}
                                    </li>
                                ))}
                        </div>
                    </Col>
                </Row>
                <div className="Footer__bottom">
                    <hr className="Footer__line"/>
                    <Row>
                        {/*-----------------------Footer Bottom-------------------------------- */}

                        <Col md="6" sm="6" className="Footer__rights">
                            <div className="bottom-line bottom-line--first">
                                <p className="text-xs-left">
                                    {new Date().getFullYear()} Tunga Bv - All rights
                                    reserved
                                </p>
                            </div>
                        </Col>
                        <Col md="6" sm="6" className="Footer__bottom-right">
                            <div className="Footer__bottom-right-row">
                                <div className="Footer__bottom-links Footer__bottom-links--first">
                                    <div className="bottom-line">
                                        <p className="text-xs-right">
                                            <NavLink to="/privacy">Privacy policy</NavLink>
                                        </p>
                                    </div>
                                </div>
                                <div className="Footer__bottom-links Footer__bottom-links--middle">
                                    <div className="bottom-line">
                                        <p className="text-xs-right">
                                            <NavLink to="/agreement">User Agreement</NavLink>
                                        </p>
                                    </div>
                                </div>
                                <div className="Footer__bottom-links Footer__bottom-links--last">
                                    <div className="bottom-line">
                                        <p className="text-xs-right">
                                            <NavLink to="/code-of-conduct">Code of conduct</NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {};


const mapStateToProps = state => ({
    is: state.app.blogs.blogs.is,
    blogs: state.app.blogs.blogs.blogList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlogsRequest: (params) => dispatch(fetchBlogsRequest(params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
