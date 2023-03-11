//                   HOMEWORK #2 (2 промта, выводим результат в консоль)


const a = prompt('First number');

const b = prompt('Second number');

function add(a, b) {
    return +a + +b;
}

const result1 = add(a,b);
console.log(`Результат: ${a} + ${b} = ${result1}`);



 function sub(a, b) {
     return a - b;
 }

const result2 = sub(a,b);
 console.log(`Результат: ${a} - ${b} = ${result2}`);





 function mul(a, b) {
     return a * b;
 }

const result3 = mul(a,b);
 console.log(`Результат: ${a} * ${b} = ${result3}`);





 function div(a, b) {
     return a / b;
 }

const result4 = div(a,b);
 console.log(`Результат: ${a} / ${b} = ${result4}`);