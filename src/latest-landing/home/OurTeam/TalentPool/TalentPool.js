import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchTalentsRequest } from '../../../../services/talents/actions';
import "./TalentPool.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import Loader from "../../../shared/Loader/Loader";
import Talent from "./Talent/Talent";
import TalentSearch from "./TalentSearch/TalentSearch";
import Icon from "../../../shared/core/Icon";
import algoliaUtils from "../../../../components/utils/algolia";
import _ from "lodash";
import axios from "axios";
import { ENDPOINT_LOG_SEARCH } from "../../../../actions/utils/api";
import { getNumSearches } from "../../../../components/utils/search";

class TalentPool extends Component {
    constructor(props) {
        super(props);
        const { auth: { isAuthenticated, isEmailVisitor } } = props;
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            leftPosition: 0,
            search: (isAuthenticated || isEmailVisitor) ? props.query || '' : '',
            hasLoaded: false, isLoading: false,
            results: [], resultsFor: '', total: 0, currentPage: 0, maxPages: 0,
            emailUnlock: '', emailMore: '',
            shouldLoadMore: false,
            hasSearched: false
        };

        this.loadData = this.loadData.bind(this);
        this.onSearchQuery = this.onSearchQuery.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.getMaxItemsNo = this.getMaxItemsNo.bind(this);
    }


    componentWillMount() {
        const { auth } = this.props;
        if (auth.isEmailVisitor || auth.isAuthenticated) {
            return this.getPeople();
        }

        this.getPeople();
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
        this.setState({
            lastQuery: query,
            search: query,
        });
        this.getPeople(query);
        this.setState({ lastQuery: query });
    }


    loadData(search) {
        this.props.fetchTalentsRequest({ search, limit: 12 });
    }

    isLockable() {
        const { auth: { isAuthenticated, isEmailVisitor } } = this.props;
        return !isAuthenticated && !isEmailVisitor;
    }

    isLocked() {
        return getNumSearches() && this.isLockable();
    }


    logSearch(page = 1) {
        const { auth: { isAuthenticated, isEmailVisitor } } = this.props;
        const { search } = this.state;
        if (search && (isAuthenticated || isEmailVisitor)) {
            axios.post(ENDPOINT_LOG_SEARCH, { search, page }).then(res => {
            }).catch(err => {
                console.error(`Failed to log search: ${search}`);
            });
        }
    }


    getPeople(query) {
        const searchQuery = query || this.state.search;
        const nextPage = this.state.hasLoaded && searchQuery === this.state.resultsFor ? (this.state.currentPage + 1) : 0;
        if (searchQuery) {
            this.logSearch(nextPage + 1); // Add 1 because Algolia pages are zero indexed
        }

        let self = this;
        self.setState({
            isLoading: true,
            hasLoaded: searchQuery === this.state.resultsFor ? this.state.hasLoaded : false,
            shouldLoadMore: false, hasSearched: this.state.hasSearched || !!searchQuery
        });

        const resultsPerPage = this.isLockable() ? 12 : 50;

        algoliaUtils.index.search(
            {
                query: searchQuery,
                hitsPerPage: resultsPerPage,
                page: nextPage,
            },
            (err, content) => {
                if (err) {
                    self.setState({
                        isLoading: false,
                        hasLoaded: searchQuery === this.state.resultsFor ? this.state.hasLoaded : false
                    });
                } else {
                    if (content.query === self.state.search) {
                        self.setState({
                            results: [...(content.query === this.state.resultsFor ? this.state.results : []), ...(content.hits || [])].map(item => {
                                return item.profile && item.profile.skills ? {
                                    ...item,
                                    profile: {
                                        ...item.profile,
                                        skills: _.orderBy(
                                            (item.profile.skills || []).map((skill, idx) => {
                                                return {
                                                    ...skill,
                                                    rank: item._highlightResult.profile.skills[idx].name.matchedWords.length
                                                };
                                            }),
                                            ['rank', 'name'], ['desc', 'asc']
                                        )
                                    }
                                } : item;
                            }),
                            resultsFor: content.query,
                            isLoading: false,
                            hasLoaded: true,
                            total: content.nbHits,
                            maxPages: content.nbPages,
                            currentPage: content.page
                        });
                    }
                }
            }
        );
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
        const { results, total, isLoading, hasLoaded, currentPage, maxPages } = this.state;
        const talents = results || [];
        const { is, query } = this.props;
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

        const lastQuery = this.state.lastQuery || query;

        return (
            <section className="TalentPool">
                <h4 className="text-primary size-16 text-uppercase font-weight-bold">
                    TALENT POOL
                </h4>
                <div className="TalentPool__search-form">
                    <TalentSearch query={lastQuery} onSearchQuery={this.onSearchQuery}/>
                </div>
                <div className="TalentPool__container">
                    {
                        !talents.length && hasLoaded &&
                        <div className="TalentPool__empty-state text-danger">
                            No results found for '{lastQuery}'
                            <Icon className="text-primary mt-3" name="search-alt" size='lg'/>
                        </div>
                    }
                    {
                        !hasLoaded
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
                                            <li
                                                key={i}
                                                className="TalentPool__row"
                                            >
                                                {
                                                    members.map(
                                                        (member, j) => (
                                                            <div
                                                                className="TalentPool__item"
                                                                key={j}>
                                                                <Talent query={lastQuery} talent={member}/>
                                                            </div>
                                                        )
                                                    )}
                                            </li>
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
