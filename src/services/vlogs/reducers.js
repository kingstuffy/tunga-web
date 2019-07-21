import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import * as types from './constants';

const initialState = {
    is: {
        fetching: false,
        ok: false,
        error: false,
    },
    list: [],
    message: '',
    messages: {},
};


const vlogsReducer = (state = initialState, action) => {
    let isProps;

    switch (action.type) {
        case types.FETCH_VLOGS_REQUEST:
            isProps = { fetching: true, ok: false, error: false };
            return {
                ...state,
                is: isProps,
            };

        case types.FETCH_VLOGS_SUCCESS:
            isProps = { fetching: false, ok: true, error: false };
            return {
                ...state,
                is: isProps,
                list: action.data,
            };

        case types.FETCH_VLOGS_FAILURE:
            isProps = { fetching: false, ok: false, error: true };
            return {
                ...state,
                is: isProps,
                message: action.message,
            };

        default:
            return state;
    }
};


const vlogCombineReducer = combineReducers({
    vlogs: vlogsReducer,
});

export default vlogCombineReducer;
