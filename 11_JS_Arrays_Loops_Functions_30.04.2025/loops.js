for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// Создайте цикл, который бы вывел в консоль числа от 100 до 0 т через 2
// 100, 97, 94
for (let i = 100; i >= 0; i -= 3) {
	console.log(i);
}

//сделайте метод с параметром - от которого начинается счет
// count(162) // 162, 159, 156

function count(start) {
	for (let i = start; i >= 0; i -= 3) {
		console.log(i);
	}
}
count(162); // 162, 159, 156

function count(start) {
	for (i = start; i >= 0; i -= 3) {
		console.log(i);
	}
}
count(92); // 162, 159, 156

const animals = ['panda', 'wolf', 'fox'];
//Задача
// с помощью цикла while сделать так, чтобы в массиве все животные были в верхнем регистре
// ['PANDA', 'WOLF', 'FOX']

let j = 0;
while (j < animals.length) {
	animals[j] = animals[j].toUpperCase();
	j++;
}

console.log(animals); // ['PANDA', 'WOLF', 'FOX']

// for ... of
for (let animal of animals) {
	console.log(animal);
	// 	animal = animal.toUpperCase();
}
//Обычно используется аналог -foreach
//Example
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(a => {
	console.log(a);
});
