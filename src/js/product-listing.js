import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

// create instance of product data module
const category = getParam("category");
// first create an instance of our ProducetData class.
const dataSource = new ProductData();
// get the element we want the product list to render in
const listElement = document.querySelector(".product-list");
// create an instance of our ProductList class and send it correct information.
const myList = new ProductListing(category, dataSource, listElement);
// call the init method to show our products
MyList.init();
