import { createSlice } from "@reduxjs/toolkit";
const productCreateReviewSlice = createSlice({
  name: "productCreateReview",
  initialState: {},
  reducers: {
    productCreateReviewRequest: (state) => {
      state.isLoading = true;
    },
    productCreateReviewSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
    },
    productCreateReviewFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    productCreateReviewReset: (state) => {
      return {};
    },
  },
});

export const {
  productCreateReviewRequest,
  productCreateReviewSuccess,
  productCreateReviewFail,
  productCreateReviewReset,
} = productCreateReviewSlice.actions;

export default productCreateReviewSlice.reducer;
