import { createSlice } from "@reduxjs/toolkit";

const productCreateSlice = createSlice({
  name: "productCreate",
  initialState: {},
  reducers: {
    productCreateRequest: (state) => {
      state.isLoading = true;
    },
    productCreateSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.product = action.payload;
    },
    productCreateFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    productCreateReset: (state, action) => {
      return {};
    },
  },
});

export const {
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
  productCreateReset,
} = productCreateSlice.actions;

export default productCreateSlice.reducer;
