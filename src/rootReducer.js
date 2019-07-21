import { combineReducers } from 'redux';
import talentCombineReducer from 'services/talents/reducers';
import vlogCombineReducer from 'services/vlogs/reducers';
import TungaReducers from "./reducers";

const appReducer = combineReducers({
    talents: talentCombineReducer,
    vlogs: vlogCombineReducer,
    ...TungaReducers
});

export default appReducer;
