import React, { Component } from "react";
import "./OurStory.scss";
import Nav from "../../layout/Nav/Nav";
import TeamImg from "../../assets/img/our-team/user.png";

class OursStory extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="OursStory">
                <Nav/>
                <div className="OursStory__body p-3 pl-5 pr-5">
                    <div className="OursStory__core-team">
                        <CoreTeam team={this.state.team}/>
                    </div>
                    <div className="OursStory__talent-pool">
                        <TalentPool talents={this.state.talents}/>
                    </div>
                </div>
                <ScheduleCall/>
            </section>
        );
    }
}

OursStory.propTypes = {};

export default OursStory;
