"use strict";



function func(a, b) {
    return a === b;
}
console.log(func(2,2));   // true


function func2(a, b) {
    return (a + b) > 10;
}
console.log(func2(2,9));  //true


function func3(a) {
    return a < 0;
}
console.log(func3(-2));    //true
