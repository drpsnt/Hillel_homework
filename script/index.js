'use strict';



//                                       Task#1



console.log(Boolean(Number('10')) + 1);  //2
console.log('sub' + Number(false));      //sub0
console.log(16  *  '91');                     //1456
console.log(true-70);                         //-69
console.log(Number(1 + String(1)) + 1);     //12


//                                      Task#2


const h= 60*60;
const a = prompt('First number');
const n = a*h;
alert(n);



//                                       Task#3


let num = 1;

num += 12; //13
num -= 14;  //-13
num *= 5;   //5
num /= 7;   //0.14285714285714285
num ++;    //2
num --;    //0
alert(num);