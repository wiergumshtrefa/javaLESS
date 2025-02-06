const prompt = require('prompt-sync')();


function textNumber(number) {
    let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
    let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
    let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
    if (number > 0 && number <= 9) {
      return first[number - 1];
    }
    if (number >= 10 && number <= 20) {
      return second[number - 10];
    }
    if (number > 20 && number <= 99) {
      let str = `${number}`;
      str = str.split('');
      let firstNumber = str[0];
      let secondNumber = str[1];
      //return [ third[firstNumber - 2], first[secondNumber - 1] ];
      return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
    }
  }
  alert(textNumber(7));
  alert(textNumber(20));
  alert(textNumber(55));
  