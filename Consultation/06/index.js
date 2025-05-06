// Пример 1 - создание объекта

const student = {
age:22,
name: "Vlad",
}

// Пример 2 - ключ может состоять из нескольких слов
const product = {
title: "iphone",
price: 2000,
"model of phone": "XR",
};

// Получить значени по ключу через точку
console.log(student.age); // 22
console.log(student.name); // Vlad
console.log(product.title); // iphone
console.log(product.price); // 2000
console.log(product["model of phone"]); // XR

//  Положить значени по ключу через точку
product.diagonal=6.5;
product["type of adapter"]="USB-C";
console.log(product);

// Пример 3 
// Если у нас есть переменная и мі хотим доставать
// значения из объекта по этой переменной

let key = "age";
console.log(student[key]); 
key = "name";
console.log(student[key]);

// Пример 4
// Допустим у нас были переменные - и мы хотим создать из них объект

const title = "Titanic";
const capacity = "1500";

const titanic = {
  title: title,
  capacity: capacity,
};
console.log(titanic); // { title: 'Titanic', capacity: '1500' }

//
// Пример 5
const name1 = "Avrora";
const cap = "300";

// хочу создать объект из переменных, но с другими названиями ключей
const ship = {
  title: name1,
  capacity: cap,

};
console.log(ship);





