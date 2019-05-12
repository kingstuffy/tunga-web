import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Home.scss";
import Footer from "../layout/Footer/Footer";
import { Route } from "react-router-dom";
import Header from "../layout/Header/Header";
import IconButton from "../shared/core/IconButton";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <Header />
                <div>
                    {this.props.childRoutes.map((route, i) => {
                        return <Route exact={route.exact} key={i}
                                      render={props => (<route.component name={route.name} {...props} />)}
                                      path={route.path}/>;
                    })
                    }
                </div>
                <Footer/>
                <div className="position-fixed icon-chat-bottom bg-primary">
                    <IconButton name="chat" size="xs" className="text-white" />
                </div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
