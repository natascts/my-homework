//**********************************************Маніпуляції з DOM

// 1. Отримання значення атрибута
// Дано HTML:

// <a href="https://example.com" id="link">Перейти на сайт</a>
// <button id="getHref">Отримати атрибут href</button>
// Напишіть код, щоб при натисканні на кнопку вивести в консоль значення атрибута href.

// document.getElementById("getHref").addEventListener('click', () => {
//     let attr = document.getElementById("link").getAttribute("href");
//     console.log(attr);
// });

// 2. Заміна тексту на кліку
// Дано HTML:

// <p id="paragraph">Старий текст</p>
// <button id="replaceText">Заміна тексту</button>
// Напишіть код, щоб при натисканні на кнопку текст у параграфі змінювався на "Нове значення!".

// document.getElementById("replaceText").addEventListener('click', () => {
//     document.getElementById("paragraph").textContent = "Нове значення!";
// })

// 3. Зміна фону елемента
// Дано HTML:

// <div id="box" style="width: 100px; height: 100px;"></div>
// <button id="changeBackground">Змінити фон</button>
// Напишіть код, щоб при натисканні на кнопку фон елемента змінився на жовтий.

// document.getElementById("changeBackground").addEventListener('click', () => {
//     document.getElementById("box").style.backgroundColor = "yellow";
// })

// 4. Додавання нового класу
// Дано HTML:

// <div id="box" class="old-class"></div>
// <button id="addClass">Додати новий клас</button>
// Напишіть код, щоб при натисканні на кнопку додавати новий клас "new-class" до елемента.

// document.getElementById("addClass").addEventListener('click', () => {
//     document.getElementById("box").classList.add("new-class");
// })

// 5. Видалення всіх елементів списку
// Дано HTML:

// <ul id="list">
//   <li>Елемент 1</li>
//   <li>Елемент 2</li>
//   <li>Елемент 3</li>
// </ul>
// <button id="clearList">Очистити список</button>
// Напишіть код, щоб при натисканні на кнопку видалити всі елементи списку.

// document.getElementById("clearList").addEventListener('click', () => {
//     document.getElementById("list").remove("li");
// })

// 6. Додавання події на елемент
// Дано HTML:

// <button id="alertBtn">Натисни мене</button>
// Напишіть код, щоб при натисканні на кнопку з'являлося вікно повідомлення з текстом "Кнопка була натиснута!".

// document.getElementById("alertBtn").addEventListener('click', () => {
//     alert("Кнопка була натиснута!");
// })

//   7. Додавання списку елементів за введеним текстом
// Дано HTML:

// <input type="text" id="itemInput">
// <button id="addItem">Додати</button>
// <ul id="list"></ul>
// Напишіть код, щоб при введенні тексту в поле і натисканні кнопки додавати елемент у список.

// document.getElementById("addItem").addEventListener('click', () => {
//     document.getElementById("itemInput");
//     let item = document.createElement("li");
//     item.textContent = itemInput.value;
//     document.getElementById("list").appendChild(item);
// })
