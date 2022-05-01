import { combineReducers } from "@reduxjs/toolkit";

import users from "./user";

const rootReducer = combineReducers({
  users,
  // Other reducer goes here.
});

export default rootReducer;
