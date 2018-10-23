
import { SessionReducer, SessionState, SessionSerialize, SessionDeserialize } from './modules/session'
import { EventSearchReducer, EventSearchState, EventSearchSerialize, EventSearchDeserialize } from './modules/event-search'

export interface ApplicationState {
  session: SessionState
  eventSearch: EventSearchState
}

export const serializeState = (state: ApplicationState): any => {
  return {
    session: SessionSerialize(state.session),
    eventSearch: EventSearchSerialize(state.eventSearch),
  }
}

export const deserializeState = (state: ApplicationState): ApplicationState => {
  if (!state) return state
  return {
    session: SessionDeserialize(state.session),
    eventSearch: EventSearchDeserialize(state.eventSearch),
  }
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  session: SessionReducer,
  eventSearch: EventSearchReducer,
})


// ==========================================================================================================


import { Store, Reducer, createStore, combineReducers, applyMiddleware } from 'redux'
import sagaMiddleware from './saga'


const bindMiddleware = (middlewares) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middlewares))
  }
  return applyMiddleware(...middlewares)
}

export default function (state: ApplicationState): Store<ApplicationState> {

  const store: Store<ApplicationState> = createStore(
    reducers,
    state,
    bindMiddleware([sagaMiddleware.get()]),
  )

  sagaMiddleware.start()

  return store
}
