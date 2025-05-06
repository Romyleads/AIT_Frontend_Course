// Исходный массив объектов
const animals = [
  { name: "Po", specie: "panda", weight: 300 },
  { name: "Tigrica", specie: "tiger", weight: 250 },
  { name: "Kovalsky", specie: "penguin", weight: 5 },
  { name: "Melman", specie: "giraffe", weight: 600 }
];

// Создаем массив с увеличенным весом животных
const americanAnimals = animals.map((animal) => {
  const americanAnimal = { ...animal };
  americanAnimal.weight *= 1.3;
  return americanAnimal;
});

console.log(animals);
console.log(americanAnimals);

// Получаем массив имён животных
const animalsNames = animals.map((animal) => animal.name);
console.log(animalsNames); // [ 'Po', 'Tigrica', 'Kovalsky', 'Melman' ]

// Добавим всем признак isHealthy
animals.forEach((animal) => {
  animal.isHealthy = true;
});
console.log(animals);

// Инспекция: есть ли больные?
const isQuaranteen = animals.some((animal) => animal.isHealthy === false);
console.log(isQuaranteen); // false

// Болеют ли все?
const isEmidemy = animals.every((animal) => animal.isHealthy === false);
console.log(isEmidemy); // false

// Проверяем наличие тигра по имени "Killer"
let hasKiller = animals.some(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);
console.log(hasKiller); // false

// Добавляем киллера
animals.push({ name: "Killer", specie: "tiger", weight: 400 });

// Проверка снова
hasKiller = animals.some(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);
console.log(hasKiller); // true

// slice — не мутирует
const shortListOfAnimals = animals.slice(2, 4);
console.log(animals); // исходный массив не изменился
console.log(shortListOfAnimals); // срезанный массив

// splice — мутирует
const monthes = ["January", "February", "March", "April"];
const removedMonthes = monthes.splice(2, 2, "July", "August");
console.log(monthes); // [ 'January', 'February', 'July', 'August' ]
console.log(removedMonthes); // [ 'March', 'April' ]

// замена символов в массиве
const chars = ["@", "@", "@", "*", "*", "$"];
const substitutes = ["#", "#"];
chars.splice(3, 2, ...substitutes);
console.log(chars); // [ '@', '@', '@', '#', '#', '$' ]

// Удаление "Killer" по индексу
const indexOfKiller = animals.findIndex(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);
animals.splice(indexOfKiller, 1);
console.log(animals);