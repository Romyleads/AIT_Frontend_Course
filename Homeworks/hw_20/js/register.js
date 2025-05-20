/*
Задание 1
Создайте отдельную страницу регистрации "/register". Сделайте на ней форму регистрации нового пользователя. При успешной регистрации сделайте редирект на страницу логина "/login".

Перейдите по ссылке на документaцию сайта и посмотрите описание создания нового юзера: https://fakeapi.platzi.com/en/rest/users/

Обратите внимание на следующее:

путь должен быть правильным, см. эндопинт в документации
метод должен быть верным
ключи как в документации сервера
статус ответа смотрите в инструментах разработчика вкладка Network (Response)
два раза зарегистрировать одного пользователя не получится
*/

const form = document.getElementById("register-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const password = form.elements["password"].value;
  const avatar = form.elements["avatar"].value;

  const newUser = {
    name,
    email,
    password,
    avatar,
  };

  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert("Ошибка регистрации: " + JSON.stringify(errorData));
      return;
    }

    alert("Регистрация прошла успешно!");
    window.location.href = "../login";
  } catch (err) {
    console.error("Ошибка при регистрации:", err);
    alert("Произошла ошибка при регистрации. Пожалуйста, попробуйте позже.");
  }
});