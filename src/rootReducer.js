import { combineReducers } from 'redux';
import talentCombineReducer from 'services/talents/reducers';
import vlogCombineReducer from 'services/vlogs/reducers';
import blogCombineReducer from 'services/blogs/reducers';
import TungaReducers from "./reducers";

const appReducer = combineReducers({
    talents: talentCombineReducer,
    vlogs: vlogCombineReducer,
    blogs: blogCombineReducer,
    ...TungaReducers
});

export default appReducer;
