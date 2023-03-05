import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
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

let carts = document.querySelectorAll(".add-cart");

for (let i=0; i < carts.length; i++ ) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
  })

}
function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers){
    document.querySelector(".product-card").textContent = productNumbers;
  }
}
function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);
    if (productNumbers) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector(".product-card").textContent = productNumbers + 1;
  } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector(".product-card").textContent = 1;
  }
  setItems(product);
}
  function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
      cartItems[product.Name].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
          [product.Name]: product
      }
    }

    product.inCart = 1;
    cartItems = {
      [product.Name]: product
    }
    
  localStorage.setItem("productsInCart", JSON.stringify (cartItems));
  }

onLoadCartNumbers();
