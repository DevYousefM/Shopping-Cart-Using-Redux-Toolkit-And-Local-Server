import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:1711/products");
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const addToCart = createAsyncThunk(
  "products/addToCart",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:1711/products/${id}`);
      const data = res.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  cart: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increaseQTN: (state, action) => {
      const pro = state.cart.find((pro) => pro.id === action.payload);
      pro.qtn++;
    },
    decreaseQTN: (state, action) => {
      const pro = state.cart.find((pro) => pro.id === action.payload);
      if (pro.qtn > 1) {
        pro.qtn--;
      }
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      // console.log(state);
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      // console.log(state);
    },
    // Add To Cart
    [addToCart.pending]: (state) => {
      // console.log(state);
    },
    [addToCart.fulfilled]: (state, action) => {
      state.cart.push(action.payload);
    },
    [addToCart.rejected]: (state) => {
      // console.log(state);
    },
  },
});
export const { increaseQTN, decreaseQTN } = productsSlice.actions;
export default productsSlice.reducer;
