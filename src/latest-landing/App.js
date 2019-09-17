import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "./configs/Routes.conf";
import BootLogo from "../components/core/BootLogo";

class App extends Component {
    loading = () => <BootLogo/>;

    render() {
        return (
            <Suspense fallback={this.loading()}>
                <Switch>
                    {Routes.map((route, i) => {
                        return (
                            <Route
                                exact={route.exact}
                                key={i}
                                render={props => (
                                    <route.component
                                        name={route.name}
                                        childRoutes={route.childRoutes}
                                        {...props}
                                    />
                                )}
                                path={route.path}
                            />
                        );
                    })}
                </Switch>
            </Suspense>
        );
    }
}

export default App;
