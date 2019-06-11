import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../api';
import has from 'lodash/has';
import * as actions from './actions';
import * as types from './constants';

function* fetchTalents(action) {
    try {
        const response = yield call(api, {
            method: 'get',
            url: 'https://api.myjson.com/bins/984vl',
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
            url: `/orders/talent/${action.talentId}`,
            params: {
                populate: 'addresses',
            },
        });
        yield put(actions.viewTalentSuccess(response.data.data));
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
