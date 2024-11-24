// const users = {
// alex:{
//     age:24,
//     isAdmin:false,
// },
// john:{
//     age:20,
//     isAdmin:true,
//     sayHello(name){
//         console.log(`Hello ${name}`)
//     }
// }
// }


// console.log(users.john)
// users.john.sayHello('Tom')

// const users = [
// 	{
// 		name: 'alex',
// 		age: 23,
// 		isAdmin: false,
// 	},
// 	{
// 		name: 'john',
// 		age: 30,
// 		isAdmin: true,
// 	},
// ]

// users.push({
// 	name: 'ivan',
// 	age: 30,
// 	isAdmin: true,
// })

// for(let i = 0; i < users.length; i++){
//     console.log(users[i])
// }
// const foo = 'hello world'
// console.log(foo.toUpperCase())


// ===========================ДОМ.РАБОТА====================================

//  Создайте объект с вашим описанием(имя, возраст и т.д.).

const user = {
name: 'Max',
age: 24,
height: 180,
profession: 'electrician',
isAdmin: true,

}
console.log(user)

// //  Создайте метод объекта,\
//  который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const users = {
max: {
age: 24,
height: 180,
profession: 'electrician',
isAdmin: true,
        sayHello(name){
            console.log(`Hello ${name}`)
        }
	},
}
users.max.sayHello('Max')

// Создайте массив объектов с описанием пользователей(такой мы делали в уроке).
// Объявите отдельную переменную, в которой будет храниться количество простых пользователей,
// начальное значение будет - 0. Обойдите массив пользователей и
// если пользователь не является админом - прибавьте к ранее созданной переменной единицу.
// После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

const a = [
	{
		name: 'max',
		age: 24,
		post: 'user',
	},
	{
		name: 'bob',
		age: 15,
		post: 'user',
	},
	{
		name: 'Yan',
		age: 19,
		post: 'admin',
	},
	
	
]

let b = 0;

for( let i = 0; i < a.length; i++) {
    if( a.post !== 'admin'){
		b++
		
		
    }
	console.log(a[i].post)

	
}


