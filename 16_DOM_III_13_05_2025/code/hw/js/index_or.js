const form = document.getElementById('animals-form');

const nameInput = form.elements['name']; // получаем элемент name
const ageInput = form.elements['age']; // получаем элемент age
const breedInput = form.elements['breed']; // получаем элемент breed

const animalsContainer = document.getElementById('animals-container');
const removeBtn = document.getElementById('remove-all-animals'); // получаем элемент removeBtn для удаления всех animals
const animalError = document.getElementById('animal-error'); // получаем элемент animal-error для вывода ошибки
const sortBtn = document.getElementById('sort-animals-btn'); //remove all animals
const filterForm = document.getElementById('filter-form'); // получаем элемент filterForm
const filterParamsInput = filterForm.elements['age']; // получаем элемент age из filterForm

// начальный массив животных
let animals = [
	{ name: 'Tuzik', age: '2', breed: 'Dog' },
	{ name: 'Myau', age: '1', breed: 'Cat' },
	{ name: 'Murka', age: '4', breed: 'Persian Cat' },
	{ name: 'Rex', age: '5', breed: 'Dog' },
];

// Выводим животных в контейнер, добавляем пару элементов

renderAnimals(animals); // запускаем генерацию списка животных

// генерация списка животных

function renderAnimals(animals) {
	// очищаем предыдущий рендер

	while (animalsContainer.firstChild) {
		animalsContainer.removeChild(animalsContainer.firstChild); // удаляем ребенка в контейнере, пока не удалим всех
	}

	// заново наполняем родителя карточками животных
	animals.forEach(animal => {
		const animalCard = document.createElement('div'); // создаем элемент div каждого животного

		animalCard.innerHTML = `<span>${animal.name}</span>, <span>${animal.age}</span>, <span>${animal.breed}</span>`;

		animalsContainer.appendChild(animalCard); // добавляем сгенерированный элемент div в контейнер
	});
}

function addAnimalToList(event) {
	event.preventDefault(); // отмена отправки формы

	if (validateForm()) {
		// проверяем валидность формы

		animals.push({ name: nameInput.value, age: ageInput.value, breed: breedInput.value }); // добавляем животное в массив animals

		console.log(animals); // вывод массива animals в консоль

		nameInput.value = '';
		animalError.innerText = '';

		animalsContainer.innerHTML = ''; // очищаем контейнер animalsContainer
	} else {
		animalError.innerText = 'Please fill in all fields correctly! \n'; // выводим ошибку
	}

	renderAnimals(animals); // запускаем генерацию списка животных
}

// функция простой валидации полей ввода

function validateForm() {
	return nameInput.value.trim() !== '' && ageInput.value.trim() !== '' && breedInput.value.trim() !== '';
}

// удаляем из списка
function removeAll() {
	animals = []; // очищаем массив животных
	renderAnimals(animals);
}

// сортируем животных и обновляем отображение

function sortAnimalsByName() {
	animals.sort((animalA, animalB) => animalA.name.localeCompare(animalB.name));
	renderAnimals(animals); // запускаем генерацию списка животных
}

// фильтрует животных по age и обновляем отображение
function filteredAnimals(event) {
	event.preventDefault(); // отмена отправки формы
	let filtered;

	if (filterParamsInput.value !== 'All') {
		filtered = animals.filter(animal => animal.age.toString() === filterParamsInput.value);
	} else {
		filtered = animals; // если выбрано "All", показываем всех
	}
	renderAnimals(filtered); // запускаем генерацию списка животных
}

// Слушалки

form.addEventListener('submit', addAnimalToList);
removeBtn.addEventListener('click', removeAll);
sortBtn.addEventListener('click', sortAnimalsByName);
filterForm.addEventListener('change', filteredAnimals);
