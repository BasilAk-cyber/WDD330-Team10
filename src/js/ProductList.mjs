export default class ProductList {
  constructor(category, dataSource) {
    this.category = category;
    this.dataSource = dataSource;
  }

  async init() {
    this.products = await this.dataSource.getData();

    this.renderProductList();
  }

    renderProductList() {
        const productListElement = document.querySelector(".product-list");
        productListElement.innerHTML = this.products
        .map((product) => productCardTemplate(product))
        .join("");
        console.log(productListElement);
    }

}

function productCardTemplate(product) {
  return `<li class="product-card">
            <a href="product_pages/?product=${product.Id}">
            <img src="${product.Image}" alt="Image of ${product.Name}">
            <h2 class="card__brand">${product.Brand.Name}</h2>
            <h3 class="card__name">${product.NameWithoutBrand}</h3>
            <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
            </a>
        </li>`
}