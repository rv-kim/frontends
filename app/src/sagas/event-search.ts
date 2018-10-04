import { all, call, put, takeEvery } from 'redux-saga/effects'
import { EventSearchType, initEnd } from '../modules/event-search'
import EventSearchAPI from '../api/client/event-search'

function* initSaga() {
  try {
    const {data} = yield call(EventSearchAPI.init)
    yield put(initEnd(data))
  }
  catch(e) {
    yield put(initEnd(e))
  }
}

export default function* () {
  yield all([
    takeEvery(EventSearchType.INIT_START, initSaga),
  ])
}
