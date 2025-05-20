// Получаем контейнер, куда будем добавлять карточки
const flowersContainerElement = document.getElementById("flowers-container");

// Загружаем цветы с сервера
async function loadFlowers() {
  try {
    // Делаем GET-запрос
    const res = await fetch("https://alisherkhamidov.github.io/book-api/flowers.json");
    const flowers = await res.json();

    // Перебираем каждый цветок
    flowers.forEach((flower) => {
      const { name, image } = flower;

      // Создаём элемент карточки
      const cardElement = document.createElement("div");
      cardElement.className = "card";

      // Создаём название
      const nameElement = document.createElement("span");
      nameElement.classList.add("card-el", "title");
      nameElement.textContent = name;

      // Создаём изображение
      const imgElement = document.createElement("img");
      imgElement.src = image;
      imgElement.alt = name; // для доступности
      imgElement.classList.add("card-el");

      // Добавляем название и картинку в карточку
      cardElement.append(nameElement, imgElement);

      // Добавляем карточку в контейнер
      flowersContainerElement.append(cardElement);
    });
  } catch (error) {
    console.error("Ошибка при загрузке цветов:", error);
    flowersContainerElement.textContent = "Не удалось загрузить цветы 😢";
  }
}

// Запускаем функцию при загрузке страницы
loadFlowers();