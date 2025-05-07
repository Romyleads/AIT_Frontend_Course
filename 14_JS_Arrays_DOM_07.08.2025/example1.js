const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Porshe", price: 550000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

// reverse

const reversedCars = cars.reverse();  //  опасный мутирующий метод
console.log(reversedCars); 
console.log(cars);

console.log("**************"); 

// Чтобы не мутировать массив, используем slice
const cars2 = cars.slice().reverse(); //  безопасный метод
console.log(cars2);
console.log(cars); // cars не изменился

// sort
const parts = ["air filter", "tires", "brakes", "oil filter"];
const sortedParts = parts.sort(); // сортирует по алфавиту
console.log(sortedParts); 

const nums = [1, 2, 3, 4, 5, 12];
console.log(nums.sort()); // сортирует по алфавиту

// сортировка по числам
const nums2 = [1, 10, 2, 20, 3, 30];
const sortedNums2 = nums2.sort((a, b) => a - b); // сортирует по возрастанию
console.log(sortedNums2); // [ 1, 2, 3, 10, 20, 30 ]
const sortedNums3 = nums2.sort((a, b) => b - a); // сортирует по убыванию
console.log(sortedNums3); // [ 30, 20, 10, 3, 2, 1 ]

// сортировка по объектам
const cars3 = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];
const sortedCars = cars3.sort((a, b) => a.price - b.price); // сортирует по возрастанию
console.log(sortedCars); // [{ brand: 'BMW', price: 20000, isDiesel: true }, { brand: 'Mercedes', price: 22000, isDiesel: false }, { brand: 'Nissan', price: 25000, isDiesel: false }, { brand: 'Porshe', price: 50000, isDiesel: true }]

// сравнение по нескольким полям
const compareCars = (a, b) => {
const priceComparisonResult = a.price - b.price;
if (priceComparisonResult !== 0) {
  // проверяем по алфавиту
  return a.brand.localeCompare(b.brand);
}
return priceComparisonResult;
}


cars.sort(compareCars); // сортирует по возрастанию


console.log(cars);





