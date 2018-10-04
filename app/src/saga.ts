import createSagaMiddleware, {SagaMiddleware} from 'redux-saga'

import CommonSaga from './sagas/common'
import EventSearchSaga from './sagas/event-search'

export default () => {
  const sagaMiddleware = createSagaMiddleware()

  return {
    get: (): SagaMiddleware<{}> => sagaMiddleware,
    runs: (): void => {
      sagaMiddleware.run(CommonSaga)
      sagaMiddleware.run(EventSearchSaga)
    },
  }
}
