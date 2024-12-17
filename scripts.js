// Simple cart array
let cart = [];

// Add to Cart function
function addToCart(productName, price) {
    let product = {
        name: productName,
        price: price
    };
    cart.push(product);
    alert(`${productName} added to your cart!`);
}

// Calculate Price function
function calculatePrice() {
    let quantity = document.getElementById("quantity").value;
    if (quantity) {
        let pricePerKg = 3; // Example price for tomato, adjust accordingly
        let totalPrice = pricePerKg * quantity;
        document.getElementById("calculated-price").innerText = `Total Price: $${totalPrice}`;
    } else {
        document.getElementById("calculated-price").innerText = "Please enter a valid quantity.";
    }
}

// Form submission handling (you can extend this for actual backend use)
document.getElementById('contact-form').onsubmit = function (event) {
    event.preventDefault();
    alert('Thank you for your message!');
};

document.getElementById('login-form').onsubmit = function (event) {
    event.preventDefault();
    alert('Logging in...');
};

document.getElementById('signup-form').onsubmit = function (event) {
    event.preventDefault();
    alert('Signed up for updates!');
};
