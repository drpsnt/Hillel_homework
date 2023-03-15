'use strict';


let number = prompt('Number:');
let year;

 if (isNaN(number)){
     alert('Error');
 }
 else if ( number[number.length - 1] === '1' ) {
     year = 'год';
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




