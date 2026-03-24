import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import loadAllProducts from "./allproduct.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const products = await loadAllProducts();

const dataSource = new ProductData("tents");
const productList = new ProductList("Tents", dataSource);
productList.init();

//console.log(products);


const input = document.querySelector("#searchInput");
input.addEventListener("input", () => {
    const query = input.value;
    console.log(products);
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

function handleSearch(query, items){
    const status = document.querySelector("#status");
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) {
        document.getElementById("results").style.display = "none";
        status.style.display = "none";
        return;
    }

    console.log(items);

    const filtered = items.filter((product) => product?.Name.toLowerCase().includes(cleanQuery));
    console.log(filtered);
    const count = filtered.length;
    console.log(count);
    status.style.display = "block";
    status.textContent = `${count} product found`;


    renderSearchCards(filtered);
}


