'use strict';

// 1

let number = prompt('Number:');
console.log(typeof number);
let year;

 if (isNaN(number)){
     alert('Error');
 }
 else if ( number[number.length - 1] === '1' ) {
     year = 'год';
     console.log(typeof number);
     alert(`${number} ${year} `);

 } else  if ( number[number.length - 2] === '1' && number[number.length - 1] === '2' ||
     number[number.length - 2] === '1' && number[number.length - 1] === '3' ||
     number[number.length - 2] === '1' && number[number.length - 1] === '4'
 ) {
     year = 'лет';
     alert(`${number} ${year} `);

 } else  if ( number[number.length - 1] === '2' || number[number.length - 1] === '3' || number[number.length - 1] === '4') {

     year = 'года'
     alert(`${number} ${year} `);

 } else {
     year = 'лет';
     alert(`${number} ${year} `);
 }




