'use strict';

// 1

let userName = prompt('Your Name:');

if (userName === 'School' || userName === 'Hillel') {
    alert( 'Welcome!' );
} else {
    alert( "Closed" );
}


// 2


let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (numOrStr) {
    case numOrStr === null:
        console.log('вы отменили');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log(' number is Ba_NaN')
        break;
    default:
        console.log('OK!')
}