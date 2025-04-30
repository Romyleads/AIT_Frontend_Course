const arr = [[1, 2, 3], ['Igor', 'John', 'Bob'], { isDrunk: true }];

// Деструктуризация - объектов и массивов
// Деструктуризация - это синтаксический сахар, который позволяет извлекать значения из массивов и объектов в переменные.
// Синтаксис деструктуризации массивов
const [, secondNumber] = arr[0]; // 2
const [, secondName] = arr[1]; // John
const { isDrunk } = arr[2]; // true

let [[, two], [, john], { isdrunk }] = arr; // 2, John, true
console.log(two); // 2
console.log(john); // John
console.log(isDrunk); // true
console.log(isdrunk); // undefined
