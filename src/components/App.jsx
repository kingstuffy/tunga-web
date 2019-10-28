import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {LOCATION_CHANGE} from 'react-router-redux';
import Media from "react-media";

import connect from '../connectors/AuthConnector';

import store from '../store';

import DashboardLayout from './dashboard/DashboardLayout';
//import ChatWidget from "./chat/ChatWidget";
//import LegacyRedirect from './showcase/LegacyRedirect';
import BootLogo from "./core/BootLogo";
//import ShowcaseLayout from "./showcase/ShowcaseLayout";
import NewShowcaseLayout from "../latest-landing/App";
import Button from "./core/Button";

import {
    getCookieConsent,
    getCookieConsentCloseAt,
    openCookieConsentPopUp,
    setCookieConsentCloseAt
} from "./utils/consent";


class App extends React.Component {

    constructor(props) {
        super(props);

        const {Auth: {user}} = this.props;

        this.state = {
            hasVerified: user && user.id,
            showProgress: !user || !user.id, // Used to prevent flickering
            showConsentAlert: !getCookieConsentCloseAt() && !getCookieConsent()
        };
    }

    componentDidMount() {
        const {Auth} = this.props;
        if (!this.state.hasVerified && !Auth.isVerifying) {
            this.props.AuthActions.verify();
        }

        if (this.state.showProgress) {
            // Wait one second to prevent flickering
            let self = this;
            setTimeout(() => {
                self.setState({showProgress: false});
            }, 1000);
        }
    }

    componentDidUpdate(prevProps) {
        const {Auth} = this.props;
        // TODO: add condition to check props equality
        if (
            prevProps.Auth.isVerifying && !Auth.isVerifying
        ) {
            this.setState({hasVerified: true});
        }

        if (!Auth.isVerifying && prevProps.Auth.isAuthenticated && !Auth.isAuthenticated && Auth.next) {
            window.location.href = Auth.next;
            return;
        }

        if (this.props.location !== prevProps.location) {
            store.dispatch({type: LOCATION_CHANGE});
        }
    }

    onCloseCookieConsent() {
        setCookieConsentCloseAt();
        this.setState({showConsentAlert: !getCookieConsentCloseAt() && !getCookieConsent()});
    }

    onCookieSettings() {
        let self = this;
        openCookieConsentPopUp(consents => {
            self.setState({showConsentAlert: !getCookieConsentCloseAt() && !getCookieConsent()});
        });
    }

    render() {
        const {Auth: {user}, AuthActions, match} = this.props,
            {logout} = AuthActions,
            isAuthAwarePage = /^\/(login|signin|signup|reset-password|start|start-welcome|start-outsource|quiz|customer|join|dashboard|home|projects|task|estimate|network|people|member|payments|profile|settings|onboard|work|proposal)([/?#].*)*/i.test(window.location.pathname),
            isStillLoading = !this.state.hasVerified || this.state.showProgress;

        return (
            isAuthAwarePage && isStillLoading ? (
                <BootLogo/>
            ) : (
                <Media query="(min-width: 992px)">
                    {isLargeDevice => (
                        <div>
                            <Switch>
                                {'dashboard|projects|network|payments|settings|onboard|work|proposal'.split('|').map(path => {
                                    return user && user.id ? (
                                        <Route key={`app-path--${path}`}
                                               path={`/${path}`}
                                               render={props =>
                                                   <DashboardLayout {...props}
                                                                    user={user}
                                                                    logout={logout}
                                                                    AuthActions={AuthActions}
                                                                    isLargeDevice={isLargeDevice}/>}/>
                                    ) : (
                                        <Redirect key={`app-path--${path}`}
                                                  from={`/${path}`} to="/"/>
                                    );
                                })}
                                <Redirect from="/home" to="'/dashboard'"/>
                                <Redirect from="/profile" to="/settings"/>
                                <Redirect from="/people*" to="/network*"/>
                                <Redirect from="/member*" to="/network*"/>
                                <Redirect from="/task*" to="/work*"/>
                                <Redirect from="/estimate*" to="/proposal*"/>
                                {'login|signin|signup|reset-password|start|start-welcome|start-outsource|quiz|customer|join'.split('|').map(path => {
                                    return user && user.id ? (
                                        <Redirect key={`app-path--${path}`}
                                                  from={`/${path}`}
                                                  to="/dashboard"/>
                                    ) : (
                                        <Route key={`app-path--${path}`}
                                               path={path} render={props =>
                                            <NewShowcaseLayout {...props}
                                                               user={user}
                                                               logout={logout}
                                                               isLargeDevice={isLargeDevice}/>}/>
                                    );
                                })}
                                {/*<Route path="/legacy" component={LegacyRedirect} />*/}
                                {['/tunga', '*'].map(path => {
                                    return (
                                        <Route key={`app-path--${path}`}
                                               path={path} render={props =>
                                            <NewShowcaseLayout {...props}
                                                               user={user}
                                                               logout={logout}
                                                               isLargeDevice={isLargeDevice}/>}/>
                                    );
                                })}
                            </Switch>

                            {isStillLoading ? null : (
                                <React.Fragment>
                                    {/*user && (user.is_admin || user.is_project_manager)?null:(
                                        <Switch>
                                            <Route exact path='/customer/help/:channelId' render={props =>
                                                <ChatWidget channelId={props.match.params.channelId} autoOpen={true}/>}/>
                                            <Route path="/join" render={props => {return null}} />
                                            <Route path="*" component={ChatWidget} />
                                        </Switch>
                                    )*/}

                                    {this.state.showConsentAlert ? (
                                        <div id="cookie-consent"
                                             className="clearfix">

                                            <div>
                                                <p id="cookie-consent-text">
                                                    We use cookies to offer you a
                                                    better browsing experience,
                                                    analyze site traffic,
                                                    personalize content, assist with
                                                    our promotional and marketing
                                                    efforts and and provide content
                                                    from third parties.
                                                    Read about how we use cookies
                                                    and how you can control them by
                                                    clicking "Cookie Settings."
                                                    If you continue to use this
                                                    site, you consent to our use of
                                                    cookies.
                                                </p>

                                            </div>
                                            <div
                                                className="consent-actions text-center">
                                                <Button variant="link"
                                                        className="btn"
                                                        onClick={this.onCookieSettings.bind(this)}>Cookie
                                                    Settings</Button>
                                                <Button className="got-it-btn"
                                                        onClick={this.onCloseCookieConsent.bind(this)}>Got
                                                    it!</Button>
                                            </div>
                                        </div>
                                    ) : null}
                                </React.Fragment>
                            )}
                        </div>
                    )}
                </Media>
            )
        );
    }
}

export default connect(App);
