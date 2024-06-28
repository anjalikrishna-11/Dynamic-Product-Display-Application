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


 
