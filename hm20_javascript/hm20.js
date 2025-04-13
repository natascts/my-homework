//  1. Зробіть властивість email незаписуваною. Та продемонструйте результат, поясніть.

// let account = {};
// Object.defineProperty(account, "email", {
//     value: "dd@gmail.com",
//     writable: false
// })

// account.email = "yuhg@gmail.com";
// console.log(account.email);
// writable зі значенням "false" для властивості робить її доступною лише для читання, тобто перезаписувати її не можна.

//   2. Створіть властивість points, яка не відображається в for...in. Продемонструйте.

// let game = {};
// Object.defineProperty(game, "points", {
//     value: 1000,
//     enumerable: false
// })
// for (let key in game) {
//     console.log(key);
// }

//   3. Зробіть властивість level неможливою для видалення. Продемоснтруйте.

// let player = {};
// Object.defineProperty(player, "level", {
//     value: 3,
//     enumerable: true,
//     configurable: false
// });
// delete player.level;
// for (let key in player) {
//      console.log(key);
// }

//   4. Створіть об’єкт car з властивостями brand і year з різними дескрипторами.

// let car = {};
// Object.defineProperty(car, "brand", {
//     value: "Audi",
//     writable: false,
//     enumerable: true,
//     configurable: false
// });
// Object.defineProperty(car, "year", {
//     value: 1909,
//     writable: true,
//     enumerable: false,
//     configurable: true
// });

//   5. Виведіть дескриптор властивості brand у попередньому об’єкті.

// let descriptor = Object.getOwnPropertyDescriptor(car, "brand");
// console.log(descriptor);

//   6. Додайте властивість з десприктором configurable: false. Спробуйте змінити configurable: false на true у вже існуючій властивості.
//   Поясніть що станеться.
//   let obj = {};

// Object.defineProperty(car, "country", {
//     value: "Germany",
//     configurable: false
// });
// Object.defineProperty(car, "country", { configurable: true });
// let descrCountry = Object.getOwnPropertyDescriptor(car, "country");
// console.log(descrCountry); // Помилка, бо у властивостях із встановленим дескриптором configurable: false не можливо змінити значення
// дескрипторів.

//   7. Зробіть властивість isAdmin неперелічуваною та незмінною. Продемонструйте.

// let user = {};
// Object.defineProperty(user, "isAdmin", {
//     value: "yes",
//     enumerable: false,
//     configurable: false
// });

//   8. Створіть об'єкт, який не можна розширювати, і спробуйте додати властивість. Продемоснтвруйте.

// let user = {};
// Object.preventExtensions(user);
// Object.defineProperty(user, "isAdmin", { value: "yes" });
// console.log(user.isAdmin); // Помилка, бо не можна додавати властивості

//   9. Заморозьте об’єкт book і спробуйте змінити властивість. Продемонструйте.

// let book = { title: "JS Guide" };
// Object.freeze(book);
// book.title = "JS";
// console.log(book.title); // JS Guide

//   10. Запечатайте об’єкт options і спробуйте видалити та додати властивості. Продемонструйте.

let options = { debug: true };
Object.seal(options);
// Object.defineProperty(options, "level", { value: 3 }); // Помилка
delete options.debug; 
console.log(options.debug); // Властивість не видалена