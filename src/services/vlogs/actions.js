import * as types from './constants';

export const fetchVlogsRequest = (params) => ({
    type: types.FETCH_VLOGS_REQUEST,
    ...params,
});

export const fetchVlogsSuccess = (data) => ({
    type: types.FETCH_VLOGS_SUCCESS,
    data,
});

export const fetchVlogsFailure = message => ({
    type: types.FETCH_VLOGS_FAILURE,
    message,
});


export const viewVlogRequest = id => ({
    type: types.VIEW_VLOG_REQUEST,
    id,
});

export const viewVlogSuccess = vlog => ({
    type: types.VIEW_VLOG_SUCCESS,
    vlog,
});

export const viewVlogFailure = message => ({
    type: types.VIEW_VLOG_FAILURE,
    message,
});
