import React, { Component } from "react";
import { connect } from "react-redux";
import "./Vlog.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import Icon from "../../../shared/core/Icon";
import VlogVideo from './VlogVideo/VlogVideo';

import { fetchVlogsRequest } from '../../../../services/vlogs/actions';


class Vlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            leftPosition: 0,
            selectedVlog: null
        };

        this.onVlogClick = this.onVlogClick.bind(this);
        this.onVideoClose = this.onVideoClose.bind(this);
    }


    onVlogClick(vlog) {
        this.setState({ selectedVlog: vlog });
    }


    onVideoClose() {
        this.setState({ selectedVlog: false });
    }


    componentWillMount() {
        this.loadData();
    }


    loadData() {
        this.props.fetchVlogsRequest({ limit: 12 });
    }


    getDataPerPage() {
        return [
            {
                breakpoint: 992,
                perPage: 1,
            },
            {
                breakpoint: 768000,
                perPage: 2,
            },
        ];
    }


    render() {
        const { vlogs } = this.props;
        const vlogsPerRow = parseInt(vlogs.length / 2, 10);
        const splitVlogs = [
            vlogs.slice(0, vlogsPerRow),
            vlogs.slice(vlogsPerRow),
        ];
        const pagination = {
            total: vlogsPerRow,
            perPage: this.getDataPerPage()
        };
        const classModifier = this.state.selectedVlog ? 'has-selection' : '';

        return (
            <section className={`Vlog Vlog--${classModifier}`}>
                <div className="Vlog__heading font-weight-bold">
                    VLOGS
                </div>
                <div className="Vlog__container">
                    <Carousel
                        pagination={pagination}
                        float="float-right v_pagination"
                        color="text-primary"
                    >
                        <ul className="Vlog__list" style={{ left: this.state.leftPosition }}>
                            {splitVlogs.map(
                                (vlogs, i) => (
                                    <div
                                        key={i}
                                        className="Vlog__row"
                                    >
                                        {
                                            vlogs.map(
                                                (vlog, j) => (
                                                    <div
                                                        className="Vlog__item"
                                                        key={j}
                                                        onClick={() => this.onVlogClick(vlog)}
                                                        style={{ backgroundImage: `url(${vlog.snippet.thumbnails.high.url})`}}>
                                                        <div className="Vlog__item-container">
                                                            <div className="Vlog__title">
                                                                {vlog.snippet.title}
                                                            </div>
                                                            <a className="Vlog__cta">
                                                                <Icon
                                                                    name="youtube-play"
                                                                    size="card"
                                                                    className="Vlog__icon"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="Vlog__bg-mask"></div>
                                                    </div>
                                                )
                                            )}
                                    </div>
                                )
                            )}
                        </ul>
                    </Carousel>
                </div>
                {
                    this.state.selectedVlog
                    &&
                    <div className="Vlog__video">
                        <VlogVideo vlog={this.state.selectedVlog} onVideoClose={this.onVideoClose}/>
                    </div>
                }
            </section>
        );
    }
}

Vlog.propTypes = {};


const mapStateToProps = state => ({
    is: state.app.vlogs.vlogs.is,
    vlogs: state.app.vlogs.vlogs.list,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchVlogsRequest: (params) => dispatch(fetchVlogsRequest(params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vlog);
