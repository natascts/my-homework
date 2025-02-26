// 1. Пропишіть приклад з використанням всіх 8 типів даних

let typeData = {
    number: 565,
    string: "Yellow",
    boolean: true,
    symbol: Symbol("id"),
    bigInt: 87655645342342,
    null: null,
    undefined: undefined,
    object: {a1: "665"}
}
console.log(typeData);

// 2. Пропишіть 10 довільних прикладів із використанням арифметичних операцій: +, -, /, *

let a = 5
let b = 12
let c1 = a + b
console.log(c1);
let c2 = b - a
console.log(c2);
let c3 = b * a
console.log(c3);
let c4 = b / a
console.log(c4);
let c5 = (b - a) * 2
console.log(c5);
let c6 = (b + a) / (b - a)
console.log(c6);
let c7 = ((b * a) + 5) / 6 
console.log(c7);
let c8 = a / b + b / a
console.log(c8);
let c9 = (a + 3) / (b - 5)
console.log(c9);
let c10 = 5 * a - 2 / b
console.log(c10);

// 3. Приведіть 6 прикладів із використанням приведення типів даних через Number, Boolean, String

let n1 = '567'
let n2 = Number(n1)
console.log(n1, typeof n2);
let n3 = true
let n4 = Number(n3)
console.log(n4, typeof n4);
let n5 = 56
let n6 = Boolean(n5)
console.log(n6, typeof n6);
let n7 = 0
let n8 = Boolean(n7)
console.log(n8, typeof n8);
let n9 = true
let n10 = String(n9)
console.log(n10, typeof n10);
let n11 = 7879
let n12 = String(n11)
console.log(n12, typeof n12);

// 4. Приведіть 6 прикладів із використанням арифметичних операторів

console.log(+false);
console.log(!true);
console.log(!!879);

d = '768'
d = +d
console.log(d, typeof d);

d1 = 'yellow' + 56 + false
console.log(d1);

d2 = true
d2++
console.log(d2);


