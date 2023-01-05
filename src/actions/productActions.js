import {
  productListRequest,
  productListSuccess,
  productListFail,
} from '../reducers/productListReducer';
import {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
} from '../reducers/productDetailsReducer';
import {
  productDeleteFail,
  productDeleteRequest,
  productDeleteSuccess,
} from '../reducers/productDeleteReducer';

import {
  productCreateFail,
  productCreateRequest,
  productCreateReset,
  productCreateSuccess,
} from '../reducers/productCreateReducer';

import {
  productUpdateFail,
  productUpdateRequest,
  productUpdateReset,
  productUpdateSuccess,
} from '../reducers/productUpdateReducer';

import {
  productCreateReviewFail,
  productCreateReviewRequest,
  productCreateReviewReset,
  productCreateReviewSuccess,
} from '../reducers/productCreateReviewReducer';

import {
  productsTopFail,
  productsTopRequest,
  productsTopSuccess,
} from '../reducers/productsTopReducer';
import axios from 'axios';

export const listProducts =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch(productListRequest());

      const { data } = await axios.get(
        `https://techshop-api.onrender.com/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch(productListSuccess(data));
    } catch (error) {
      dispatch(
        productListFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };

export const listProduct = (id) => async (dispatch) => {
  try {
    dispatch(productDetailsRequest());
    console.log(id);

    const { data } = await axios.get(
      `https://techshop-api.onrender.com/api/products/${id}`
    );
    dispatch(productDetailsSuccess(data));
  } catch (error) {
    dispatch(
      productDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch(productDeleteRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(
      `https://techshop-api.onrender.com/api/products/${id}`,
      config
    );
    dispatch(productDeleteSuccess());
  } catch (error) {
    dispatch(
      productDeleteFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch(productCreateRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `https://techshop-api.onrender.com/api/products`,
      {},
      config
    );
    dispatch(productCreateSuccess(data));
  } catch (error) {
    dispatch(
      productCreateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch(productUpdateRequest());

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
      `https://techshop-api.onrender.com/api/products/${product._id}`,
      product,
      config
    );
    dispatch(productUpdateSuccess(data));
  } catch (error) {
    dispatch(
      productUpdateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch(productCreateReviewRequest());

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `https://techshop-api.onrender.com/api/products/${productId}/reviews`,
        review,
        config
      );
      dispatch(productCreateReviewSuccess());
    } catch (error) {
      dispatch(
        productCreateReviewFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch(productsTopRequest());

    const { data } = await axios.get(
      `https://techshop-api.onrender.com/api/products/top`
    );
    dispatch(productsTopSuccess(data));
  } catch (error) {
    dispatch(
      productsTopFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const resetCreateProduct = () => async (dispatch, getState) => {
  dispatch(productCreateReset());
};

export const resetUpdateProduct = () => async (dispatch, getState) => {
  dispatch(productUpdateReset());
};

export const resetCreateProductReview = () => async (dispatch, getState) => {
  dispatch(productCreateReviewReset());
};
