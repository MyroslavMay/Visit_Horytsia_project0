//!Змінна та константа
console.log(1)
let a = 5
console.log(a)
a = 7
console.log(a, typeof (a))
const b = 6
console.log(b)
//b - 7
//console.log(b)

//! Типи даних
a = 7.1
console.log(typeof (a))
a = '2'
console.log(typeof (a))
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(typeof (arr), arr)
console.log(arr.length)
console.log(arr[2])
let obj = {
    name: "Myroslav",
    age: 22,
    city: "Chernihiv"
}
console.log(obj)
console.log(obj.name)
function matchSum(a, b) {
    a = a * 2
    return console.log(a + b)
}
matchSum(5, 5)

//! Арифметичні операції
//? + - / % ** * ++ --
console.log(5 % 2)
console.log(5 + 5)
console.log(5 - 5)
console.log(5 ** 3)
console.log(5 * 4)
console.log(5 * 4 / 10)

//! Об'єкти та функції


//! Форми розгалуження
let a1 = 5
let a2 = 6
if (a1 * a2 > 20) {
    console.log('Dobytok1')
} else {
    console.log('Dobytok2')
}
a1 * a2 > 20
    ? console.log('Dobytok1')
    : console.log('Dobytok2')
a2 % 2 == 0 && console.log("Parne")