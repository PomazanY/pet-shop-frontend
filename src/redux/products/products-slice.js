import { createSlice } from "@reduxjs/toolkit";

import { fetchProducts } from "./products-thunks";
import { pending, rejected } from "../../shared/lib/redux";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending, pending)
        .addCase(fetchProducts.rejected, rejected)
        .addCase(fetchProducts.fulfilled, (store, {payload})=>{
            store.loading = false;
            store.items = payload;
        })

    }
})
export default productsSlice.reducer;