//   Завдання 1: Властивість [[Prototype]] і __proto__
//   Створіть об'єкт animal з властивістю legs: 4.
//   Створіть об'єкт dog, встановіть йому прототип animal.
//   Виведіть dog.legs. Чому значення не задане безпосередньо в dog? Показати підтвердження за допомогою hasOwnProperty.

// let animal = {
//   legs: 4
// };
// let dog = {};
// dog.__proto__ = animal;
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("legs"));
//Значення не задане безпосередньо в dog, бо він успадкував її через прототип animal. hasOwnProperty показує false, тобто безпосередньо
//dog не має цієї властивовості.


//   Завдання 2: Запис і видалення властивостей
//   Використовуючи код з попереднього завдання, додайте dog.legs = 3.
//   Виведіть dog.legs і animal.legs. Чи змінилася властивість у animal?
//   Видаліть dog.legs, а потім знову виведіть dog.legs. Поясніть що відбулось.

// dog.legs = 3;
// console.log(dog.legs);
// console.log(animal.legs);
// delete dog.legs;
// console.log(dog.legs);
//Ні, властивість у animal не змінилась, тому що ми створили нову властивість legs в об'єкті dog, котра не впливає
//на прототип.
//Властивість legs у dog була видалена, тому JS витягнув значення властивості з прототипу.

//   Завдання 3: Пошук методів у прототипі
//   Створіть об'єкт parent з методом sayHello(), який виводить "Hello from parent".
//   Створіть об'єкт child, встановіть йому прототип parent.
//   Викличте child.sayHello().

// let parent = {
//     sayHello() {
//         console.log("Hello from parent");
//     }
// };
// let child = {
//     __proto__: parent
// };
// child.sayHello();

//   Завдання 4: this у наслідуваних методах
//   Створіть user з name: "Alice" і методом sayName(), який виводить this.name.
//   Створіть admin, встановіть йому прототип user і змініть name на "Bob".
//   Викличте admin.sayName(). Покажіть результати, та поясніть.

// let user = {
//     name: "Alice",
//     sayName() {
//         console.log(this.name)
//     }
// };
// let admin = {
//     __proto__: user,
//     name: "Bob"
// };
// admin.sayName();
//Виводить на екран ім'я "Bob", бо this не є фіксованим та не залежить від того де був оголошений, а від того який об'єкт його
//викликав, тому він показує значення об'єкта admin.

//   Завдання 5: for..in і власні/успадковані властивості
//   Використовуючи код з попереднього завдання, переберіть admin у for..in.
//   Використайте Object.keys(admin). Чому результати відрізняються?

// for (let key in admin){
//     console.log(key);
// }
// console.log(Object.keys(admin));
//Цикл for...in проходиться як по власним властивостям, так і по успадкованим, тому виводиться name та sayName, в той час як
//Object.keys(admin) повертає тільки власні, тобто name.

// Базовий синтксис класів
// Завдання 1: Створення класу
// Створіть клас Person з конструктором, який приймає name і age.
// Додайте метод sayHello(), який виводить Hello, my name is {name}.
// Створіть об'єкт user на основі Person і викличте sayHello().

// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// let user = new Person("Mary");
// user.sayHello();

// Завдання 2: Гетери та сетери
// Додайте у клас Person гетер info, який повертає рядок "{name} is {age} years old".
// Додайте сетер age, який перевіряє, що вік не може бути від’ємним (якщо так, вивести помилку).
// Створіть об’єкт та протестуйте ці методи.

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info() {
        return `${this.name} is ${this._age} years old`;
    }
    set age(value) {
        if (value < 0) {
            console.log("Помилка! Вік не може бути від'ємним!");
            return;
        }
        this._age = value;
    }
}
let user = new Person("Mary", 5);
console.log(user.info);
