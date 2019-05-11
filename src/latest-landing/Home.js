import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Home.scss";
import Nav from "./layout/Nav/Nav";
import Footer from "./layout/Footer/Footer";
import { Route } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <Nav />
                <div>
                    {this.props.childRoutes.map((route, i) => {
                        return <Route exact={route.exact} key={i}
                                      render={props => (<route.component name={route.name} {...props} />)}
                                      path={route.path}/>;
                    })
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
