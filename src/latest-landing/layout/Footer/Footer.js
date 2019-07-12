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

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  var settings =({
    dots: false,
    swipeToSlide: true,
   pauseOnHover:true,
    infinite: true,
    speed: 500,
    autoplay:true,
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
        slidesToScroll: 2,


      }


    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,


      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

        }
    }]
});

    return (
            <footer id="Footer">
                {/*------------ Press------------- */}
                <Row>
                    <Col md="3" sm="6">
                        <div className="also-featured">
                            <h5>ALSO FEATURED IN</h5>
                        </div>
                    </Col>

                    <Col md="9" sm="6">
                        <div className="also-featured">
                            <Slider className="carousel" {...settings}>
                                <div className="bbc">


                                    <a href="#">
                                        <img

                                            alt="BBC NEWS"
                                            src={BBC}
                                        />
                                    </a>
                                </div>
                                <div className="party">
                                    <a href="#">
                                        <img

                                            alt="CAMPUS PARTY"
                                            src={campusparty}
                                        />
                                    </a>
                                </div>

                                <div className="world">
                                    <a href="#">
                                        <img

                                            alt="ONE WORLD"
                                            src={oneworld}
                                        />
                                    </a>
                                </div>

                                <div className="trend">
                                    <a href="#">
                                        <img

                                            alt="TREND WATCHING"
                                            src={trendwatching}
                                        />
                                    </a>
                                </div>
                                <div className="afn hide-on-mobile">
                                    <a href="#">
                                        <img

                                            alt="AFRICAN TECH ROUND UP"
                                            src={African}
                                        />
                                    </a>
                                </div>
                                <div className="nabc">
                                    <a href="#">
                                        <img

                                            alt="NABC"
                                            src={NABC}
                                        />
                                    </a>
                                </div>
                                <div className="bnr">
                                    <a href="#">
                                        <img

                                            alt="BNR"
                                            src={bnr1}
                                        />
                                    </a>
                                </div>
                                <div className="graf hide-on-mobile">
                                    <a href="#">
                                        <img

                                            alt="DE TELEGRAAF"
                                            src={Detelegraph}
                                        />
                                    </a>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>

                <hr id="line"/>
                {/*------------------Our Offices------------------- */}
                <Row style={{marginTop: "-52px"}}>
                    <Col md="3" sm="6">
                        <div className="tunga-offices">
                            <div className="tunga-kampala">
                                <h4>OFFICES</h4>
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
                                    <a href="tel:+31615955194">+31615955194</a>
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
                                    <Icon className="fb" name="facebook" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://twitter.com/tunga_io"
                                    id="twitter"
                                    title="Twitter"
                                >
                                    <Icon className="twitter" name="twitter" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://blog.tunga.io"
                                    id="medium"
                                    title="Medium"
                                >
                                    <Icon className="medium" name="medium" />
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
                                    <a href="#">Our Team</a>
                                </li>
                                <li>
                                    <a href="#">Our Story</a>
                                </li>
                                <li>
                                    <a href="#">News</a>
                                </li>
                                <li>
                                    <a href="#">Effortless software projects</a>
                                </li>
                                <li>
                                    <a href="#">Dedicated Developers</a>
                                </li>
                                <li>
                                    <a href="#">Recruitment Services</a>
                                </li>
                                <li>
                                    <a href="#">iOS Developers</a>
                                </li>
                                <li>
                                    <a href="#">Android developers</a>
                                </li>
                                <li>
                                    <a href="#">Remote teams</a>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    {/*--------------------Latest From Our Blog---------------------------- */}

                    <Col md="3" sm="6">
                        <div className="latest-from-our-blog">
                            <h4>LATEST FROM OUR BLOG</h4>
                            <li>
                                <a href="#">
                                    Reknown newspaper Het Parool interviews
                                    Ernesto Spruyt and David Semakula.
                                </a>{" "}
                            </li>
                            <li>
                                <a href="#">Women in tech courses.</a>{" "}
                            </li>
                            <li>
                                <a href="#">Quality time in Nigeria.</a>{" "}
                            </li>
                            <li>
                                <a href="#">
                                    Best African countries for sourcing software
                                    developers in 2019.
                                </a>{" "}
                            </li>
                        </div>
                    </Col>
                </Row>
                <hr id="line"/>
                <Row>
                    {/*-----------------------Footer Bottom-------------------------------- */}

                    <Col md="6" sm="6">
                        <div className="bottom-line">
                            <p className="text-xs-left">
                                {new Date().getFullYear()} Tunga Bv - All rights
                                reserved
                            </p>
                        </div>
                    </Col>
                    <Col md="2" sm="4">
                        <div className="bottom-line">
                            <p className="text-xs-right">
                                <a href="#">Privacy policy</a>
                            </p>
                        </div>
                    </Col>
                    <Col md="2" sm="4">
                        <div className="bottom-line">
                            <p className="text-xs-right">
                                <a href="#">User Agreement</a>
                            </p>
                        </div>
                    </Col>
                    <Col md="2" sm="4">
                        <div className="bottom-line">
                            <p className="text-xs-right">
                                <a href="#">Code of conduct</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </footer>
      );
  }
}
Footer.propTypes = {};

export default Footer;
