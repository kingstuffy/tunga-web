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
    return (
      <div className="BlogHeader text-white position-relative">
        <Nav/>
        <div className="text-center BlogHeader-Text  font-weight-bold">
          The Quickest Road to Innovation Leads Through Africa
          Innovation Leads Through Africa
        </div>
        <div className="mt-3 text-center">
          <img src={User1}
               className="header-profile-picture-icon padding-img mt-3" alt="db" />
            <div className='headTag font-weight-normal'>
              <b className="text-white pl-3">Author Name goes here</b>
              <div className="headTime">
                21 April, 2019
              </div>
            </div>
      </div>
      </div>
    );
  }
}

BlogHeader.propTypes = {};

export default BlogHeader;
