// 1.	Створи cookie з ім’ям currency і значенням UAH, яке зберігається 5 днів.

// const date = new Date();
// date.setDate(date.getDate() + 5);
// document.cookie = "currency=UAH; expires=" + date.toUTCString();

// 2.	Створи cookie userType=premium, яке буде діяти тільки в межах шляху /account.

// document.cookie = "userType=premium; path=/account";

// 3.	Створи cookie accepted=true з обмеженням SameSite=Lax.

// document.cookie = "accepted=true; SameSite=Lax";

// 4.	Напиши функцію deleteCookie(name), яка повністю видаляє cookie з іменем name, незалежно від значення.

// function deleteCookie(name) {
//     document.cookie = "name=; max-age=0";
// }

// 5.	Створи cookie fontSize=large, яке живе 2 години, але доступне лише через HTTPS і на всьому сайті.

// document.cookie = "fontSize=large; max-age=7200; secure; SameSite=Strict";

// 6.	Напиши функцію hasCookie(name), яка повертає true, якщо cookie з таким іменем існує, і false — якщо ні.

// function hasCookie(name) {
//     let cookie = document.cookie.split('; ').find(row => row.startsWith(`${name}=`));
//     return cookie ? true : false;
// }

// 7.	Створи cookie auth=yes з максимально можливим терміном життя (наприклад, 10 років).

// document.cookie = "auth=yes; expires=Thu, 15 May 2035 10:00:00 UTC";

// 8.	Створи cookie visitCount, яке збільшує своє значення на +1 при кожному завантаженні сторінки.

// let count = 0;
// let cookie = document.cookie.split('; ').find(row => row.startsWith(`visitCount=`));
// if (cookie) {
//     count = Number(cookie.split('=')[1]);
//     count++;
// } else {
//     count = 1;
// }
// document.cookie = `visitCount=${count}`;

// 9.	Створи cookie popupClosed=true, яке зберігається до кінця сесії (тобто без expires або max-age).

// document.cookie = "popupClosed=true";

// 10.	Зроби скрипт, який зчитує всі cookies, розбиває їх на об’єкти {key: ..., value: ...} і виводить у консоль масив таких об’єктів.

// let cookies = document.cookie.split("; ").map(element => {
//     let arr = element.split("=")
//     return { key: arr[0], value: arr[1] };
// })
// console.log(cookies);
