// цветной вывод заголовков
function cl(title, color = 'green') {
	console.log(
		'%c' + title,
		`color: ${color}; font-weight: bold; font-size: 14px;`
	);
}

// 1. greet1 (проверка через if (!lastName))
cl('1. greet1 (проверка через if (!lastName))', 'green');
function greet1(lastName) {
	if (!lastName) {
		lastName = 'Dowson';
	}
	return 'Hi, ' + lastName + '! How are you?';
}
console.log(greet1('Smith'));
console.log(greet1(''));

// 2. greet2 (короткая форма с тернарным оператором)
cl('2. greet2 (короткая форма с тернарным оператором)', 'blue');
function greet2(lastName) {
	return 'Hi, ' + (lastName ? lastName : 'Dowson') + '! How are you?';
}
console.log(greet2('Smith'));
console.log(greet2());

// 3. greet3 (аналог greet2)
cl('3. greet3 (аналог greet2)', 'purple');
function greet3(lastName) {
	return 'Hi, ' + (lastName ? lastName : 'Dowson') + '! How are you?';
}
console.log(greet3('Smith'));
console.log(greet3());

// 4. greet4 (значение по умолчанию + шаблонная строка)
cl('4. greet4 (значение по умолчанию + шаблонная строка)', 'orange');
function greet4(familyName = 'Dowson') {
	return `Hi, ${familyName}! How are you?`;
}
console.log(greet4('Roman'));
console.log(greet4());
