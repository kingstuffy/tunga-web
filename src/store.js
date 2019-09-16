import { applyMiddleware, createStore, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reduxThunk from "redux-thunk";
import appReducer from './rootReducer';
import rootSaga from './rootSaga';
import startsWith from 'lodash/startsWith';


const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (!__PRODUCTION__) {
    const logger = createLogger({
        collapsed: true,
        predicate: (getState, action) => !startsWith(action.type, '@@redux-form'),
    });
    middlewares.push(logger);
}

const configureStore = () => {
    const rootReducer = combineReducers({
        app: appReducer,
    });
    middlewares.push(reduxThunk)
    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares),
    );

    sagaMiddleware.run(rootSaga);
    return store;
};

const store = configureStore();
export default store;
