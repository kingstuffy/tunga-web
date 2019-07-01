import { combineReducers } from 'redux';
import talentCombineReducer from 'services/talents/reducers';
import TungaReducers from "./reducers";

const appReducer = combineReducers({
    talents: talentCombineReducer,
    ...TungaReducers
});

export default appReducer;
