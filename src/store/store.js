import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
const store = configureStore({
  reducer: {
    productsSlice,
  },
});

export default store;
