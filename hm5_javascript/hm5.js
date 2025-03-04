// 1) Створіть порожній об’єкт employee.

let employee = {};

// 	- Додайте властивість name зі значенням "Ivan".

employee.name = "Ivan";

// 	- Додайте властивість position зі значенням "office manager"

employee.position = "office manager";

// 	- Змініть значення name на "Petro"

employee.name = "Petro";

// 	- Видаліть властивість name з об’єкта

delete employee.name;

// 	- Перевірте чи є властивість isFired в об'єкта employee, і якщо такої властивості немає 	додайте її зі значенням false.

if (!("isFired" in employee)) {
    employee.isFired = false;
}

// 	- Дайте можливість користувачу ввести назву властивості самостійно, додайте її в об'єкт employee, а потім дайте можливість користувачу ввести значення для цієї властивості (prompt)

let key = prompt("Введіть назву властивості:");
let value = prompt("Введіть значення властивості:");
employee[key] = value;
console.log(employee);

// 2) Напишіть функцію countProperties(obj) яка повертає кількість властивостей об'єкта.  (for...in)

function countProperties(emp) {
    let count = 0;
    for(let key in emp) {
        count++;
    }
    return count;
}
console.log(countProperties(employee));

// 3) Напишіть функцію isEmpty(obj) , яка перевіряє, чи є в об’єкта властивості та порветаэ true або false відповідно.  (for...in, буде супер, якщо використаєте Object.keys)
function isEmpty(emp) {
    for (let key in emp) {
        return false;
    }
    return true;
}
console.log(isEmpty(employee));

// 4)
let salaries1 = {
  John: 100,
  Ann: 160,
  Pete: 130
}; 
// Створити функцію getSum(obj) яка підрахує та поверне суму зарплат об'єкта salaries1 (for...in)
function getSum(sal1) {
    let sum = 0;
    for (let key in sal1) {
        sum += sal1[key];
    }
    return sum;
}
console.log(getSum(salaries1))

// 5)
let salaries2 = {
  John: 100,
  Bill: false,
  Ann: 160,
  Lily: null,
  Pete: 13
};
// Створити функцію multiplyNumeric(obj, factor), яка перемножить усі ЧИСЛОВІ значення об’єкта salaries2 на число factor (for...in, typeof)

function multiplyNumeric(sal2, factor) {
    for (let key in sal2) {
        if (typeof sal2[key] === 'number')
            sal2[key] *= factor;
    }
    return sal2;
}
console.log(multiplyNumeric(salaries2, 2));