import ProductData from "./ProductData.mjs";

const[backpacks, tents, sleepingbags] = await Promise.all([
    new ProductData("backpacks").getData(),
    new ProductData("tents").getData(),
    new ProductData("sleeping-bags").getData()
])

const products = [...backpacks, ...tents, ...sleepingbags];
console.log(products);

function Search() {
    input.addEventListener("input", () => {
        const query = input.value;
        handleSearch(query);
    })
}

function SearchCard(product) {
  return `
    <a href="/product_pages/index.html?product=${product.Id}" class="result-item">
      <p>${product.Name}</p>
      <p>$${product.FinalPrice}</p>
    </a>
  `;
}

function renderSearchCards(filteredProducts){
    const resultDiv = document.querySelector("#results");
    resultDiv.style.display = "flex";

    resultDiv.innerHTML = filteredProducts
                            .map(product=> SearchCard(product))
                            .join("");
}

function handleSearch(query){
    if (!query.trim()) {
        document.getElementById("results").innerHTML = "";
        return;
    }

    const filtered = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase());
    });

    renderSearchCards(filtered);
}
