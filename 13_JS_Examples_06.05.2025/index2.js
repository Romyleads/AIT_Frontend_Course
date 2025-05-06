// пример использования с массивами объектов
const animals = [
  { name: "Po", specie: "panda", weight: 300 },
  { name: "Tigrica", specie: "tiger", weight: 250 },
  { name: "Kovalsky", specie: "penguin", weight: 5 },
  { name: "Melman", specie: "giraffe", weight: 600 },
];

// хочу создать массив с более толстыми версиями этих животных

// const americanAnimals = animals.map((animal) => {
//   const americanAnimal = { ...animal };
//   americanAnimal.weight *= 1.3;
//   return americanAnimal;
// });

const americanAnimals = animals.map((animal) => ({
  ...animal,
  weight: animal.weight * 1.3,
}));

const foo1 = (a) => {
  return a;
};

const foo2 = (a) => a;

console.log(animals);
console.log(americanAnimals);