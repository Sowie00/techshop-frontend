import axios from "axios";
import {
  addItem,
  removeItem,
  saveShippingInfo,
  savePaymentInfo,
} from "../reducers/cartReducer";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch(
    addItem({
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity,
    })
  );

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch(removeItem(id));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const cartSaveShippingInfo = (data) => (dispatch) => {
  dispatch(saveShippingInfo(data));
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const cartSavePaymentInfo = (data) => (dispatch) => {
  dispatch(savePaymentInfo(data));
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
