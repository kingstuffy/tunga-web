const BACKEND_PATH = __BACKEND_ROOT_URL__ || (__PRODUCTION__ ? (/butterflyworks\.org/ig.test(window.location.hostname) ? 'https://tunga.io/' : '/') : 'https://tunga.io/');
const API_PATH = 'api';
const SOCIAL_LOGIN_PATH = 'accounts/social';

export const API_ROOT = `${BACKEND_PATH}${API_PATH}`;

export default {
    url: API_ROOT,
};
