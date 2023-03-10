import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

// create instance of product data module
const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductListing("Tents", dataSource, element);

listing.init();
