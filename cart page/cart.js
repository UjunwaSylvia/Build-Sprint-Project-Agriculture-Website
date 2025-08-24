//Select Elements
const cartItemsElement = document.querySelector('.cart_item');
const subTotalElement = document.getElementById('naira');
const totalItemsElement = document.querySelector('.totalItemInCart');
const itemCheckout = document.getElementById('checkout');
const totalOrder = document.getElementById('total')


// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('CART')) || [];
updateCart();

// Update Cart
function updateCart() {
  renderCartItems();
  renderSubtotal();
  localStorage.setItem('CART', JSON.stringify(cart));
}

// Render Cart Items
function renderCartItems() {
  cartItemsElement.innerHTML = ''; // Clear cart
  cart.forEach((items) => {
    cartItemsElement.innerHTML += `
    <table>
      <tbody>
        <tr>
          <td><img src="${items.image}" alt="${items.name}" onclick="removeItemFromCart(${items.id})"></td>
          <td>${items.name}</td>
          <td>₦${items.price}</td>
          <td><input type="number" value="1" min="1"></td>
          <td>
            <div class="subtotal-box">
              <span class="subtotal-amount">₦${items.price}</span>
              <div class="cart-item-actions">
                <img src="../assets/images/pencil.png" alt="Edit Item" class="cart-action-icon">
                <img src="../assets/images/trash.png" alt="Delete Item" class="cart-action-icon" onclick="removeItemFromCart(${items.id})">
              </div>
            </div>
          </td>
        </tr>
      </tbody>  
    </table>
    `;
  });
}

// Render Subtotal
function renderSubtotal() {
  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subTotalElement.textContent = `₦${totalPrice}`;
  totalItemsElement.textContent = totalItems;
}

// Remove Item
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

// Change Item Quantity
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === 'minus' && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === 'plus') {
        numberOfUnits++;
      }
    }
    return { ...item, numberOfUnits };
  });
  updateCart();
}

// Checkout
if (itemCheckout) {
  itemCheckout.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your plate is empty! Add something delicious first!!');
    } else {
      alert('Order Placed... Checkout complete! Bon appétit!!');
      cart = [];
      updateCart();
    }
  });
}