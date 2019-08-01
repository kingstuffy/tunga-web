import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchTalentsRequest } from '../../../../services/talents/actions';
import "./TalentPool.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import Loader from "../../../shared/Loader/Loader";
import Talent from "./Talent/Talent";
import TalentSearch from "./TalentSearch/TalentSearch";
import Icon from "../../../shared/core/Icon";

class TalentPool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            leftPosition: 0,
        };

        this.loadData = this.loadData.bind(this);
        this.onSearchQuery = this.onSearchQuery.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.getMaxItemsNo = this.getMaxItemsNo.bind(this);
    }


    componentWillMount() {
        this.loadData(this.props.query);
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }


    updateWindowDimensions() {
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
    }


    onSearchQuery(query) {
        this.loadData(query);
        this.setState({ lastQuery: query });
    }


    loadData(search) {
        this.props.fetchTalentsRequest({ search, limit: 12 });
    }


    getDataPerPage() {
        return [
            {
                breakpoint: 768,
                perPage: 2,
                width: 46,
            },
            {
                breakpoint: 992,
                perPage: 3,
                width: 31.5,
            },
            {
                breakpoint: 768000,
                perPage: 5,
                width: 19,
            },
        ];
    }


    getMaxItemsNo({ dataPerPage }) {
        const windowWith = this.state.windowWidth;
        const perPage = dataPerPage.sort((a, b) => {
            return a.breakpoint - b.breakpoint;
        });

        return perPage.reduce((dataPerPage, data) => {
            if (dataPerPage) {
                return dataPerPage;
            }
            return windowWith <= data.breakpoint ? data.perPage : 0;
        }, 0);
    }


    render() {
        const { talents, is, query } = this.props;
        const dataPerPage = this.getDataPerPage();
        const maxItemsNo = this.getMaxItemsNo({ dataPerPage });

        let talentsPerRow = parseInt(talents.length / 2, 10);
        talentsPerRow = talentsPerRow < maxItemsNo ? maxItemsNo : talentsPerRow;
        const splitTalents = [
            talents.slice(0, talentsPerRow),
        ];
        if (talents.length > talentsPerRow) {
            splitTalents.push(talents.slice(talentsPerRow));
        }

        const pagination = {
            total: talentsPerRow,
            perPage: dataPerPage,
        };

        return (
            <section className="TalentPool">
                <h4 className="text-primary size-16 text-uppercase font-weight-bold">
                    TALENT POOL
                </h4>
                <div className="TalentPool__search-form">
                    <TalentSearch onSearchQuery={this.onSearchQuery}/>
                </div>
                <div className="TalentPool__container">
                    {
                        !talents.length && !is.fetching &&
                        <div className="TalentPool__empty-state text-danger">
                            No results found for '{query || this.state.lastQuery}'
                            <Icon className="text-primary mt-3" name="search-alt" size='lg'/>
                        </div>
                    }
                    {
                        is.fetching
                            ?
                            <div className="TalentPool__loader">
                                <Loader/>
                            </div>
                            :
                            <Carousel
                                pagination={pagination}
                                float="float-right"
                                color="text-primary"
                            >
                                <ul className="TalentPool__list" style={{ left: this.state.leftPosition }}>
                                    {splitTalents.map(
                                        (members, i) => (
                                            <div
                                                key={i}
                                                className="TalentPool__row"
                                            >
                                                {
                                                    members.map(
                                                        (member, j) => (
                                                            <div
                                                                className="TalentPool__item"
                                                                key={j}>
                                                                <Talent talent={member}/>
                                                            </div>
                                                        )
                                                    )}
                                            </div>
                                        )
                                    )}
                                </ul>
                            </Carousel>
                    }
                </div>
            </section>
        );
    }
}

TalentPool.propTypes = {};


const mapStateToProps = state => ({
    is: state.app.talents.talents.is,
    talents: state.app.talents.talents.talentList,
    auth: state.app.Auth,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTalentsRequest: (params) => dispatch(fetchTalentsRequest(params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TalentPool);
