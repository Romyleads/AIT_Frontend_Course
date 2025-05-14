/*
Задание 1
Прочитайте теоретический материал в разделе "Теория".
Создайте метод validate, который принимает строку и возвращает true, если она соответствует следующему шаблону:
начинается с одной маленькой буквы латинского алфавита (a–z);
затем идёт число 19;
далее — две любые цифры (00–99);
строка должна **заканчиваться на "born"`.
🧪 Примеры:
validate("c1986born"); // true
validate("b1988born"); // true
validate("1986born"); // false — нет начальной буквы
validate("c1886born"); // false — не 19XX
validate("c1986bor"); // false — не заканчивается на 'born'
Copy
✂️ Задание 2 : Замена слова в строке
🎯 Цель:
Научиться использовать string.replace() с регулярными выражениями и флагами g и i.

📘 Условие:
У вас есть строка:

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";
Copy
Замените все вхождения слова "javascript", независимо от регистра, на слово "TypeScript".

🔍 Ожидаемый результат:
"TypeScript is great. I love TypeScript. TypeScript is everywhere!"
*/


console.log("Task 1. str = b1988born");
const str = "b1988born";
let regex = /^[a-z]19\d{2}born$/;

function validate(str){
return str.match(regex) !== null;
}

console.log("validate(b1988born): " + validate(str));


console.log("\nTask 2. sentence = JavaScript is great. I love javascript. JAVASCRIPT is everywhere!");

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";

regex = /javascript/gi;
replace = "TypeScript";

const result = sentence.replace(regex, replace);

console.log("string.replace(): " + result);