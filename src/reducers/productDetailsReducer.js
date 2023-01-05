import { createSlice } from "@reduxjs/toolkit";

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: {
      reviews: [],
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    productDetailsRequest: (state) => {
      state.isLoading = true;
    },
    productDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    productDetailsFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
