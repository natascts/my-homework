//****************************************************Вправи на навігацію по DOM

//   1. Перевірка наявності дочірніх елементів (children)

//   Дано HTML-код:

//   <div id="container">
//       <p>Це параграф</p>
//   </div>
//   Напиши код, який:

//   Перевірить, чи є у #container дочірні елементи.
//   Виведе "Контейнер порожній", якщо дочірніх елементів немає.

// let cont = document.getElementById("container");
// if (cont.children.length > 0) {
//     console.log(cont.children);
// } else console.log("Контейнер порожній");

//   2. Отримання останнього елемента списку (lastElementChild, textContent)
//   Дано HTML-код:

//   <ul id="menu">
//       <li>Один</li>
//       <li>Два</li>
//       <li>Три</li>
//   </ul>
//   Напиши код, який отримає останній елемент списку та виведе його текст.

// let lastElement = document.getElementById("menu").lastElementChild;
// console.log(lastElement.textContent);

//   3. Отримання батьківського елемента (parentElement)
//   Дано HTML-код:

//   <section>
//       <div>
//           <p id="text">Цей текст всередині div.</p>
//       </div>
//   </section>
//   Напиши код, який знайде батьківський <div> для параграфа та виведе його в консоль.

    // let parentText = document.getElementById("text").parentElement;
    // let parentEl = parentText.parentElement;
    // console.log(parentEl);

//   4. Знаходження всіх li в ul (querySelectorAll(використати селектори), textContent)
//   Дано HTML-код:

//   <ul id="items">
//       <li>Елемент 1</li>
//       <li>Елемент 2</li>
//       <li>Елемент 3</li>
//   </ul>
//   Напиши код, який отримає всі <li> у списку #items і виведе їхній текст у консоль.

    // let allLi = document.querySelectorAll("#items li");
    // allLi.forEach((item) => console.log(item.textContent ));

//   5. Отримання найближчого section для кнопки
//   Дано HTML-код:

//   <section>
//       <div>
//           <button id="btn">Натисни мене</button>
//       </div>
//   </section>
//   Напиши код, який знайде найближчий <section> для кнопки.

// let closestSection = document.getElementById("btn").closest("section");
// console.log(closestSection);
