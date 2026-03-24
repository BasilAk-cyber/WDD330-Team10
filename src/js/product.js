import { getParams } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";
import AllProductData from "./AllProductsData.mjs"
import loadAllProducts from "./allproduct.mjs";

const products = await loadAllProducts();

const productId = getParams("product");

const allData = new AllProductData(products);
const productDetails = new ProductDetails(productId, allData);
productDetails.init();


  
