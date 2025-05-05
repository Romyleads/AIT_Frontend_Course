// Object
// key - value

const user = { email: "john@gmail.com" };
const age = 18;

// user = { email: "bob@gmail.com" }; // ошибка

// изменил значение свойства объекта
user.email = "john2@yahoo.org";

console.log(user);

// как добавить в объект новое свойство
user.eyeColor = "brown";

console.log(user);

// "hair color" - так делать не стоит
user["hair color"] = "yellow"; // box syntax

console.log(user);
const { "hair color": color } = user; // деструктуризация, если с пробелом

console.log(color);

// Пример того как можно создавать объект из переменных

const pandaName = "Po";
const favouriteFood = "bamboo";


const panda = {
  name: pandaName,
  favouriteFood, // short syntax – если имя переменной совпадает с ключом
};

console.log(panda); // { name: 'Po', favouriteFood: 'bamboo' }

// Создайте переменную рост, назовите ее bobHeight и пусть будет равна 184
// создайте объект bob с ключом height, в котором будет лежать значение bobHeight

const bobHeight = 184;

const bob = {
  height: bobHeight
};

console.log(bob); // { height: 184 }

//  эта же задача в одну строку:
console.log(typeof bob); 


//
const key = "email";
const giraffeSam = {
  name: "Sam",
};
console.log(user.key);


// динамический ключ ключ, который лежит внутри переменной console.log(giraffeSam [key1])


const key1 = "name";

//giraffeSam = {name: "Sam", key1: "name", age: 18};

//console.log(giraffeSam.key2); //undefined

// аналог того же самого это spread operator, но немного иначе

const personalInfo = {
  name: "Fedor",
};

const medicalInfo = {
  bloodType: 1,
};

const fedor = {
  ...personalInfo,  // скопировали поля из объекта personalInfo
  ...medicalInfo,   // скопировали поля из объекта medicalInfo
  age: 19,          // указали ручками ключ значение
};

console.log(fedor);


function unify(obj, key, value) {
  return {
    ...obj,
    [key]: value
  };
}

console.log(unify({ email: "bob@gmail.com" }, "eyeColor", "brown"));
// → { email: "bob@gmail.com", eyeColor: "brown" }


const leon = {
  name: "Leon",
  sayHello() {
    console.log("Hello");
  },
};


leon.sayHello(); // Hello

// Cоздание объекта с методами
const square = {

sideLength: 10, // начальная сторона квадрата

getArea(){return this.sideLength**2;}, 
getPerimeter(){return this.sideLength*4;}, 
// метод увеличивает сторону квадрата  в 2 раза
increaseSideLength() {
    this.sideLength *= 2;
  }

 /* getArea: function () {
    return this.sideLength * this.sideLength;
  },
  getPerimeter: function () {
    return this.sideLength * 4;
  }
*/
};
console.log("sideLength:"+square.sideLength); // 400


console.log(square.getArea()); // 100
console.log(square.getPerimeter()); // 40

console.log("sideLength:"+square.sideLength); /// 400

square.increaseSideLength(); 400

console.log("sideLength:"+square.sideLength);

// const getArea = square.getArea;

const { getArea } = square; // деструктуризация
console.log(getArea()); // функция в отрыве  от объекта - без this

// bind call 

const chessBoard = {
sideLength:3,
  };


const getAreaOfChessBoard = getArea.bind(chessBoard); //

chessBoard.sideLength +=2; // если объект мутировал - функция будет работать с ним
console.log(getAreaOfChessBoard()); 

// другой пример


function sayHi() {
  console.log("My name is " + this.name);
}


sayHi(); // My name is undefined

const alisher = {name : "Alisher"};
const sayHiAlisher = sayHi.bind(alisher); // получили новую функцию, связанную с объектом alisher
sayHiAlisher(); // My name is Alisher

sayHiAlisher();

// APPLY сразу вызывает функцию с указанным объектом в качестве this

sayHi.apply({name:"Vasiliy"}); 





