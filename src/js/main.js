import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { getParams } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";
import AllProductData from "./AllProductsData.mjs"

const dataSource = new ProductData("tents");
const productList = new ProductList("Tents", dataSource);
productList.init();

const[backpacks, tents, sleepingbags] = await Promise.all([
    new ProductData("backpacks").getData(),
    new ProductData("tents").getData(),
    new ProductData("sleeping-bags").getData()
])

const products = [...backpacks, ...tents, ...sleepingbags];
//console.log(products);
const productId = getParams("product");

const allData = new AllProductData(products);

const data = new ProductDetails(productId, allData);
console.log(data);
data.init();


const input = document.querySelector("#searchInput");
input.addEventListener("input", () => {
    const query = input.value;
    handleSearch(query, products);
})


function SearchCard(product) {
  return `
    <a href="/product_pages/?product=${product.Id}" class="result-item">
      <p>${product.Name}</p>
      <p>$${product.FinalPrice}</p>
    </a>
  `;
}

function renderSearchCards(filteredProducts){
    const resultDiv = document.querySelector("#results");
    console.log(resultDiv);
    resultDiv.style.display = filteredProducts.length > 0 ? "flex" : "none";

    resultDiv.innerHTML = filteredProducts
                            .map(product=> SearchCard(product))
                            .join("");
}

function handleSearch(query, products){
    const status = document.querySelector("#status");
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) {
        document.getElementById("results").style.display = "none";
        status.style.display = "none";
        return;
    }

    console.log(products);

    const filtered = products.filter((product) => {
        return product?.Name.toLowerCase().includes(cleanQuery);
    });
    console.log(filtered);
    const count = filtered.length;
    console.log(count);
    status.style.display = "block";
    status.textContent = `${count} product found`;


    renderSearchCards(filtered);
}


