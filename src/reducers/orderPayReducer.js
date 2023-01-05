import { createSlice } from "@reduxjs/toolkit";

const orderPaySlice = createSlice({
  name: "order",
  initialState: {},
  reducers: {
    orderPayRequest: (state) => {
      state.isLoading = true;
    },
    orderPaySuccess: (state) => {
      state.isLoading = false;
      state.success = true;
    },
    orderPayFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    orderPayReset: (state) => {
      return {};
    },
  },
});

export const { orderPayRequest, orderPaySuccess, orderPayFail, orderPayReset } =
  orderPaySlice.actions;

export default orderPaySlice.reducer;
