import { combineReducers } from 'redux';
import talentCombineReducer from 'services/talents/reducers';

const appReducer = combineReducers({
  talents: talentCombineReducer,
});

export default appReducer;
