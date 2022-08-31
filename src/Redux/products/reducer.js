import { productactionType } from "./action";

const initialstate = {
  products: [],
  loading: false,
  currentProduct: {},
  error: false,
  cart: [],
  orders: [],
};
export const productReducer = (state = initialstate, action) => {
  switch (action.type) {
    case productactionType.FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case productactionType.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };
    }
    case productactionType.FETCH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case productactionType.GET_SINGLE_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case productactionType.GET_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentProduct: action.payload,
        error: false,
      };
    }
    case productactionType.GET_SINGLE_PRODUCT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case productactionType.ADD_PRODUCT_CART_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case productactionType.ADD_PRODUCT_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        cart: [...state.cart, action.payload],
        error: false,
      };
    }
    case productactionType.ADD_PRODUCT_CART_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case productactionType.FETCH_CART_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case productactionType.FETCH_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        cart: [...action.payload],
        error: false,
      };
    }
    case productactionType.FETCH_CART_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case productactionType.REMOVE_PRODUCT_CART_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case productactionType.REMOVE_PRODUCT_CART_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case productactionType.FETCH_ORDERS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case productactionType.FETCH_ORDERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        orders: [...action.payload],
        error: false,
      };
    }
    case productactionType.FETCH_ORDERS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
};
