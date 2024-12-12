const prompt = require('prompt-sync')();
let userNumber = prompt('введите число');
if (userNumber % 2 == 0 ) {
    console.log('число четное')
} else {
    console.log('число не четное')
}

