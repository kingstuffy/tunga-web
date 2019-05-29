import React, { Component } from "react";
import "./CoreTeam.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import CoreMember from "./CoreMember/CoreMember";

class CoreTeam extends Component {
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
        const { team } = this.props;
        const teamPerRow = parseInt(team.length / 2, 10);
        const splitTeam = [
            team.slice(0, teamPerRow),
            team.slice(teamPerRow),
        ];
        const pagination = {
            total: teamPerRow,
            perPage: this.getDataPerPage()
        };

        return (
            <section className="CoreTeam">
                <h4 className="text-primary size-16 text-uppercase font-weight-light">
                    CORE TEAM
                </h4>
                <div className="CoreTeam__container">
                    <Carousel
                        pagination={pagination}
                        float="float-right"
                        color="text-primary"
                    >
                        <ul className="CoreTeam__list" style={{ left: this.state.leftPosition }}>
                            {splitTeam.map(
                                (members, i) => (
                                    <div
                                        key={i}
                                        className="CoreTeam__row"
                                    >
                                        {
                                            members.map(
                                                (member, j) => (
                                                    <div
                                                        className="CoreTeam__item"
                                                        key={j}>
                                                        <CoreMember member={member}/>
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

CoreTeam.propTypes = {};

export default CoreTeam;
