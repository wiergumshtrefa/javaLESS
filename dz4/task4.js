const prompt = require('prompt-sync')();

function ploshad(len, shir) {
    if (shir == undefined) {
        return len * len;
    } else { 
        return len * shir;
    }

}
let shir = parseInt(prompt('введите ширину'))