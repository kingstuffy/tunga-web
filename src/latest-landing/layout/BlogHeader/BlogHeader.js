import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BlogHeader.scss";
import Nav from "../Nav/Nav";
import User1 from "../../assets/img/user/user1.png";
import { Col, Media, Row } from "reactstrap";

class BlogHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('sss');
    return (
            <div className="BlogHeader text-white position-relative">
                <Nav />
                <Row>
                    <Col lg="12" sm="12" md="12">
                        <div className="text-center BlogHeader-Text  font-weight-bold">
                            The Quickest Road to Innovation Leads Through Africa
                        </div>
                        <div className="BlogHeader-Text-P font-weight-normal mt-3">
                            Companies worldwide use Tunga’s workforce of
                            exclusively African software engineers to build new
                            tech products quickly, affordably and smoothly
                        </div>
                    </Col>
                    <Col lg="12" sm="12" md="12">
                      <Media  className="w-100">
                        <Media left href="#">
                          <Media
                            object
                            src={User1}
                            className="img-fluid rounded-circle"
                            alt="Generic placeholder image"
                          />
                        </Media>
                        <Media body className="pl-2 size-12 text-white">
                          <Media heading className="size-12 text-white">
                            Author name goes here
                          </Media>
                          12 Mar 2019
                        </Media>
                      </Media>
                    </Col>
                </Row>
            </div>
    );
  }
}

BlogHeader.propTypes = {};

export default BlogHeader;
