import { createStore, combineReducers } from "redux";
import cachedMemoryReducer from "./reducer";
const reducer = combineReducers({ cachedMemory: cachedMemoryReducer });

const initialState = {
  cachedMemory: { A: [1, 2, 3], B: [4, 5, 6], C: [7, 8, 9], D: [10, 11, 12] },
};

const store = createStore(reducer, initialState);

export default store;
