import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ImpactSourcing.scss";
import Button from "../../../shared/core/Button";
import ImpactSourcingBg from "../../../assets/img/our-story/impact-sourcing.png";


class ImpactSourcing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            impactLink: 'https://blog.tunga.io/tech-for-good-will-impact-sourcing-be-the-new-fair-trade-61e8c8d3dcce',
        };
    }

    render() {
        return (
            <div className="ImpactSourcing">
                <div className="ImpactSourcing__left">
                    <div className="ImpactSourcing__bg"
                         style={{ backgroundImage: `url(${ImpactSourcingBg})` }}/>
                    <div className="text-white ImpactSourcing__info">
                        <div className="size-14 font-weight-normal mb-2">
                            Tech for good: will impact sourcing be the new fair trade?
                        </div>
                        <div className="size-14 mb-4">
                            End of the week the annual The Next Web Conference will take place in Amsterdam. This
                            year’s edition features a special program for ‘impact startups’, aiming to “shine a
                            spotlight on entrepreneurs and startups that are attacking the world’s most difficult
                            challenges.”
                        </div>
                        <div>
                            <Button
                                size="md"
                                className="btn Hero__cta-btn btn-inverted"
                                variant=""
                                onClick={() => window.open(this.state.impactLink, '_blank')}
                            >
                                Learn more
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="ImpactSourcing__content">
                    <div className="text-primary OurStory__title mb-2 mt-3">
                        IMPACT SOURCING
                    </div>
                    <div className="text-blue OurStory__summary mb-2">
                        Software outsourcing done right
                    </div>
                    <div className="mb-4">
                        Tunga is not a traditional software outsourcing platform. Our way of working is called
                        Impact Sourcing: the deployment of workers from low-employment areas into the processes of
                        businesses worldwide either through outsourcing or by setting up remote or virtual teams
                        using digital technology.
                    </div>
                    <div>
                        It aims to provide higher-income employment and access to new
                        income opportunities to workers that otherwise might not be employed in that particular
                        sector. For example, people in rural areas or in slums, people without access to education
                        or educated individuals in areas of high unemployment.
                    </div>
                </div>
            </div>
        );
    }
}

ImpactSourcing.propTypes = {};
export default ImpactSourcing;
