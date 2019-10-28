import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../api';
import has from 'lodash/has';
import * as actions from './actions';
import * as types from './constants';

function* fetchVlogs(action) {
    console.log(action);
    try {
        const response = yield call(api, {
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAuIXqeLrUkyZhsau0WpAVzWlyuv_P9YE8&channelId=UC_Pl6wmR-t9Zv9z7_s1aWNg&part=snippet,id&order=date&maxResults=20',
            params: {
            },
        });
        yield put(actions.fetchVlogsSuccess(response.data.items));
    } catch (error) {
        if (has(error, 'response.data.message')) {
            yield put(actions.fetchVlogsFailure(error.response.data.message));
        } else {
            yield put(actions.fetchVlogsFailure(error.message));
        }
    }
}

export function* fetchVlogsSaga() {
    yield takeLatest(types.FETCH_VLOGS_REQUEST, fetchVlogs);
}
