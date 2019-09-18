import React, { Component, Suspense } from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Routes, {childRoutes} from "./configs/Routes.conf";
import ShowcaseLayout from "../components/showcase/ShowcaseLayout";

class App extends Component {
    render() {
        const rootProps = this.props;
        return (
            <Switch>
                {childRoutes.map((route, i) => {
                    return (
                        <Route
                            exact={route.exact}
                            key={i}
                            render={props => (
                                <route.component
                                    name={route.name}
                                    childRoutes={route.childRoutes}
                                    {...rootProps}
                                    {...props}
                                />
                            )}
                            path={route.path}
                        />
                    );
                })}
                <Redirect from="/signin" to='/login'/>
                <Redirect exact from="/signup" to='/login'/>
                {/*<Redirect from="/reset-password*" to="/password*"/>*/}
                <Route path="*" render={props => <ShowcaseLayout {...rootProps} {...props}/>} />
            </Switch>
        );
    }
}

export default App;
