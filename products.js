const products = [
    { id: 1, name: "Nike Air Zoom Pegasus", price: 110, gender: "Men", image: "assets/products/pegasus.jpeg" },
    { id: 2, name: "Adidas Ultraboost 22", price: 180, gender: "Men", image: "assets/products/ultraboost.jpeg" },
    { id: 3, name: "Nike Vaporfly Women", price: 250, gender: "Women", image: "assets/products/adidas_boston_woman.jpeg" },
    { id: 4, name: "Adidas Adizero Boston", price: 140, gender: "Women", image: "assets/products/vaporfly_woman.jpeg" },
    { id: 5, name: "Asics Kids Sprint", price: 90, gender: "Children", image: "assets/products/asics_kids_spring.jpeg" },
    { id: 6, name: "Nike Kids Revolution", price: 100, gender: "Children", image: "assets/products/nike_kids_revolution.jpeg" },
  ];

  function renderProducts() {
    const men = document.getElementById("men-section");
    const women = document.getElementById("women-section");
    const children = document.getElementById("children-section");

    products.forEach((p) => {
      const card = `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${p.image}" class="card-img-top" alt="${p.name}">
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">$${p.price}</p>
              <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
          </div>
        </div>
      `;

      if (p.gender === "Men") men.innerHTML += card;
      else if (p.gender === "Women") women.innerHTML += card;
      else if (p.gender === "Children") children.innerHTML += card;
    });
  }

  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
  }

  renderProducts();