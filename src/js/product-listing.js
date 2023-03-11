import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();





// This section below adds search box to the product list page
// Add a search box to the navbar that will allow to search for a product.
//  Whent he form submits the search results should be retrieved from the 
// API and displayed on a product list page.

const searchForm = document.getElementById("search-form");
const searchQuery = document.getElementById("search-query");

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  const searchValue = searchQuery.value.trim();
  dataSource.search(searchValue).then(results => {
    listing.update(results);
  });
});