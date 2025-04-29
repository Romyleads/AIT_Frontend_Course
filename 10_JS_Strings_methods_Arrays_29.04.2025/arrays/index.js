// Array
// JAVA - нумерованный, одного типа значения, фиксированная длина

const students = [];
console.log(students);

const teachers = ['Sergey', 'Alisher', 'Igor'];
console.log(teachers);

// еще один способ создать массив
const animals = new Array(); // пустой массив
const plants = new Array('Camomile', 'Dandelion', 'Basil');

// получить из массива элемент по индексу
const firstTeacher = teachers[0];
console.log(firstTeacher);
const secondTeacher = teachers[1];

// Добавление элемента
plants.push('Cactus');

// Перезапись последнего
plants[plants.length - 1] = 'Rose';

// Удаление последнего элемента
const last = plants.pop();

plants[10] = 'Banana';
plants[108] = 'Mango';

console.log('plants:', plants); // [ 'Camomile', 'Dandelion', 'Basil', 'Oak' ]
console.log(last); // Rose
console.log(plants[100]);

function CreatePersonalInfo(age, name, hairColor) {
	return [age, name, hairColor];
}

// Пример вызова:
const person = CreatePersonalInfo(31, 'Alisher', 'brown');
console.log(person); // [31, "Alisher", "brown"]

// shift - убирает элемент в начале, unshift - добавляет элемент в начале
const cars = ['BMW', 'Mercedes', 'Audi'];
cars.unshift('Lada'); //добавили в начало
console.log(cars); // [ 'Lada', 'BMW', 'Mercedes', 'Audi' ]

cars.shift(); //удалили из начала 'Lada'
console.log(cars); // [ 'Lada', 'BMW', 'Mercedes', 'Audi' ]

// о сложных методах массивов

// Исходный массив
const cities = ['Berlin'];

// Копия через slice
const cities2 = cities.slice();

// Или:
const newCities = [...cities]; // с помощью spread-оператора

cities.push('London');
console.log(cities); // ["Berlin", "London"]
console.log(cities2); // ["Berlin"] — копия не изменилась

cities2.push('Milan');
console.log(cities2); // ["Berlin", "Milan"]

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const allInclusive = [...array1, ...array2];
console.log(allInclusive); // [1, 2, 3, 4, 5, 6]
