// Sample product data (you can later fetch this from a database or JSON file)
const products = [
  {
    id: 1,
    name: "Designer Embroidered Blouse",
    price: 1799,
    oldPrice: 2499,
    discount: "28%",
    description: "Elegant hand-embroidered blouse perfect for festive occasions. Made with high-quality fabric, ensuring comfort and style for every woman.",
    images: [
      "assets/images/product1.jpg",
      "assets/images/product1_2.jpg",
      "assets/images/product1_3.jpg"
    ]
  },
  {
    id: 2,
    name: "Stylish Kids Party Dress",
    price: 1299,
    oldPrice: 1899,
    discount: "32%",
    description: "Cute and comfortable party wear for girls. Soft fabric with beautiful lace detailing — perfect for birthdays and celebrations.",
    images: [
      "assets/images/product2.jpg",
      "assets/images/product2_2.jpg",
      "assets/images/product2_3.jpg"
    ]
  }
];

// Load product ID from URL (example: product.html?id=1)
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// Find matching product
const product = products.find(p => p.id === productId);

// Display product details
if (product) {
  document.getElementById("productName").textContent = product.name;
  document.getElementById("oldPrice").textContent = `₹${product.oldPrice}`;
  document.getElementById("newPrice").textContent = `₹${product.price}`;
  document.getElementById("discount").textContent = `(${product.discount} OFF)`;
  document.getElementById("productDesc").textContent = product.description;

  // Load main image
  const mainImage = document.getElementById("mainImage");
  mainImage.src = product.images[0];

  // Load thumbnails
  const thumbContainer = document.getElementById("thumbnails");
  thumbContainer.innerHTML = "";
  product.images.forEach(img => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.onclick = () => (mainImage.src = img);
    thumbContainer.appendChild(thumb);
  });
} else {
  document.querySelector(".product-container").innerHTML = "<h2>Product not found!</h2>";
}

// Add to Cart function (you can connect to your existing cart.js)
function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart 🛒`);
}
