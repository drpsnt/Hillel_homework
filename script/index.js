'use strict';

let a = prompt('Введите значение а', '');

// 1

if (a === 0) {
    alert( 'Верно!' );
} else {
    alert( 'Неверно!' );
}
// 2
let message = (a > 0) ? 'Верно!': 'Неверно!';
alert(message);

// 3

if (a < 0) {
    alert( 'Верно!' );
} else {
    alert( 'Неверно!' );
}

// 4

let message = (a >= 0) ? 'Верно!': 'Неверно!';
alert(message);

// 5

if (a <= 0) {
    alert('Верно');
} else {
    alert('Неверно');
}

// 6

let message = (a !== 0) ? 'Верно!': 'Неверно!';
alert(message);

// 7

if (a === 'test') {
    alert('Верно');
} else {
    alert('Неверно');
}


// 8

let message = (a === 1) ? 'Верно!': 'Неверно!';
alert(message);

// 9

if (a > 0 && a < 5) {
    alert('Верно');
} else {
    alert('Неверно');
}


// 10

let message = (a === 0 || a === 2) ? a += 7 : a /= 10 ;
alert(message);

if (+a === 0 || +a === 2) {
    a = +a + 7;
} else {
    a = +a / 10;
}
alert(a);



// 11

const c = 4;
const b = 9;

if (c <= 1 && b >= 3) {
    console.log(c + b);
} else {
    console.log(c - b);
}
// Результат -5

// 12

if (c > 2 && c < 11 || b >=6 && b < 14) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}

// 13


let result;
switch (num) {
    case 1: result = 'Зима';
        break;
    case 2: result = 'Весна';
        break;
    case 3: result = 'Лето';
        break;
    case 4: result = 'Осень';
        break;
    default : result = 'Неверное значение!';
}
console. log(result);