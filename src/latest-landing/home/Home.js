import React, { Component } from "react";
import "./Home.scss";
import { Route } from "react-router-dom";
import IconButton from "../shared/core/IconButton";
import ChatWidget from "../shared/ChatWidget/ChatWidget";
import ShowcaseLayout from "../../components/showcase/ShowcaseLayout";
import App from "../../components/App";

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
                    <Route path="/(privacy|agreement|code-of-conduct)" component={App} />
                </div>
                <ChatWidget autoOpen={true}/>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
