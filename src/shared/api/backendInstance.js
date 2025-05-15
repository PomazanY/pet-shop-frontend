import axios from "axios";

const { VITE_API_URL } = import.meta.env
export const backendInstance = axios.create({
    baseURL: VITE_API_URL
});


// const backendInstance = axios.create({
//     baseURL: "http://localhost:3333/products"
// })

export default backendInstance;