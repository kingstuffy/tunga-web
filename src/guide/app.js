import 'babel-polyfill'; // Add Promises polyfill to global environment

//Import local css
import 'react-widgets/lib/less/react-widgets.less';
import '../scss/guide.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import Guide from './components/Guide';

import store from '../store';
import * as Sentry from "@sentry/browser";


if (__PRODUCTION__) {
    // Configure raven
    Sentry.init({dsn: "https://8cd3a4f7109d4830b770c5752960624c@sentry.io/1806596"});
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Guide/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('guide-root'),
);
