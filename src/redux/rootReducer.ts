/*
import { baseApi } from "./api/baseApi";
import orderReducer from "./slices/orderSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  order: orderReducer,
};
*/

//! Try

import { baseApi } from "./api/baseApi";
import cartReducer from "./slices/cartSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartReducer,
};
