base = prompt('Пожалуйста, введите целое число', 1);
while (/^[0-9][.][1-9]/.test(base)) {
	base = prompt('Неправильный формат. Введите, пожалуйста, еще раз.', 5);
} 

exponent = prompt('Пожалуйста, ведите степень для числа', 1);
while (/^[0-9][.][1-9]/.test(exponent)) {
	exponent = prompt('Неправильный формат. Пожалуйста, попробуйте еще раз.', 3);
} 

function pow(base, exponent) {
	console.log('число =', base);
	console.log('степень =', exponent);
	var num;
	num = Math.pow(base, exponent);
	return num;
}

	var result = pow(base, exponent);
	console.log('Результат равен', result);	