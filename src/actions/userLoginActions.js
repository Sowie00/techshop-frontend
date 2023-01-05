import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
} from '../reducers/userLoginReducer.js';
import axios from 'axios';
import { userDetailsReset } from '../reducers/userDetailsReducer.js';
import { orderListMyReset } from '../reducers/orderListMyReducer';
import { userListReset } from '../reducers/userListReducer';
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(userLoginRequest());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'https://techshop-api.onrender.com/api/users/login',
      { email, password },
      config
    );
    dispatch(userLoginSuccess(data));

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(
      userLoginFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch(userLogout());
  dispatch(userDetailsReset());
  dispatch(orderListMyReset());
  dispatch(userListReset());
};
