import React, { Component } from "react";
import "./TalentPool.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import Talent from "./Talent/Talent";

class TalentPool extends Component {
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
        const { talents } = this.props;
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
                <h4 className="text-primary size-16 text-uppercase font-weight-light">
                    TALENT POOL
                </h4>
                <div className="TalentPool__container">
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
                </div>
            </section>
        );
    }
}

TalentPool.propTypes = {};

export default TalentPool;