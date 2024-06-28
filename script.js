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

 
