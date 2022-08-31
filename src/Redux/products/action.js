import axios from "axios";
export const productactionType = {
  FETCH_REQUEST: "FETCH_REQUEST",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",

  GET_SINGLE_PRODUCT_REQUEST: "GET_SINGLE_PRODUCT_REQUEST",
  GET_SINGLE_PRODUCT_SUCCESS: "GET_SINGLE_PRODUCT_SUCCESS",
  GET_SINGLE_PRODUCT_FAILURE: "GET_SINGLE_PRODUCT_FAILURE",

  ADD_PRODUCT_CART_REQUEST: "ADD_PRODUCT_CART_REQUEST",
  ADD_PRODUCT_CART_SUCCESS: "ADD_PRODUCT_CART_SUCCESS",
  ADD_PRODUCT_CART_FAILURE: "ADD_PRODUCT_CART_FAILURE",

  FETCH_CART_REQUEST: "FETCH_CART_REQUEST",
  FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
  FETCH_CART_FAILURE: "FETCH_CART_FAILURE",

  REMOVE_PRODUCT_CART_REQUEST: "REMOVE_PRODUCT_CART_REQUEST",
  REMOVE_PRODUCT_CART_SUCCESS: "REMOVE_PRODUCT_CART_SUCCESS",
  REMOVE_PRODUCT_CART_FAILURE: "REMOVE_PRODUCT_CART_FAILURE",

  ADD_ORDER_REQUEST: "ADD_ORDER_REQUEST",
  ADD_ORDER_SUCCESS: "ADD_ORDER_SUCCESS",
  ADD_ORDER_FAILURE: "ADD_ORDER_FAILURE",

  EMPTY_CART_REQUEST: "EMPTY_CART_REQUEST",
  EMPTY_CART_SUCCESS: "EMPTY_CART_SUCCESS",
  EMPTY_CART_FAILURE: "EMPTY_CART_FAILURE",

  FETCH_ORDERS_REQUEST: "FETCH_ORDERS_REQUEST",
  FETCH_ORDERS_SUCCESS: "FETCH_ORDERS_SUCCESS",
  FETCH_ORDERS_FAILURE: "FETCH_ORDERS_FAILURE",
};

export const requestAction = (data) => {
  return {
    type: productactionType.FETCH_REQUEST,
    payload: data,
  };
};
export const successAction = (data) => {
  return {
    type: productactionType.FETCH_SUCCESS,
    payload: data,
  };
};
export const failureAction = (data) => {
  return {
    type: productactionType.FETCH_FAILURE,
    payload: data,
  };
};

export const getData = (dispatch, params) => {
  dispatch(requestAction());
  return axios
    .get("/products", {
      params: {
        ...params,
      },
    })
    .then((res) => dispatch(successAction(res.data)))
    .catch((err) => dispatch(failureAction()));
};

export const getSingleProductRequest = (data) => {
  return {
    type: productactionType.GET_SINGLE_PRODUCT_REQUEST,
    payload: data,
  };
};
export const getSingleProductSuccess = (data) => {
  return {
    type: productactionType.GET_SINGLE_PRODUCT_SUCCESS,
    payload: data,
  };
};
export const getSingleProductFailure = (data) => {
  return {
    type: productactionType.GET_SINGLE_PRODUCT_FAILURE,
    payload: data,
  };
};

export const getSingleProduct = (id) => (dispatch) => {
  dispatch(getSingleProductRequest());
  axios
    .get(`/products/${id}`)
    .then((res) => dispatch(getSingleProductSuccess(res.data)))
    .catch((err) => dispatch(getSingleProductFailure(err.data)));
};

export const addProductCartRequest = (data) => {
  return {
    type: productactionType.ADD_PRODUCT_CART_REQUEST,
    payload: data,
  };
};
export const addProductCartSuccess = (data) => {
  return {
    type: productactionType.ADD_PRODUCT_CART_SUCCESS,
    payload: data,
  };
};
export const addProductCartFailure = (data) => {
  return {
    type: productactionType.ADD_PRODUCT_CART_FAILURE,
    payload: data,
  };
};

export const addProductCart = (product) => (dispatch) => {
  dispatch(addProductCartRequest());
  axios
    .post("/cart", product)
    .then((res) => dispatch(addProductCartSuccess(res.data)))
    .catch((err) => dispatch(addProductCartFailure(err.data)));
};

export const fetchCartRequest = (data) => {
  return {
    type: productactionType.FETCH_CART_REQUEST,
    payload: data,
  };
};
export const fetchCartSuccess = (data) => {
  return {
    type: productactionType.FETCH_CART_SUCCESS,
    payload: data,
  };
};
export const fetchCartFailure = (data) => {
  return {
    type: productactionType.FETCH_CART_FAILURE,
    payload: data,
  };
};

export const fetchCart = (payload) => (dispatch) => {
  dispatch(fetchCartRequest());
  axios
    .get("/cart")
    .then((res) => dispatch(fetchCartSuccess(res.data)))
    .catch((err) => dispatch(fetchCartFailure(err.data)));
};

export const deleteProductCartRequest = (data) => {
  return {
    type: productactionType.REMOVE_PRODUCT_CART_REQUEST,
    payload: data,
  };
};
export const deleteProductCartSuccess = (data) => {
  return {
    type: productactionType.REMOVE_PRODUCT_CART_SUCCESS,
    payload: data,
  };
};
export const deleteProductCartFailure = (data) => {
  return {
    type: productactionType.REMOVE_PRODUCT_CART_FAILURE,
    payload: data,
  };
};

export const deleteProductCart = (id) => (dispatch) => {
  dispatch(deleteProductCartRequest());
  axios
    .delete(`/cart/${id}`)
    .then((res) => dispatch(deleteProductCartSuccess(res.data)))
    .then(() => dispatch(fetchCart()))
    .catch((err) => dispatch(deleteProductCartFailure(err.data)));
};

export const addOrderRequest = () => {
  return {
    type: productactionType.ADD_ORDER_REQUEST,
  };
};
export const addOrderSuccess = (data) => {
  return {
    type: productactionType.ADD_ORDER_SUCCESS,
    payload: data,
  };
};
export const addOrderFailure = (data) => {
  return {
    type: productactionType.ADD_ORDER_FAILURE,
    payload: data,
  };
};

export const addOrder = (payload) => (dispatch) => {
  dispatch(addOrderRequest());
  const orderPayload = [];
  for (let product of payload) {
    product && orderPayload.push(axios.post("/orders", product));
  }

  Promise.all(orderPayload)
    // .then((res) => dispatch(addOrderSuccess()))
    .then((res) => dispatch(emptyCart(payload)))
    .catch((err) => dispatch(addOrderFailure()));
};

export const emptyCartRequest = () => {
  return {
    type: productactionType.EMPTY_CART_REQUEST,
  };
};
export const emptyCartSuccess = () => {
  return {
    type: productactionType.EMPTY_CART_SUCCESS,
  };
};
export const emptyCartFailure = () => {
  return {
    type: productactionType.EMPTY_CART_FAILURE,
  };
};

export const emptyCart = (payload) => (dispatch) => {
  dispatch(emptyCartRequest());
  const deleteOrders = [];
  for (let obj of payload) {
    let temp = dispatch(deleteProductCart(obj.id));
    deleteOrders.push(temp);
  }
  Promise.all(deleteOrders)
    .then((res) => dispatch(emptyCartSuccess()))
    .catch((err) => dispatch(emptyCartFailure()));
};

export const fetchOrdersRequest = (data) => {
  return {
    type: productactionType.FETCH_ORDERS_REQUEST,
    payload: data,
  };
};
export const fetchOrdersSuccess = (data) => {
  return {
    type: productactionType.FETCH_ORDERS_SUCCESS,
    payload: data,
  };
};
export const fetchOrdersFailure = (data) => {
  return {
    type: productactionType.FETCH_ORDERS_FAILURE,
    payload: data,
  };
};

export const fetchOrders = (payload) => (dispatch) => {
  dispatch(fetchOrdersRequest());
  axios
    .get("/orders")
    .then((res) => dispatch(fetchOrdersSuccess(res.data)))
    .catch((err) => dispatch(fetchOrdersFailure(err.data)));
};
