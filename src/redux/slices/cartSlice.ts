import { IOrderToCart } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  products: IOrderToCart[];
}

const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IOrderToCart>) => {
      const existing = state.products.find(
        (product) => product.serviceId === action.payload.serviceId
      );
      if (existing) {
        existing.quantity = existing.quantity! + 1;
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
