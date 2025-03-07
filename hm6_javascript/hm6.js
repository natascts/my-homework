// Масиви
// 0) Створіть масив let arr = [1, 2, 3, 4, 5]. Зменшіть його довжину до 3 і виведіть результат.

// let arr = [1, 2, 3, 4, 5];
// arr.length = 3;
// console.log(arr);
// // Змініть довжину масиву до 7. Що з'явиться в нових елементах?

// arr.length = 7;
// // В нових елементах з'явилось значення "undefined"

// // 1) Створіть масив let colors = ['red', 'green', 'blue']. Отримайте останній елемент за допомогою методу at().
// let colors = ['red', 'green', 'blue'];
// console.log(colors.at(-1));
// // Використовуючи індекси, замініть другий елемент масиву на yellow.
// colors[2] = 'yellow';
// console.log(colors);

// 2)
// Створіть масив cars з елементами "Ford","Mazda","Renault", "Volvo"
// Додайте "BMW" в кінець масиву.
// Замініть "Mazda","Renault" на "Toyota", покажіть видалені елементи (splice)
// Видаліть перший елемент масиву та покажіть його.
// Вставте "Infinity" та "WW" на початок масиву.

// let cars = ["Ford", "Mazda", "Renault", "Volvo"];
// cars.push("BMW");
// let removedCars = cars.splice(1, 2, "Toyota");
// console.log(removedCars);
// console.log(cars.shift());
// cars.unshift("Infinity", "WW");
// console.log(cars);

// 3)
// Напишіть функцію multInput() яка:
// Просить користувача ввести дані за допомогою prompt та зберігає їх в масив.
// Закінчує робити запити в користувача після того, як введено не числове значення, порожня строка або натиснуто “відмінити”.
// Підраховує та повертає результат перемноження елементів масиву.
// P.S. Нуль 0 це – валідне число, будь ласка, не зупиняйте функцію при введені 0. (prompt, будь-який цикл обходу масиву)

// function multInput() {
//     let arrRR = [];
//     let multResult = 1;
//     while (true) {
//         let item = prompt("Введіть дані в масив:");
//         if (item === "" || item === null || isNaN(Number(item))) {
//         break;
//         }
//         arrRR.push(Number(item));
//         multResult *= Number(item);
//     } return multResult;
//     }
// let result = multInput();
// console.log(arrRR);
// console.log(result);

// Методи масивів
// 0) Напишіть функцію stylesCorrection(str), яка перетворює такі рядки “my!short!string” в “my-short-string”.
// Тобто знаки оклику видаляються і заміняються на знак дифіс.
// Приклади:
// stylesCorrection("background!color") === 'background-сolor';
// stylesCorrection("list!style!image") === 'list-style-image';
// stylesCorrection("webkit!transition") === 'webkit-transition';
// (split, join)
let str = 'my!short!string';
function stylesCorrection(str) {
    let arr = str.split("!");
    return arr.join("-");
}
console.log(stylesCorrection(str));


// 1)
// let arr = [{id: 0, value: 5}, {id: 1, value: 3}, {id: 2, value: 8}, {id: 3, value: 1}];
// // // Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи в яких властивість value >= a та <= b і віддає масив цих елементів.Функція повинна повертати новий масив і не змінювати вихідний. (filter)
// function filterRange(arr, a, b){
//     return arr.filter(value => value.value >= a && value.value <= b);
// }
// console.log(filterRange(arr, 2, 6));

// // 2)
// let arr = [{id: 0, value: 5}, {id: 1, value: 3}, {id: 2, value: 8}, {id: 3, value: 1}];
// // // Напишіть функцію copyAndSort(arr, sort). Значення sort може бути або "DESC", або "ASC". Якщо "DESC" тоді сортуємо від найбільшого до найменьшего, відповідно якцщо "ASC" то навпаки. Функція має зробити КОПІЮ масиву arr, відсортувати елементи за властивістю value, відповідно до параметру sort і повернути результат. (slice, sort)

// function copyAndSort(arr, sort) {
//     let sortArr = arr.slice();
//     if (sort === "DESC") {
//         sortArr.sort((a, b) => b.value - a.value);
//     } else if (sort === "ASC") {
//         sortArr.sort((a, b) => a.value - b.value);
//     } return sortArr;
// }
// console.log(copyAndSort(arr, "DESC"));
// console.log(copyAndSort(arr, "ASC"));

// // // 3) 
// let cars = [{id: 0, brand: 'Ford'}, {id: 1, brand: 'Toyota'}, {id: 2, brand: 'Mazda'}];
// // // У вас є масив об’єктів cars, і в кожному з них є car.brand. Напишіть код, який перетворює їх в масив брендів: let brands = ['Ford', 'Toyota', 'Mazda']; (map)
// let brands = cars.map(car => car.brand);
// console.log(brands);
