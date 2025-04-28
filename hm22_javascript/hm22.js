// 1. Що виведе цей код? Поясніть чому.

// let arr = ['a', 'b', 'c'];
// let iterator = arr[Symbol.iterator]();

// console.log(iterator.next().value); //a
// console.log(iterator.next().value); //b
// console.log(iterator.next().value); //c

// Так відбувається, бо arr[Symbol.iterator]() - створює ітератор для масиву arr, а метод next().value - виводить по черзі символи, бо кожен вииклик next() просуває ітератор до наступного елемента.

// 2. Який з об’єктів перебираний? Обери всі правильні варіанти, об'ясніть чому.

// a) let obj = {a: 1, b: 2}

// b) let arr = [1, 2, 3]

// c) let str = "hello"

// d) let map = new Map()

//b) бо в масивах є вбудований Symbol.iterator; c) бо рядки теж мають вбудований Symbol.iterator;  d) колекції також мають вбудований Symbol.iterator. Тобто перебираними об'єктами називають ті, котрі реалізовують метод Symbol.iterator.


// 3. Що виведе цикл? Об'ясніть чому.

// let str = "OK";
// for (let char of str) {
// console.log(char);
// }
// Цей цикл послідовно виведе символи О, K. Бо рядки мають вбудований Symbol.iterator, а через цикл for...of ми виводимо в консоль кожен символ рядка.


// 4. В чому різниця між масивом і об’єктом з властивістю length, наприклад let obj = {0: "a", 1: "b", length: 2} — чи можна такий об’єкт ітерувати через for..of? Об’єкт з властивістю length та індексами у вигляді ключів - це псевдомасив. Різниця між псевдомасивом та масивом полягає в тому, що псевдомасив сам по собі не є справжнім масивом і не має доступу до масивних методів та не має вбудованого Symbol.iterator. Його можна ітерувати через for..of, але спочатку потрібно використати метод Array.from(), щоб перетворити його на справжній масив.

// 5. Поясни, що таке Symbol.iterator і яку роль він виконує.
//Symbol.iterator - метод, який повертає ітератор, що містить метод next(). Він дозволяє об'єктам бути ітерованими в циклі for...of.

// 6. Як завершення ітерації позначається у методі .next()?
//Властивістю done: true. Це означає, що ітератор завершив перебір.


// 7. Який буде результат виконання цього коду?

// let arr = [10, 20, 30];
// let iter = arr[Symbol.iterator](); //створюється ітератор для масиву arr

// console.log(iter.next()); //done: false value: 10, бо метод next повертає об'єкт з значеннями value:... та done:...
// console.log(iter.next()); //done: false value: 20, бо кожен вииклик next() просуває ітератор до наступного елемента
// console.log(iter.next()); //done: false value: 30
// console.log(iter.next()); //done: true value: undefined, бо ітератор зпвершив перебір.



// 8. Створи об'єкт wordLetters, який буде перебирати літери у заданому слові, але в зворотному порядку.

// Очікуване використання:
//     for (let char of wordLetters("hello")) {
//     console.log(char);
// }

// function wordLetters(word) {
//     let wordLet = {
//         index: word.length - 1,
//         [Symbol.iterator]() {
//             this.current = this.index;
//             return this;
//         },
//         next() {
//             if (this.current >= 0) {
//                 return { done: false, value: word[this.current--] };
//             } else {
//                 return { done: true };
//             }
//         }
//     }
//     return wordLet;
// };
// for (let char of wordLetters("hello")) {
//     console.log(char);
// }

