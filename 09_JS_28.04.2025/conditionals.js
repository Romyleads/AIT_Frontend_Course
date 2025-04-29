// условный оператор
// if

let age = 1;

if (age > 21) {
	// если условие истинно - выполняется этот блок кода
	console.log('You can buy alcohol');
} else {
	// если ложно - то вот этот
	console.log('You can not buy alcohol');
}

if (age > 21) {
	// если условие истинно - выполняется этот блок кода
	console.log('You can buy alcohol');
} else if (age === 1) {
	// если ложно - то вот этот
	console.log('Milk is the best option for you');
} else {
	console.log('You can not buy alcohol');
}

let myAge = 16;

switch (myAge) {
	case 1:
		console.log('малыш');
		break;
	case 2:
		console.log('ползунок');
		break;
	case 5:
		console.log('дошкольник');
		break;
	case 16:
		console.log('подросток');
		break;
	case 45:
		console.log('зрелый');
		break;
	default:
		console.log('отличный возраст');
}

// Функции

// functional declaration
var a = 'drr-drr-drr-drr-drr';

function neighbour(str) {
	console.log('Drr-drr-drr-drr-drr-' + str);
}

neighbour(a);
