import backendInstance from "./backendInstance";

import requestDecorator from "./requestDecorator";

export const registerUser = requestDecorator(async payload => {
    const {data} = await backendInstance.post("/products/all", payload);
    return data;
})