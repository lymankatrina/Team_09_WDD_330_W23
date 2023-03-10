<<<<<<< HEAD
import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

// create instance of product data module
const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductListing("Tents", dataSource, element);
=======
import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);
>>>>>>> main

listing.init();
