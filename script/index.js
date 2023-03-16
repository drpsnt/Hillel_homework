'use strict';

let a = +prompt('Введите значение а', '');

// 1

if (a === 0) {
    console.log('Верно!' );
} else {
    console.log( 'Неверно!' );
}

// 2

a > 0 ? console.log('Верно!') : console.log('Неверно!');


// 3

if (a < 0) {
    console.log( 'Верно!' );
} else {
    console.log( 'Неверно!' );
}

// 4

a >= 0 ? console.log('Верно!') : console.log('Неверно!');

// 5

if (a <= 0) {
    console.log( 'Верно!' );
} else {
    console.log( 'Неверно!' );
}

// 6

a !== 0 ? console.log('Верно!') : console.log('Неверно!');


// 7

if (a === 'test') {
    console.log( 'Верно!' );
} else {
    console.log( 'Неверно!' );
}


// 8

a === 1 ? console.log('Верно!') : console.log('Неверно!');


// 9

if (a > 0 && a < 5) {
    console.log( 'Верно!' );
} else {
    console.log( 'Неверно!' );
}


// 10

a === 0 || a === 2 ? console.log(a += 7) : console.log(a /= 10) ;


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

const num = 1;
switch (num) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Весна');
        break;
    case 3:
        console.log('Лето');
        break;
    case 4:
        console.log('Осень');
        break;
    default :
        console.log('Неверное значение!');
}
