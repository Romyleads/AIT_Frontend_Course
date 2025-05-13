const formElements = document.getElementById("form");
const listElement = document.getElementById("persons-list");

const clearBtnElenemt = document.getElementById("clear");
const clearOneBtnElement = document.getElementById("clear-one");

// Сначала мы получаем ссылки на несколько элементов HTML с помощью метода getElementById:
// formElement - это форма с идентификатором "form".
// listElement - это список (вероятно, <ul>) с идентификатором "persons-list".
// clearBtnElement - это кнопка с идентификатором "clear".
// clearOneBtnElement - это кнопка с идентификатором "clear-one".

const persons=[];

// Создается пустой массив persons, в котором будут храниться данные о людях, которые будут добавляться через форму.

const clearList = function () {

//while (listElement.firstChild) {
  //  listElement.removeChild(listElement.firstChild); 
  //}

while (listElement.hasChildNodes()) {
listElement.firstChild.remove(); // Удаляем первый дочерний элемент списка listElement

    //listElement.removeChild(listElement.firstChild);


  }
  // Этот цикл while удаляет все дочерние элементы списка listElement, пока он не станет пустым.
}

const clearOne=function () {
  if (listElement.hasChildNodes()) {
    listElement.firstChild.remove(); // Удаляем первый дочерний элемент списка listElement
  }
}
// clearOne удаляет первый элемент из списка listElement.
// Этот фрагмент кода определяет функцию с именем ClearOne в JavaScript.
// Функция проверяет, имеет ли элемент DOM с идентификатором ListElement какие-либо дочерние узлы.
// Если это произойдет, первый дочерний узел будет удален из элемента.

function clearInputs(e){
e.target.nickname.value = "";
e.target.place.value = "";
}
// Функция clearInputs(event) используется для очистки полей ввода формы
// Она получает объект события event и обнуляет значения полей формы "nickname" и "place".

function changeStatus(e){
if (e.target.style.textDecoration === "line-through") {
  e.target.style.textDecoration = "none"; // Убираем зачеркивание

}else {
  e.target.style.textDecoration = "line-through"; // Добавляем зачеркивание
}
}


// Функция changeStatus(event) изменяет стиль элемента списка при клике на него.
//  Если у элемента уже есть стиль "textDecoration" с значением "line-through",
// то этот стиль убирается, иначе он добавляется, что создает эффект зачеркивания текста.

clearBtnElenemt.addEventListener("click", clearList);
clearOneBtnElement.addEventListener("click", clearOne);

// Добавляются слушатели событий на кнопки:
// clearBtnElement - при клике на кнопку "clear" вызывается функция clearList.
// clearOneBtnElement - при клике на кнопку "clear-one" вызывается функция clearOne.

formElements.addEventListener(

"submit", function (e) {
  e.preventDefault(); // Отменяем стандартное поведение формы (перезагрузку страницы)

 const person = { 

name: e.target.nickname.value, // Получаем значение поля "nickname"
place: e.target.place.value // Получаем значение поля "place"

 }; // Создаем объект person с полученными значениями


 
  persons.push(person); // Добавляем объект person в массив persons




  const liElement = document.createElement("li"); // Создаем новый элемент списка <li>



  //liElement.innerText = `${nickname} (${place})`; // Устанавливаем текст элемента списка

liElement.textContent = `👦 ${person.name} (${person.place})`; // Устанавливаем текст элемента списка


liElement.onclick = changeStatus; // Добавляем обработчик события клика на элемент списка

// устанавливается обработчик клика onclick,
  // который вызывает функцию changeStatus для изменения стиля элемента при клике.

listElement.append(liElement); // прикрепить новый элемент к списку




 // listElement.appendChild(liElement); // Добавляем элемент списка в список

  clearInputs(e); // Очищаем поля ввода формы
}

)






