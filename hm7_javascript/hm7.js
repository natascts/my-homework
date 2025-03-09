// ЗАГАЛЬНІ ПРАВИЛА:
// 1) Не модифікувати вхідні параметри!!!!

// 1.Напишіть функцію, яка приймає 2 рядки та порівнює їх
// довжину. Функція повертає 1, якщо в першому рядку
// більше символів, ніж у другому; -1 – якщо у другому більше символів, ніж у першому; 0 – якщо рядки однакової
// довжини. (length)

// let a = prompt("Введіть перший рядок:");
// let b = prompt("Введіть другий рядок:");
// function stringComparison(a, b) {
//     if (a.length > b.length) {
//         return 1;
//     } else if (a.length < b.length) {
//         return -1;
//     } else if (a.length === b.length) {
//         return 0;
//     }
// }
// console.log(stringComparison(a, b));

// 2. Напишіть функцію, яка переводить у верхній регістр перший символ переданого рядка.(toUpperCase, slice)

// let a = prompt("Введіть рядок:");
// function firstLetterUpCase(a) {
//     let aUpCase = a[0].toUpperCase() + a.slice(1);
//     return aUpCase;
// }
// console.log(firstLetterUpCase(a));

// 3. Напишіть функцію, яка підраховує кількість голосних
// літер у переданому рядку. (створити рядок з голосними літерами і шукати в ньому, includes)

// let str = 'Голосні літери';
// let vowels = ["а", "о", "у", "е", "и", "і"];
// function sumOfVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i]) === true) {
//             count++;
//         }
//     } return count;
// }
// console.log(sumOfVowels(str));

// 4. Напишіть функцію для перевірки спаму в переданому
// рядку. Функція повертає true, якщо рядок містить спам.
// Спамом вважати наступні слова: 100% безкоштовно,
// збільшення продажів, тільки сьогодні, не видаляйте, ххх.
// Функція має бути нечутливою до регістру. (створити масив рідків зі спамом, toLowerCase, some, includes)

// let str = prompt("Введіть рядок:");
// let spam = ["100% безкоштовно", "збільшення продажів", "тільки сьогодні", "не видаляйте", "ххх"];
// function checkSpam(str, spam) {
//     let isSpam = spam.some(strSpam => str.toLowerCase().includes(strSpam));
//     return isSpam;
// }
// console.log(checkSpam(str, spam));

// 5. Напишіть функцію скорочення рядка. Функція приймає
// рядок та його максимальну довжину. Якщо довжина рядка більша, ніж максимальна, необхідно відкинути зайві
// символи, додавши замість них трикрапку.
// Наприклад: truncate("Hello, world!", 8) має повернути "Hello...".(length, slice)

// let str = prompt("Введіть рядок:");
// function stringShortening(str, lengthMax) {
//     if (str.length > lengthMax) {
//         return str.slice(0, lengthMax) + "...";
//     } else return str;
// }
// console.log(stringShortening(str, 5));

// 6. Напишіть функцію, яка перевіряє, чи є переданий рядок
// паліндромом. (split,reverse,join)

// let str = prompt("Введіть рядок:");
// function isStringPalindrome(str) {
//     let strSplit = str.split('');
//     if (strSplit.join() === strSplit.reverse().join()) {
//         return "Переданий рядок є паліндромом";
//     } else return "Переданий рядок не є паліндромом";
// }
// console.log(isStringPalindrome(str));

// 7. Напишіть функцію, яка підраховує кількість слів у реченні. (trim,split, length)

// let str = prompt("Введіть рядок:");
// function countsNumbersOfWords(str) {
//     strArr = str.trim().split(" ");
//     return strArr.length;
// }
// console.log(countsNumbersOfWords(str));

// 8. Напишіть функцію, яка повертає найдовше слово з речення.(split,reduce)

// let str = prompt("Введіть рядок:");
// function longestWord(str) {
//     str = str.split(" ");
//     return str.reduce((longest, strWord) => {
//         if (longest.length > strWord.length) {
//             return longest;
//         } else return strWord;
//     })
// }
// console.log(longestWord(str));

// 9. Напишіть функцію, яка підраховує середню довжину
// слова у реченні.(split,reduce)

// let str = prompt("Введіть рядок:");
// function calcAverageLengthWord(str) {
//     words = str.split(" ");
//     sum = words.reduce((sum, word) => sum += word.length, 0)
//     let averageLength = sum / words.length;
//     return averageLength;
// }
// console.log(calcAverageLengthWord(str));

// 10. Напишіть функцію, яка приймає рядок і символ і виводить
// індекси, за якими знаходиться цей символ у рядку. Також
// виведіть, скільки разів зустрічається цей символ у рядку(psuh,length)

// let str = prompt("Введіть рядок:");
// let symbol = prompt("Введіть символ:");
// function symbolIsInString(str, symbol) {
//     let strArr = [];
//     for (i = 0; i < str.length; i++) {
//         if (str[i] === symbol) {
//             strArr.push(i);
//         }
//     }
//     return strArr;
// }
// console.log(symbolIsInString(str, symbol));
