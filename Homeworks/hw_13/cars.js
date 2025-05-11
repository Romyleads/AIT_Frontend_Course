/*
Задание 1
У вас есть массив объектов:

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
Copy
Создайте на основе старого массива новый массив объектов по образу: [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

Задание 2
Создайте новый массив, где оставьте только машины с дизельным двигателем.

Задание 3
Создайте новый массив, где оставьте только машины не с дизельным двигателем.

Задание 4
Посчитайте общую стоимость всех машин не с дизельным двигателем.

Задание 5
Повысьте цену всех машин в массиве на 20%.

Задание 6
Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
*/

// Задание 1
console.log("Задание 1");


const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const newCars = cars.map(car => ({ brand: car.brand, isDiesel: car.isDiesel }));
console.log(newCars);


const newCars2=cars.map(
({brand,isDiesel})=>({brand,isDiesel})
);
console.log(newCars2);

// Задание 2 - только дизельные машины
console.log("Задание 2");

const dieselCars1 = cars.filter(car => car.isDiesel === true);
console.log(dieselCars1);


const dieselCars2 = cars.filter(car => car.isDiesel);
console.log(dieselCars2);

const dieselCars3=cars.filter(
    ({isDiesel})=>isDiesel
);
console.log(dieselCars3);



// Задание 3 - только не дизельные машины
console.log("Задание 3");

const notDieselCars = cars.filter(car => car.isDiesel === false);
console.log(notDieselCars);


const nonDieselCars2=cars.filter(car => !car.isDiesel);
console.log(nonDieselCars2);

// Задание 4 - общая стоимость не дизельных машин
console.log("Задание 4");

const totalNotDieselPrice = cars
  .filter(car => !car.isDiesel)
  .reduce(  (acc, car) => acc + car.price, 0  );
console.log(totalNotDieselPrice);

// Альтернативный способ
//const totalPriceNonDiesel = cars.reduce(
//(total, car) => total + car.price, 0
//);
//console.log(totalPriceNonDiesel);

// Задание 5 - повысить цену на 20%
console.log("Задание 5");

cars.forEach(
car => {
  car.price *= 1.2;
}
);
console.log(cars);

const increasedPriceCars = cars.map(
car => (
{
    ...car,
    price: car.price * 1.2
}
)
);
console.log(increasedPriceCars);

// Задание 6 - заменить дизельные машины на Tesla
console.log("Задание 6");


const dieselNewTeslaCars = cars.map(
car => {
    if (car.isDiesel) {
        return { brand: "Tesla", price: 25000, isDiesel: false };
    }
    return car;
}
);
console.log(dieselNewTeslaCars);

const dieselNewTeslaCars2 = cars.map(car =>
  car.isDiesel
    ? { brand: "Tesla", price: 25000, isDiesel: false }
    : car
);
console.log(dieselNewTeslaCars2);






