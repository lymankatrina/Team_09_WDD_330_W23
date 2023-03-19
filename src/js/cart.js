import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();



// const cart = new ShoppingCart("so-cart", ".product-list");
// cart.renderCartContents();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.init();
if (cart.total > 0) {
  // show our checkout button and total if there are items in the cart.
  document.querySelector(".list-footer").classList.remove("hide");
}



// +++++++++++++This below adds the product comments functionality+++++++++++++++

// Get the comment form and the comment list
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

// Add an event listener to the comment form for the submit event
commentForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the comment form
  const name = document.getElementById('comment-name').value;
  const email = document.getElementById('comment-email').value;
  const message = document.getElementById('comment-message').value;

  // Create a new comment element with the form values
  const comment = document.createElement('li');
  comment.innerHTML = `
    <div class="comment-author">${name} (${email})</div>
    <div class="comment-message">${message}</div>
  `;

  // Add the new comment to the comment list
  commentList.appendChild(comment);

  // Clear the comment form values
  commentForm.reset();
});
