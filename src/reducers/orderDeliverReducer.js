import { createSlice } from "@reduxjs/toolkit";

const orderDeliverSlice = createSlice({
  name: "orderDeliver",
  initialState: {},
  reducers: {
    orderDeliverRequest: (state) => {
      state.isLoading = true;
    },
    orderDeliverSuccess: (state) => {
      state.isLoading = false;
      state.success = true;
    },
    orderDeliverFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    orderDeliverReset: (state) => {
      return {};
    },
  },
});

export const {
  orderDeliverRequest,
  orderDeliverSuccess,
  orderDeliverFail,
  orderDeliverReset,
} = orderDeliverSlice.actions;

export default orderDeliverSlice.reducer;
