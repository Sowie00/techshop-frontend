import { createSlice } from "@reduxjs/toolkit";

const userListSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    userListRequest: (state) => {
      state.isLoading = true;
    },
    userListSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    userListFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    userListReset: (state) => {
      return {
        users: [],
      };
    },
  },
});

export const { userListRequest, userListSuccess, userListFail, userListReset } =
  userListSlice.actions;

export default userListSlice.reducer;
