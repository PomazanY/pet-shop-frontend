// import axios from "axios";

// const productsInstance = axios.create({
//     baseURL: "http://localhost:3333/products"
// })

import backendInstance from "./backendInstance";

export const getProductsApi = async()=>{
    const {data} = await backendInstance.get("/products/all");
    return data;
}

export const getProductById = async (id) => {
  const { data } = await backendInstance.get(`/products/${id}`);
  return data;
};