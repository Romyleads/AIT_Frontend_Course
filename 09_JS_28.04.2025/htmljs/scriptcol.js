// для вывода цветных сообщений
function cl(txt, color) {
	console.log(
		'%c' + txt,
		`color: ${color}; font-weight: bold; font-size: 14px;`
	);
}

// обёртки
const clb = txt => cl(txt, '#64b5f6'); // голубой
const clr = txt => cl(txt, '#e57373'); // красный
const clg = txt => cl(txt, '#81c784'); // зелёный
const clo = txt => cl(txt, '#ffb74d'); // оранжевый

// примеры
// clb('Готово к работе (голубой)');
// clr('Ошибка или важное сообщение (красный)');
// clg('Всё успешно (зелёный)');
// clo('Предупреждение или идея (оранжевый)');
