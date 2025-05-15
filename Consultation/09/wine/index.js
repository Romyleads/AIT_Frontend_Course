/*
// 1. Отправить запрос на https://api.sampleapis.com/wines/whites и получить (вывести в консоль) массив с данными о белых винах
// 2. Отрисовать карточки вин с рейтингом 4.8 и более (image, wine, winery, rating)
// 3. Стилизовать карточки (border, padding, border-radius). Из контейнера сделать grid - 5 колонок + отступы
//  display: grid;
//  grid-template-columns: repeat(5, 1fr);
//  gap: 40px;
// 4. Если у вина рейтинг 4.9 и больше то покрасить карточку в светло-зеленый. А если 4.8 - то в светло-голубой
*/

const container=document.getElementById('wine-container');
const url='https://api.sampleapis.com/wines/whites';

fetch(url)
.then(response => response.json())
.then(

data =>

{

//console.log(data); // выводим в консоль данные о белых винах

  const wines=data.filter(wine => wine.rating.average >= 4.8); // фильтруем вина с рейтингом 4.8 и более
  
  wines.forEach(wine => { // проходимся по каждому вину и создаем карточку

    const card=document.createElement('div'); // создаем карточку


if (wine.rating.average >= 4.9) {
  card.style.backgroundColor = 'lightgreen';
} else {
  card.style.backgroundColor = 'lightblue';
} // устанавливаем цвет фона карточки в зависимости от рейтинга


    card.classList.add('wine-card'); // добавляем класс карточке


    card.innerHTML=`
    <img src="${wine.image}" alt="${wine.wine}">
    <h3>${wine.wine}</h3>
    <p>${wine.winery}</p>
    <p>Rating: ${wine.rating.average}</p>
    `;

    container.appendChild(card); // добавляем карточку в контейнер

  }); // закрываем цикл

} // закрываем обработчик данных

); // закрываем fetch






