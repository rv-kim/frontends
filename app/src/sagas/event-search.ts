import { delay } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { EventSearchType, ready, searchEnd } from '../modules/event-search'
import EventSearchAPI from '../api/client/event-search'

export function* initSaga() {
  yield call(delay, 50)
  try {
    const {data} = yield call(EventSearchAPI.init)
    yield put(ready(data))
  }
  catch(e) {
    yield put(ready(e))
  }
}

function* searchSaga() {
  try {
    const {data} = yield call(EventSearchAPI.search)
    yield put(searchEnd(data))
  }
  catch(e) {
    yield put(searchEnd(e))
  }
}

export default function* () {
  yield all([
    takeEvery(EventSearchType.SEARCH_START, searchSaga)
  ])
}
