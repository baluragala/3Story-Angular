"use strict";
//variables
var a1; // function scoped
var a2;
var a3 = 10;
//hoisting
var x = 3;
function random(flag) {
    if (flag) {
        var x_1 = Math.random();
    }
    return x;
}
console.log(random(true));
// destructuring
var product = { title: "iphone", price: 2000 };
// const title = product.title;
// const price = product.price;
var title = product.title, price = product.price;
var productTitle = product.title, productPrice = product.price;
console.log(title, price, productTitle, productPrice);
var team = ["jim", "kim", "lim", "pim"];
var manager = team[0], lead = team[1], eng1 = team[2], eng2 = team[3];
console.log(manager, lead, eng1, eng2);
//for-of
var numbers = [10, 20, 30, 40, 50];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var n = numbers_1[_i];
    console.log(n);
}
//template literals
