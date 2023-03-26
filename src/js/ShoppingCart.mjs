import { getLocalStorage } from "./utils.mjs";
// let cartTotal;
function cartItemTemplate(item) {
  //  cartTotal += item.FinalPrice;
  const newItem = `<li class="cart-card divider">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
  <p>
  <button id="myBtn" type="button" class="btn"><i class="fa fa-trash"></i>  Remove</button>
  </p>
</li>`;

  return newItem;
}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
    this.total = 0;
  }
  async init() {
    const list = getLocalStorage(this.key);
    this.calculateListTotal(list);
    this.renderCartContents(list);
  }
    // function for removing items from the cart--Teresa Moser
  
  removeItemFromCart(newItem) {
    const cart = new ShoppingCart("so-cart", ".product-list");
    for (var i in cart ) {
      if (cart[i].newItem === newItem) {
          cart[i].count --;
          
          if (cart[i].count === 0) {
              cart.splice(i, 1); // removes item from the array
          }
          break;
      }
      removeItemFromCart()
    }
  
  document
    .getElementById("myBtn")
    .addEventListener("click", removeItemFromCart(newItem));

  }

  calculateListTotal(list) {
    const amounts = list.map((item) => item.FinalPrice);
    this.total = amounts.reduce((sum, item) => sum + item);
  }

  renderCartContents() {
    //    cartTotal = 0;
    const cartItems = getLocalStorage(this.key);
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    document.querySelector(".list-total").innerText += ` $${this.total}`;
    //    document.getElementById("finalPrice").innerHTML = `Total: $${cartTotal}`;
  }
}
