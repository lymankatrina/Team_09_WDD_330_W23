import { getLocalStorage } from "./utils.mjs";
let cartTotal;
function renderCartContents() {
  cartTotal = 0;
  const cartItems = getLocalStorage("so-cart");
  // const itemsArr = cartItems.toString().split(",");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  document.querySelector(".cartTotal").innerHTML = `Total: $${cartTotal}`;
}

function cartItemTemplate(item) {
  cartTotal += item.FinalPrice;
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
