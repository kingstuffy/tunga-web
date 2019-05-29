import 'babel-polyfill'; // Add Promises polyfill to global environment

if (__PRODUCTION__) {
    // Configure raven
    Raven.config(
        'https://3b4b870154ce496c9d3dd9673a529bb9@sentry.io/121717',
    ).install();
}

//Import local css
import 'react-widgets/lib/less/react-widgets.less';
import './scss/tunga.scss';
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
 * After design has been approved, Merging the old app.js commented to the new app.js will be done but for the sake of backward compatibility
 * to enable easy development. this is used.
 * File folder have underscore as prefix are screens for template_1
 */
import App from "./latest-landing/App";

// import App from './components/App'; // commented to test new app design

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app-root'),
);
