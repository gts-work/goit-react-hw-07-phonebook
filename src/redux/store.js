import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// Logger with default options
import logger from "redux-logger";

import contactsReducer from "./contacts/contactsReducer";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({}).concat(logger);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV == "development",
});

export default store;
