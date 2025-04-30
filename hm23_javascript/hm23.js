//**********************************************Object.values,keys,entries
  //    1. Підсумуйте властивості
  //   Є об’єкт salaries з довільною кількістю властивостей, що містять заробітні плати.

  //   Напишіть функцію sumSalaries(salaries), що повертає суму всіх зарплат за допомогою Object.values та циклуfor..of.

  //   Якщо об’єкт salaries порожній, тоді результат повинен бути 0.

  //   Наприклад:

// let salaries = {
//     "Іван": 100,
//     "Петро": 300,
//     "Марія": 250
// };
// function sumSalaries(salaries) {
//     let sumSal = 0;
//     for (let salary of Object.values(salaries)) {
//         if (Object.keys(salaries).length === 0) {
//             return 0;
//         } else {
//             sumSal += salary;
//         }
//     };
//     return sumSal;
// };
// alert( sumSalaries(salaries) ); // 650


  //   2. Порахуйте властивості
  // Напишіть функцію count(obj), що повертає кількість властивостей об’єкта:

// let user = {
//     name: 'Іван',
//     age: 30
// };
// function count(obj) {
//     let sumKey = Object.keys(obj).length;
//     return sumKey;
// }
// alert( count(user) ); // 2
  // Намагайтеся зробити код якомога коротшим.

// P.S. Ігноруйте символьні властивості, враховуйте лише “звичайні”.
  


   //**********************************************Set

//    Вправа 3: Лічильник унікальних слів
// Завдання:
// Напиши функцію countUniqueWords(str), яка приймає рядок, розбиває його на слова, і повертає Map, де ключ — це слово, а значення — скільки разів воно зустрічається.

// function countUniqueWords(str) {
//     str = str.split(" ");
//     let uniqueWords = new Map();
//     for (let item of str) {
//         if (uniqueWords.has(item)) {
//             let value = uniqueWords.get(item);
//             uniqueWords.set(item, value + 1);
//         } else {
//             uniqueWords.set(item, 1);
//         }
//     }
//     return uniqueWords;
// }

// console.log(countUniqueWords("apple orange banana apple orange apple"));

// Очікуваний результат:

// Map(3) { 'apple' => 3, 'orange' => 2, 'banana' => 1 }

// Вправа 4: Пошук за значенням
// Завдання:
// Є Map, де ключ — ім’я студента, а значення — його бал. Напиши функцію findStudentsByGrade(map, grade), яка повертає масив імен студентів з вказаним балом.

// const students = new Map([
//   ["Anna", 90],
//   ["Boris", 85],
//   ["Clara", 90],
//   ["Dmitry", 70]
// ]);

// function findStudentsByGrade(map, grade) {
//     let studentsByGrade = [];
//     for (let [student, gr] of map) {
//         if(gr === grade){
//             studentsByGrade.push(student);
//         } 
//     }
//     return studentsByGrade;
// }

// console.log(findStudentsByGrade(students, 90));
// Очікуваний результат:

// ["Anna", "Clara"]

// Вправа 5: Заміна значень у Map
// Завдання:
// Є Map, де ключ — це товар, а значення — його ціна. Зроби функцію applyDiscount(map, percent), яка повертає нову Map, в якій до кожної ціни застосована знижка (відсоток).

// const products = new Map([
//   ["Bread", 20],
//   ["Milk", 30],
//   ["Cheese", 50]
// ]);
// function applyDiscount(map, percent) {
//     let productsDiscount = new Map();
//     for (let [product, price] of map) {
//         productsDiscount.set(product, price - (price * percent / 100));
//     }
//     return productsDiscount;
// }
// console.log(applyDiscount(products, 10));
// Очікуваний результат:

// Map(3) { 'Bread' => 18, 'Milk' => 27, 'Cheese' => 45 }


   