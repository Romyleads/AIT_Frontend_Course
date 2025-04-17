console.log('Hello, Alisher!');

// объявили переменную и присвоили ей значение 6

// 7 примитивных типов
// Тип number
let x;  // объвить
x = 10; // присвоить значение = инициализация

console.log(x);

let y = 12.5;
console.log(y);

x=13;
x=y;
console.log(x);

x = 'Maria';

console.log(x);
let name = '"Alisher"';
let nameq = "'Alisher'";

console.log(nameq);

// Тип bigint для очень больших чисел
let z = 123123n;

let message
console.log(message/0/0);

// Тип null

let secondName = null;


// Не примитив Object

const user = {
    "email": "khamidov@gmail.com"
}

// Явное и неявное приведение типов
// falsy value - те, которые преобразуются в false


// Явное
// 

let elewen = Number("M");
console.log('elewen');



console.log("📦1 Полный обзор типов данных в JavaScript:\n");

const types = {
  string: "Привет, мир!",                             // string
  number: 123.45,                                     // number
  bigint: 123456789012345678901234567890n,           // bigint
  boolean: true,                                      // boolean
  undefinedType: undefined,                          // undefined
  nullType: null,                                     // null (typeof → "object")
  symbol: Symbol("уникальность"),                    // symbol

  object: { name: "Alice", age: 30 },                // object
  array: [1, 2, 3],                                   // array (object)
  func: function () { return "Hello from func"; },    // function (object)
  arrowFunc: () => "Hello from arrow",                // function (object)
  date: new Date(),                                   // object (Date)
  regexp: /ab+c/i,                                    // object (RegExp)
  map: new Map(),                                     // object (Map)
  set: new Set(),                                     // object (Set)
  weakMap: new WeakMap(),                             // object (WeakMap)
  weakSet: new WeakSet(),                             // object (WeakSet)
  error: new Error("Что-то пошло не так"),            // object (Error)
  promise: Promise.resolve(123),                      // object (Promise)
  buffer: new ArrayBuffer(8),                         // object (ArrayBuffer)
  typedArray: new Uint8Array([1, 2, 3]),              // object (TypedArray)
};

for (const [key, value] of Object.entries(types)) {
  const type = typeof value;
  const constructor = value !== null && value !== undefined ? value.constructor.name : "n/a";
  console.log(
    `${key.padEnd(12)} → typeof: ${type.padEnd(10)} | constructor: ${constructor}`
  );
}


