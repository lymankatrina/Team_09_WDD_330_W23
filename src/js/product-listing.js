import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");
// first create an instance of our ExternalServices class.
const dataSource = new ExternalServices();
// then get the element we want the product list to render in
const element = document.querySelector("./product-list");
// then create an instance of our ProductList class and send it the correct information.
const listing = new ProductList(category, dataSource, element);
// finally call the init method to show our products
listing.init();
