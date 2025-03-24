
//************ 🔹 Події миші (click, dblclick, mouseover, mouseout, contextmenu)

//   1. Додайте обробник dblclick, який змінюватиме текст кнопки після подвійного кліку.

// let btn = document.getElementById("btn");
// btn.addEventListener('dblclick', () => {
// btn.textContent = "Новий текст"
// })

//   2. Додайте обробник mouseout, який змінюватиме фон кнопки в червоний після виходу миші.

// let btn = document.getElementById("btn");
// btn.addEventListener('mouseout', () => {
//     btn.style.backgroundColor = "red";
// })

//****************   🔹 Події клавіатури (keydown, keyup, keypress)
//   3. Виведіть у консоль символ, який був введений (keypress).

// let input = document.getElementById("input");
// input.addEventListener('keypress', function (event) {
//     console.log(input);
// })


//   4. Реалізуйте перевірку, якщо натиснута клавіша "Enter", виведіть повідомлення "Натиснуто Enter". (event.key)

// document.getElementById("input").addEventListener('keypress', function (event) {
//     if (event.key === "Enter") {
//         console.log("Натиснуто Enter");
//     }
// })

// *****************  🔹 Події форми (input, change, submit, focus, blur)
//   5. Перевіряйте введене значення у select, і якщо вибрано "option2", виведіть якесь повідомлення. (change, value)
//   ДАНО:
//   <select id="options" name="options">
//         <option value="option1">Вариант 1</option>
//         <option value="option2">Вариант 2</option>
//         <option value="option3">Вариант 3</option>
//     </select>

// document.getElementById("options").addEventListener('change', function () {
//     if (this.value === "option2") {
//         console.log("Ви обрали Варіант 2");
//     }
// })


//   6. Додайте обробник blur, який перевірятиме, чи поле вводу не порожнє. (value)
//   ДАНО:
//   <input type="text" />;

// document.querySelector("input").addEventListener('blur', function (event) {
//     if (this.value.length > 0) {
//         console.log("Поле вводу не порожнє!");
//     } else console.log("Поле вводу порожнє!")
// })

// ********************8  🔹 Події документа та вікна (load, scroll, resize, beforeunload, copy)
//   7. Відстежуйте прокрутку сторінки і виводьте поточну позицію window.scrollY. (window,scroll)

// window.addEventListener('scroll', function () {
//     console.log(window.scrollY);
// })


//   8. Виведіть повідомлення при копіюванні тексту (document, copy).

// document.addEventListener('copy', function () {
//     console.log("Текст скопійовано!")
// })

// **********************  🔹 Видалення обробника події
// 9. Є кнопка, при натисканні на яку з’являється повідомлення "Кнопка натиснута!".
// Потрібно видалити цей обробник після першого кліку, щоб повідомлення більше не з’являлося.

// let btn = document.getElementById("btn");
// function showMessage (){
//     console.log("Кнопка натиснута!");
// }

// btn.addEventListener('click', showMessage);
// btn.removeEventListener('click', showMessage);

// ****************************************об'єкт події (event)
// 🔹 Вправа 10. Визначення елемента, на якому сталася подія
// 📌 Завдання:
// Додайте обробник події для всього документа та виведіть у консоль елемент, на якому сталася подія.

// document.addEventListener('click', function (event) {
//     console.log(event.target);
// })

// 🔹 Вправа 11. Визначення натиснутої клавіші
// 📌 Завдання:
// Напишіть код, який буде виводити в консоль символ клавіші при натисканні.

// document.addEventListener('keydown', function(event) {
//     console.log(event.key); // Що буде виведено?
// });
// Будуть виведені натиснуті кнопки с клавіатури.

// ********************************Вправи на тему "Спливання та делегування подій в JavaScript"

// Вправа 12: Зупинка спливання
// Завдання:
// Є код, модифікуй код так, щоб при натисканні на кнопку спрацьовував тільки її обробник, але не обробник div.
// ДАНО:
// <div id="parent" style="padding: 20px; background: lightblue;">
//   <button id="child">Натисни мене</button>
// </div>

//   document.getElementById("parent").addEventListener("click", function () {
//     alert("Клік на батьківському елементі!");
//   });

//   document.getElementById("child").addEventListener("click", function () {
//     event.stopPropagation();
//     alert("Клік на кнопці!");
//   });


// 📌 Що зміниться?
// Тепер "Клік на батьківському елементі!" не з’явиться, тому що подія не "спливатиме" вгору.

// Вправа 13: Додавання нового елемента в делеговану структуру
// Завдання:
// Є код, модифікуй так, щоб при натисканні кнопки додавався новий пункт списку, і він теж реагував на кліки.
//   ДАНО:
// <ul id="menu">
//   <li>Елемент 1</li>
//   <li>Елемент 2</li>
//   <li>Елемент 3</li>
// </ul>

//     document.getElementById("btn").addEventListener('click', function(){
//     let newItem = document.createElement("li");
//     newItem.textContent = "Елемент 4";
//     document.getElementById("menu").appendChild(newItem);
//     })
//      document.getElementById("menu").addEventListener("click", function (event) {
//     if (event.target.tagName === "LI") {
//       alert("Ви натиснули: " + event.target.textContent);
//     }
//   });


//********************* Вправи на тему "Стандартна поведінка подій і preventDefault в JavaScript"

// Вправа 14: Скасування відправки форми
// Завдання:
// Форма за замовчуванням відправляється та перезавантажує сторінку. Забороніть її відправку та виведіть "Форма не була відправлена!".

// <form id="testForm">
//   <input type="text" placeholder="Ваше ім'я">
//   <button type="submit">Відправити</button>
// </form>

//   document.getElementById("testForm").addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("Форма не була відправлена!") 
//   });


// Вправа 15: Дозволити введення тільки цифр
// Завдання:
// Поле вводу має приймати тільки цифри. Якщо користувач натискає будь-яку іншу клавішу, введення не повинно відбуватися.

// <input type="text" id="onlyNumbers" placeholder="Введіть число">

//   document.getElementById("onlyNumbers").addEventListener("keypress", function (event) {
//       if (!/[0-9]/.test(event.key)) {
//           event.preventDefault();
//     }
//   });