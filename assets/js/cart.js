// cart.js
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const row = `
      <tr>
        <td><img src="${item.image}" alt="${item.name}" width="80" height="80"></td>
        <td>${item.name}</td>
        <td>₹${item.price}</td>
        <td>
          <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
        </td>
        <td>₹${itemTotal}</td>
        <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
      </tr>
    `;
    cartItemsContainer.innerHTML += row;
  });

  cartTotal.textContent = `Total: ₹${total}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateQuantity(index, qty) {
  cart[index].quantity = parseInt(qty);
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for shopping with M I Boutique 💖");
  localStorage.removeItem("cart");
  renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);
