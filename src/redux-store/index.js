import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// reducers

// combine reducers
const reducers = combineReducers({});

// config
const config = {
  key: "root",
  storage,
};

// persist reducers
const persistedReducer = persistReducer(config, reducers);

//store
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: [thunk],
});

export default store;
