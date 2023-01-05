import { createSlice } from "@reduxjs/toolkit";

const orderListMySlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    orderListMyRequest: (state) => {
      return {
        isLoading: true,
      };
    },
    orderListMySuccess: (state, action) => {
      return {
        isLoading: false,
        orders: action.payload,
      };
    },
    orderListMyFail: (state, action) => {
      return {
        isLoading: false,
        error: action.payload,
      };
    },
    orderListMyReset: (state, action) => {
      return {
        orders: [],
      };
    },
  },
});

export const {
  orderListMyRequest,
  orderListMySuccess,
  orderListMyFail,
  orderListMyReset,
} = orderListMySlice.actions;

export default orderListMySlice.reducer;
