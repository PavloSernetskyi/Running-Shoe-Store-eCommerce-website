function renderCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const menList = document.getElementById("men-items");
  const womenList = document.getElementById("women-items");
  const childrenList = document.getElementById("children-items");
  const cartTotal = document.getElementById("cart-total");

  menList.innerHTML = "";
  womenList.innerHTML = "";
  childrenList.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      ${item.name} - $${item.price}
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
    `;

    total += item.price;

    if (item.gender === "Men") menList.appendChild(li);
    else if (item.gender === "Women") womenList.appendChild(li);
    else if (item.gender === "Children") childrenList.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // remove item at that index
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems(); // re-render list
}

document.addEventListener("DOMContentLoaded", renderCartItems);
