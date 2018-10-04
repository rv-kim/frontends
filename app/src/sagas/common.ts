import { all, call, put, takeEvery } from 'redux-saga/effects'

function* loadingSaga() {
}

export default function* () {
  yield all([
    takeEvery('common/loading', loadingSaga),
  ])
}
