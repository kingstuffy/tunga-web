import defaults from 'lodash/defaults';
import axios from 'axios';
import apiConfig from './config';

const api = (payload) => {
    const config = defaults(payload, {
        baseURL: apiConfig.url,
        params: {},
        data: {},
    });

    return axios.request(config);
};

export default api;
