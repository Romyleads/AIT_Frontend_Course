// find the first button by ID
//const btn = document.querySelector('#magic-btn');
const btn = document.getElementById("magic-btn");

// clone the button and set its properties
const clonedBtn = btn.cloneNode(true);
clonedBtn.id = "magic-btn-2";
clonedBtn.textContent = "Я изменю тебя";
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";
clonedBtn.classList.add("second-btn"); // add the "second-btn" class

// on event: button1 click — add the second button to the page
btn.addEventListener("click", () => {
  document.body.appendChild(clonedBtn);
});

// on event: button2 click — change the style of the first button
clonedBtn.addEventListener("click", () => {
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
});