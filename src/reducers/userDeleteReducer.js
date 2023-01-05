import { createSlice } from "@reduxjs/toolkit";

const userDeleteSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    userDeleteRequest: (state) => {
      state.isLoading = true;
    },
    userDeleteSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
    },
    userDeleteFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { userDeleteRequest, userDeleteSuccess, userDeleteFail } =
  userDeleteSlice.actions;

export default userDeleteSlice.reducer;
