import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import Nav from "../Nav/Nav";
import Button from "../../shared/core/Button";
import { Col, Row } from "reactstrap";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Header text-white">
                <Nav/>
                <Row>
                    <Col lg="12" sm="12" md="12">
                        <div className="text-center Header-Text  font-weight-bold">
                            The Quickest Road to Innovation Leads Through Africa
                        </div>
                        <div className="Header-Text-P font-weight-normal">
                            Companies worldwide use Tunga’s workforce of exclusively African software engineers to build
                            new tech products quickly, affordably and smoothly
                        </div>
                    </Col>
                    <Col lg="12" sm="12" md="12">
                        <div className="" align="center">
                            <Button size="lg" className="ml-2 p-4 mt-2 border-radius-0"> Schedule a Call </Button>
                            <Button size="lg" className="ml-2 p-4 mt-2 border-radius-0 bg-transparent border-color-white"> Search for
                                Developer </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
