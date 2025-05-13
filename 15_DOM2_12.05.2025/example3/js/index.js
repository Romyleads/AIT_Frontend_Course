//const emailInput = document.getElementById("email");
//emailInput.value = "john@gmail.com"

//console.log(emailInput.value);

const form=document.getElementById("student-form");

const emailInput=form.elements["email"]; // получаем элемент email
const germanInput=form.elements["german"]; // получаем элемент german


const studentsContainer=document.getElementById("students-container"); // получаем элемент studentsContainer
const removeBtn=document.getElementById("remove-all-students"); // получаем элемент removeBtn для удаления всех студентов
const emailError=document.getElementById("email-error"); // получаем элемент emailError для вывода ошибки
const sortBtn=document.getElementById("sort-students-btn"); // получаем элемент removeBtn для удаления всех студентов
const filterForm=document.getElementById("filter-form"); // получаем элемент filterForm для фильтрации студентов
const filterParamsInput=filterForm.elements["german"]; // получаем элемент german из filterForm







// начальный массив студентов
let students = [
{email: "default@gmail.com", german: "B1"},
{email:"john@gmail.com", german: "B2"},
]; 

// Выводим студентов в контейнер, добавляем пару элементов

renderStudents(students); // запускаем генерацию списка студентов -  функцию renderStudents и передаем массив студентов




// генерация списка студентов

function renderStudents(students) {

// очищаем предыдущий рендер контейнера studentsContainer

// studentsContainer.innerHTML=""; // очищаем контейнер studentsContainer - не рекомендуется


while (studentsContainer.firstChild) {
studentsContainer.removeChild(studentsContainer.firstChild); // удаляем ребенка в контейнере, пока не удалим всех
}


// заново наполняем родителя карточками студентов
students.forEach(

(student) => {

const studentCard=document.createElement("div"); // создаем элемент div каждого студента
//studentCard.innerText = student.email; // добавляем текст в элемент div

///const emailInfo = document.createElement("span"); // создаем элемент span для email
///const germanInfo = document.createElement("span"); // создаем элемент span для german

///const delimeter = document.createTextNode(", "); // создаем текстовый узел для разделителя между email и german

///emailInfo.innerText = student.email; // добавляем текст в элемент span
///germanInfo.innerText = student.german; // добавляем текст в элемент span

///studentCard.append(emailInfo,delimeter,germanInfo); // добавляем элемент span в элемент div

studentCard.innerHTML=`<span>${student.email}</span>, <span>${student.german}</span>`;



studentsContainer.appendChild(studentCard); // добавляем сгенерированный элемент div в контейнер



}); // создаем элемент div каждого студента
}



function addStudentToList(event){
event.preventDefault(); // отмена отправки формы



if (validateForm()) { // проверяем валидность email



//console.log(emailInput.value); // вывод значения emailInput(email) в консоль

students.push({email: emailInput.value,german: germanInput.value}); // добавляем студента в массив students

console.log(students); // вывод массива students в консоль



emailInput.value=""; // очищаем поле emailInput(email)
emailError.innerText=""; // очищаем контейнер emailError



studentsContainer.innerHTML=""; // очищаем контейнер studentsContainer
}
else {
emailError.innerText="Email is not valid (must include '@','.' and no '#')\n"; // выводим ошибку в контейнер emailError
}



renderStudents(students); // запускаем генерацию списка студентов -  функцию renderStudents и передаем массив студентов



}

//   return email.includes("@") && !email.includes("#");
// }

// функция валидации полей ввода email

function validateForm() {
  return (emailInput.value.includes("@") &&
  !emailInput.value.includes("#") &&
  emailInput.value.includes(".")
  );
}

// удаляеет всех из списка 
function removeAll() {
students = []; // очищаем массив студентов
renderStudents(students);
}



// сортирует студентов и обновляем отображение

function sortStudentsByGerman() {
  students.sort(
  (studentA,studentB) => studentA.german.localeCompare(studentB.german)
  );
renderStudents(students) // запускаем генерацию списка студентов -  функцию renderStudents и передаем массив студентов
}




// фильтрует студентов по german и обновляем отображение
function filteredStudents(event){
event.preventDefault(); // отмена отправки формы
const filtered = students.filter(

(student) => student.german === filterParamsInput.value

);
renderStudents(filtered); // запускаем генерацию списка студентов -  функцию renderStudents и передаем массив отфильтрованных студентов

}


// Слушалки форм

form.addEventListener("submit", addStudentToList);
removeBtn.addEventListener("click", removeAll);
sortBtn.addEventListener("click", sortStudentsByGerman);
filterForm.addEventListener("change", filteredStudents);

// Слушалки кнопок
