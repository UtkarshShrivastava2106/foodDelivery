import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import { countReducer } from "./CountReducers/index";
import storage from "redux-persist/lib/storage";
import 'bootstrap/dist/css/bootstrap.min.css';
const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  countReducer: countReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
export default store;
