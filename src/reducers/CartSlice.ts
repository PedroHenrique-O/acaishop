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
}

const initialState: cartState = {
  products: [],
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

    removeFromCart: (state, { payload }: PayloadAction<Products>) => {
      let productsCopy = [...state.products];
      let removeProducts = productsCopy.filter(
        (product) => product._id !== payload._id
      );

      return { ...state, products: removeProducts };
    },

    reset: () => {
      return initialState;
    },
  },
});

export const { addItemToCart, reset, removeFromCart } = cartSlice.actions;

//

export const selectCount = (state: RootState) => state.cart;

export default cartSlice.reducer;
