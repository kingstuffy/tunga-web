import React, { Component } from "react";
import "./DevProfile.scss";

import Nav from "../../layout/Nav/Nav";
import SearchForm from "./SearchForm/SearchForm";
import Profile from "./Profile/Profile";

import SearchFormBg from "../../assets/img/our-story/hero-bg.png";

class DevProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="DevProfile">
                <div className="DevProfile__header"
                     style={{ backgroundImage: `url(${SearchFormBg})` }}>
                    <div className="DevProfile__nav">
                        <Nav/>
                    </div>
                    <div className="DevProfile__search">
                        <SearchForm/>
                    </div>
                    <div className="DevProfile__bg-mask">
                        &nsbp;
                    </div>
                </div>
                <div className="DevProfile__profile">
                    <Profile/>
                </div>
            </section>
        );
    }
}

DevProfile.propTypes = {};

export default DevProfile;
