//***************************ГЕТЕРИ І СЕТЕРИ ВЛАСИТВОСТЕЙ
    
// Вправа 1. Аксесор із журналом
// Створи об'єкт logger, який:
// має приховану змінну _message,
// має гетер message, який повертає _message,
// має сетер message, який перед встановленням нового значення виводить у консоль:
// "Новий запис: <значення>".

// let logger = {
//     _message: "Hello",
//     get message() {
//         return `${this._message}`;
//     },
//     set message(value) {
//         console.log(`Новий запис: ${value}`);
//         this._message = value;
//     }
// };
// logger.message = "Hi!";
// console.log(logger.message);

// Вправа 2. Дескриптор аксесора (тільки читання)
// Створи об'єкт clock, у якого:
// є властивість time, яка доступна лише для читання (тобто має тільки гетер),
// повертає поточний час у форматі "HH:MM" (з використанням Date),
// не з'являється при переборі for...in.

let clock = {
    currentTime: new Date(),
}
Object.defineProperty(clock, "time", {
    get: function() {
        return `${this.currentTime.getHours()}:${this.currentTime.getMinutes()}`;
    },
    enumerable: false
});
console.log(clock.time);

// //*****************************************ТИП ДАНИХ SYMBOL
// Вправа 3: Створення символів
// Питання:
// Що буде виведено в консоль? Поясніть чому.

// let sym1 = Symbol("id");
// let sym2 = Symbol("id");

// console.log(sym1 === sym2); // False, бо кожен символ має унікальний ідентифікатор, тобто навіть з однаковими назвами, вони все одно різні;

// Вправа 4: Символ як ключ
// Питання:
// Що буде виведено в консоль? Поясніть чому.

// let id = Symbol("id");
// let user = {
// name: "Alice",
// [id]: 123
// };

// console.log(user[id]); //Буде виведено: "123", бо тут ми виводимо дані, використовуючи символ як ключ. Це потрібно, щоб випадково не перезаписати
//дані, бо доступ до таких властивостей є складнішим, тому що вони є прихованими.


// Вправа 5: Прихованість символів
// Питання:
// Що виведе цей цикл? Поясніть чому


// let secret = Symbol("secret");
// let person = {
// name: "Bob",
// age: 25,
// [secret]: "hidden info"
// };

// for (let key in person) {
// console.log(key);
// } // Буде виведено name та age, а secret - ні, бо властивості-символи не перераховуються в звичайному циклі for...in, бо вони є прихованими.


// Вправа 6: Symbol.for та Symbol.keyFor
// Питання:
// Що буде виведено в консоль? Поясніть чому.


// let globalSymbol = Symbol.for("shared");
// let sameSymbol = Symbol.for("shared");

// console.log(globalSymbol === sameSymbol); //True, бо за допомогою методу Symbol.for створюється глобальні символи, які потрібні коли нам потрібен доступ до однієї й тієї ж властивості-символу.
// console.log(Symbol.keyFor(sameSymbol)); //Повертає значення символу, тобто виведе: "shared".


// Вправа 7: Порівняння символу і рядка
// Питання:
// Що виведе код? Поясніть чому.


// let sym = Symbol("id");
// console.log(sym == "id"); //False, бо Symbol не перетворюється на рядок автоматично при порівнянні, тому sym - Symbol, а "id" - рядок.


// Вправа 8: Виведення символу
// Питання:
// Що буде виведено? Поясніть чому.


// let sym = Symbol("test");
// console.log(String(sym)); //Буде виведено: Symbol(test), бо метод String() претворює символ на рядок.