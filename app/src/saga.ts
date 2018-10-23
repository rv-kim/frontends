import createSagaMiddleware, {SagaMiddleware} from 'redux-saga'
import * as Sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default {
  get: (): SagaMiddleware<{}> => sagaMiddleware,
  run: (saga) => sagaMiddleware.run(saga),
  start: (): void => {
    for(let saga in Sagas) {
      sagaMiddleware.run(Sagas[saga])
    }
  },
}
