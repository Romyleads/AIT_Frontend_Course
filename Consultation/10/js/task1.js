//// https://api.genderize.io?name=ИМЯ 
// {"count":319,"name":"ИМЯ","gender":"male","probability":0.67} !

const form = document.getElementById("form");
const input = form.querySelector("input");
const button = form.querySelector("button");
const answer = document.getElementById("answer");

button.addEventListener("click", async (e) => {
//  const name = input.value.trim();
// const name = e.target[0].value.trim();
// const name = form.elements[0].value.trim(); // первый <input> в форме
// const name = form.querySelector("input").value.trim();
const name = e.target.closest("form").elements[0].value.trim();

  if (name === "") {
    answer.innerText = "Please enter a name.";
    return;
  }

  try {
    const response = await fetch(`https://api.genderize.io?name=${name}`);
    const data = await response.json();

console.log(data);

    // Determine gender
    let gender;
    if (data.gender === null) {
      gender = "not determined";
    } else {
      gender = data.gender;
    }

    // Determine probability
    let probability;
    if (data.probability) {
      const percent = Math.round(data.probability * 100); // rounding
      probability = percent + "%";
    } else {
      probability = "0%";
    }

    // Display result
    answer.innerText = `Name: ${data.name}, Gender: ${gender}, Probability: ${probability}`;
  } catch (error) {
    console.error(error);
    answer.innerText = "Error while requesting gender information.";
  }
});