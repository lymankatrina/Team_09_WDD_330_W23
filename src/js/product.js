import { getParams } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParams("product");

const product = new ProductDetails(productId, dataSource);
product.init();

// function renderProductDeatails(){
//     <main class="divider">
//     <section class="product-detail">
//       <h3>Cedar Ridge</h3>

//       <h2 class="divider">Rimrock Tent - 2-Person, 3-Season</h2>

//       <img
//         class="divider"
//         src="../images/tents/cedar-ridge-rimrock-tent-2-person-3-season-in-rust-clay~p~344yj_01~320.jpg"
//         alt="Rimrock Tent - 2-Person, 3-Season"
//       />

//       <p class="product-card__price">$69.99</p>

//       <p class="product__color">Rust/Clay</p>

//       <p class="product__description">
//         Lightweight and ready for adventure, this Cedar Ridge Rimrock tent
//         boasts a weather-ready design that includes a tub-style floor and
//         factory-sealed rain fly
//       </p>

//       <div class="product-detail__add">
//         <button id="addToCart" data-id="344YJ">Add to Cart</button>
//       </div>
//     </section>
//   </main>

// }


// function addProductToCart(product) {
//   setLocalStorage("so-cart", product);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
