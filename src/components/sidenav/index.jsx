import React from 'react';
import { kebabCase } from 'lodash';

import "./sidenav.scss";

class SideNav extends React.Component {

    constructor(props) {
        super(props)
        this.hideLabelsTimer = null;
        this.showActiveLabelTimer = null;
        this.observer = null;
        this.observed = [];
        this.triggerRender = true;
        this.state = {
            pages: this.props.pages
        }

        this.addObservers = this.addObservers.bind(this);
    }

    componentDidMount() {
        this.observer = new IntersectionObserver(this.observerCallback, { threshold: 0.7 });
        setTimeout(this.addObservers, 200);
    }

    componentWillUnmount() {
        clearTimeout(this.addObservers);
        clearTimeout(this.hideLabelsTimer);
    }

    addObservers() {
        this.addObserverToTargets();
        this.showLabel();
    }

    observerCallback = (entries, _observer) => {
        const activeTargets = entries.map((entry) => {
            if (entry.intersectionRatio > 0) {
                return entry.target.id;
            }
            return entry.target
        });

        if (activeTargets.length !== this.props.pages.length) {
            const activeHash = activeTargets[0];
            const page = this.state.pages.find(obj => {
                return obj.hash === activeHash
            })
            this.observed = [...this.observed, page]

            if (this.triggerRender) {
                this.triggerRender = false;
                this.showLabel();
            }

            this.addObserverToTargets();
        }

    }

    addObserverToTargets = () => {
        const pages = this.state.pages.map((anc) => {
            const target = document.getElementById(anc.hash);

            if (target && !anc.isObserved) {
                this.observer.observe(target);
                return { ...anc, isObserved: true }
            }

            return anc;
        });
        this.setState({ pages })
    }

    showLabel = () => {
        this.showActiveLabelTimer = setTimeout(() => {
            this.triggerRender = true;
            const active = this.observed[this.observed.length - 1]
            const pages = this.state.pages.map((obj, page) => {
                return page === this.props.currentPage
                    ? { ...obj, isActive: true, isActiveBar: true } : { ...obj, isActive: false, isActiveBar: false };
            });
            this.setState({ pages });
            this.hideLabels();
        }, 200);
    }

    hideLabels() {
        this.hideLabelsTimer = setTimeout(() => {
            const pages = this.state.pages.map(obj => {
                return { ...obj, isActive: false };
            });
            this.setState({ pages });
        }, 2500);
    }


    handleClick = (pageNumber) => (event) => {
        this.props.goToPage(pageNumber);
        event.preventDefault();
    }

    render() {
        const theme = this.state.pages[this.props.currentPage].theme;
        return (
            <div className={`side-bar side-bar--${theme}`}>
                <ul>
                    {
                        this.state.pages.map((anc, index) => (
                            <li className="side-bar-item" key={kebabCase(anc.title)}>
                                <div className={`side-bar-tab
                                ${this.props.currentPage === index ? "side-bar-tab-active"
                                    : "side-bar-tab-hidden"
                                    }`}>
                                </div>
                                <a style={{ width: `${anc.title.length * 8}px` }}
                                   className={`side-bar-label font-weight-bold
                ${anc.isActive ? "side-bar-label-active"
                                       : "side-bar-label-hidden"}`}
                                   href={`#${kebabCase(anc.title)}`}
                                   data-value={kebabCase(anc.title)}
                                   onClick={this.handleClick(index)}
                                >
                                    {anc.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default SideNav;
