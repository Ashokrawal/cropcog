"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";

const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
  },
});

export default store;
