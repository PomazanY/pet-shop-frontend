import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categories-slice";
import productsReducer from "./products/products-slice";
import cartReducer from "./cart/cart-slice";


export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});