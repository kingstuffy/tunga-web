import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import "./DevProfile.scss";

import { viewTalentRequest } from '../../../services/talents/actions';
import Nav from "../../layout/Nav/Nav";
import SearchForm from "./SearchForm/SearchForm";
import Profile from "./Profile/Profile";
import SideNav from "../../../components/sidenav";

import SearchFormBg from "../../assets/img/our-story/hero-bg.png";
import { connect } from "react-redux";

const pages = [];


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


    goToPage = (pageNumber) => {
        return this.reactPageScroller.goToPage(pageNumber)
    }


    render() {
        const { talent } = this.props;
        talent.profile = talent.profile || { skills: [], skills_details: {} };

        return (
            <section className="DevProfile">
                <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
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
                        {
                            talent.display_name
                            &&
                            <Profile talent={talent}/>
                        }
                    </div>
                </ReactPageScroller>
                <SideNav pages={pages} goToPage={this.goToPage}/>
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
