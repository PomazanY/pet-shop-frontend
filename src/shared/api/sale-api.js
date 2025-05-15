import backendInstance from "./backendInstance";

import requestDecorator from "./requestDecorator";

export const getSaleProducts = requestDecorator(async () => {
    const { data } = await backendInstance.get("/products/all");
       
    const saleItems = data.filter(product => product.discont_price != null);
  
    return saleItems;
})