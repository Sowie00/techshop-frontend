import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    shippingAddress: {},
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    },
    removeItem: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    },
    saveShippingInfo: (state, action) => {
      return {
        ...state,
        shippingAddress: action.payload,
      };
    },
    savePaymentInfo: (state, action) => {
      return {
        ...state,
        paymentMethod: action.payload,
      };
    },
  },
});

export const { addItem, removeItem, saveShippingInfo, savePaymentInfo } =
  cartSlice.actions;
export default cartSlice.reducer;
