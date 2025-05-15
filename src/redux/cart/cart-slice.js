import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState:[],
  reducers: {
    addToCart(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.count += action.payload.count;
      } else {
        state.push({ ...action.payload});
      }
    },
    increaseCountInCart(state, action) {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.count += 1;
      }
    },
    decreaseCountInCart(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state[index].count -= 1;
        if (state[index].count <= 0) {
          state.splice(index, 1);
        }
      }
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  
  },
});

export const {
  addToCart,
  increaseCountInCart,
  decreaseCountInCart,
  deleteFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
