import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface Products {
  _id: string;
  name: string;
  ingredients: string;
  image: string;
  amount: number;
  price: string;
}

interface cartState {
  products: Products[];
  isOpen: boolean;
}

const initialState: cartState = {
  products: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItemToCart: (state, { payload }: PayloadAction<Products>) => {
      const existProduct = state.products.find(
        (item) => item._id === payload._id
      );

      if (existProduct) {
        existProduct.amount++;
      } else {
        state.products.push({ ...payload, amount: 1 });
      }
    },
    openCart: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpen = payload;
    },
    removeFromCart: (state, { payload }: PayloadAction<Products>) => {
      state.products = state.products.filter(
        (product) => product._id !== payload._id
      );
    },
    incrementAmount: (state, { payload }: PayloadAction<Products>) => {
      let existProduct = state.products.find(
        (item) => item._id === payload._id
      );

      existProduct && existProduct.amount++;
    },
    decrementAmount: (state, { payload }: PayloadAction<Products>) => {
      let existProduct = state.products.find(
        (item) => item._id === payload._id
      );
      existProduct!.amount > 1
        ? existProduct!.amount--
        : (state.products = state.products.filter(
            (item) => item._id !== payload._id
          ));
    },

    reset: () => {
      return initialState;
    },
  },
});

export const {
  addItemToCart,
  reset,
  openCart,
  removeFromCart,
  incrementAmount,
  decrementAmount,
} = cartSlice.actions;

//

export const selectCount = (state: RootState) => state.cart;

export default cartSlice.reducer;
