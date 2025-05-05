// Задание 1

/*
Дан объект

const house = {
  adress: "Pfondorfer str 69",
  postIndex: 10408,
  roofColor: "red",
  wallColor: "green",
};

Используя деструктуризацию объекта, получите в отдельные переменные цвет стен, и адрес.
*/


const house = {
  adress: "Pfondorfer str 69",
  postIndex: 10408,
  roofColor: "red",
  wallColor: "green",
};

const { adress, wallColor } = house;

console.log("Adress:", adress);
console.log("Wall Color:", wallColor);

console.log("------------");

// Задание 2

/*
Создайте метод, который принимает массив стрингов и еще один параметр типа стринг prefix. Метод должен вернуть новый массив, в котором будут храниться слова из исходного массива, слева к которым присоединен префикс.

Исходный массив должен остаться неизменным.

Пример: ["apple", "orange"] с префиксом "pine" ----> ["pineapple", "pineorange"]

*/


function addPrefix(array, prefix) {


  const result = []; // Создаем новый массив для хранения результатов
  // Используем цикл for для перебора элементов массива

  for (let i = 0; i < array.length; i++) {

    result.push(prefix + array[i]); // Добавляем к каждому элементу массива префикс и помещаем в новый массив

  }
  return result;
}

const fruits = ["apple", "orange"];
const newFruits = addPrefix(fruits, "pine");

// Выводим в консоль оригинальный массив и новый массив с префиксом
console.log("Original array:", fruits);
console.log("With prefix:", newFruits);

console.log("------------");


// Задание 3 — gardener и функции

/*
Создайте функцию gardender, которая принимает в себя два параметра: операцию и предмет, на который эта операция будет направлена.

Создайте еще одну функцию поливать цветок, которая бы выводила в консоль "I water this " плюс название конкретного цветка.

Вызовите фунцкию gardender c параметрами: функция поливать цветок, 'rose'.

Попробуйте придумать функции для других операций и предметов, с которыми может работать садовник. 🧑‍🌾
*/

function gardener(actionFn, subject) {

//  запускаем переданную функцию с параметром на выполнение
  actionFn(subject);
}

function water(flower) {
  console.log("I water this " + flower);
}

function plant(flower) {
  console.log("I plant the " + flower);
}

function care(flower) {
  console.log("I take care of the " + flower);
}

gardener(water, "rose");
gardener(plant, "tulip");
gardener(care, "bush");