import React, { Component } from "react";
import "./Home.scss";
import { Route } from "react-router-dom";
import ChatWidget from "../shared/ChatWidget/ChatWidget";

class Home extends Component {
    constructor(props) {
        super(props);
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
                                        {...props}
                                    />
                                )}
                                path={route.path}
                            />
                        );
                    })}
                </div>
                <ChatWidget autoOpen={true}/>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
