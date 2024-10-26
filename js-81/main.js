// const numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
// 	console.log(numbers[i] + 1)
// }

// Создайте произвольный массив чисел. Используя цикл for обойдите
// этот массив и выведите в консоль только четные числа.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

for (let i = 0; i <= number.length; i++) {
	if (number[i] % 2 === 0) {
		console.log(number[i])
	}
}
//  Создайте массив из всех цветов радуги. Используя цикл for обойдите этот массив и выведите в консоль все цвета радуги,
//  но в обратном порядке, p.s. обратите внимание на индексы массивов и стартовую позицию для i.

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (let i = colors.length -1; i >= 0; i--) {
	console.log(colors[i])
}
