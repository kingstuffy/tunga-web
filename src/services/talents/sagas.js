import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../api';
import has from 'lodash/has';
import * as actions from './actions';
import * as types from './constants';

function* fetchTalents(action) {
    console.log(action);
    try {
        const response = yield call(api, {
            method: 'get',
            url: '/users/',
            params: {
                search: action.search,
                page_size: action.limit,
                account_type: 'developer',
            },
        });
        yield put(actions.fetchTalentsSuccess(response.data.results));
    } catch (error) {
        if (has(error, 'response.data.message')) {
            yield put(actions.fetchTalentsFailure(error.response.data.message));
        } else {
            yield put(actions.fetchTalentsFailure(error.message));
        }
    }
}


function* viewTalent(action) {
    try {
        const response = yield call(api, {
            method: 'get',
            url: `/users/${action.id}/`,
        });
        console.log(response.data);
        yield put(actions.viewTalentSuccess(response.data));
    } catch (error) {
        if (has(error, 'response.data.message')) {
            yield put(actions.viewTalentFailure(error.response.data.message));
        } else {
            yield put(actions.viewTalentFailure(error.response));
        }
    }
}

export function* fetchTalentsSaga() {
    yield takeLatest(types.FETCH_TALENTS_REQUEST, fetchTalents);
}

export function* viewTalentSaga() {
    yield takeLatest(types.VIEW_TALENT_REQUEST, viewTalent);
}
