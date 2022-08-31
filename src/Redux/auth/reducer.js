import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from "./action";

const initialstate = {
  auth: false,
  token: '',
  error: false,
};

export const authReducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_REQUEST:
      return {
        auth: false,
        token: '',
        error: false,
      };

    case SIGNIN_SUCCESS:
      return {
        auth: true,
        token: payload,
        error: false,
      };

    case SIGNIN_FAILURE:
      return {
        auth: false,
        token: '',
        error: payload,
      };

    default:
      return state;
  }
};
