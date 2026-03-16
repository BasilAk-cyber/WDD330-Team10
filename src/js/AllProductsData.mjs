export default class AllProductData {
  constructor(allProducts) {
    this.allProducts = allProducts; 
  }

  findProductById(id) {
    return this.allProducts.find(p => p.Id === id);
  }
}