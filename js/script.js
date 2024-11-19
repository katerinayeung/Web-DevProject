// Initialize the total order price
let total = 0;

// Get references to DOM elements
const orderList = document.getElementById('order-list');
const totalPrice = document.getElementById('total-price');

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
    const scrollAmount = 300; // Pixels to scroll
    carousel.scrollBy({
       
