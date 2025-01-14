const prompt = require('prompt-sync')();

function compareNumbers(num1, nuum2) {
    if (num1 > num2) {
        return 1;

    } else if (num1 < num2) {
        return -1;

    } else { 
        return 0;
    }
}

let num1 = prompt('введите первое число');
let num2 = prompt('введите 2е число');
const result = compareNumbers(num1, num2);
console.log(`результат сравнение: ${result}`);
