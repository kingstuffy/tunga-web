import React, { Component } from "react";
import "./Vlog.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import Icon from "../../../shared/core/Icon";

class Vlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            leftPosition: 0,
        };
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

        return (
            <section className="Vlog">
                <div className="Vlog__heading">
                    VLOGS
                </div>
                <div className="Vlog__container">
                    <Carousel
                        pagination={pagination}
                        float="float-right"
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
                                                        style={{ backgroundImage: `url(${vlog.imgUrl})` }}>
                                                        <div className="Vlog__item-container">
                                                            <div className="Vlog__title">
                                                                {vlog.title}
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
            </section>
        );
    }
}

Vlog.propTypes = {};

export default Vlog;
