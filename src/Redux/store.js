import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./products/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  productsData: productReducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
