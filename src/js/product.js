import { getParams } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";
import AllProductData from "./AllProductsData.mjs"
import loadAllProducts from "./allproduct.mjs";

const products = await loadAllProducts();
/* 
const dataSource = new ProductData("tents");
const productId = getParams("product");
console.log(productId);

const data = new ProductDetails(productId, dataSource);

data.init()
console.log(data);
 */
const productId = getParams("product");

const allData = new AllProductData(products);
const productDetails = new ProductDetails(productId, allData);
productDetails.init();


  
