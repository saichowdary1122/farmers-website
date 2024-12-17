// Add to Cart Functionality
function addToCart(productName, price) {
    alert(`${productName} added to cart at $${price}/kg.`);
}

// Price Calculator
function calculatePrice() {
    const select = document.getElementById('vegetable-select');
    const quantityInput = document.getElementById('quantity');
    const priceDisplay = document.getElementById('calculated-price');

    const selectedOption = select.value;
    const [vegetable, pricePerKg] = selectedOption.split('-');
    const quantity = parseFloat(quantityInput.value);

    if (quantity > 0) {
        const totalPrice = quantity * parseFloat(pricePerKg);
        priceDisplay.textContent = `Total price for ${quantity}kg of ${vegetable}: $${totalPrice.toFixed(2)}`;
    } else {
        priceDisplay.textContent = 'Please enter a valid quantity.';
    }
}

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent! Thank you for contacting us.');
    this.reset();
});

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for signing up for updates!');
    this.reset();
});

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Login successful!');
    this.reset();
});
