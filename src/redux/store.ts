import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import AsyncStorage from "@react-native-async-storage/async-storage";

import reducer from "./reducers";

const persistConfig = {
  key: "test1",
  storage: AsyncStorage,
  whitelist: ["contact"],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const middlewares = [thunk];

let middleware: any[] = [];

if (__DEV__) {
  middleware = [...middleware, ...middlewares, logger];
} else {
  middleware = [...middleware, ...middlewares];
}

const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };
