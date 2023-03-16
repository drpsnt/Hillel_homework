'use strict';

let a = prompt('Введите значение а', '');

if(a === null) {
    alert('Жаль, что Вы не захотели ввести свой возраст!')
    a = 'Вы не ввели свой возраст!';
}

let b = prompt('Введите значение b', '');
let result;

switch (b) {
    case null: alert(`Жаль, что Вы не захотели ввести свой город!`);
        result = 'Вы не ввели свой город!';
        break;
    case 'Киев': result = 'Ты живешь в стране Украина';
        break;
    case 'Москва': result = 'Ты живешь в стране Московия';
        break;
    case 'Минск': result = 'Ты живешь в стране Беларусь';
        break;
    default : result = 'Ты живешь в городе ' + b;
}


let c = prompt('Введите значение c', '');
let sport;


switch (c) {
    case null: alert(`Жаль, что Вы не захотели ввести свой вид спорта!`);
        sport = 'Вы не ввели свой вид спорта!';
        break;
    case 'Баскетбол': sport = 'Круто! Хочешь стать Мэджик Джонсон.';
        break;
    case 'Футбол': sport = 'Круто! Хочешь стать Криштиано Роналдо.';
        break;
    case 'Волейбол': sport = 'Круто! Хочешь стать Бруно.';
        break;
    default : sport = c;
}
alert(`${a} 
${result}
${sport}`)


// // 1
//
// if (a === 0) {
//     alert( 'Верно!' );
// } else {
//     alert( 'Неверно!' );
// }
// // 2
// let message = (a > 0) ? 'Верно!': 'Неверно!';
// alert(message);
//
// // 3
//
// if (a < 0) {
//     alert( 'Верно!' );
// } else {
//     alert( 'Неверно!' );
// }
//
// // 4
//
// let message = (a >= 0) ? 'Верно!': 'Неверно!';
// alert(message);
//
// // 5
//
// if (a <= 0) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }
//
// // 6
//
// let message = (a !== 0) ? 'Верно!': 'Неверно!';
// alert(message);
//
// // 7
//
// if (a === 'test') {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }
//
//
// // 8
//
// let message = (a === 1) ? 'Верно!': 'Неверно!';
// alert(message);
//
// // 9
//
// if (a > 0 && a < 5) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }
//
//
// // 10
//
// let message = (a === 0 || a === 2) ? a += 7 : a /= 10 ;
// alert(message);
//
// if (+a === 0 || +a === 2) {
//     a = +a + 7;
// } else {
//     a = +a / 10;
// }
// alert(a);
//
//
//
// // 11
//
// const c = 4;
// const b = 9;
//
// if (c <= 1 && b >= 3) {
//     console.log(c + b);
// } else {
//     console.log(c - b);
// }
// // Результат -5
//
// // 12
//
// if (c > 2 && c < 11 || b >=6 && b < 14) {
//     console.log('Верно!');
// } else {
//     console.log('Неверно!');
// }
//
// // 13
//
//
// let result;
// switch (num) {
//     case 1: result = 'Зима';
//         break;
//     case 2: result = 'Весна';
//         break;
//     case 3: result = 'Лето';
//         break;
//     case 4: result = 'Осень';
//         break;
//     default : result = 'Неверное значение!';
// }
// console. log(result);