import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./reducers/productListReducer";
import productDetailsReducer from "./reducers/productDetailsReducer";
import cartReducer from "./reducers/cartReducer";
import userLoginReducer from "./reducers/userLoginReducer";
import userRegisterReducer from "./reducers/userRegisterReducer";
import userDetailsReducer from "./reducers/userDetailsReducer";
import userUpdateProfileReducer from "./reducers/userUpdateProfileReducer";
import orderCreateReducer from "./reducers/orderReducer";
import orderDetailsReducer from "./reducers/orderDetailsReducer";
import orderPayReducer from "./reducers/orderPayReducer";
import orderDeliverReducer from "./reducers/orderDeliverReducer";
import orderListMyReducer from "./reducers/orderListMyReducer";
import userListReducer from "./reducers/userListReducer";
import userDeleteReducer from "./reducers/userDeleteReducer";
import userUpdateReducer from "./reducers/userUpdateReducer";
import productDeleteReducer from "./reducers/productDeleteReducer";
import productCreateReducer from "./reducers/productCreateReducer";
import productsTopReducer from "./reducers/productsTopReducer";
import productUpdateReducer from "./reducers/productUpdateReducer";
import orderListReducer from "./reducers/orderListReducer";
import productCreateReviewReducer from "./reducers/productCreateReviewReducer.js";
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingInfoFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productCreateReview: productCreateReviewReducer,
    productsTop: productsTopReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
  },
  preloadedState: {
    cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingInfoFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
  },
});
