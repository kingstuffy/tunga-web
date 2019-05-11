import React, {Component, Suspense} from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Routes from './configs/Routes.conf'


class App extends Component {

    loading = () => <div>Loading...</div>;

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Suspense fallback={this.loading()}>
                        <Switch>
                            {Routes.map((route, i) => {
                                return <Route exact={route.exact} key={i} render={(props) => (
                                    <route.component name={route.name} childRoutes={route.childRoutes} {...props} />)}
                                              path={route.path}/>;
                            })
                            }
                        </Switch>
                    </Suspense>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
