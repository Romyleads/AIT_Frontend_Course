/*Homework

Задание 1

Создайте метод который принимает массив и возврашает новый!
массив с теми же данными, но первый и последний элементы в массиве должны быть поменяны местами.

Исходный массив должен остаться неизмененным после вызова метода.


Задание 2

Создайте метод который принимает массив строк, ничего!! не возвращает.
Метод должен заменить текст в первом элементе массива, чтобы он был с большой буквы.

["apple", "orange"] ---> ["Apple", "orange"]
*/

function swapFirstAndLast(arr) {
	if (arr.length < 2) {
		return arr; // If the array has less than 2 elements, return it without changes
	}

	const newArr = [...arr]; // Create a new array by copying the original
	const firstElement = newArr[0];
	const lastElement = newArr[newArr.length - 1];

	newArr[0] = lastElement;
	newArr[newArr.length - 1] = firstElement; // Swap the first and last elements

	return newArr; // Return the new array with swapped elements
}

const originalArray = [1, 2, 3, 4, 5];
const swappedArray = swapFirstAndLast(originalArray);
console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(swappedArray); // [5, 2, 3, 4, 1]

// Task 2
// Create a function that takes an array of strings and changes the text
// of the first element to start with a capital letter

function capitalizeFirstElement(arr) {
	if (arr.length === 0) {
		return; // If the array is empty, do nothing and exit the function
	}
	arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
	// Make the first letter of the first element uppercase and add the rest of the word
}

const myArray = new Array('Apple', 'orange');
capitalizeFirstElement(myArray);
console.log(myArray);
