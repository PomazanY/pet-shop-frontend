
import backendInstance from "./backendInstance";

export const getCategoriesApi = async()=>{
    const {data} = await backendInstance.get("/categories/all");
    return data;
}