import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Products {
  _id?: string;
  name: string;
  ingredients: string;
  image: string;
}

interface cartState {
  products: Products[];
}

const initialState: cartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItemToCart: (state, payload: PayloadAction<Products>) => {
      let productsCopy = [...state.products];
      productsCopy.push({ ...payload.payload });

      return {
        ...state,
        products: productsCopy,
      };
    },

    removeFromCart: (state) => {},
    addItemByAmount: (state, action: PayloadAction<number>) => {},
    reset: (state) => {
      return initialState;
    },
  },
});

export const { addItemToCart, reset, removeFromCart, addItemByAmount } =
  cartSlice.actions;

//

export const selectCount = (state: RootState) => state.cart;

export default cartSlice.reducer;
