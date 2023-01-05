import { createSlice } from "@reduxjs/toolkit";

const userUpdateSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    userUpdateRequest: (state) => {
      state.isLoading = true;
    },
    userUpdateSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
    },
    userUpdateFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    userUpdateReset: (state) => {
      return {
        user: {},
      };
    },
  },
});

export const {
  userUpdateRequest,
  userUpdateSuccess,
  userUpdateFail,
  userUpdateReset,
} = userUpdateSlice.actions;

export default userUpdateSlice.reducer;
