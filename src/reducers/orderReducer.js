import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {},
  reducers: {
    orderCreateRequest: (state) => {
      state.isLoading = true;
    },
    orderCreateSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.order = action.payload;
    },
    orderCreateFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { orderCreateRequest, orderCreateSuccess, orderCreateFail } =
  orderSlice.actions;

export default orderSlice.reducer;
