function logout() {
  // Очистка токена и профиля
  localStorage.removeItem("access_token");
  localStorage.removeItem("userProfile");

  // Удаление куки (если ты использовал их)
  document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  // Перенаправление на страницу логина
  setTimeout(() => {
    window.location.href = "../login/index.html";
  }, 1000); // message for user
}

logout();