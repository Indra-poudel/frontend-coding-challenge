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
    addUser(
      state: IUserInitialState,
      { payload }: PayloadAction<Array<IUser>>
    ) {
      state.users = [...state.users, ...payload];
    },
    deleteUser(state: IUserInitialState, { payload }: PayloadAction<IUser>) {
      state.users = state.users.filter((user) => user.id !== payload.id);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
