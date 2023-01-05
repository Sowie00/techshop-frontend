import { createSlice } from "@reduxjs/toolkit";

const orderListSlice = createSlice({
  name: "orderList",
  initialState: {
    orders: [],
  },
  reducers: {
    orderListRequest: (state) => {
      return {
        isLoading: true,
      };
    },
    orderListSuccess: (state, action) => {
      return {
        isLoading: false,
        orders: action.payload,
      };
    },
    orderListFail: (state, action) => {
      return {
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const { orderListRequest, orderListSuccess, orderListFail } =
  orderListSlice.actions;

export default orderListSlice.reducer;
