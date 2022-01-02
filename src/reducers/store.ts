import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

//
export type RootState = ReturnType<typeof store.getState>;

//
export type AppDispatch = typeof store.dispatch;
