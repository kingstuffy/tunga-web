import { all } from 'redux-saga/effects';
import * as talentSaga from './services/talents/sagas';
import * as vlogSaga from './services/vlogs/sagas';

export default function* rootSaga() {
    yield all([
        talentSaga.fetchTalentsSaga(),
        talentSaga.viewTalentSaga(),
        vlogSaga.fetchVlogsSaga(),
    ]);
}
