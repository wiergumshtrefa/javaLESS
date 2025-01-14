const prompt = require('prompt-sync')();

function fuctorial(num) {
    if (num < 0) {
        return
    }

    if (num == 0) {
        return 1;
    }

    return num * fuctorial(num - 1 );
}

let num = prompt('введите число');
const result = fuctorial(num);
console.log(`факториал числа: ${result}`);
