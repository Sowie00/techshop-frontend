import { createSlice } from "@reduxjs/toolkit";

const orderDetailsSlice = createSlice({
  name: "order",
  initialState: {
    orderItems: [],
    shippingAddress: {},
    isLoading: true,
  },
  reducers: {
    orderDetailsRequest: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    orderDetailsSuccess: (state, action) => {
      return {
        isLoading: false,
        order: action.payload,
      };
    },
    orderDetailsFail: (state, action) => {
      return {
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const { orderDetailsRequest, orderDetailsSuccess, orderDetailsFail } =
  orderDetailsSlice.actions;

export default orderDetailsSlice.reducer;
