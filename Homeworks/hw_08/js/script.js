/*
Задача 1
Кто не закончил настройку на занятии, тому необходимо:

скачать и установить Node.JS
установить расширение для VSCode - Code runner
подключить внешний файл js к html 3-м способом
Задача 2
Объявите две переменные с разными именами и присвойте им значения:

количество котов (какое-то число)
"Я не кошатник"
В случае если количество котов равно нулю, должна выводиться фраза из второй переменной.

Выведите значения переменных в консоль.

*/

let cats=0;
const str ="Я не кошатник";

if(cats==0){
    console.log(str);
}

const text = `${ cats } ${str}`;

console.log({ cats });
console.log({ str  });

console.log("var cats: "+cats);
console.log("var str: "+str);

const user ={
name: "Anna"

};
console.clear();
console.log(user.name);

console.clear();
process.stdout.write('\x1Bc');