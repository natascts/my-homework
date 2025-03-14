  /********************************VAR,LET,CONST*************************************************/
  //   Завдання 1: Область видимості (var vs let)
  //   Що виведе цей код? Поясніть чому.

//     if (true) {
//         var a = 10;
//         let b = 20;
//     }
//     console.log(a); //- виведе 10, бо var має функціональну область видимості (доступна поза блоком);
//     console.log(b); //- буде помилка, бо let має блочну область видимості, тобто існує тільки всередині блоку, де її оголошено (в блоку if).


  //   Завдання 2: Чи викличе помилку? (const)
  //   Чи спрацює цей код? Якщо ні, чому?

  //   const d = 50;
  //   d = 100;
  //   console.log(d);

// Код не спрацює, бо змінну const перезаписувати не можна.

  //   Завдання 3: Виправлення коду (const і об'єкти)
  //   Що потрібно змінити, щоб код не викликав помилку?

  //   const user = { name: "Nick" };
  //   user = { name: "Alex" }; //- треба змінити на: user.name = "Alex";

  /********************************СТРІЛКОВІ ФУНКЦІЇ*************************************************/

  // Завдання 1: Чому цей код не працює? Як виправити, використавши звичайну функцію?

  // const person = {
  //     name: "Alice",
  //     greet: () => {
  //         console.log(`Hello, my name is ${this.name}`);
  //     }
  // };
  // person.greet();
// ❓ Що виведе код? Як виправити?
// Код виведе помилку, бо стрілкові функції не мають власного this, а можуть тільки успадковувати його.
// Виправити можна використовуючи звичайну функцію, яка має власний this:
//  const person = {
//       name: "Alice",
//       greet: function () {
//           console.log(`Hello, my name is ${this.name}`);
//       }
//   };
//   person.greet();

  // Завдання 2: Робота з масивами
  // Що виведе цей код? Чому

  // const numbers = [1, 2, 3, 4];
  // const squares = numbers.map(num => num * num);
  // console.log(squares);
// Код виведе множення елементів масиву самих на себе, бо map проходить по кожному елементу масиву numbers,
// в першому num ми зберігаємо результат множення елементів масиву самих на себе
// та нові значення зберігаються у новому масиві squares.

  // Завдання 3: Чому new не працює?
  // Що станеться при виконанні цього коду? Як виправити, використавши звичайну функцію?

  // const Person = (name) => {
  //     this.name = name;
  // };
// const user = new Person("Alice");
// Код виведе помилку, бо стрілкові функції не працюють з new, бо вони не можуть бути конструкторами.
//Щоб виправити код, потрібно використовувати звичайну функцію:
// const Person = function (name) {
//   this.name = name;
// };
// const user = new Person("Alice");

  //*************************************************   Вправи на шаблонні рядки (Template Literals) в ES6
  // 🔹 Завдання 1: Багаторядковий текст
  // Створіть рядок, який містить таку структуру, використовуючи шаблонні рядки (без \n і +):

  // Результати:
  // 1. Переможець - Олексій
  // 2. Друге місце - Марина
  // 3. Третє місце - Сергій

// let results = `1. Переможець - Олексій
// 2. Друге місце - Марина
// 3. Третє місце - Сергій`
// console.log(results);

  // 🔹 Завдання 2: Вставка функцій у шаблонні рядки
  // Є функція, яка повертає поточний рік. Використайте її всередині шаблонного рядка:

//   function getYear() {
//       return new Date().getFullYear();
//   }
//   console.log( `Зараз ${getYear()} рік.` );
  // Очікуваний результат:

  // Зараз 2025 рік.


  // 🔹 Завдання 3: Теговані шаблони (Tagged Templates)
  // Що виведе код? Чому

  // function tag(strings, value) {
  //     return `${strings[0]}${value.toUpperCase()}${strings[1]}`;
  // }

  // const user = "nick";
// console.log(tag`Привіт, ${user}, як справи?`);
  
//Код виведе: "Привіт, NICK, як справи?", бо в string[0] передалось "Привіт, ", в user - ім'я великими буквами, тому що використаний
//метод toUpperCase(), а в strings[1] переданий рядок ", як справи?". Тобто функція tag отримує шаблон (${strings[0]}${value.toUpperCase()}${strings[1]})
//та підставляє значення (`Привіт, ${user}, як справи?).

  //***********************************************   Вправи на деструктуризацію масивів і об'єктів
  // 🔹 Завдання 1: Пропуск елементів масиву
  // Є масив:

//   const colors = ["red", "green", "blue", "yellow"];
  // Отримайте перший і третій елементи, пропустивши другий. (ВИКОРИСТАТИ ДЕСТРУКТУРИЗАЦІЮ МАСИВІВ)
// const  [first, , third] = colors;
// console.log(first);
// console.log(third);

  // 🔹 Завдання 2: Деструктуризація об'єкта
  // Дано об'єкт:

//   const user = {
//     name: "Alice",
//     age: 25,
//     country: "USA"
//   };
  // Витягніть значення у змінні name, age, country за допомогою деструктуризації.

// const { name, age, country } = user;
// console.log(name);

  // 🔹 Завдання 3: Значення за замовчуванням
  // Дано об'єкт, у якому немає age:

//   const person = {
//     name: "Bob"
//   };
  // Отримайте name і age, встановивши age значення за замовчуванням 30. Використовуйте деструктурізацію об'єктів і значення за замовчуваням
// const { name, age = 30} = person;
// console.log(age)


  // 🔹 Завдання 4: Вкладена деструктуризація
  // Є об'єкт:

  // const employee = {
  //   id: 1,
  //   personalInfo: {
  //     firstName: "John",
  //     lastName: "Doe"
  //   }
  // };
  // Витягніть firstName та lastName у змінні окремо. Використовуйте вкладену деструктурізацію
// const { id, personalInfo: { firstName, lastName } } = employee;
// console.log(firstName);

  //******************************************************   Вправи на оператори ...spread та ...rest з відповідями

  // 🔹 Завдання 1: Об'єднання масивів
  // Є два масиви:

//   const arr1 = [10, 20, 30];
//   const arr2 = [40, 50, 60];
  // Об'єднайте arr1 та arr2 у новий масив mergedArray за допомогою ...spread.
// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray)


  // 🔹 Завдання 2: Додавання нових властивостей до об'єкта
  // Є об'єкт:

  // const car = { brand: "Toyota", model: "Corolla" };
  // Створіть новий об'єкт updatedCar, додавши властивість year: 2022 за допомогою ...spread.
// const updatedCar = { ...car, year: "2022" };
// console.log(updatedCar);


  // 🔹 Завдання 3: Деструктуризація масиву з ...rest
  // Є масив:

//   const fruits = ["apple", "banana", "cherry", "date"];
//   Витягніть перший елемент у змінну firstFruit, а решту у масив remainingFruits.
// const [firstFruit, ...remainingFruits] = fruits;
// console.log(remainingFruits);


  // 🔹 Завдання 4: Використання ...spread у функції
  // Є масив чисел:

//   const numbers = [10, 20, 30, 40, 50];
// Передайте елементи масиву у Math.max(), використовуючи ...spread.
// console.log(Math.max(...numbers));


  // 1 Експорт функції за замовчуванням (export default)
  // 📌 Завдання:
  // У файлі math.js створіть функцію square(n), яка повертає квадрат числа, та експортуйте її за замовчуванням. Потім імпортуйте її у main.js і викличте для числа 4.

  // // math.js
// export default function square(n) {
//   return n * n;
// }

//   // // main.js
// import square from "./math.js";
// console.log(square(4));

  // 2 Імпорт всього модуля (* as)
  // 📌 Завдання:
  // Є модуль mathOperations.js, який експортує функції add, subtract та multiply.
  // Імпортуйте весь модуль у calculator.js під іменем mathOps і використайте функцію add.

  // mathOperations.js
//   export function add(a, b) {
//     return a + b;
//   }

//   export function subtract(a, b) {
//     return a - b;
//   }

//   export function multiply(a, b) {
//     return a * b;
//   }

//   // calculator.js
// // (тут має бути імпорт всього модуля та використання функції add)
// import * as mathOps from "./mathOperations.js";
// console.log(mathOps.add(4, 7))

  //*************************************   Вправи на тему "Обіцянки (Promise) в ES6" з відповідями
  // 🔹 Вправа 1: Використання reject
  // Що виведе цей код у консоль?

  // const myPromise = new Promise((resolve, reject) => {
  //   reject("❌ Помилка!");
  // });

  // myPromise
  //   .then((message) => console.log(message))
  //   .catch((error) => console.error(error));


  // 🔹 Вправа 2: .catch() при помилці у then()
  // Що виведе цей код?

  // const myPromise = new Promise((resolve) => {
  //   resolve(10);
  // });

  // myPromise
  //   .then((num) => {
  //     throw new Error("❌ Щось пішло не так!");
  //   })
  //   .catch((error) => console.error(error.message));


  // 🔹 Вправа 3: Promise.all()
  // Що виведе цей код?

  // const promise1 = new Promise((resolve) => setTimeout(() => resolve("✅ Перше"), 1000));
  // const promise2 = new Promise((resolve) => setTimeout(() => resolve("✅ Друге"), 2000));

  // Promise.all([promise1, promise2]).then((results) => console.log(results));


  // 🔹 Вправа 4: Комбінація Promise.allSettled()
  // Що виведе цей код?

  // const promise1 = new Promise((resolve) => setTimeout(() => resolve("✅ Успіх"), 1000));
  // const promise2 = new Promise((_, reject) => setTimeout(() => reject("❌ Помилка"), 2000));

  // Promise.allSettled([promise1, promise2]).then((results) => console.log(results));

  //*************************************************   📝 Вправи та відповіді по темі async/await
  // 🔹 Вправа 1: await у функції
  // Що виведе цей код у консоль? Чому

  // async function getData() {
  //   let result = await Promise.resolve("🚀 Дані отримані!");
  //   console.log(result);
  // }

  // getData();
  // console.log("⏳ Очікуємо...");


  // 🔹 Вправа 2: Послідовне виконання await
  // Який буде порядок виводу у консоль? Чому

  // async function loadData() {
  //   console.log("1️⃣ Початок");

  //   let data1 = await new Promise((resolve) => setTimeout(() => resolve("📄 Дані 1"), 2000));
  //   console.log(data1);

  //   let data2 = await new Promise((resolve) => setTimeout(() => resolve("📄 Дані 2"), 1000));
  //   console.log(data2);

  //   console.log("🏁 Кінець");
  // }

  // loadData();


  // 🔹 Вправа 3: Використання fetch
  // Що виведе цей код? Чому

  // async function getUser() {
  //   let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  //   let user = await response.json();
  //   console.log(user.name);
  // }

  // getUser();


  // 🔹 Вправа 4: Чому setTimeout не працює з await?
  // Що виведе цей код? Чому

  // async function delay() {
  //   await setTimeout(() => console.log("⏳ Затримка"), 2000);
  //   console.log("🏁 Кінець");
  // }

  // delay();





