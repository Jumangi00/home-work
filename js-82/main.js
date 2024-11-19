// function sumNumbers(firstNumber,secondNumber){

//     return firstNumber + secondNumber

// }

// const result = sumNumbers(3,10)
// console.log(result)
// console.log(sumNumbers(-2, 2))

// const users = [ 'John', 'Ann', 'Alex', 'Max']

// function checkForCopyItem(array, item) {
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === item){
//             return `There is a copy of thr ${item} in array`
//         }
//     }
//     return `There is no such item in the array`
// }
// console.log(checkForCopyItem(users, 'Max'))

// =====================ДЗ==========================

// Создайте функцию, которая в качестве аргумента будет принимать имя,\
// а возвращать строчку ‘Hello “аргумент функции”’.

function user(greeting, name) {
	return greeting + name
}

const result = user('Hello ', 'Max')

console.log(result)

// Создайте массив чисел, далее создайте функцию,
// которая будет принимать в качестве аргумента массив чисел.
// Функция должна перебирать
// полученный массив и если число больше 10 - выводить это число в консоль.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function checkForCopyItem(array, item) {
	for (let i = 10; i < array.length; i++) {
		if (array[i] === item) {
			return `this number is greater than ten ${item}`
		}
	}
	return `This number is less than ten`
}
console.log(checkForCopyItem(numbers, 12))

// Предлагаю вам реализовать простенький калькулятор.
// Создайте функцию, которая будет принимать три аргумента,
// два числа и строку для выбора оператора.
// При вызове функции пользователь передает, например, (2, 3, ‘minus’),
// внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1.
// То есть мы получаем разницу между первым и вторым аргументом.
// Запишите результат выполнения функции в переменную и выведите в консоль.
// Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

function calculate(operation, num1, num2) {
	switch (operation) {
		case 'sum':
			return num1 + num2
		case 'minus':
			return num1 - num2
		case 'multiplication':
			return num1 * num2
		case 'division':
			return num1 / num2
		default:
			return 'Invalid operation'
	}
}
console.log(calculate('minus', 2, 3))
