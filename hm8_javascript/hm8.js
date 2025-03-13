// Завдання
// 1. Напишіть функцію, яка приймає 2 числа і повертає -1, якщо
// перше менше, ніж друге; 1 - якщо перше більше, ніж друге;
// 0 - якщо числа рівні.

// let a = Number(prompt("Введіть перше число:"));
// let b = Number(prompt("Введіть друге число:"));
// function compareNumbers(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else return 0;
// }
// console.log(compareNumbers(a, b));

// 2. Напишіть функцію, яка вираховує факторіал переданого
// їй числа.

// let num = Number(prompt("Введіть число:"));
// function calculateFactorial(num) {
//     for (let i = num - 1; i >= 1; i--){
//         num *= i;
//     }
//     return num;
// }
// console.log(calculateFactorial(num));

// 3. Напишіть функцію, яка приймає три окремі цифри і перетворює їх на одне число. Наприклад: цифри 1, 4, 9 перетворяться на число 149.

// function convertIntoOneNumber(a, b, c) {
//     return Number(`${a}${b}${c}`);
// }
// console.log(convertIntoOneNumber(1, 4, 9));

// 4. Напишіть функцію, яка приймає довжину та ширину прямокутника і обчислює його площу. Якщо у функцію передали
// 1 параметр, вона вираховує площу квадрата.

// function square(a, b) {
//     if (b !== undefined) {
//          return a * b;
//     } else return a * a;
// }
// console.log(square(3, 4));

// 5. Напишіть функцію, яка перевіряє, чи є передане їй число
// досконалим. Досконале число – це число, що дорівнює сумі
// всіх своїх власних дільників.

// function isNumberPerfect(num) {
//     let sum = 0;
//     for (let i = num - 1; i >= 1; i--){
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     if (num === sum) {
//         return true;
//     } else return false;
// }
// console.log(isNumberPerfect(6));

// 6. Напишіть функцію, яка приймає мінімальне і максимальне
// значення для діапазону і виводить ті числа з діапазону, які
// є досконалими. Використовуйте написану раніше функцію,
// щоб перевірити число на досконалість.

// function isNumberPerfectRange(min, max) {
//     for (let i = min; i <= max; i++){
//         let num = isNumberPerfect(i);
//     if (num === true) {
//         console.log(i);
//     }
//     }
// }
// isNumberPerfectRange(5, 30);

// 7. Напишіть функцію, яка приймає час (години, хвилини,
// секунди) і виводить його на екран у форматі «година:
// хвилини:секунди». Якщо при виклику функції хвилини
// та/або секунди не були передані, виводити їх як 00.

// function time(hours, minutes = "00", seconds = "00") {
//     console.log(`${hours}:${minutes}:${seconds}`);
// }
// time("06");

// 8. Напишіть функцію, яка приймає години, хвилини та секунди і повертає цей час у секунди.

function timeToSeconds(hours, minutes, seconds) {

    let result = (Number(hours) * 3600) + (Number(minutes) * 60) + Number(seconds);
    return result;
}
console.log("seconds:", timeToSeconds("6", "5", "30"))

// 9. Напищіть функцію, яка приймає кількість секунд, переводить їх у години, хвилини та секунди і повертає у вигляді
// рядка «година:хвилини:секунди».

function secondsTotime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(((seconds-hours*3600)/60));
    seconds = seconds % 60;
    return `${hours}:${minutes}:${seconds}`;
}
console.log(secondsTotime(4566));

// 10. Напишіть функцію, яка підраховує різницю між датами. Функція приймає 6 параметрів, що описують 2 дати,
// і повертає результат у вигляді рядка «година:хвилини:
// секунди». Під час виконання завдання використовуйте
// функції з попередніх 2 завдань: спочатку обидві дати переведіть у секунди, дізнайтеся різницю в секундах, а потім
// різницю переведіть назад у «година:хвилини:секунди».

function differenceBetweenDates(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    let time1 = timeToSeconds(hours1, minutes1, seconds1);
    let time2 = timeToSeconds(hours2, minutes2, seconds2);
    let difference = time1 - time2;
    return secondsTotime(difference);
}
console.log(differenceBetweenDates(12, 56, 7, 10, 44, 34));