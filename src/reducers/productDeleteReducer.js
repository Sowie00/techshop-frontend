import { createSlice } from "@reduxjs/toolkit";

const productDeleteSlice = createSlice({
  name: "productDelete",
  initialState: {},
  reducers: {
    productDeleteRequest: (state) => {
      state.isLoading = true;
    },
    productDeleteSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
    },
    productDeleteFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { productDeleteRequest, productDeleteSuccess, productDeleteFail } =
  productDeleteSlice.actions;

export default productDeleteSlice.reducer;
