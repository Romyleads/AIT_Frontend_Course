const fullNameElem = document.getElementById("full-name");
const emailElement = document.getElementById("email");
const avatarImg = document.getElementById("avatar");
const sourceElem = document.getElementById("profile-source");

async function loadProfile() {
  const localProfile = localStorage.getItem("userProfile");
  const accessToken = localStorage.getItem("access_token");

  // 1️⃣ Если профиль уже сохранён — используем его
  if (localProfile) {
    console.log("✅ Данные профиля загружены из localStorage");
    sourceElem.innerText = "Данные загружены из localStorage ✅";

    const user = JSON.parse(localProfile);
    renderProfile(user);
    return;
  }

  // 2️⃣ Если токена нет — перенаправляем
  if (!accessToken) {
    alert("Вы не авторизованы");
    window.location.href = "/login";
    return;
  }

  // 3️⃣ Получаем с сервера и сохраняем
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error("Не удалось загрузить профиль");
    }

    const user = await res.json();
    localStorage.setItem("userProfile", JSON.stringify(user));

    console.log("🌐 Данные профиля получены с сервера");
    sourceElem.innerText = "Данные получены с сервера через fetch 🌐";

    renderProfile(user);
  } catch (err) {
    console.error("Ошибка при получении профиля:", err);
    alert("Ошибка. Пожалуйста, войдите заново.");
    window.location.href = "/login";
  }
}

function renderProfile(user) {
  const { avatar, email, name } = user;

  fullNameElem.innerText = name;
  emailElement.innerText = email;

  avatarImg.setAttribute("referrerpolicy", "no-referrer");
  avatarImg.setAttribute("crossorigin", "anonymous");
  avatarImg.src = avatar;
}

loadProfile();