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

const firebaseConfig = {
    apiKey: "AIzaSyDRQl5RLzgpXNcuGh7apeO52OZGu0acGm8",
    authDomain: "brandon-s-first-project.firebaseapp.com",
    projectId: "brandon-s-first-project",
    storageBucket: "brandon-s-first-project.firebasestorage.app",
    messagingSenderId: "1007930748392",
    appId: "1:1007930748392:web:4e7dd4465feaf27106085d"
  }; 

  // Initialize Firebase
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const auth = firebaseApp.auth();

// Event listener for checkout button
checkoutButton.addEventListener('click', function () {
    alert('Thank you for your order!');
    // Adding orders to database 12/4/2024
    let currentOrder = "";
    $("li").each(function() {
      currentOrder += $(this).text() + "\n";
    });
    console.log(currentOrder); // Print the text content of each `<li>`
    let data = {
        order: currentOrder
    }
    db.collection('coffeeOrders').add(data);

    // Removing all items from the list
    $("li").empty();
});