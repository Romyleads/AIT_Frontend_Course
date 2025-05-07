console.log("Hello world!");

// методы для того чтобы работать с массивами

const messageElement1 = document.getElementById("welcome-message");

console.log(messageElement1); // <p id="message">Hello world!</p>

//messageElement.innerHTML = "JS is here, baby";
 // <p id="message">Hello world!</p>

//console.log(messageElement);


// методы для того чтобы получить элемент документа
const messageElement = document.getElementById("welcome-message");
const magicBtn = document.getElementById("btn-js-is-here");
const catBtn = document.getElementById("btn-cat");
const containerForCat = document.getElementById("container-cat");
// убедиться что мы дейстивительно получили элемент в переменную, а не null
console.log(messageElement);
console.log(magicBtn);
console.log(catBtn);
// eventListener - слушатель событий - который будет вызвать
// при определенных событиях - колбек
magicBtn.addEventListener("click", () => {
  console.log("Function is working"); // убедимся, что функция работает
  // innerText
  // мы обратиться к элементу -
  // и обновить значение его свойства
  messageElement.innerText = "JS is here, baby!";
});
// подключаем скрипт, не забываем про дефер
// проверяем, что скрипт работает - вывод в консоль
// получаем нужные нам элементы и сохраняем в переменные
// прописываем, если нужно, слушатель событий
// - проверяем - работает ли он - выводом в консоль
// делаем то, что нам необходимо

const catImg = document.createElement("img");
console.log(catImg); // <img>



catBtn.addEventListener("click", () => {
  console.log("Cat is almost here!");
  // создание нового элента
  //const catImg = document.createElement("img");
  console.log(catImg); // <img>
  // зададим атрибуты
  catImg.setAttribute(
    "src",
    "https://preview.redd.it/i-keep-seeing-this-angry-cat-meme-does-anyone-know-what-v0-0o96ygkg9jw91.jpg?width=640&crop=smart&auto=webp&s=f2b697113affe3da13283197767d071e80644ff7"
  );
  console.log(catImg);
  catImg.setAttribute("alt", "angry-cat-meme");
  console.log("После добавления атрибутов", catImg);
  // прикрепить новый элемент - картинку  к html
  // appendChild - добавляет дочерний элемент в родителя
  containerForCat.appendChild(catImg);
});