//!Функція в JavaScript — це блок коду, який можна викликати для виконання певного завдання. 
//!Функції дозволяють повторно використовувати код, організовувати його та робити його більш читабельним та зрозумілим.

//?Іменована функція — це функція, яка має ім'я. Її можна викликати як за допомогою імені, так і через змінну.
//?Іменовані функції підлягають підняттю (hoisting), що означає, що їх можна викликати до оголошення в коді.
//*варіант1
//function greet() {
//    return console.log("Привіт!");
//}
//greet(); // Виведе "Привіт!"

////*варіант2
//greet(); // Виведе "Привіт!"

//function greet() {
//    console.log("Привіт!");
//}

//?Анонімна функція
//?Анонімна функція — це функція, яка не має імені і зазвичай присвоюється змінній або використовується як аргумент іншої функції.

//const greet = function() {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"


//?Стрілкова функція
//?Стрілкова функція (arrow function) — це новий синтаксис для оголошення функцій, введений в ECMAScript 6 (ES6). 
//?Стрілкові функції мають коротший синтаксис і не мають власного значення this, arguments, super та new.target.

//const greet = () => {
//    console.log("Привіт!");
//};

//greet(); // Виведе "Привіт!"
//const day=(d)=>{
//    return console.log(`Сьогодні ${d} `)
//}
//day("Четверг")
//const match = (x,y)=>{
//    c = x*y-y+2*x;
//    return testFunction (c)
//}
//const testFunction = (c)=>{ 
//    c = c**2
//    return console.log(`Результат обчислень ${c}`)
//}
//match(3,4)
//!Проект
//?У вас є початковий стейт.Реалізуйте:
//*фільтр за типом продуктів
//* Підрахунок цін обраного типу продуктів
const state = [
    { name: "Хліб", price: 20, description: "Свіжий пшеничний хліб", type: "Випічка" },
    { name: "Молоко", price: 25, description: "Свіже коров'яче молоко", type: "Молочні продукти" },
    { name: "Сир", price: 150, description: "Твердий сир з натурального молока", type: "Молочні продукти" },
    { name: "Масло", price: 80, description: "Вершкове масло", type: "Молочні продукти" },
    { name: "Яйця", price: 30, description: "Свіжі курячі яйця, 10 шт", type: "Молочні продукти" },
    { name: "Курка", price: 120, description: "Ціла курка, охолоджена", type: "М'ясо" },
    { name: "Яблука", price: 40, description: "Свіжі червоні яблука", type: "Фрукти" },
    { name: "Банани", price: 50, description: "Свіжі банани", type: "Фрукти" },
    { name: "Апельсини", price: 60, description: "Свіжі апельсини", type: "Фрукти" },
    { name: "Картопля", price: 15, description: "Молода картопля", type: "Овочі" },
    { name: "Морква", price: 18, description: "Свіжа морква", type: "Овочі" },
    { name: "Помідори", price: 45, description: "Свіжі червоні помідори", type: "Овочі" },
    { name: "Огірки", price: 35, description: "Свіжі зелені огірки", type: "Овочі" },
    { name: "Цибуля", price: 10, description: "Ріпчаста цибуля", type: "Овочі" },
    { name: "Часник", price: 20, description: "Свіжий часник", type: "Овочі" },
    { name: "Борошно", price: 25, description: "Пшеничне борошно, 1 кг", type: "Сухі продукти" },
    { name: "Цукор", price: 30, description: "Білий цукор, 1 кг", type: "Сухі продукти" }]



//?Самостійне завдання
console.log('Homework:')
console.log('Для запуску трикутника введіть: trikytnuk()\nДля запуску пошуку чисел в масиві введіть: array_finder_min()\nДля запуску пошук по масиву (Для перегляду масиву ввдедіть array_viewer()) введіть: array_finder_all()\nДля запуску більше,менше,дорівнює рядка введіть: string_counter()\nДля запуску пошуку позитивного,негативного,нульового числа введіть: number_typer()\nДля запуску пошуку числа в діапазоні введіть: number_range()\nДля запуску пошуку кварталу по місяцю введіть: month_quarter()')
//* Написати функцію, яка приймає рядок і повертає повідомлення про те, чи є довжина рядка меншою, більшою чи рівною 10 символам.
function string_counter(string) {
    let string_user = prompt('Enter string:')
    if (string_user = 10) {
        console.log('This string is equal to 10')
    }
    if (string_user > 10) {
        console.log('The string has more symbols than 10')
    }
    if (string_user < 10) {
        console.log('The string has less symbols than 10')
    }
}
//* Написати функцію, яка приймає номер місяця (1-12) і повертає номер кварталу (1-4)
function month_quarter(number) {
    let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let quarter = [1, 2, 3, 4]
    let user_month = prompt('Enter month')
    if (user_month == 1) {
        console.log('This is 1 quarter')
    }
    if (user_month == 2) {
        console.log('This is 1 quarter')
    }
    if (user_month == 3) {
        console.log('This is 1 quarter')
    }
    if (user_month == 4) {
        console.log('This is 2 quarter')
    }
    if (user_month == 5) {
        console.log('This is 2 quarter')
    }
    if (user_month == 6) {
        console.log('This is 2 quarter')
    }
    if (user_month == 7) {
        console.log('This is 3 quarter')
    }
    if (user_month == 8) {
        console.log('This is 3 quarter')
    }
    if (user_month == 9) {
        console.log('This is 3 quarter')
    }
    if (user_month == 10) {
        console.log('This is 4 quarter')
    }
    if (user_month == 11) {
        console.log('This is 4 quarter')
    }
    if (user_month == 12) {
        console.log('This is 4 quarter')
    }
}
//* Написати функцію, яка приймає число і повертає повідомлення про те, чи є це число позитивним, негативним чи нульовим.
function number_typer(number) {
    let user_number = prompt('Enter number:')
    if (user_number == 0) {
        console.log('This number - 0')
    }
    if (user_number > 0) {
        console.log('This number - positive')
    }
    if (user_number < 0) {
        console.log('This number - negative')
    }
}
//* Написати функцію, яка приймає число і повертає повідомлення про те, чи входить це число в один з заданих діапазонів: [0-10], [11-20], [21-30], чи ні.
function number_range(number) {
    let range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    let user_number_range = prompt('Enter number')
    if (user_number_range > range) {
        if (user_number_range = range) {
            console.log('Number in range 0-30')
        }
        console.log('Number bigger than 30')
    }
    if (user_number_range < range) {
        console.log('Number smaller than 0')
    }
}
//* Створіть функцію, яка обчислює площу трикутника за трьома сторонами, введеними користувачем.
function trikytnuk(arr) {
    let a = prompt('Enter a side');
    let b = prompt('Enter b side');
    let c = prompt('Enter c side');
    let h = prompt('Enter h side');
    let sum = 1 / 2 * a * h
    console.log(sum)
}
//*Створіть функцію,для пошук мінімального значення в масиві чисел.
function array_finder_min(arr) {
    let array_min = [35, 34, 50, 20, 25, 100]
    const result = Math.min(...array_min);
    console.log("Minimum value is: " + result);
}
//*Створіть функцію, для пошуку всіх індексів елементу в масиві.
function array_finder_all(arr) {
    const data = ['love', 'SFL', 'IT', 'Chernihiv', 'Google', 'Facebook'];
    let user_input = prompt('Search for:')
    const index = data.indexOf(user_input);
    console.log("Index of your search: " + index);
}
function array_viewer(arr) {
    const data = ['love', 'SFL', 'IT', 'Chernihiv', 'Google', 'Facebook'];
    console.log('Array data: ' + data)
}