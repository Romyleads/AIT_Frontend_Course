const dogImageElement = document.getElementById("dog-image");


fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(

(obj) =>

{
const {message} = obj; // деструктуризация
dogImageElement.src = message;

}

);

