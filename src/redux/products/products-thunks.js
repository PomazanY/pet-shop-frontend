import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProductsApi } from "../../shared/api/products-api";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, {rejectWithValue}) => {
    try{
      const data = await getProductsApi();
      return data;
    }
    catch(error){
      return rejectWithValue(error?.response?.data?.message)
    }
    
    
  }
);