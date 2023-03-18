import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./searchReducer/searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
