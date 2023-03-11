//                   HOMEWORK #2 (2 промта, выводим результат в консоль)


const a = +prompt('First number');

const b = +prompt('Second number');


function add(a, b) {
    return a + b;
}

const resultAdd = add(a,b);
console.log(`Результат: ${a} + ${b} = ${resultAdd}`);



 function sub(a, b) {
     return a - b;
 }

const resultSub = sub(a,b);
 console.log(`Результат: ${a} - ${b} = ${resultSub}`);





 function mul(a, b) {
     return a * b;
 }

const resultMul = mul(a,b);
 console.log(`Результат: ${a} * ${b} = ${resultMul}`);





 function div(a, b) {
     return a / b;
 }

const resultDiv = div(a,b);
 console.log(`Результат: ${a} / ${b} = ${resultDiv}`);