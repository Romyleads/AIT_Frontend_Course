// call
sayHi(); // можно вызывать до объявления — работает из-за hoisting

// hoisting = поднятие
// когда вызов может быть раньше в коде, чем сама декларация функции

// functional declaration
function sayHi() {
	console.log('Hi!');
}

console.log(x); // hoisting var → undefined
var x = 10;
// const и let так не работают!

// Functional expression
const sayGoodbye = function () {
	console.log('Bye bye');
};

sayGoodbye(); // вызываем после объявления — работает
// sayGoodbye(); // нельзя вызывать до объявления — ошибка

function butler(action) {
	action();
}

console.log('*******************');

butler(sayHi);
butler(sayGoodbye);
console.log('******************* СОСЕД *******************');
// сосед
function neighbour(action, thing) {
	action(thing);
}

const party = function (track) {
	console.log('Buz buz buz' + track + '!');
};

const drill = function (item) {
	console.log('I drill ' + item);
};

neighbour(party, '"Ram-pam-pam"');
neighbour(drill, 'wall');
// вызов функции

// Пример калькулятор
// calculator (add , 9,7)
// calculator (devide, 12,4)

function calculator(operation, a, b) {
	return operation(a, b);
}

function add(a, b) {
	return a + b;
}

console.log(calculator(add, 9, 7)); // 16

// Devide
function devide(a, b) {
	return a / b;
}
console.log(calculator(devide, 12, 4)); // 3

// Multiply
function multiply(a, b) {
	return a * b;
}
console.log(calculator(multiply, 12, 4)); // 48

// Subtract
function subtract(a, b) {
	return a - b;
}
console.log(calculator(subtract, 12, 4)); // 8

// анонимная функция
// Пример с вычитанием
const res = calculator(
	function (a, b) {
		return a - b;
	},
	12,
	4
); // 8

// вызов функции
console.log(res);

const res2 = calculator((a, b) => a - b, 12, 4); // 8

// arrow function - стрелочная функция
// Multiply

const multiply2 = (a, b) => a * b; // стрелочная функция без тела

const multiply3 = (a, b) => {
	return a * b;
}; // стрелочная функция с телом

// стрелочная функцияб которую передали в качестве аргумента в другую функцию называется коллбеком
// callback function

// возведение в степень
const pow = (a, b) => a ** b; // 2 ** 3 = 8

console.log('***************************');

calculator(pow, 2, 3); // 8
const twoInPowerOfThree = calculator(pow, 2, 3); // 8

console.log(twoInPowerOfThree); // 8

// pirate

function pirate(operation, item) {
	return operation(item);
}

const drink = a => {
	console.log('Drink ' + a);
};

pirate(drink, 'rum'); // Drink rum
pirate(drink, 'whiskey'); // Drink whiskey
pirate(drink, 'vodka'); // Drink vodka
pirate(drink, 'water'); // Drink beer

const swim = vehicle => {
	console.log('Swim on ' + vehicle);
}; // Swim on boat;

pirate(swim, 'boat'); // Swim on boat
pirate(drink, 'rom'); // Drink rom

pirate(swim, 'barret'); // Swim on barret
pirate(drink, 'water'); // Drink water
