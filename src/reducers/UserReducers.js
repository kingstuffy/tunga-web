import { combineReducers } from 'redux';
import * as UserActions from '../actions/UserActions';
import * as ConnectionActions from '../actions/ConnectionActions';
import { getIds } from '../utils/reducers';

function user(state = {}, action) {
    switch (action.type) {
        case UserActions.RETRIEVE_USER_SUCCESS:
            return action.user;
        case UserActions.RETRIEVE_USER_START:
        case UserActions.RETRIEVE_USER_FAILED:
            return {};
        default:
            return state;
    }
}

function users(state = {}, action) {
    switch (action.type) {
        case UserActions.LIST_USERS_SUCCESS:
        case UserActions.LIST_MORE_USERS_SUCCESS:
            var all_users = {};
            action.items.forEach((user) => {
                all_users[user.id] = user;
            });
            return {...state, ...all_users};
        case UserActions.LIST_USERS_START:
        case UserActions.LIST_USERS_FAILED:
            return {};
        case ConnectionActions.CREATE_CONNECTION_SUCCESS:
            var user = state[action.connection.to_user];
            user.can_connect = false;
            user.connection =  action.connection;
            var new_ref = {};
            new_ref[user.id] = user;
            return {...state, ...new_ref};
        case ConnectionActions.UPDATE_CONNECTION_SUCCESS:
            user = state[action.connection.from_user];
            user.can_connect = false;
            user.connection =  action.connection;
            if(action.connection.responded) {
                user.request = null;
            }
            new_ref = {};
            new_ref[user.id] = user;
            return {...state, ...new_ref};
        case ConnectionActions.DELETE_CONNECTION_SUCCESS:
            if(action.user)  {
                user = state[action.user.id];
                user.can_connect = false;
                user.request = null;
                user.connection = null;
                new_ref = {};
                new_ref[user.id] = user;
                return {...state, ...new_ref};
            }
            return state;
        default:
            return state;
    }
}

function ids(state = [], action) {
    switch (action.type) {
        case UserActions.LIST_USERS_SUCCESS:
            return getIds(action.items);
        case UserActions.LIST_MORE_USERS_SUCCESS:
            return [...state, ...getIds(action.items)];
        case UserActions.LIST_USERS_START:
        case UserActions.LIST_USERS_FAILED:
            return [];
        case ConnectionActions.DELETE_CONNECTION_SUCCESS:
            if(action.user && action.hide) {
                var idx = state.indexOf(action.user.id);
                if(idx > -1) {
                    return [...state.slice(0, idx), ...state.slice(idx+1)];
                }
            }
            return state;
        default:
            return state;
    }
}

function next(state = null, action) {
    switch (action.type) {
        case UserActions.LIST_USERS_SUCCESS:
        case UserActions.LIST_MORE_USERS_SUCCESS:
            return action.next;
        default:
            return state;
    }
}

function previous(state = null, action) {
    switch (action.type) {
        case UserActions.LIST_USERS_SUCCESS:
        case UserActions.LIST_MORE_USERS_SUCCESS:
            return action.previous;
        default:
            return state;
    }
}

function count(state = null, action) {
    switch (action.type) {
        case UserActions.LIST_USERS_SUCCESS:
            return action.count;
        case UserActions.LIST_USERS_START:
        case UserActions.LIST_USERS_FAILED:
            return 0;
        default:
            return state;
    }
}

function isFetching(state = false, action) {
    switch (action.type) {
        case UserActions.LIST_USERS_START:
            return true;
        case UserActions.LIST_USERS_SUCCESS:
        case UserActions.LIST_USERS_FAILED:
            return false;
        default:
            return state;
    }
}

function isFetchingMore(state = false, action) {
    switch (action.type) {
        case UserActions.LIST_MORE_USERS_START:
            return true;
        case UserActions.LIST_MORE_USERS_SUCCESS:
        case UserActions.LIST_MORE_USERS_FAILED:
            return false;
        default:
            return state;
    }
}

function isRetrieving(state = false, action) {
    switch (action.type) {
        case UserActions.RETRIEVE_USER_START:
            return true;
        case UserActions.RETRIEVE_USER_SUCCESS:
        case UserActions.RETRIEVE_USER_FAILED:
            return false;
        default:
            return state;
    }
}

const detail = combineReducers({
    user,
    isRetrieving
});

const list = combineReducers({
    users,
    ids,
    isFetching,
    isFetchingMore,
    next,
    previous,
    count
});

const User = combineReducers({
    detail,
    list
});

export default User;
