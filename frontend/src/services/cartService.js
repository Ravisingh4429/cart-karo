import apiclient from "../utils/api-client";

export const addtocart = (product, quantity) => {
  return apiclient.post("/cart", {
    product,
    quantity: quantity,
  });
};
export const getCartApi = () => {
  return apiclient.get("/cart");
};
