const productList = document.getElementById("product-list");

async function fetchProducts() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const products = await response.json();

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      productCard.innerHTML = `
        <img src="${product.images[0]}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>Цена: ${product.price}</p>
      `;

      productList.appendChild(productCard);
    });
  } catch (error) {
    console.error("Ошибка при получении продуктов:", error);
    productList.innerHTML = "<p>Не удалось загрузить продукты.</p>";
  }
}

fetchProducts();