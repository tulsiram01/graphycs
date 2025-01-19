// Load cart data from localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const itemTotalPrice = item.price * (item.quantity || 1);
        totalPrice += itemTotalPrice;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
            </div>
            <div class="cart-item-price">₹${item.price}</div>
            <div class="cart-item-quantity">
                <input type="number" min="1" value="${item.quantity || 1}" data-index="${index}">
            </div>
            <div class="cart-item-remove">
                <button data-index="${index}" class="remove-btn">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = totalPrice;

    // Add event listeners for quantity changes and remove buttons
    document.querySelectorAll('.cart-item-quantity input').forEach(input => {
        input.addEventListener('input', updateQuantity);
    });
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

// Update quantity in the cart
function updateQuantity(event) {
    const index = event.target.getAttribute('data-index');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = parseInt(event.target.value, 10);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Remove item from the cart
function removeFromCart(event) {
    const index = event.target.getAttribute('data-index');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Checkout button action
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Thank you for your purchase!');
    localStorage.removeItem('cart');
    loadCart();
});

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', loadCart);
