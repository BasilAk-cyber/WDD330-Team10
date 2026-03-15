import { getParams } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParams("product");
console.log(productId);

const data = new ProductDetails(productId, dataSource);

data.init()
console.log(data);

/* function addProductToCart(product) {
  const cart = getLocalStorage("SO-cart") || [];
  cart.push(product);
  setLocalStorage("SO-cart", cart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler); */
