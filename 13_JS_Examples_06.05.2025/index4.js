const drinks = [
{ name: "Bloody Mary", strength: 14, price: 7},
{ name: "Jin", strength: 25, price: 4 },
{ name: "Beer", strength: 7, price: 3.5},
{ name: "Cider", strength: 2, price: 5 },
];

// Задание 1
// Найдите индекс Jin

const indexOfJin = drinks.findIndex((drink) => drink.name === "Jin");
console.log(indexOfJin); // 1

// Замените джин на объект "Tequilla"
const tequila = { name: "Tequilla", strength: 20, price: 5 };
drinks.splice(indexOfJin, 1, tequila);

// Задание 2
// Сделайте все напитки в масиве крепче на 1 градус
const strongerDrinks = drinks.map((drink) => ({
  ...drink,
  strength: drink.strength + 1,
}));
console.log(strongerDrinks);

// Задание 3
// Посчитайте общую стоимость всех Beer
const totalBeer = drinks.reduce((sum, drink) => {
  if (drink.name === "Beer") {
    return sum + drink.price;
  }
  return sum;
}, 0);

console.log("Общая стоимость всех пив:", totalBeer);


