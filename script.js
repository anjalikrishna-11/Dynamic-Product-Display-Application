// U35346496
// Define the API URL with a CORS proxy (for development)
const API_URL = 'https://thingproxy.freeboard.io/fetch/https://course-api.com/react-store-products';

// DOM elements
const loadingElement = document.getElementById('loading'); // Loading indicator element
const errorElement = document.getElementById('error'); // Error message element
const productContainer = document.getElementById('product-container'); // Container for displaying products
const prevButton = document.getElementById('prev-button'); // Previous product button
const nextButton = document.getElementById('next-button'); // Next product button

// Variables to store products and current index
let products = [];
let currentIndex = 0;

// Function to fetch products from the API
async function fetchProducts() {
    try {
        loadingElement.style.display = 'block'; // Show loading indicator
        const response = await fetch(API_URL); // Fetch data from the API
        if (!response.ok) {
            throw new Error('Failed to fetch products'); // Throw an error if fetching fails
        }
        products = await response.json(); // Parse the JSON response
        if (products.length === 0) {
            throw new Error('No products found'); // Throw an error if no products are returned
        }
        displayProduct(); // Display the first product
    } catch (error) {
        handleError(error.message); // Handle errors during fetching or parsing
    } finally {
        loadingElement.style.display = 'none'; // Hide loading indicator after fetch completes
    }
}
// Function to handle errors
function handleError(errorMessage) {
    errorElement.textContent = errorMessage; // Display the error message
    errorElement.style.display = 'block'; // Show the error message element
    productContainer.innerHTML = ''; // Clear the product container on error
}
// Function to show the previous product
function showPreviousProduct() {
    currentIndex = (currentIndex === 0) ? products.length - 1 : currentIndex - 1; // Update current index
    displayProduct(); // Display the previous product
}

// Function to show the next product
function showNextProduct() {
    currentIndex = (currentIndex === products.length - 1) ? 0 : currentIndex + 1; // Update current index
    displayProduct(); // Display the next product
}

// Event listeners for previous and next buttons
prevButton.addEventListener('click', showPreviousProduct);
nextButton.addEventListener('click', showNextProduct);

fetchProducts();

 
