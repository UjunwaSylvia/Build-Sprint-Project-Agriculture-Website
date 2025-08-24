document.addEventListener('DOMContentLoaded', () => {

    // Search button functionality
    const searchButton = document.querySelector('.search-btn');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchText = document.querySelector('.search-container input').value;
            if(searchText) {
                alert(`Searching for: ${searchText}`);
            } else {
                alert('Please enter a product to search for.');
            }
        });
    }

    // Add to Cart buttons functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            alert(`"${productName}" has been added to your cart!`);
        });
    });

    // Check Order Status button functionality
    const statusButton = document.querySelector('.status-btn');
    if (statusButton) {
        statusButton.addEventListener('click', () => {
            alert('Redirecting to the order status page...');
        });
    }

});

const productElement = document.querySelector('.section');


//Render Product
function renderProducts() {
  products.forEach((product) => {
    productElement.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="white_beans">
            <h3>${product.name}</h3>
            <p>₦${product.price}</p>
            <button  onclick="addToCart(${product.id})" class="add-to-cart-btn">Add to Cart</button>
        </div>
    `;
  });
}
console.log(renderProducts)
renderProducts();

// Cart array (sync with localStorage)
let cart = JSON.parse(localStorage.getItem('CART')) || [];

// Add to cart
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits('plus', id);
  } else {
    const item = products.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateCart();
}

// Update cart in localStorage
function updateCart() {
  localStorage.setItem('CART', JSON.stringify(cart));
}

// Change quantity of items
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