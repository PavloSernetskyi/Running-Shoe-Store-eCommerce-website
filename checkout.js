// Function to validate form fields
function validateForm(fields) {
  let valid = true;
  fields.forEach((id) => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      input.style.borderColor = "red";
      valid = false;
    } else {
      input.style.borderColor = "#ccc";
    }
  });
  return valid;
}

// Form submission logic
document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fields = ["name", "email", "address", "city", "zip"];
  if (validateForm(fields)) {
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("checkoutForm").reset();
    localStorage.removeItem("cart"); // Clear cart after successful checkout
    document.querySelector(".order-summary").style.display = "none";
  }
});


// Function to render cart items in the checkout page
function renderCheckoutItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const orderSummary = document.querySelector(".order-summary");

  // Clear existing items
  orderSummary.innerHTML = `
    <h3>Order Summary</h3>
  `;

  let total = 0;

  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "item";
    itemElement.innerHTML = `
      <p>${item.name} - $${item.price.toFixed(2)}</p>
    `;
    orderSummary.appendChild(itemElement);
    total += item.price;
  });

  // Add total amount
  const totalElement = document.createElement("div");
  totalElement.className = "total";
  totalElement.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
  orderSummary.appendChild(totalElement);
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", renderCheckoutItems);

// Cancel Checkout
document.getElementById("cancelBtn").addEventListener("click", function () {
  if (confirm("Are you sure you want to cancel checkout?")) {
    window.location.href = "cart.html"; // or "index.html"
  }
});