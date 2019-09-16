import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../api';
import has from 'lodash/has';
import * as actions from './actions';
import * as types from './constants';

function* fetchBlogs(action) {
    console.log(action);
    try {
        const response = yield call(api, {
            method: 'get',
            url: '/medium/',
            params: {
                search: action.search,
                page_size: action.limit,
            },
        });
        yield put(actions.fetchBlogsSuccess(response.data));
    } catch (error) {
        if (has(error, 'response.data.message')) {
            yield put(actions.fetchBlogsFailure(error.response.data.message));
        } else {
            yield put(actions.fetchBlogsFailure(error.message));
        }
    }
}


function* viewBlog(action) {
    try {
        const response = yield call(api, {
            method: 'get',
            url: `/blogs/${action.id}/`,
        });
        console.log(response.data);
        yield put(actions.viewBlogSuccess(response.data));
    } catch (error) {
        if (has(error, 'response.data.message')) {
            yield put(actions.viewBlogFailure(error.response.data.message));
        } else {
            yield put(actions.viewBlogFailure(error.response));
        }
    }
}

export function* fetchBlogsSaga() {
    yield takeLatest(types.FETCH_BLOGS_REQUEST, fetchBlogs);
}

export function* viewBlogSaga() {
    yield takeLatest(types.VIEW_BLOG_REQUEST, viewBlog);
}
