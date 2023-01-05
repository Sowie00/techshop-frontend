import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    userDetailsRequest: (state) => {
      state.isLoading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    userDetailsFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    userDetailsReset: (state, action) => {
      return {
        user: {},
      };
    },
  },
});

export const {
  userDetailsRequest,
  userDetailsSuccess,
  userDetailsFail,
  userDetailsReset,
} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
