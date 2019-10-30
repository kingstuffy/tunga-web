
let BACKEND_PATH = 'https://sandbox.tunga.io/'; //__BACKEND_ROOT_URL__ || (__PRODUCTION__ ? (/butterflyworks\.org/ig.test(window.location.hostname) ? 'https://tunga.io/' : '/') : 'https://sandbox.tunga.io/');
let API_PATH = 'api';
let SOCIAL_LOGIN_PATH = 'accounts/social';

export const API_ROOT = `${BACKEND_PATH}${API_PATH}`;

export default {
    url: API_ROOT,
};
