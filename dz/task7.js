const prompt = require('prompt-sync')();
let gb = prompt('введите количество гигабайт: ');
let result = gb * 1024 / 820
console.log(`столько файлов ${result} поместится на флешке`);