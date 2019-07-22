// const BACKEND_PATH = __BACKEND_ROOT_URL__ || (__PRODUCTION__ ? (/butterflyworks\.org/ig.test(window.location.hostname) ? 'http://sandbox.tunga.io/' : '/') : 'http://sandbox.tunga.io/');
const BACKEND_PATH = 'http://sandbox.tunga.io/';
const API_PATH = 'api';
const SOCIAL_LOGIN_PATH = 'accounts/social';

export const API_ROOT = `${BACKEND_PATH}${API_PATH}`;

export default {
    url: API_ROOT,
};
