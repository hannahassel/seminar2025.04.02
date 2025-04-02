// Data storage
/* let products = [];

document.getElementById('addProductBtn').addEventListener('click', handleProduct);

// Function for processing a product
function handleProduct() {
    const nameInput = document.getElementById('productName');
    const priceInput = document.getElementById('productPrice');
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);

    // Validation
    if (name === '' || isNaN(price) || price <= 0) {
        alert('Please enter valid product name and price.');
        return;
    }

    // Create product
    const product = {
        id: Date.now(),
        name: name,
        price: price
    };
    products.push(product);

    // Update UI
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
    document.getElementById('productList').appendChild(li);

    // Update total
    updateTotal();

    // Clear inputs
    nameInput.value = '';
    priceInput.value = '';
}

// Function for total calculation AND direct DOM update
function updateTotal() {
    let total = 0;
    for (const p of products) {
        total += p.price;
    }
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Repetitive structure
function clearInputs() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
} */

// Data storage
let products = [];

document.getElementById('addProductBtn').addEventListener('click', handleProduct);

// Function to handle product addition
function handleProduct() {
    const nameInput = document.getElementById('productName');
    const priceInput = document.getElementById('productPrice');

    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);

    if (!isValidProduct(name, price)) return;

    const product = createProduct(name, price);
    products.push(product);

    addProductToList(product);
    updateTotal();
    clearInputs();
}

// Function to validate product input
function isValidProduct(name, price) {
    if (name === '' || isNaN(price) || price <= 0) {
        alert('Please enter a valid product name and price.');
        return false;
    }
    return true;
}

// Function to create a product object
function createProduct(name, price) {
    return { id: Date.now(), name, price };
}

// Function to add product to UI
function addProductToList(product) {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
    document.getElementById('productList').appendChild(li);
}

// Function to calculate and update total
function updateTotal() {
    const total = products.reduce((sum, p) => sum + p.price, 0);
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Function to clear input fields
function clearInputs() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
}

