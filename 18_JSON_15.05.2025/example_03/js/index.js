// HTTP
// status

// method - метод запроса
// GET - получение информации
// POST - создание
// PUT - обновление
// DELETE - удаление

//  Структура запроса
// URL - адрес
// Headers - заголовки
// Body - тело запроса
// https://www.amazon.com/new-releases/?ref=nav_cs_newreleases
// https - протокол
// www - доменное имя
// amazon.com - хост
// /new-releases/?ref=nav_cs_newreleases - путь
// ?ref=nav_cs_newreleases - параметры

// по умолчанию фетч

function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
    //   console.log(data.products[0]);

    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProducts();

function fetchProductById(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProductById(2);


// POST - используется дл создания ресурса на бекенде, часто для логина или регистрации
// попробуем сделать запрос на логин

fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // устанавливаем заголовок для отправки json
  },
Accept: "application/json",
  body: JSON.stringify({ // тело - объект, который будет преобразован в json и отправлен на бекенд для логина

    username: "username",
    password: "password",
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });



