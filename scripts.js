// Vegetable search functionality
function searchVegetables() {
    const query = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = name.includes(query) ? 'block' : 'none';
    });
}

// Category filter functionality
function filterCategory(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = card.classList.contains(category) ? 'block' : 'none';
    });
}

// Price calculation functionality
const pricePerKg = 30; // Example price
function calculatePrice() {
    const quantity = document.getElementById('quantity').value;
    const total = quantity * pricePerKg;
    document.getElementById('totalPrice').textContent = total;
}