import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import * as types from './constants';

const initialState = {
    is: {
        fetching: false,
        ok: false,
        error: false,
    },
    blogList: [],
    blog: {},
    message: '',
    messages: {},
};


const blogsReducer = (state = initialState, action) => {
    let isProps;

    switch (action.type) {
        case types.FETCH_BLOGS_REQUEST:
            isProps = { fetching: true, ok: false, error: false };
            return {
                ...state,
                is: isProps,
            };

        case types.FETCH_BLOGS_SUCCESS:
            isProps = { fetching: false, ok: true, error: false };
            return {
                ...state,
                is: isProps,
                blogList: action.data,
            };

        case types.FETCH_BLOGS_FAILURE:
            isProps = { fetching: false, ok: false, error: true };
            return {
                ...state,
                is: isProps,
                message: action.message,
            };


        case types.VIEW_BLOG_REQUEST:
            isProps = { fetching: true, ok: false, error: true };
            return {
                ...state,
                is: isProps,
                addBlogIs: { fetching: false, ok: false, error: false },
            };

        case types.VIEW_BLOG_SUCCESS:
            isProps = { fetching: false, ok: true, error: false };
            return {
                ...state,
                is: isProps,
                blog: action.blog,
            };

        case types.VIEW_BLOG_FAILURE:
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


const blogCombineReducer = combineReducers({
    blogs: blogsReducer,
});

export default blogCombineReducer;
