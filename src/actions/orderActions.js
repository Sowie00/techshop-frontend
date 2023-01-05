import axios from 'axios';
import {
  orderCreateFail,
  orderCreateRequest,
  orderCreateSuccess,
} from '../reducers/orderReducer';

import {
  orderDetailsFail,
  orderDetailsRequest,
  orderDetailsSuccess,
} from '../reducers/orderDetailsReducer';

import {
  orderPayFail,
  orderPayRequest,
  orderPaySuccess,
  orderPayReset,
} from '../reducers/orderPayReducer';

import {
  orderListMyFail,
  orderListMyRequest,
  orderListMySuccess,
} from '../reducers/orderListMyReducer';

import {
  orderListFail,
  orderListRequest,
  orderListSuccess,
} from '../reducers/orderListReducer';

import {
  orderDeliverFail,
  orderDeliverRequest,
  orderDeliverReset,
  orderDeliverSuccess,
} from '../reducers/orderDeliverReducer';

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(orderCreateRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      'https://techshop-api.onrender.com/api/orders',
      order,
      config
    );
    dispatch(orderCreateSuccess(data));
  } catch (error) {
    dispatch(
      orderCreateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const getOrder = (id) => async (dispatch, getState) => {
  try {
    dispatch(orderDetailsRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `https://techshop-api.onrender.com/api/orders/${id}`,
      config
    );
    dispatch(orderDetailsSuccess(data));
  } catch (error) {
    dispatch(
      orderDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch(orderPayRequest());

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `https://techshop-api.onrender.com/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );
      dispatch(orderPaySuccess(data));
    } catch (error) {
      dispatch(
        orderPayFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(orderDeliverRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `https://techshop-api.onrender.com/api/orders/${order._id}/deliver`,
      {},
      config
    );
    dispatch(orderDeliverSuccess(data));
  } catch (error) {
    dispatch(
      orderDeliverFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch(orderListMyRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `https://techshop-api.onrender.com/api/orders/myorders`,
      config
    );
    dispatch(orderListMySuccess(data));
  } catch (error) {
    dispatch(
      orderListMyFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch(orderListRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `https://techshop-api.onrender.com/api/orders`,
      config
    );
    dispatch(orderListSuccess(data));
  } catch (error) {
    dispatch(
      orderListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const resetOrderPay = () => async (dispatch) => {
  dispatch(orderPayReset());
};

export const resetOrderDeliver = () => async (dispatch) => {
  dispatch(orderDeliverReset());
};
