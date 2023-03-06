"use strict";

//                   HOMEWORK #5


//                          Task #1

 const client = {};
 client.name = "John";
 client.surname = "Smith";
 client.name = "Pete";
 delete client.name;
 console.log(client);


//                          Task #2


const user = {
   name: "John"
};
//
//   это будет работать?
//
user.name = "Pete";
console.log(user);

//Да, это будет работать. Всё потому что const защищает от изменений только саму переменную user, а не её содержимое.


//                          Task #3


const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);