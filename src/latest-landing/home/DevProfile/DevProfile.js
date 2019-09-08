import React, { Component } from "react";
import "./DevProfile.scss";

import { viewTalentRequest } from '../../../services/talents/actions';
import Nav from "../../layout/Nav/Nav";
import SearchForm from "./SearchForm/SearchForm";
import Profile from "./Profile/Profile";

import SearchFormBg from "../../assets/img/our-story/hero-bg.png";
import { connect } from "react-redux";

import PageScroll from "../../shared/PageScroll/PageScroll";
import Experience from "./Experience/Experience";
import Footer from "../../layout/Footer/Footer";

const pages = [
    {
        hash: "Profile",
        title: "Profile",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff",
        theme: "dark",
    },
    {
        hash: "Experience",
        title: "Experience",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64",
        theme: "light",
    },
    {
        hash: "Contact",
        title: "Contact",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64",
        theme: "dark",
    },
];


class DevProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentWillMount() {
        this.loadData(this.props.match.params.id);
    }


    loadData(id) {
        this.props.viewTalentRequest(id);
    }


    render() {
        const { talent } = this.props;
        talent.profile = talent.profile || { skills: [], skills_details: {} };

        return (
            <section className="DevProfile">
                <PageScroll pages={pages}>
                    <div id="Profile" className="DevProfile__profile">
                        <div className="DevProfile__header"
                             style={{ backgroundImage: `url(${SearchFormBg})` }}>
                            <div className="DevProfile__nav">
                                <Nav/>
                            </div>
                            <div className="DevProfile__search">
                                <SearchForm/>
                            </div>
                            <div className="DevProfile__bg-mask">
                            </div>
                        </div>
                        <div className="">
                            {
                                talent.display_name
                                &&
                                <Profile talent={talent}/>
                            }
                        </div>
                    </div>
                    <Experience talent={talent}/>
                    <Footer/>
                </PageScroll>
            </section>
        );
    }
}

DevProfile.propTypes = {};

const mapStateToProps = state => ({
    is: state.app.talents.talents.is,
    talent: state.app.talents.talents.talent,
});

export default connect(mapStateToProps, { viewTalentRequest })(DevProfile);

