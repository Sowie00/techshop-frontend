import { createSlice } from "@reduxjs/toolkit";

const userUpdateProfileSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    userUpdateProfileRequest: (state) => {
      state.isLoading = true;
    },
    userUpdateProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.userInfo = action.payload;
    },
    userUpdateProfileFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  userUpdateProfileRequest,
  userUpdateProfileSuccess,
  userUpdateProfileFail,
} = userUpdateProfileSlice.actions;

export default userUpdateProfileSlice.reducer;
