import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Info.scss";
import Icon from "../../../shared/core/Icon";
import ProfileImg from "../../../assets/img/our-story/hero-bg.png";
import { Button } from "../../../shared/Form/Form";
import { openCalendlyWidget } from "../../../../components/utils/calendly";


const ShortBio = (({ bio, onBioOpen }) => {
    const splitBio = bio.substring(0, 290).split(' ');
    const shortBio = splitBio.slice(0, splitBio.length - 1).join(' ');

    return (
        <div>
            {shortBio} <a className="Info__bio-link" onClick={onBioOpen}>...Read more</a>
        </div>
    );
});


class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isBioOpen: false
        };

        this.onBioToggle = this.onBioToggle.bind(this);
    }


    onBioToggle() {
        this.setState({ isBioOpen: !this.state.isBioOpen });
    }

    render() {
        const { talent } = this.props;

        return (
            <div className="Info">
                {
                    talent.image
                    &&
                    <img src={talent.image} className="Info__img mb-3"/>
                }
                <div className="size-13 text-primary mb-1">
                    {talent.display_name}
                </div>
                <div className="size-12 mb-3">
                    {talent.profile.city}, {talent.profile.country_name}
                </div>
                <div className="Info__bio-box">
                    {
                        this.state.isBioOpen
                        &&
                        <div className="Info__bio-full">
                            {talent.profile.bio}
                            <div>
                                <a className="Info__bio-link" onClick={this.onBioToggle}>Close bio</a>
                            </div>
                        </div>
                    }
                    <div className="size-13 mb-4">
                        {
                            talent.profile.bio.length < 290
                                ?
                                talent.profile.bio
                                :
                                <ShortBio bio={talent.profile.bio} onBioOpen={this.onBioToggle}/>
                        }
                    </div>
                </div>
                <ul className="Info__skills mb-3">
                    {
                        talent.profile.skills.map((skill) => (
                            <li className="Info__skill-item" key={skill.id}>
                                <div className="Info__skill">
                                    {skill.name}
                                </div>
                            </li>
                        ))
                    }
                    <li className="clearfix"></li>
                </ul>
                <div className="Info__cta">
                    <Button onClick={() => openCalendlyWidget()}>
                        Hire {talent.first_name}
                    </Button>
                </div>
            </div>
        );
    }
}

Info.propTypes = {};

export default Info;
