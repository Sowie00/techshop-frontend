import { createSlice } from "@reduxjs/toolkit";

const productUpdateSlice = createSlice({
  name: "productUpdate",
  initialState: {
    product: {},
  },
  reducers: {
    productUpdateRequest: (state) => {
      state.isLoading = true;
    },
    productUpdateSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.product = action.payload;
    },
    productUpdateFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    productUpdateReset: (state) => {
      state.product = {};
    },
  },
});

export const {
  productUpdateRequest,
  productUpdateSuccess,
  productUpdateFail,
  productUpdateReset,
} = productUpdateSlice.actions;

export default productUpdateSlice.reducer;
