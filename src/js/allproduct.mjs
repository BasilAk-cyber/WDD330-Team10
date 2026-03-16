import ProductData from "./ProductData.mjs";

export default async function loadAllProducts() {
    const [backpacks, tents, sleepingbags] = await Promise.all([
        new ProductData("backpacks").getData(),
        new ProductData("tents").getData(),
        new ProductData("sleeping-bags").getData()
    ]);

    return [...backpacks, ...tents, ...sleepingbags];
}