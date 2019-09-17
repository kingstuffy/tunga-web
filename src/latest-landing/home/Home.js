import React, { Component } from "react";
import "./Home.scss";
import { Route } from "react-router-dom";
//import ChatWidget from "../shared/ChatWidget/ChatWidget";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            isMobile: false,
        };

        this.isMobile = this.isMobile.bind(this);
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
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            isMobile: this.isMobile(window.innerWidth),
        });
    }


    isMobile(windowWidth) {
        return typeof windowWidth !== 'undefined' && windowWidth <= 992;
    }


    render() {
        return (
            <div className="Home">
                <div>
                    {this.props.childRoutes.map((route, i) => {
                        return (
                            <Route
                                exact={route.exact}
                                key={i}
                                render={props => (
                                    <route.component
                                        name={route.name}
                                        {...{ isMobile: this.state.isMobile, ...props }}
                                    />
                                )}
                                path={route.path}
                            />
                        );
                    })}
                </div>
                {/*<ChatWidget autoOpen={true}/>*/}
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
