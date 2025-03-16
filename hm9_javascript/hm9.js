//SPREAD, REST

// Вправа 1: Використання rest у функції
// Завдання: Напишіть функцію multAll, яка приймає будь-яку кількість аргументів і повертає результат їх перемноження.
// Приклад
//   console.log(multAll(1, 2, 3, 4, 5)); // Очікуваний результат: 120
// function multAll(...arg) {
//     let result = 1;
//     for (key of arg) {
//         result *= key;
//     }
//     return result;
// }
// console.log(multAll(1, 2, 3, 4, 5));

//   2. Функція з spread
// Є масив чисел. Створіть функцію findMin(numbers). Використайте оператор spread, щоб передати його у Math.min для знаходження найменшого числа.

// Завдання
//   const numbers = [3, 7, 2, 9, 4];
// function findMin(numbers) {
//     console.log(Math.min(...numbers));
//   }
// findMin(numbers); // 2

//   3. Деструктуризація з rest. Створіть функцію splitArray(values).
// Виділи перший елемент масиву в змінну, а решту значень помісти в інший масив.

// Завдання
// const values = [10, 20, 30, 40];
// function splitArray(values) {
//     let [first, ...rest] = values;
//     return { first, rest };
// }
// console.log(splitArray(values)); // { first: 10, rest: [20, 30, 40] }

// 1. Глобальна та локальна область видимості
// Що виведе цей код? Поясни відповідь.

// let a = 10;

// function test() {
//     let a = 20;
//     console.log(a);
// }

// test();
// console.log(a);
//Цей код виведе спочатку 20, а потім 10, бо змінна "a" знаходиться у різних областях видимості.


//     2. Лексичне оточення
//   Що виведе цей код? Поясніть відповідь.

//   let x = 5;

//   function outer() {
//       let x = 10;

//       function inner() {
//           console.log(x);
//       }

//       inner();
//   }

//   outer();
//Код виведе 10, тому що ми виводимо значення "x" у вкладеній функції, яка має доступ до внутрішніх змінних функції, в якій її було
//створено, а також не виводиться 5, бо inner() має доступ до "x" у функції outer(), тому до глобальної змінної "x" справа не доходить.

// Вправа 3: Лічильник на замиканні
// Завдання: Напишіть функцію counter(), яка повертає функцію-лічильник. Функція, яка повертається, має рахувати від 1 і більше.
// Викликаємо цю фукцію один раз, отримаємо 1. Викликаємо другий раз отримаємо 2 і т.д.

// function counter() {
//     let count = 0;
//     return function() {
//         return count++;
//     }
// }
// const myCounter = counter();
// console.log(myCounter()); // 1
// console.log(myCounter()); // 2
// console.log(myCounter()); // 3

// Методи об'єктів та this.
// Створіть калькулятор
// Створіть об’єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.

// let calculator = {
//     read() {
//         this.a = Number(prompt("Введіть значення a:"));
//         this.b = Number(prompt("Введіть значення b:"));
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );