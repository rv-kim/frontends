
export interface StoreModule {
  initialState();
  serialize(state);
  deserialize(state);
  reducer(state, action);
}
