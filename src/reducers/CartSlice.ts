import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface cartState {
  item: number;
}

const initialState: cartState = {
  item: 0,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItemToCart: (state) => {
      state.item += 1;
    },

    removeFromCart: (state) => {
      state.item -= 1;
    },

    addItemByAmount: (state, action: PayloadAction<number>) => {
      state.item += action.payload;
    },
  },
});

export const { addItemToCart, removeFromCart, addItemByAmount } =
  cartSlice.actions;

//

export const selectCount = (state: RootState) => state.cart.item;

export default cartSlice.reducer;
