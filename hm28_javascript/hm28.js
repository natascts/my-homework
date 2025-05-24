// Завдання 1 (тема: типи даних + оператори):
// Напиши функцію smartAdd(a, b), яка:

// якщо обидва числа — додає їх

// якщо обидва рядки — з'єднує

// якщо один з них булевий — повертає "Invalid"

// в інших випадках — повертає null

// function smartAdd(a, b) {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//     } else if (typeof a === "string" && typeof b === "string") {
//         return a + b;
//     } else if (typeof a === "boolean" || typeof b === "boolean") {
//         return "Invalid";
//     } else {
//         return null;
//     }
// }
// console.log(smartAdd("jj", 8));

// Завдання 2 (тема: тернарний оператор):
// Реалізуй функцію getGreeting(hour) з одним рядком коду, яка повертає:

// "Good night" — якщо 0 <= hour < 6

// "Good morning" — якщо 6 <= hour < 12

// "Good afternoon" — якщо 12 <= hour < 18

// "Good evening" — якщо hour >= 18

// function getGreeting(hour) {
//     return hour >= 0 && hour < 6 ? "Good night"
//          : hour >= 6 && hour < 12 ? "Good morning"
//          : hour >= 12 && hour < 18 ? "Good afternoon"
//          : "Good evening"
// }
// console.log(getGreeting(10));

// Завдання 3 (тема: вкладені if і логіка):
// Напиши функцію canDrive(age, hasLicense), яка:

// повертає "Can drive" якщо age >= 18 і hasLicense === true

// повертає "Too young" якщо age < 18

// повертає "Need a license" якщо age >= 18, але hasLicense === false

// function canDrive(age, hasLicense) {
//     if (age >= 18 && hasLicense === true) {
//         return "Can drive";
//     } else if (age < 18) {
//         return "Too young";
//     } else if (age >= 18 && hasLicense === false) {
//         return "Need a license";
//     }
// };
// console.log(canDrive(18, false))

// Завдання 4 (тема: switch + булева логіка):
// Реалізуй функцію getDayType(day):

// приймає day (число від 1 до 7)

// повертає "Weekend" для 6 або 7

// повертає "Weekday" для 1–5

// у інших випадках — "Invalid day"

// function getDayType(day) {
//     switch (day) {
//         case 6:
//         case 7:
//             return "Weekend";
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             return "Weekday";
//         default:
//             return "Invalid day";
//     }
// }
// console.log(getDayType(9));

// Завдання 5 (тема: вкладені цикли + continue):
// Напиши функцію triangle(n), яка:

// виводить в консоль числа від 1 до n у вигляді числового трикутника,
// пропускаючи парні числа через continue.

// Для n = 4 результат:
// 1
// 3

// function triangle(n) {
//     for (let i = 1; i <= n; i++){
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }
// }
// triangle(4);

// Завдання 6 (тема: функції + return):
// Реалізуй функцію isLeapYear(year):

// повертає true, якщо рік високосний (ділиться на 4 і не на 100, або на 400)

// інакше — false
    
// function isLeapYear(year) {
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isLeapYear(2000));

// Завдання 7 (тема: функції + замикання):
// Створи функцію createLimiter(limit), яка повертає іншу функцію increment().
// Ця внутрішня функція:

// щоразу збільшує лічильник на 1

// але не перевищує limit

// повертає поточне значення

// function createLimiter(limit) {
//     let count = 0;
//     let increment = () => {
//         if (count < limit) {
//             return ++count;
//         }
//     };
//     return increment;
// };
// const inc = createLimiter(3);
// console.log(inc()); // 1
// console.log(inc()); // 2
// console.log(inc()); // 3
// console.log(inc()); // 3

// Завдання 8 (тема: функції + аргументи):
// Напиши функцію sumOnlyNumbers(), яка приймає будь-яку кількість аргументів і повертає суму тільки числових значень.
// Не використовуй масиви.

// function sumOnlyNumbers() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++){
//         if (typeof arguments[i] === "number") {
//             sum += arguments[i];
//         };
//     }
//     return sum;
// };

// console.log(sumOnlyNumbers(1, "a", true, 4)); // 5

// Завдання 9 (тема: колбек-функції):
// Реалізуй функцію executeTwice(callback), яка:

// приймає функцію callback як аргумент

// викликає її двічі

// повертає масив із двох результатів

// function executeTwice(callback) {
//     let result1 = callback();
//     let result2 = callback();
//     return [result1, result2];
// };

// Завдання 10 (тема: рекурсія):
// Напиши рекурсивну функцію countDigits(n), яка:

// повертає кількість цифр у числі n

// не використовуй перетворення в рядок

// function countDigits(n) {
//     if (n < 10) return 1;
//     return 1 + countDigits(Math.floor(n/10)) ;
// }

// console.log(countDigits(123)); // 3



