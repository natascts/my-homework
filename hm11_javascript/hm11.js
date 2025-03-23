  //   Вправа 1: Базове наслідування
  //   Доповни код так, щоб клас Dog наслідував Animal і міг викликати метод speak(), додаючи " Woof!" до повідомлення.

//     class Animal {
//       constructor(name) {
//         this.name = name;
//       }

//       speak() {
//         return `${this.name} makes a noise.`;
//       }
//     }

// class Dog extends Animal {
//     speak() {
//         return super.speak() + " Woof!";
//     }
// };

//     const dog = new Dog("Buddy");
//     console.log(dog.speak()); // Очікуваний вивід: "Buddy makes a noise. Woof!"

  //   Вправа 2: Перевизначення конструктора
  //   Доповни клас Cat, щоб він наслідував Animal і додавав color у свій конструктор.

    // class Animal {
    //   constructor(name) {
    //     this.name = name;
    //   }
    // }

    // class Cat extends Animal {
    //     constructor(name, color) {
    //         super(name);
    //         this.color = color;
    //   }
    // }

    // const cat = new Cat("Misty", "black");
    // console.log(cat.name); // "Misty"
    // console.log(cat.color); // "black"

  //   Вправа 3: Використання геттера
  //   Доповни клас Bird, щоб він наслідував Animal і додавав геттер description, який повертатиме "Sparrow is a small bird."

    // class Animal {
    //   constructor(name, size) {
    //     this.name = name;
    //     this.size = size;
    //   }
    // }

    // class Bird extends Animal {
    //     get description() {
    //         return `${this.name} is a ${this.size} bird.`;
    //     }
    // }

    // const bird = new Bird("Sparrow", "small");
    // console.log(bird.description); // "Sparrow is a small bird."

  // Вправа 4: Статичний метод у класі-нащадку
  // Доповни клас Car, щоб він наслідував Vehicle і додавав статичний метод info(), який повертає "Cars are fast!"

//   class Vehicle {
//     constructor(type) {
//       this.type = type;
//     }
//   }

// class Car extends Vehicle {
//     static info() {
//         return "Cars are fast!";
//       }
//   }

//   console.log(Car.info()); // "Cars are fast!"


//   // Завдання 5: Використання super у статичному методі
//   // Доповни клас Car, щоб його статичний метод info() використовував статичний метод Vehicle.info().

//   class Vehicle {
//     static info() {
//       return "Vehicles help us move.";
//     }
//   }

//   class Car extends Vehicle {
//       static info() {
//           return super.info() + " Cars are fast!";
//     }
//   }

//   console.log(Car.info()); // "Vehicles help us move. Cars are fast!"


  // Завдання 6: Обмеження кількості екземплярів
  // Створи клас Database із статичним методом getInstance(), який дозволяє створювати тільки один екземпляр класу.

// class Database {
//     constructor(data) {
//         this.data = data;
//     }
//       static getInstance() {
//           if (this.data !== undefined) {
//               let dbase = 0;
//               return this.data = dbase;
//           } else return this.data;
//       }
//   }

//   const db1 = Database.getInstance();
//   const db2 = Database.getInstance();

//   console.log(db1 === db2); // true (повинно повертати той самий об'єкт)


  //ПРИВАТНІ/ЗАХИЩЕНІ ВЛАСТИВОСТІ/МЕТОДИ
  // Завдання 7: Приватні властивості
  // Створи клас BankAccount із приватною властивістю #balance. Реалізуй метод deposit(amount), який збільшує баланс, і метод getBalance(), який повертає поточний баланс.

//   class BankAccount {
//       // Додай приватну властивість та методи
//       #balance = 0;
//       deposit(amount) {
//           this.#balance += amount;
//       }
//       getBalance() {
//           return this.#balance;
//       }
//   }

//   const account = new BankAccount();
//     account.deposit(100);
//   console.log(account.getBalance()); // 100
// //   console.log(account.#balance); // Помилка (має бути приватним)


  //   Завдання 8: Захищений метод у класі-нащадку
  // Створи клас Animal, де _makeSound() є захищеним методом. Клас Dog повинен перевизначати його, щоб повертати "Bark!".

//   class Animal {
//      _makeSound(){}
//   }

//   class Dog extends Animal {
//       _makeSound() {
//           return "Bark!";
//     }
//   }

//   const dog = new Dog();
//   console.log(dog._makeSound()); // "Bark!"

  //INSTANCEOF
  //   Завдання 9: Перевірка масиву екземплярів
  // Умова
  // Створи класи Shape, Circle, Rectangle, які успадковуються від Shape.
//   // Створи масив фігур shapes, що містить екземпляри Circle, Rectangle та інші об'єкти.
// // Визнач, скільки у масиві кіл (Circle).
// class Shape{
      
// }
// class Circle extends Shape{
      
// }
// class Rectangle extends Shape{
      
// }
// let shapes = [
//   new Circle(),
//   new Rectangle(),
//   "oval",
//   {},
//   null,
//   undefined
// ]
// let numOfCircleInside = shapes.filter(shape => shape instanceof Circle).length;
// console.log(numOfCircleInside);
