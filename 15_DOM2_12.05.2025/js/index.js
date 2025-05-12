const form = document.getElementById("student-form");
const emailInput = form.elements["email"];
const germanInput = form.elements["german"];
const studentsContainer = document.getElementById("students-container");
const removeBtn = document.getElementById("remove-all-students");
const emailError = document.getElementById("email-error");

let students = [
  { email: "default@gmail.com", german: "B1" },
  { email: "default2@gmail.com", german: "B2" }
];

// список студентов
function renderStudents(students) {
  studentsContainer.innerHTML = ""; // очистка

  students.forEach((student) => {
    const studentCard = document.createElement("div");
    const emailInfo = document.createElement("span");
    const germanInfo = document.createElement("span");
    const delimeter = document.createTextNode(", ");

    emailInfo.innerText = student.email;
    germanInfo.innerText = student.german;

    studentCard.append(emailInfo, delimeter, germanInfo);
    studentsContainer.appendChild(studentCard);
  });
}

// Обработка формы
function addStudentToList(event) {
  event.preventDefault();

  if (validateForm()) {
    students.push({ email: emailInput.value, german: germanInput.value });
    emailInput.value = "";
    germanInput.value = "";
    emailError.innerText = "";
  } else {
    emailError.innerText = "Email is not valid (must include '@' and no '#')";
  }

  renderStudents(students);
}

// валидация email
function validateForm() {
  const email = emailInput.value;
  return email.includes("@") && !email.includes("#");
}

// Удалить всех 
function removeAll() {
  students = [];
  renderStudents(students);
}

// Слушалки
form.addEventListener("submit", addStudentToList);
removeBtn.addEventListener("click", removeAll);

// Инициализация
renderStudents(students);