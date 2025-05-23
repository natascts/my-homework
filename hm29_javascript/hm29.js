// Тема 4. Масиви
// Завдання 1
// Напиши функцію getEvenSquares(arr), яка:

// приймає масив чисел

// повертає масив квадратів лише парних чисел

// function getEvenSquares(arr) {
//     let result = arr.filter((num) => num % 2 === 0);
//     result = result.map((num) => num ** 2);
//     console.log(result);
// }

// getEvenSquares([1, 2, 3, 4]); // [4, 16]

// Завдання 2
// Реалізуй функцію removeDuplicates(arr), яка:

// повертає новий масив без повторень

// не використовуй Set

// function removeDuplicates(arr) {
//     return arr.reduce((acc, num) => {
//         if (acc.includes(num)) {
//             return acc;
//         } else {
//             acc.push(num);
//             return acc;
//         }
//     }, [])
// }

// console.log(removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]
// Завдання 3
// Напиши функцію longestWord(words), яка повертає найдовше слово з масиву рядків.

// function longestWord(words) {
//     return words.reduce((acc, word) => acc.length > word.length ? acc : word, "");
// };
// console.log(longestWord(["hi", "hello", "welcome"])); // "welcome"

// Тема 5. Об’єкти
// Завдання 4
// Напиши функцію getUserNames(users), яка:

// приймає масив об’єктів { name, age }

// повертає масив імен користувачів

// function getUserNames(users) {
//     return users.map((user) => {
//         return user.name;
//     });
// }

// console.log(getUserNames([{ name: "Olga" }, { name: "Ivan" }])); //["Olga", "Ivan"]

// Завдання 5
// Створи функцію hasProperty(obj, key):

// повертає true, якщо об'єкт має власну властивість key, інакше false

// function hasProperty(obj, key) {
//     return key in obj;
// }

// console.log(hasProperty({ a: 1 }, "a")); // true
// console.log(hasProperty({}, "b"));       // false

// Завдання 6
// Напиши функцію cloneWithout(obj, key):

// повертає копію об'єкта без вказаної властивості

// function cloneWithout(obj, key) {
//     let cloneObj = Object.assign({}, obj);
//     delete cloneObj[key];
//     return cloneObj;
// }
// console.log(cloneWithout({ name: "Olga", age: 30 }, "age")); // { name: "Olga" }

// Тема 6. Рядки та числа
// Завдання 7
// Створи функцію countVowels(str), яка:

// рахує кількість голосних літер у рядку (a, e, i, o, u)

// function countVowels(str) {
//     let count = 0;
//     for (letter of str) {
//         if (letter.match(/[aeiou]/gi)) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("hello")); // 2
// Завдання 8
// Напиши функцію formatPrice(price), яка:

// округлює число до 2 знаків після крапки

// повертає рядок з $ попереду

// function formatPrice(price) {
//     return `$${price.toFixed(2)}`;
// }

// console.log(formatPrice(4.567)); // "$4.57"
// Завдання 9
// Реалізуй функцію normalizeName(name):

// обрізає пробіли на початку і в кінці

// робить першу літеру великою, решту — малими

// function normalizeName(name) {
//     let firstLetter = name.trim().charAt(0).toUpperCase();
//     let letters = name.trim().slice(1).toLowerCase();
//     return `${firstLetter}${letters}`
// }

// console.log(normalizeName("  aNNa ")); // "Anna"
// Тема 7. Типи і приведення
// Завдання 10
// Створи функцію areEqual(a, b), яка:

// повертає результат порівняння двох значень за допомогою == та ===

// приклад виводу: "== true, === false"

// function areEqual(a, b) {
//     return `== ${a == b}, === ${a === b}`;
// }
// console.log(areEqual("5", 5)); // "== true, === false"

// Завдання 11
// Напиши функцію isFalsy(value), яка:

// повертає true, якщо значення є falsy

// function isFalsy(value) {
//     if (!value) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isFalsy(0));         // true
// console.log(isFalsy("hello"));   // false

// Завдання 12
// Реалізуй функцію getType(value), яка:

// повертає тип значення ("array", "null", "object", "string" тощо)

// function getType(value) {
//     if (Array.isArray(value) === true) {
//         return "array";
//     } else if (value === null) {
//         return "null";
//     } else {
//         return typeof value;
//     }
// }

// console.log(getType([]));           // "array"
// console.log(getType(null));         // "null"
// console.log(getType("hello"));      // "string"