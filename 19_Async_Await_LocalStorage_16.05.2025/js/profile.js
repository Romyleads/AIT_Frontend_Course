const fullNameElem = document.getElementById("full-name");
const emailElement = document.getElementById("email");
const avatarImg = document.getElementById("avatar");


async function fetchProfile() {
  const accessToken = localStorage.getItem("access_token");


if (!accessToken) {
  //window.location.replace = "/login";
alert(accessToken);
} 


  const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const user = await res.json();
  console.log(user);

const {avatar, email, name} = user;


fullNameElem.innerText = name;
emailElement.innerText = email;
avatarImg.src = "https://i.imgur.com/LDOO4Qs.jpg";

console.log(avatar, email, name);

}

fetchProfile();