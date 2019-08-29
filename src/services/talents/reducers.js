import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import * as types from './constants';

const initialState = {
    is: {
        fetching: false,
        ok: false,
        error: false,
    },
    talentList: [],
    talent: {
        projects: [],
        work: [],
    },
    message: '',
    messages: {},
};


const talentsReducer = (state = initialState, action) => {
    let isProps;

    switch (action.type) {
        case types.FETCH_TALENTS_REQUEST:
            isProps = { fetching: true, ok: false, error: false };
            return {
                ...state,
                is: isProps,
            };

        case types.FETCH_TALENTS_SUCCESS:
            isProps = { fetching: false, ok: true, error: false };
            return {
                ...state,
                is: isProps,
                talentList: action.data,
            };

        case types.FETCH_TALENTS_FAILURE:
            isProps = { fetching: false, ok: false, error: true };
            return {
                ...state,
                is: isProps,
                message: action.message,
            };


        case types.VIEW_TALENT_REQUEST:
            isProps = { fetching: true, ok: false, error: true };
            return {
                ...state,
                is: isProps,
                addTalentIs: { fetching: false, ok: false, error: false },
            };

        case types.VIEW_TALENT_SUCCESS:
            isProps = { fetching: false, ok: true, error: false };
            return {
                ...state,
                is: isProps,
                talent: action.talent,
            };

        case types.VIEW_TALENT_FAILURE:
            isProps = { fetching: false, ok: false, error: true };
            return {
                ...state,
                is: isProps,
                message: action.message,
            };

        case types.REMOVE_FIELD_ERROR: {
            const messages = { ...omit(state.messages, action.field) };
            return {
                ...state,
                messages,
            };
        }

        default:
            return state;
    }
};


const talentCombineReducer = combineReducers({
    talents: talentsReducer,
});

export default talentCombineReducer;
