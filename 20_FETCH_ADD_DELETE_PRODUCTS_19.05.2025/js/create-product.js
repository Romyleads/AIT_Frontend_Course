const form = document.getElementById("add-product-form");

form.addEventListener("submit", addProductHandler);

async function addProductHandler(event) {
  event.preventDefault();

  const title = form.elements["title"].value;
  const description = form.elements["description"].value;
  const price = parseFloat(form.elements["price"].value); 
  const image = form.elements["image"].value;

  const newProduct = {
    title,
    description,
    price,
    images: [image],
    categoryId: 1, // можно выбрать другую категорию
  };

  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    console.log("Ответ от сервера:", result);

    if (!res.ok) {
      alert("Ошибка при добавлении товара: " + JSON.stringify(result));
    } else {
      alert("Товар успешно добавлен!");
      form.reset(); // очистить форму
/*
// 201 - успешно создано
  if (res.status === 201) {
    window.location.replace("/");
  }
*/
 window.location.replace("/");
    }
  } catch (err) {
    console.error("Ошибка при отправке:", err);
  }
}

// запомнить: 
// 1. обработчик событий
// 2. async/await
// синтаксис теги и атрибуты
// методы массивов - forEach, map, filter
// деструктуризация объектов
// синтаксис для работы с DOM
// fetch, async/await, методы http://api.escuelajs.co
