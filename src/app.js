import 'babel-polyfill'; // Add Promises polyfill to global environment

//Import local css
import 'react-widgets/lib/less/react-widgets.less';
import './scss/tunga.scss';
import './latest-landing/assets/fonts/fonts.css';
import './latest-landing/assets/scss/landing.scss'; // added by Kazeem

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './store';

/****
 * Latest landing is created as a new front with all needed files inclusive. currently leverage on root app files in
 * 1. Templates folder
 * 2. Scss Folder
 * After design has been approved, Merging the old app.js commented
 * to the new app.js will be done but for the sake of backward compatibility
 * to enable easy development. this is used.
 * File folder have underscore as prefix are screens for template_1
import App from "./latest-landing/App";
 */

import App from './components/App';
import * as Sentry from "@sentry/browser";


if (__PRODUCTION__) {
    // Configure raven
    Sentry.init({dsn: "https://8cd3a4f7109d4830b770c5752960624c@sentry.io/1806596"});
}


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app-root'),
);
