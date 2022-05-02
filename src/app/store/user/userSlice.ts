import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types/user";

interface IUserInitialState {
  users: Array<IUser>;
}

export const initialState: IUserInitialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUserAction(
      state: IUserInitialState,
      { payload }: PayloadAction<Array<IUser>>
    ) {
      state.users = [...state.users, ...payload];
    },
    deleteUserAction(state: IUserInitialState, { payload }: PayloadAction<IUser>) {
      state.users = state.users.filter((user) => user.email !== payload.email);
    },
  },
});

export const { addUserAction, deleteUserAction } = userSlice.actions;

export default userSlice.reducer;
