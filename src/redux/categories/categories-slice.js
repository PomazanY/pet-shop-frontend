import { createSlice } from "@reduxjs/toolkit";

import { fetchCategories } from "./categories-thunks";
import { pending, rejected } from "../../shared/lib/redux";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCategories.pending, pending)
        .addCase(fetchCategories.rejected, rejected)
        .addCase(fetchCategories.fulfilled, (store, {payload})=>{
            store.loading = false;
            store.items = payload;
        })

    }
})
export default categoriesSlice.reducer;