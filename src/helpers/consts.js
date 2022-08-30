export const ACTIONS = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCT_DETAILS: "GET_PRODUCT_DETAILS",
};

export const CART = {
  GET_CART: "GET_CART",
  GET_CART_LENGTH: "GET_CART_LENGTH",
};
export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

export const calcSubPrice = (product) => +product.count * product.item.price;

export const calcTotalPrice = (products) => {
  return products.reduce((ac, cur) => {
    return (ac += cur.subPrice);
  }, 0);
};
