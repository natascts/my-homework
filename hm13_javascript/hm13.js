  //*********************************************************TRY...CATCH...FINALLY
  //   Завдання 1: Робота з finally
  //   Що виведе цей код у консоль?

  //   try {
  //       console.log("Перед помилкою");
  //       throw new Error("Щось пішло не так");
  //   } catch (error) {
  //       console.log("Оброблено:", error.message);
  //   } finally {
  //       console.log("Блок finally виконується завжди");
  //   }
  //   console.log("Після try...catch...finally");

  //Цей код виведе спочатку: "Перед помилкою", потім "Оброблено: Щось пішло не так", потім буде: "Блок finally виконується завжди"
  //  і в кінці: "Після try...catch...finally".


  //   Завдання 2: Перевірка введених даних
  //   Напиши функцію parseNumber(input), яка намагається перетворити input на число. Якщо введено не число, функція повинна викидати помилку "Некоректне число". Використай try...catch для обробки помилки та виведи відповідне повідомлення.

// function parseNumber(input) {
//     try {
//         let num = Number(input);
//         if (isNaN(num)){
//             throw new Error("Некоректне число");
//         } else {
//             return num;
//         }
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }
// parseNumber("dscsdd");


  //*************************************   Вправи на тему "Обіцянки (Promise) в ES6" з відповідями
  // 🔹 Вправа 1: Використання reject
  // Що виведе цей код у консоль?

  // const myPromise = new Promise((resolve, reject) => {
  //   reject("❌ Помилка!");
  // });

  // myPromise
  //   .then((message) => console.log(message))
//   .catch((error) => console.error(error));
  
//Цей код виведе помилку, тобто: ❌ Помилка!.


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
// Цей код виведе: ❌ Щось пішло не так!, бо при помилці у then(), вона передається в .catch().

  // 🔹 Вправа 3: Promise.all()
  // Що виведе цей код?

  // const promise1 = new Promise((resolve) => setTimeout(() => resolve("✅ Перше"), 1000));
  // const promise2 = new Promise((resolve) => setTimeout(() => resolve("✅ Друге"), 2000));

  // Promise.all([promise1, promise2]).then((results) => console.log(results));

//Код виведе спочатку ✅ Перше, потім ✅ Друге, хоча оброблятись вони будуть паралельно одна одній та будуть
//виведені тільки коли всі promises будуть виконані.

  // 🔹 Вправа 4: Комбінація Promise.allSettled()
  // Що виведе цей код?

  // const promise1 = new Promise((resolve) => setTimeout(() => resolve("✅ Успіх"), 1000));
  // const promise2 = new Promise((_, reject) => setTimeout(() => reject("❌ Помилка"), 2000));

// Promise.allSettled([promise1, promise2]).then((results) => console.log(results));
  
//Цей код виведе спочатку ✅ Успіх, а потім ❌ Помилка.

  //*************************************************   📝 Вправи та відповіді по темі async/await
  // 🔹 Вправа 1: await у функції
  // Що виведе цей код у консоль? Чому

  // async function getData() {
  //   let result = await Promise.resolve("🚀 Дані отримані!");
  //   console.log(result);
  // }

  // getData();
// console.log("⏳ Очікуємо...");
  
//Код виведеме спочатку ⏳ Очікуємо..., а потім 🚀 Дані отримані!, бо JS рушій спочатку виконує основий код, а після вже
// async у функціях.


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
  
//Спочатку виведеться 1️⃣ Початок, потім 📄 Дані 1, 📄 Дані 2 і в кінці 🏁 Кінець, бо await робить асинхронний код синхронним,
// тобто зупиняє виконання до завершення обробки всіх promises.


  // 🔹 Вправа 3: Використання fetch
  // Що виведе цей код? Чому

  // async function getUser() {
  //   let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  //   let user = await response.json();
  //   console.log(user.name);
  // }

// getUser();
  //Код поверне user.name користувача: Leanne Graham, тому що fetch робить запрос на отримання даних з "https://jsonplaceholder.typicode.com/users/1"
  //та повертає promise з HTTP-відповіддю, в response.json() повертає результат відповіді у вигляді JSON, а await дозволяє виконувати 
  //код послідовно. 


  // 🔹 Вправа 4: Чому setTimeout не працює з await?
  // Що виведе цей код? Чому

//   async function delay() {
//     await setTimeout(() => console.log("⏳ Затримка"), 2000);
//     console.log("🏁 Кінець");
//   }

// delay();
// Код виведе спочатку 🏁 Кінець, а потім ⏳ Затримка, тому що setTimeout() не повертає promise, тому 
// спочатку виконується console.log("🏁 Кінець"), а потім коли проходять 2с виводиться console.log("⏳ Затримка").
