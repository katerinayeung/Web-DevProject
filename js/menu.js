// Initialize the total order price
let total = 0;

// Get references to DOM elements
const orderList = document.getElementById('order-list');
const totalPrice = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-btn'); // Reference to the checkout button

// Function to add items to the order
function addToOrder(item, price) {
    const listItem = document.createElement('li');
    listItem.textContent = `${item} - $${price.toFixed(2)}`;
    orderList.appendChild(listItem);
    total += price;
    totalPrice.textContent = total.toFixed(2);
}

// Function to scroll the carousel
function scrollCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) {
        console.error(`Carousel with ID "${carouselId}" not found.`);
        return;
    }

    const scrollAmount = 300; // Pixels to scroll
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
    });
}

// Event listener for checkout button
checkoutButton.addEventListener('click', function () {
    alert('Thank you for your order!');
});
