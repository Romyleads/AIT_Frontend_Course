/*
Задание 1 — Форматирование строки
Создайте функцию, которая принимает строку в формате вида "1333.132.123 00" — числа могут быть любыми, но структура такая же: три группы, разделённые точками и пробелом.

Цель: преобразовать строку к следующему формату: 📌 "1333 132:123-00"

💡 Пример:
function formatString(input) {
    // Ваша реализация здесь
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"

📘 Задание 2 — Промис с рандомной ошибкой
Создайте Promise, который с одинаковой вероятностью (50/50):

либо возвращает строку "Best day of my life"
либо выбрасывает ошибку с сообщением "Something is off"
Затем обработайте результат с помощью .then() и .catch().
*/

console.log("Task 1");

function formatString(input) {
return input.replace(/(\d+)\.(\d+)\.(\d+) (\d{2})/, "$1 $2:$3-$4");
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"

console.log("\nTask 2");
function getRandomNumber(max) {
  return Math.floor(Math.random() * max); // 0 - 1
}

const lifePromise = new Promise((res, rej) => { //
  if (getRandomNumber(2)) {
    res("Best day of my life");
  } else {
    rej(new Error("Something is off"));
  }
});

lifePromise
  .then((msg) => console.log("Resolved:", msg)) // "Best day of my life"
  .catch((err) => console.log("Rejected:", err.message)); // "Something is off"

