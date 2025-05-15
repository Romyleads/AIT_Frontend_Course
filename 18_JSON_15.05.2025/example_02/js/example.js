// https://alisherkhamidov.github.io/fake-pirate/joe-sparrow.json

const pirateCard = document.getElementById("pirate-card");
// Promise<res>
fetch("https://alisherkhamidov.github.io/fake-pirate/joe-sparrow.json")
  .then((res) => res.json())
// Promise<data> - 
  .then((data) => {
    const pirateCard = document.getElementById("pirate-card");  


  });
// method: GET
// создать - метод POST
// 
