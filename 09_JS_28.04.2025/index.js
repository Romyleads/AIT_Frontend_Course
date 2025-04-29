//'use strict'

// number, string, bigint, boolean, symbol, undefined, null
// Object

const x = 10;
// x=13;

let y, z;
y = 12;

let b = 13;

console.log(b);

// Operators

// Math
// +, -, *, /, %, **
// reminder

let sum = 1 + 2;
console.log(!!0);
//более сложные примеры использования

let exmpl11 = !!5; // true

let exmpl12 = 110; // false

console.log(exmpl11);

console.log(exmpl12);

let exmpl13 = Boolean(5);

// с || есть интересный пример:

const myName = 'Alisher';

const defaultName = 'John';

const result = myName || defaultName;

console.log(result); // Alisher
// если myName = '', то будет John
// если myName = null, то будет John
// если myName = undefined, то будет John
// если myName = 0, то будет John
// если myName = NaN, то будет John
// если myName = false, то будет John
// если myName = true, то будет Alisher
// если myName = '0', то будет Alisher
// если myName = 'false', то будет Alisher
// если myName = 'null', то будет Alisher
// если myName = 'undefined', то будет Alisher
// если myName = 'NaN', то будет Alisher
// если myName = ' ', то будет Alisher
// если myName = '  ', то будет Alisher
// если myName = '   ', то будет Alisher
// если myName = '    ', то будет Alisher

const userAge = undefined;
const age = userAge || 18;
console.log(age); // 18
// если userAge = 0, то будет 0
// если userAge = '', то будет ''
// если userAge = null, то будет null
// если userAge = undefined, то будет 18
// если userAge = NaN, то будет NaN
// если userAge = false, то будет false
// если userAge = true, то будет true
// если userAge = '0', то будет '0'
// если userAge = 'false', то будет 'false'
// если userAge = 'null', то будет 'null'

// Операторы сравнения
console.log(6 > NaN); // false
console.log(NaN < NaN); // false

// Равенство
//
// == - не строгое равенство
// === - строгое равенство
// != - не строгое неравенство
// !== - строгое неравенство
// >, <, >=, <= - больше, меньше, больше или равно, меньше или равно
// >, <, >=, <= - больше, меньше, больше или равно, меньше или равно
// >, <, >=, <= - больше, меньше, больше или равно, меньше или равно

console.log('5' == 5); // true
console.log('5' === 5); // false

const animal = 'Panda';
{
	console.log(animal);
}

{
	const animal2 = 'Panda';
}
//console.log(animal2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
