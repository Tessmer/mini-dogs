import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import localStorage from "./middleware/localStorage";
import modal from "./modal";
import login from "./login";
import photos from "./photos";

const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ modal, login, photos });
const store = configureStore({ reducer, middleware });

export default store;
