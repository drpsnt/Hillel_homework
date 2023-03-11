"use strict";


const a = +prompt('First number');

const b = +prompt('Second number');

let x = true;


function func(a, b) {
    if(a == b) {
        x = true;
    } else {
        x = false;
    }
}
func(a,b);
console.log(x);


function func2(a, b) {
    if((a + b) > 10) {
        x = true;
    } else {
        x = false;
    }
}
func2(a,b);
console.log(x);


function func3(a) {
    if(a < 0) {
        x = true;
    } else {
        x = false;
    }
}
func3(a,b);
console.log(x);