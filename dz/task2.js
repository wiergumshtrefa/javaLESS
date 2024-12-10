const prompt = require('prompt-sync')();
let birth = prompt("Введите свой год рождения: ");
const year = 2024;
let result = year - birth;
console.log(`Вам ${result} лет`)