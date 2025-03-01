// 1. Перевести тип і в консоль вивести результат через typeof:
// - стрічку в булевий
// - число в булевий
// - стрічку в число
// - нул в булевий
// - андефайнед в булевий

let n = 'Hello'
let n1 = Boolean(n)
console.log(n1, typeof n1);

let n2 = 345
let n3 = !!n2
console.log(n3, typeof n1);

let n4 = '678'
let n5 = +n4
console.log(n5, typeof n5);

let n6 = 0
let n7 = Boolean(n6)
console.log(n7, typeof n7);

let n8 = undefined
let n9 = !!n8
console.log(n9, typeof n9);

// 2. Написати confirm який відносно якого будете показувати в консолі:
//    - You confirmed popup - коли конфірм успішний
//    - Confirm Error - коли не успішний

const isPopup = confirm('Do you confirm?');
if (isPopup === true) {
    console.log('You confirmed popup');
}
else {
    console.log('Confirm Error');
}

// 3. Перепишіть попередній приклад використовуючи тернарний оператор

isPopup === true
    ? console.log('You confirmed popup')
    : console.log('Confirm Error')

// 4. Через prompt взяти вік та виконати наступні умови в if else:
// - Якщо вік більше 1 і менше 12 вивести: you are child
// - Якщо вік більше 12 і менше 18 вивести: you are teenager
// - Якщо вік більше 18 і менше 60 вивести: you are adult person
// - Якщо вік більше 60 вивести: you are so old

const isValidAge = Number(prompt('Enter your age:'));
if (isValidAge > 1 && isValidAge < 12) {
    alert('You are child');
} else if (isValidAge > 12 && isValidAge < 18) {
    alert('You are teenager');
} else if (isValidAge > 18 && isValidAge < 60) {
    alert('You are adult person');
} else if (isValidAge > 60) {
    alert('You are so old');
}

// 5. Через prompt взяти імя та виконати наступні умови в switch case:
// - Якщо ім'я є 'Admin' вивести: I have full access
// - Якщо ім'я є 'Student' вивести: Im student
// - Якщо ім'я є 'Teacher' вивести: Im teacher
// - Якщо ім'я є 'Young' вивести: I young and ready to party
// - Всі інші імена вивести: You entered own name

const checkStatus = prompt('Enter your status:');
switch (checkStatus) {
    case 'Admin': console.log('I have full access');
        break
    case 'Student': console.log('Im student');
        break
    case 'Teacher': console.log('Im teacher');
        break
    case 'Young': console.log('I young and ready to party');
        break
    default: console.log('You entered own name');
        break
}

// 6. Самостійно приведіть приклади використання <, >, >=, <=, ==, ===, !=, !==, ||, &&

if (2 < 5) {
    console.log('2 менше 5');
}

if (5 > 2) {
    console.log('5 більше 2');
}

if (3 >= 3) {
    console.log('3 більше або дорівнює 3');
}

if (2 <= 3) {
    console.log('2 менше або дорівнює 3');
}

if (1 == '1') {
    console.log('1 дорівнює 1 (значення однакові, але їх типи даних можуть бути різними)');
}

if (1 === 1) {
    console.log('a дорівнює b (значення та тип даних однакові)');
}

if (2 != 5) {
    console.log('a не дорівнює b (значення різні)');
}

if (1 !== '1') {
    console.log('a не дорівнює b (значення або типи даних різні))');
}

if (1 > 6 || 8 > 6) {
    console.log('1 більше 6 або 8 більше 6');
}

if (3 > 2 && 2 < 5) {
    console.log('3 більше 2 і 2 менше 5');
}






