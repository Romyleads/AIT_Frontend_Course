

const productsContainer = document.getElementById("products-container");
const categoriesSelect = document.getElementById("category-select");
const filterForm = document.getElementById("filter-form");

let products = [];
fetchCategories();
fetchProducts();



categoriesSelect.addEventListener("change", (e) => {
  e.preventDefault();
  const categoryId =  filterForm.elements["category"].value;
  //fetchProducts(categoriesSelect.value);
fetchProducts(categoryId);
renderProducts(products);
});

async function fetchCategories() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    const categories = await res.json();
    console.log(categories);
//<option value="1">Clothes</option>

  // Добавим первую опцию "Все"
    const allOption = document.createElement("option");
    allOption.value = "";
    allOption.innerText = "Все категории";
    categoriesSelect.appendChild(allOption);

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.id;
  option.innerText = category.name;
  categoriesSelect.appendChild(option);
});



  } catch (err) {
    console.log(err);
  }
}




async function fetchProducts(categoryId) {

const queryString = categoryId ? `?categoryId=${categoryId}` : "";


try {

  const res = await fetch(`https://api.escuelajs.co/api/v1/products${queryString}`);
  products = await res.json();
  //console.log(products);
  productsContainer.innerHTML = "";

  renderProducts(products);


  
} catch (err) {
  console.log(err);
} 

}

//fetchCategories();
//fetchProducts(categoriesSelect.value);




async function fetchDeleteProduct(id) {
  await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "DELETE",
  });
  fetchProducts(categoriesSelect.value); // обновим список с учётом выбранной категории
}



function renderProducts(products) {

while(productsContainer.firstChild) {
  productsContainer.removeChild(productsContainer.firstChild);
}



products.forEach(
(product) =>
{
const {title, description, images, price, category, id} = product;
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
const priceSpan = document.createElement("span");
const titleSpan = document.createElement("span");
titleSpan.classList.add("title");
const descriptionSpan = document.createElement("span");
const productImg = document.createElement("img");

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.type = "button";

deleteBtn.onclick = () => {

const confirmed = confirm(`Удалить товар "${title}"?`);
  if (confirmed) {
    fetchDeleteProduct(id);
  }

};


//deleteBtn.addEventListener("click", () => {
 // fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
 //   method: "DELETE",
 // });
  //productsContainer.removeChild(productCard);
//});



priceSpan.innerText = price + "$";
titleSpan.innerText = title;

descriptionSpan.innerText = description;

productImg.src = images[0];
    // только из-за того, что корс не настроен
    productImg.referrerPolicy = "no-referrer";
    productImg.crossOrigin = "anonymous";



productCard.append(titleSpan, priceSpan,  productImg, descriptionSpan, deleteBtn);
productsContainer.appendChild(productCard);

}






);

}


/*
const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "button";
    deleteBtn.onclick = () => {
      //   console.log("Click id :" + id);
      fetchDeleteProduct(id);
      fetchProducts();
    };
*/