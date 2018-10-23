import { Reducer } from 'redux'

// ---
// Types

export const SessionType = {
  INIT_START: 'session/init-start',
  INIT_END:   'session/init-end',
}

export interface SessionState {
  language: string
  organization: string
  areaCode: string
  areaName: string
  storeCode: string
  storeName: string
}

// ---
// Initial states

const initialState: SessionState = {
  language: 'ja',
  organization: '無印良品',
  areaCode: '0001',
  areaName: '大阪府堺市北区',
  storeCode: '0001',
  storeName: 'イオンモール北花田',
}

export const SessionSerialize = state => state
export const SessionDeserialize = state => state

// ---
// Action Creators

export const initStart = () => {
  return { type: SessionType.INIT_START, state: initialState }
}

export const initEnd = (searchConditions) => {
  return { type: SessionType.INIT_END, searchConditions: searchConditions }
}

// ---
// Reducer

export const SessionReducer: Reducer<SessionState> = (state = initialState, action) => {
  switch (action.type) {
    case SessionType.INIT_START:
      return {...action.state}
    default: return state
  }
}
