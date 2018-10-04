import { Reducer } from 'redux'

// ---
// Types

export const EventSearchType = {
  INIT_START:   'event-search/init-start',
  INIT_END:     'event-search/init-end',
  CHANGE_DATA:  'event-search/change-data',
  SEARCH_START: 'event-search/search-start',
  SEARCH_END:   'event-search/search-end',
}

export interface EventSearchState {
  eventList: Array<ListItem>
  eventCategoryList: Array<ListItem>
  teacherList: Array<ListItem>
  statusList: Array<ListItem>
  searchConditions: {
    targetEvent: string
    eventCategory: string
    teacher: string
    eventName: string
    eventDescription: string
    price: number
    startDate: Date
    endDate: Date
    status: string
    isRelease: boolean
  }
  searchResults: Array<any>
  isSearching: boolean
}

export const EventSearchSerialize = state => state

export const EventSearchDeserialize = (state: EventSearchState): EventSearchState => {
  return {
    ...state,
    eventList: getListItems(state.eventList),
    eventCategoryList: getListItems(state.eventCategoryList),
    teacherList: getListItems(state.teacherList),
    statusList: getListItems(state.statusList),
  }
}


// ---
// Initial states

export class ListItem {
  constructor(private _key: string, private _value: string, private _text: string) {
  }

  static create({key, _key, value, _value, text, _text}) {
    return new ListItem(key || _key, value ||_value, text ||_text)
  }

  get key(): string {return this._key}
  get value(): string {return this._value}
  get text(): string {return this._text}
}

export const getListItems = (data: Array<any>, hasHead: boolean = true): Array<ListItem> => {
  let list = data.map((e) => ListItem.create(e))
  hasHead && list.unshift(new ListItem('','',''))
  return list
}

const initialState: EventSearchState = {
    eventList: [],
    eventCategoryList: [],
    teacherList: [],
    statusList: [],
  searchConditions: {
    targetEvent: '',
    eventCategory: '',
    teacher: '',
    eventName: '',
    eventDescription: '',
    price: null,
    startDate: null,
    endDate: null,
    status: '',
    isRelease: false,
  },
  searchResults: [],
  isSearching: false,
}


// ---
// Action Creators

export const initStart = () => {
  return { type: EventSearchType.INIT_START, state: initialState }
}

export const initEnd = (data) => {
  console.log('EventSearch#initEnd')
  return {
    type: EventSearchType.INIT_END,
    eventList: getListItems(data.eventList),
    eventCategoryList: getListItems(data.eventCategoryList),
    teacherList: getListItems(data.teacherList),
    statusList: getListItems(data.statusList),
  }
}

export const changeData = (target, value) => {
  return { type: EventSearchType.CHANGE_DATA, target: target, value: value }
}

export const searchStart = (searchConditions) => {
  return { type: EventSearchType.SEARCH_START, searchConditions: searchConditions }
}

export const searchEnd = (list) => {
  return { type: EventSearchType.SEARCH_END, list: list }
}


// ---
// Reducer

export const EventSearchReducer: Reducer<EventSearchState> = (state = initialState, action) => {
  switch (action.type) {
    case EventSearchType.INIT_START:
      return {...action.state}
    case EventSearchType.INIT_END:
      return {
        ...state,
        eventList: action.eventList,
        eventCategoryList: action.eventCategoryList,
        teacherList: action.teacherList,
        statusList: action.statusList,
        isSearching: false,
      }
    case EventSearchType.SEARCH_START:
      return {
        ...state,
        isSearching: true,
      }
    case EventSearchType.CHANGE_DATA:
      const sc = Object.assign({}, state.searchConditions)
      sc[action.target] = action.value
      return {
        ...state,
        searchConditions: sc,
      }
    default: return state
  }
}
