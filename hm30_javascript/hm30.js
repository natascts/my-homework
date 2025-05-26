// Тема 8. Розширені структури
// Завдання 1. Деструктуризація
// Напиши функцію getFullName, яка приймає об’єкт:
// { firstName: "Olga", lastName: "Ivanova" }
// і повертає рядок "Olga Ivanova" з використанням деструктуризації об’єкта.

// function getFullName(obj) {
//     let { firstName, lastName } = obj;
//     return `${firstName} ${lastName}`;
// }
// console.log(getFullName({ firstName: "Olga", lastName: "Ivanova" }));

// Завдання 2. Spread і Rest
// Створи функцію sumAll, яка:

// приймає будь-яку кількість аргументів

// повертає їхню суму

// Використай rest-параметри.

// function sumAll(...arg) {
//     return arg.reduce((acc, el) => acc += el);
// }
// console.log(sumAll(2, 4, 5, 3))

// Завдання 3. Безпечний доступ
// Напиши функцію getStreet(user), яка повертає адресу користувача:


// user.address?.street ?? "Not specified"
// Перевір роботу функції на об'єкті без address.

// let user = {
//     name: "Olga",
//     age: 27
// }

// function getStreet(user) {
//     return user.address?.street ?? "Not specified";
// }
// console.log(getStreet(user));

// Тема 9. Класи та об’єктно-орієнтоване програмування
// Завдання 4. Клас і метод
// Створи клас Rectangle, який має:
// властивості width, height
// метод area() — повертає площу

// class Rectangle {
//     constructor(width, height) {
//         this.width = width,
//         this.height = height
//     }
//     area() {
//         return `Площа: ${this.width * this.height}`;
//     }
// }
// let rect = new Rectangle(20, 15);
// console.log(rect.area());

// Завдання 5. Наслідування
// Створи клас Square, який наслідує Rectangle, але має тільки одне поле side.

// class Square extends Rectangle {
//     constructor(side) {
//         super(side, side);
//     }
// }
// const s = new Square(5);
// console.log(s.area()); // 25
// Завдання 6. Приватне поле і геттер
// Створи клас BankAccount з приватним полем #balance.
// Метод deposit(amount) додає гроші, а геттер balance повертає поточний стан.

// class BankAccount {
//     #balance = 0;
//     deposit(amount) {
//         if (amount > 0) {
//             balance += amount;
//         }
//     }
//     get balance() {
//         return this.#balance;
//     }
// }

// Тема 11. Модулі (ES Modules)
// Завдання 7. Іменований експорт
// Створи файл math.js з іменованими функціями add і multiply.
// У main.js імпортуй їх та виведи результат обчислень у консоль.

//math.js
// export function add(a, b){
//     return a + b;
// }
// export function multiply(a, b) {
//     return a * b;
// }
//main.js
// import { add, multiply } from "./math.js";
// console.log(add(6, 9));
// console.log(multiply(6, 3));

// Завдання 8. Експорт за замовчуванням
// Створи модуль logger.js, який експортує за замовчуванням функцію log(msg).
// Імпортуй її в main.js і викличи з рядком "Started".

//logger.js
// export default function log(msg) {
//     console.log(`${msg}`);
// }
// main.js
// import log from "./logger.js";
// log("Started");

// Завдання 9. Імпорт з перейменуванням
// У модулі helpers.js є функція calculate().
// Імпортуй її у main.js під ім'ям calc() та викличи.

//helpers.js
// export function calculate(a, b, operator) {
//     switch (operator) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//         default:
//             return "Невідома операція";
//     }
// };
// main.js
// import { calculate as calc } from "./helpers.js";
// console.log(calc(3, 5, "+"));

// Тема 12. Обробка помилок
// Завдання 10. try...catch
// Напиши функцію parseData(json), яка парсить JSON.
// Якщо формат невалідний — повертає "Invalid JSON".

// function parseData(json) {
//     try {
//         return JSON.parse(json);
//     }
//     catch(err) {
//         return "Invalid JSON";
//     }
// }

// Завдання 11. throw
// Створи функцію validateAge(age), яка:

// кидає помилку "Too young" якщо age < 18

// інакше повертає "Allowed"

// function validateAge(age) {
//     try {
//         if (age < 18) {
//             throw new Error("Too young");
//         } else {
//             return "Allowed";
//         }
//     }
//     catch (err) {
//         return err.message;
//     }
// }
// console.log(validateAge(19));

// Завдання 12. Власна помилка
// Створи клас ValidationError, що наслідує Error.
// Створи функцію register(name), яка кидає ValidationError("Name is too short"), якщо ім’я менше 3 символів.

// class ValidationError extends Error{
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }
// function register(name) {
//     if (name.length < 3) {
//         throw new ValidationError("Name is too short");
//     }
// }
// try {
//     console.log(register("Js"));
// }
// catch(err) {
//     if (err instanceof ValidationError) {
//         console.log(err.message);
//     } else {
//         console.log("Невідома помилка!");
//     }
// }


