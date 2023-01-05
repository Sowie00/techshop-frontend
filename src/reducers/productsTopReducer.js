import { createSlice } from "@reduxjs/toolkit";

const productsTopSlice = createSlice({
  name: "productsTop",
  initialState: {
    products: [],
  },
  reducers: {
    productsTopRequest: (state) => {
      state.isLoading = true;
      state.products = [];
    },
    productsTopSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    productsTopFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { productsTopRequest, productsTopSuccess, productsTopFail } =
  productsTopSlice.actions;

export default productsTopSlice.reducer;
