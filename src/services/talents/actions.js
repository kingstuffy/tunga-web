import * as types from './constants';

export const fetchTalentsRequest = (params) => ({
    type: types.FETCH_TALENTS_REQUEST,
    ...params,
});

export const fetchTalentsSuccess = (data) => ({
    type: types.FETCH_TALENTS_SUCCESS,
    data,
});

export const fetchTalentsFailure = message => ({
    type: types.FETCH_TALENTS_FAILURE,
    message,
});


export const viewTalentRequest = id => ({
    type: types.VIEW_TALENT_REQUEST,
    id,
});

export const viewTalentSuccess = talent => ({
    type: types.VIEW_TALENT_SUCCESS,
    talent,
});

export const viewTalentFailure = message => ({
    type: types.VIEW_TALENT_FAILURE,
    message,
});
