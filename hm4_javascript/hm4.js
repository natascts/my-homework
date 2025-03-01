// 1. Перевести тип і в консоль вивести результат через typeof:
// - стрічку в булевий
// - число в булевий
// - стрічку в число
// - нул в булевий
// - андефайнед в булевий

let n = 'Hello';
let n1 = Boolean(n);
console.log(n1, typeof n1);

let n2 = 666;
let n3 = Boolean(n2);
console.log(n3, typeof n3);

let n4 = '3';
let n5 = Number(n4);
console.log(n5, typeof n5);

let n6 = 0;
let n7 = Boolean(n6);
console.log(n7, typeof n7);

let n8 = undefined;
let n9 = Boolean(n8);
console.log(n9, typeof n9);

// 2. Створити об'єкт* user із 3 рівнями вкладеностей (на кожному рівні не менше 3 поля)
// 2.1  Вивести на 2 рівні 1 поле, та на 3 рівні 2 поля в консоль

let user = {
    a: {
        a1: 'child',
        a2: 'adult',
        a3: 'old',
        b: {
            b1: 'phone',
            b2: 'computer',
            b3: 'laptop',
            c: {
                c1: true,
                c2: false,
                c3: 'none'
            }
        }
    }
};
console.log(user.a.b.b1, user.a.b.c.c1, user.a.b.c.c2);

// 3. Створити масив* list із 3 рівнями вкладеності (на кожному рівні не менше 3 елементів)
// 3.1 Вивести на 2 рівні 1 елемент, та на 3 рівні 2 елемента в консоль

let list = [
    55,
    65,
    38,
    [true, false, 77, [65, 'true', undefined]]];
console.log(list[3][0], list[3][3][0], list[3][3][2]);

// 4. Напишіть цикл for, який виводить всі парні числа від 2 до 20.

for (let i = 2; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 5. Створіть масив зі списком вашого улюбленого фрукту, вашого улюбленого кольору, і вашого віку.
//    Виведіть цей масив на консоль і визначте його тип даних.

let aboutMe = ['orange', 'black', 23];
console.log(aboutMe, typeof aboutMe)

// 6. Напишіть 2 prompt які приймають два числа. виведіть більше з них. Використайте конструкцію if-else.

let a = Number(prompt("Введіть перше число"));
let b = Number(prompt("Введіть друге число"));
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

// 7. Напишіть цикл for який виводить всі непарні числа від 1 до 15.

for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 8. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

let arr = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
for (let i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] === 'number' && arr[i] % 2 === 0) {
        console.log(i, arr[i]);
    }
}

// 9. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи

for (let i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] === 'number' && arr[i] % 2 !== 0) {
        console.log(i, arr[i]);
    }
}

// 10. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.

let arrSum = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let resultSum = arrSum.reduce((accumulator, item) => accumulator + item, 0);
console.log(resultSum);

// 11. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

let arrMult = [1, 2, 4, 2, 3, 5, 6, 7, 1];
let resultMult = arrMult.reduce((accumulator, item) => accumulator * item, 1);
console.log(resultMult);
arrMult.forEach(item => console.log(item));