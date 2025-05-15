import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCategoriesApi } from "../../shared/api/categories-api";

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async (_, {rejectWithValue}) => {
    try{
      const data = await getCategoriesApi();
      return data;
    }
    catch(error){
      return rejectWithValue(error?.response?.data?.message)
    }
    
    
  }
);

