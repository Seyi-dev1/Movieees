import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import userReducer from "./user/userReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas/rootSaga";
import modalReducer from "./modal/modalReducer";
const combinedReducers = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

const logger = createLogger();

const saga = createSagaMiddleware();

const middlewares = [saga];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoreActions:[FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE],
        ignoredActionPaths: ["payload.createdAt", "payload.user"],
        ignoredPaths: ["user.currentUser.createdAt"],
      },
    }).concat(middlewares),
});

saga.run(rootSaga);

export default store;
