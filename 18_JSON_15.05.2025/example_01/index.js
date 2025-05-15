// JSON
// JavaScript Object Notation

const user = {
name: "john",
age: 30,

};

// основной формат передачи и хранения информации - это JSON

const userAsJSONString = JSON.stringify(user); // строка
console.log(userAsJSONString); // {"name":"john","age":30}

const userFromJSONString = JSON.parse(userAsJSONString); // объект
console.log(userFromJSONString);  // {name: "john", age: 30}



