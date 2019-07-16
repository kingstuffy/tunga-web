import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchTalentsRequest } from '../../../../services/talents/actions';
import "./TalentPool.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import Loader from "../../../shared/Loader/Loader";
import Talent from "./Talent/Talent";
import TalentSearch from "./TalentSearch/TalentSearch";

class TalentPool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            leftPosition: 0,
        };

        this.loadData = this.loadData.bind(this);
    }


    componentWillMount() {
        this.loadData(this.props);
    }


    loadData(search) {
        this.props.fetchTalentsRequest({ search, limit: 12 });
    }


    getDataPerPage() {
        return [
            {
                breakpoint: 768,
                perPage: 1,
            },
            {
                breakpoint: 992,
                perPage: 3,
            },
            {
                breakpoint: 768000,
                perPage: 5,
            },
        ];
    }


    render() {
        const { talents, is } = this.props;
        const talentsPerRow = parseInt(talents.length / 2, 10);
        const splitTalents = [
            talents.slice(0, talentsPerRow),
            talents.slice(talentsPerRow),
        ];
        const pagination = {
            total: talentsPerRow,
            perPage: this.getDataPerPage()
        };

        return (
            <section className="TalentPool">
                <h4 className="text-primary size-16 text-uppercase font-weight-bold">
                    TALENT POOL
                </h4>
                <div className="TalentPool__search-form">
                    <TalentSearch/>
                </div>
                <div className="TalentPool__container">
                    {
                        is.loading
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
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTalentsRequest: (params) => dispatch(fetchTalentsRequest(params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TalentPool);
