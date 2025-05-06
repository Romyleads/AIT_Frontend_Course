// Задание 1
// Создайте метод, который принимает объект, а возвращает новый объект, в котором ключи и значения поменяны местами.
// { name: "Bob" } —> { "Bob": "name" }
// (вам понадобится поработать с Object.values, Object.keys)

function swapKeyValue(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    newObj[values[i]] = keys[i]; // меняем местами: значение становится ключом
  }
  return newObj;
}

console.log(swapKeyValue({ name: "Bob", job: "pluber" }));

const user = { name: "Vlad", job: "pluber", vocation: "pluber" };

// Перезапись значений по существующим ключам (префиксная подстановка)
user["Vlad"] = "name";
user["pluber"] = "job";
user["pluber"] = "vocation"; // эта строка перезапишет предыдущую


// Задание 2
// Создайте объект дуб oak с полем высота height и полем год year и методом расти grow.
// Пусть изначальная высота дуба будет 140 см, а год будет 2025.
// При вызове метода grow пусть дуб растет на 30 сантиметров, а год меняется на следующий.

// Запустите цикл и покажите, как дуб будет расти на протяжении 20 лет.

const oak = {
  height: 140,
  year: 2025,
  grow() {
    this.height += 30;
    this.year++;
  },
};

// Запускаем метод роста дуба два раза вручную:
oak.grow();
oak.grow();

console.log(oak); // Выводим текущее состояние дуба (рост 2 года)

// Альтернативно: показать рост на протяжении 20 лет
for (let i = 0; i < 20; i++) {
  oak.grow();
}

console.log(`Через 20 лет дуб будет иметь высоту ${oak.height} см в ${oak.year} году.`);


const { grow } = oak;

const sycamore = {
  height: 300,
  year: 2001,
};

// вызываем метод grow с подменой контекста на sycamore
grow.apply(sycamore);

console.log(sycamore); // height: 330, year: 2002


