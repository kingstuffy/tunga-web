import React from 'react';
import { kebabCase } from 'lodash';

import "./sidenav.scss";

class SideNav extends React.Component {

    constructor(props) {
        super(props)
        this.hideLabelsTimer = null;
        this.showActiveLabelTimer = null;
        this.state = {
            pages: this.props.pages
        };
    }


    componentDidMount() {
        this.showLabel();
    }


    componentWillUnmount() {
        clearTimeout(this.addObservers);
        clearTimeout(this.hideLabelsTimer);
        clearTimeout(this.showActiveLabelTimer);
    }


    showLabel = () => {
        this.showActiveLabelTimer = setTimeout(() => {
            const pages = this.state.pages.map((obj, page) => {
                return page === this.props.currentPage
                    ? { ...obj, isActive: true, isActiveBar: true } : { ...obj, isActive: false, isActiveBar: false };
            });
            this.setState({ pages });
            this.hideLabels();
        }, 200);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.showLabel();
        }
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
                                ${anc.isActiveBar ? "side-bar-tab-active"
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
