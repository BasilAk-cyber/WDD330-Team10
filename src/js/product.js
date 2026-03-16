import { getParams } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParams("product");
console.log(productId);

const data = new ProductDetails(productId, dataSource);

data.init()
console.log(data);

  
