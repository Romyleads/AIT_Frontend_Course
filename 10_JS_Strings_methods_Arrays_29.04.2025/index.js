let fruit = 'apple';

let fruitUpper = fruit.toUpperCase();

console.log(fruitUpper); // APPLE

console.log(fruit[0]); // a

console.log(fruit.at(0)); // a

console.log(fruit[10]); // undefined // box natation == sym

console.log(fruit.at(10)); // undefined

console.log(fruit.toLowerCase()); // apple // pipeline

console.log('0'.toLowerCase());

console.log('A'.toLowerCase()); // a

console.log(fruit.charAt(0)); // a

console.log(fruit.charAt(7), 'char at'); // пустой символ

console.log(fruit.charCodeAt()); //
console.log(fruit.charCodeAt(0)); // 97

// useful
// "pine" + "apple"
// concat для объединения строк создает в

// Пример соединения строк
const pine = 'pine';

// Если переменная pine существует и не пустая
if (pine) {
	const pineapple = pine.concat(fruit); // склеиваем "pine" и "apple"
	console.log(pineapple); // → "pineapple"
}

// Пример работы со строкой email
let email = '  John@gmail.com  ';
console.log(email); // → "  John@gmail.com  "

// Удаляем пробелы по краям и переводим в нижний регистр
console.log(email.trim().toLowerCase()); // → "john@gmail.com"

// Ищем индекс символа "@" (ожидаем: 5, если пробелы убраны)
console.log(email.indexOf('@')); // → 6 (из-за пробела в начале)

// Проверка на несуществующий символ "$"
console.log(email.indexOf('$')); // → -1 (такого символа нет в строке)

// trimStart — удаляет только пробелы в начале
console.log(email.trimStart()); // → "John@gmail.com  "

// trimEnd — удаляет только пробелы в конце
console.log(email.trimEnd()); // → "  John@gmail.com"

// --- Методы padStart() и padEnd() ---
// Добавляют символы до нужной длины строки (по умолчанию — пробелами)

const cake = 'Cake';

// Добавляет пробелы слева, чтобы строка стала длиной 10
console.log(cake.padStart(10)); // "      Cake"  ← 6 пробелов + "Cake"

// Исходная длина строки
console.log(cake.length); // 4

// Проверка длины строки после padStart
console.log(cake.padStart(10).length); // 10

// Добавляет пробелы справа до длины 10
console.log(cake.padEnd(10)); // "Cake      "

// Добавляет символы "*" справа, чтобы длина стала 10
console.log(cake.padEnd(10, '*')); // "Cake**"

// --- Метод slice() — продолжение ---

// Вырезаем с позиции 3 до конца
const sliceOfCake = cake.slice(3);
console.log(sliceOfCake); // "e"

// Вырезаем от 0 до конца
console.log(cake.slice(0)); // "Cake"

// Вырезаем с позиции 1 до конца
console.log(cake.slice(1)); // "ake"

// Вырезаем символы от 1 до 3 (не включая 3)
console.log(cake.slice(1, 3)); // "ak" (индекс 1 и 2)

// Вырезаем последние 2 символа строки
console.log(cake.slice(-2)); // "ke" (индексы -2 и -1)

// Вырезаем последние 2 символа из строки "курочка"
console.log('курочка'.slice(-2)); // "ка"

// Вырезаем последние 2 символа из строки "улыбочка"
console.log('улыбочка'.slice(-2)); // "ка"

// --- substring ---
// Метод substring() похож на slice, но отличается поведением с отрицательными индексами.

const animal = 'panda';

// Вырезаем строку с индекса 2 до конца
console.log(animal.slice(2)); // "nda"

// Возвращает подстроку с индекса 2 до конца строки
console.log(animal.substring(2)); // "nda"

// Возвращает подстроку с индекса 2 до 4 (4 не включается)
console.log(animal.substring(2, 4)); // "nd"

// slice

console.log(sliceOfCake); // "e"
console.log(cake.slice(0)); // "Cake"
console.log(cake.slice(1)); // "ake"
// a piece of cake

console.log(cake.slice(1, 3)); // ak // правый индекс не включительно
console.log(cake.slice(-2)); // ke - начиная с конца строки
console.log('курочка'.slice(-2)); // ka
console.log('улыбочка'.slice(-2)); // ka

// substring

console.log(animal.substring(2)); // nda // если указываем один параметр
// - то от индекса до конца строки

console.log(animal.substring(2, 4)); // nd - c какого по какой символ

const token = 'paper.bread.leaf';

// Найти индекс первого вхождения точки
const indexOfFirstDot = token.indexOf('.');
console.log(indexOfFirstDot); // 5 (индекс первой точки)

// Найти индекс последнего вхождения точки
const indexOfLastDot = token.lastIndexOf('.');
console.log(indexOfLastDot); // 11 (индекс последней точки)

function getUserNameFromEmail(email) {
	const endIndex = email.indexOf('@').trim();
	return email.slice(0, endIndex);
}

function getEmailServiceNameFromEmail(email) {
	const startIndex = email.indexOf('@').trim();
	return email.slice(endIndex, -1);
}

const user = getUserNameFromEmail('   alisher-khamidov@gmail.com  ');
console.log(user);

const service = getEmailServiceNameFromEmail('   alisher-khamidov@gmail.com  ');
console.log(service);

function getNameFromEmail(email) {
	const cleanEmail = email.trim();
	const atIndex = cleanEmail.indexOf('@');
	if (atIndex === -1) {
		throw new Error("Неверный email: отсутствует символ '@'");
	}
	return cleanEmail.slice(0, atIndex);
}

try {
	console.log(getNameFromEmail('alisher-khamidovgmail.com')); // ошибка
} catch (error) {
	console.log('Произошла ошибка:', error.message);
}
