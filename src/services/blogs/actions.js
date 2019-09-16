import * as types from './constants';

export const fetchBlogsRequest = (params) => ({
    type: types.FETCH_BLOGS_REQUEST,
    ...params,
});

export const fetchBlogsSuccess = (data) => ({
    type: types.FETCH_BLOGS_SUCCESS,
    data,
});

export const fetchBlogsFailure = message => ({
    type: types.FETCH_BLOGS_FAILURE,
    message,
});


export const viewBlogRequest = id => ({
    type: types.VIEW_BLOG_REQUEST,
    id,
});

export const viewBlogSuccess = blog => ({
    type: types.VIEW_BLOG_SUCCESS,
    blog,
});

export const viewBlogFailure = message => ({
    type: types.VIEW_BLOG_FAILURE,
    message,
});
