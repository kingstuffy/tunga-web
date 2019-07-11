import React, { Component } from "react";
import "./Carousel.scss";
import Icon from "../core/Icon";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            windowWidth: 0,
            windowHeight: 0,
            leftPosition: 0,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }


    updateWindowDimensions() {
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
    }


    updatePage(current) {
        this.setState({ current });

        if (typeof this.props.onPageChange === 'function') {
            this.props.onPageChange(current);
        }
    }


    getLeftPosition({ perPage }) {
        const leftPosition = `-${(100 / perPage * (this.state.current - 1))}%`;
        return leftPosition;
    }


    hasNext({ pagination, perPage }) {
        return this.state.current <= pagination.total - parseInt(perPage, 10);
    }


    getDataPerPage({ pagination }) {
        const windowWith = this.state.windowWidth;
        const perPage = pagination.perPage.sort((a, b) => {
            return a.breakpoint - b.breakpoint;
        });

        return perPage.reduce((dataPerPage, data) => {
            if (dataPerPage) {
                return dataPerPage;
            }
            console.log(data.perPage);
            return windowWith <= data.breakpoint ? data.perPage : 0;
        }, 0);
    }


    render() {
        const { pagination, color, children, float } = this.props;
        const perPage = this.getDataPerPage({ pagination });
        const leftPosition = this.getLeftPosition({ perPage });

        const hasNext = this.hasNext({ pagination, perPage });
        const hasPrevious = this.state.current !== 1;

        return (
            <div className="Carousel">
                <div className={`${float} Carousel__pagination`}>
                    <Icon
                        onClick={() => hasPrevious && this.updatePage(this.state.current - 1)}
                        className={`${hasPrevious ? color : "text-gray"} mr-3`}
                        name="previous"
                        size="md"
                    />
                    &nbsp;
                    <Icon
                        onClick={() => hasNext && this.updatePage(this.state.current + 1)}
                        className={hasNext ? color : 'text-gray'}
                        name="next"
                        size="md"
                    />
                </div>
                <span className="clearfix"/>
                <div className="Carousel__container" style={{ left: leftPosition }}>
                    {children}
                </div>
            </div>
        );
    }
}

Carousel.propTypes = {};

export default Carousel;
