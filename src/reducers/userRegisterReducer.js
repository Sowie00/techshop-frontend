import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const userRegisterSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: userInfoFromStorage,
  },
  reducers: {
    userRegisterRequest: (state) => {
      state.isLoading = true;
    },
    userRegisterSuccess: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    userRegisterFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { userRegisterRequest, userRegisterSuccess, userRegisterFail } =
  userRegisterSlice.actions;

export default userRegisterSlice.reducer;
