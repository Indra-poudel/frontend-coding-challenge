import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectUserRootState = (state: RootState) => state.users;

export const selectUsers = createSelector(
  selectUserRootState,
  (userRootState) => userRootState.users
);
