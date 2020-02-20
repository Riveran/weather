import { put, takeLatest, all } from 'redux-saga/effects';
import { AUTOCOMPLETE_DATA_RECEIVED, GET_AUTOCOMPLETE_DATA } from '../constants';
import {} from '../actions/actions'



function* fetchNews() {
  const json = yield fetch('https://api.myjson.com/bins/fdrjk')
        .then(response => response.json(), );    
  yield put({ type: AUTOCOMPLETE_DATA_RECEIVED, payload: json });
}
function* actionWatcher() {
    yield takeLatest(GET_AUTOCOMPLETE_DATA, fetchNews)
}
export default function* rootSaga() {
  yield all([
  actionWatcher(),
  ]);
}