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