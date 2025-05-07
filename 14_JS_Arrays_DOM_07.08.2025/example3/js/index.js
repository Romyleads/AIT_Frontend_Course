// проверим подколючился ли скрипт
console.log("check");

let count=0;

// получаем элементы в переменные
const infoBtn = document.getElementById("info-btn");
const removeInfoBtn = document.getElementById("remove-info-btn");

const infoMessage = document.createElement("p");
infoMessage.innerText = "This summer is not warm at all";
console.log(infoMessage); // <p>This summer is not warm at all</p>

// повесим слушатели событий
infoBtn.addEventListener("click", () => {
  // console.log("click-click"); // проверили
  document.body.appendChild(infoMessage);
count++;
  console.log(count);
  // проверим, что элемент добавился
  console.log(infoMessage); // <p>This summer is not warm at all</p>
  // добавим класс к элементу
  infoMessage.classList.add("info-message");
  console.log(infoMessage); // <p class="info-message">This summer is not warm at all</p>
});

removeInfoBtn.addEventListener("click", () => {
// удалить элемент из html
  // remove - удаляет элемент из html
  infoMessage.remove();
document.window.remove();
}
);


const infoClone = document.cloneNode(infoBtn);
infoClone.id ="new-id-msg";
console.log("Склоннированный узел, с изменненным id"+infoClone); // <button id="new-id-msg">Info</button>